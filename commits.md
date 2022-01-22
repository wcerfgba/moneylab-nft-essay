welcome to this git essay.
you might be wondering why this essay has been written in git in this way...
... split across two files and the commit log.
it is because git is actually a blockchain!
a blockchain is just a type of datastructure:
it's essentially a linked list (https://www.cs-ib.net/assets/img/linked-list.jpg),
where each node in the list points to the previous node using a cryptographic hash (http://i.stack.imgur.com/HrKX0.png).
because each block in the chain contains the hash of its predecessor,
it's not possible for someone to change the data at one point in the chain without changing all the blocks that come later.
this provides some tamper-resistance to the datastructure,
and makes it append-only:
new data can only be added on to the end of the chain.
all cryptocurrencies use blockchains,
and the crypto hypesphere would make you think blockchain is a super innovative technology (http://46eybw2v1nh52oe80d3bi91u-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Slide3.jpg),
but really blockchain is just a datastructure,
and they've been around for ages (https://www.cognitomedia.com/sites/default/files/inline-images/blockchain%20ai%20media.PNG).
case in point, git also uses a blockchain (http://i.stack.imgur.com/I5MYp.png),
and git was created in 2005,
3 years before the first cryptocurrency, bitcoin.
however, blockchain alone isn't enough to make a cryptocurrency.
you also need consensus.
because many people can try and append to the chain at the same time,
the system needs a way for everyone to agree on the order in which to add the new blocks.
consensus is a long-standing problem in computer science,
people have been trying to solve distributed consensus for decades at this point,
and there are many algorithms for it,
like paxos and raft (https://raft.github.io/),
but these protocols rely on (temporarily) giving one of the nodes more authority than the others.




and this is where proof-of-work and proof-of-stake come in (https://img-9gag-fun.9cache.com/photo/amPmdVX_460s.jpg).
these are both permissionless consensus algorithms,
