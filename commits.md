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
and the crypto hypesphere could make you think blockchain is a super innovative technology (http://46eybw2v1nh52oe80d3bi91u-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Slide3.jpg),
but really blockchains are just datastructures,
and they've been around for ages (https://www.cognitomedia.com/sites/default/files/inline-images/blockchain%20ai%20media.PNG).
case in point, git also uses a blockchain (http://i.stack.imgur.com/I5MYp.png),
and git was created in 2005,
3 years before the first cryptocurrency, bitcoin.
however, blockchain alone isn't enough to make a cryptocurrency.
you also need consensus.
because many people can try and append to the chain at the same time,
the system needs a way for everyone to agree on the order in which to add new blocks.
distributed consensus is a long-standing problem in computer science:
people have been trying to solve distributed consensus for decades at this point,
and there are many algorithms for it,
like paxos and raft (https://raft.github.io/),
but many of these protocols rely on (temporarily) giving one of the nodes more authority than the others.
instead cryptocurrencies must rely on 'permissionless' distributed consensus algorithms,
such as proof-of work,
and proof-of-stake.
ironically the 'consensus' algorithms used by cryptocurrencies...
... are more accurately described as 'competition'.
proof-of-work is used by bitcoin,
and it relies on computers racing to find a solution to a computationally-intensive problem (https://i.ytimg.com/vi/BfCuqk4szGw/maxresdefault.jpg).
this requires a lot of hardware and electricity (https://i.stack.imgur.com/lUcNE.jpg),
and now bitcoin uses more electricity per year than some countries (https://specials-images.forbesimg.com/imageserve/60926a0a299518033fa65df5/960x0.jpg).
proof-of-stake relies on users bidding for the privilege to validate transactions (https://www.gamblingcasinocruise.com/wp-content/uploads/2010/08/blackjack-table.jpg),
which centralises control of the network with the wealthiest users (https://c1.staticflickr.com/5/4136/4788168631_854f39f121_b.jpg).
rather than solving the problems inherent in the social and political structures in which we are embedded,
cryptocurrency instead replicates these problems...
... in an even less regulated and more dangerous landscape.
it's a classic fail state of techno-utopian thinking,
discussed more broadly in the work of adam curtis (https://www.imdb.com/title/tt1955162/),
and more specifically in the work of dan olson (https://www.youtube.com/watch?v=YQ_xWvX1n9g)
agreement between the crypto and crypto-critical communities is yet to emerge,
and the public discourse could be viewed as an arena...
... in which these groups are competing for the final word.
instead, i think a true consensus can arise,
if we focus on the needs of our civilisation,
and prioritise a thorough understanding of the problems we face...
... above the development of any single solution.
fin
