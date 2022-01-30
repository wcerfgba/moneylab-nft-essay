const fs = require('fs');
const Git = require('nodegit');

const root = '../moneylab-nft-essay-2';

const repo = await Git.Repository.open(root);
await repo.checkoutBranch('mainnet');

let commits = await fs.promises.readFile('commits.md');
let nft_good = await fs.promises.readFile('nft-good.md');
let nft_bad = await fs.promises.readFile('commits.md');

commits = commits.split('\n');
nft_good = nft_good.split('\n');
nft_bad = nft_bad.split('\n');

for (let i = 0; i < commits.length - 1; i++) {
  await fs.promises.appendFile(root + '/nft-good.md', nft_good[i] + '\n');
  await fs.promises.appendFile(root + '/nft-bad.md', nft_bad[i] + '\n');

  const index = await repo.refreshIndex();

  await index.addByPath(root + '/nft-good.md');
  await index.addByPath(root + '/nft-bad.md');
  await index.write();

  const oid = await index.writeTree();

  const parent = await repo.getHeadCommit();
  const author = nodegit.Signature.now('John L. Preston', 'git-9282@jpreston.xyz');

  const commitId = await repo.createCommit("HEAD", author, author, commits[i], oid, [parent]);
}
