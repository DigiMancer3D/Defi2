# Defi 2.0 Tokenomics

## Abstract:
&nbsp; &nbsp; &nbsp; &nbsp; Giving support to others in this new way can be difficult but with a protocol that can mint a different coin per <i><b>Pool Season</b></i> thusly allowing more people to set up fundraisers and more. Gamifiing the token building can help stablize the entire defi space.  By supporting the inflation/deflation by having common known inject inflation/deflation the token can have higher probablitity pricing.  The tokenomics is key to the community stablization of the coin and to help have continuted usability.

## Details:
&nbsp; &nbsp; &nbsp; &nbsp; Looking at how the tokens can be minted per pool season allows for users to be able to submit a wieghted signed message to the ultra pool wallet, to secure it to a block. As the ultra pool checks to set next minting token, picks next message after the previous to be used for the next minting. So participants can submit some native tokens to the ultra pool (adding the funds to the pool) but setting a new token to be minted in the next line of minting tokens. The ultra pool is being used as a new-minting token meme-pool, all on-chain data.</br>&nbsp; &nbsp; &nbsp; &nbsp; As the ultra pool hits specified levels of native tokens, 1% will be automatically distributed to all individual participants but not the sumbiters to the ultra pool. This keeps the system from self-paying but the submitters to the ultra pool is used to determine what token is minted next but also adds that address into the temparory dev payout so that participant will receive a piece of the dev payout, when the standard contract is the submitter (from burn-&-mix offset & random/unqualified sends) the ultra pool payout becomes a random send and just increases minting that season, pushing more coins and is apart of the planned forced inflation.

 
 
### Pool Season Life::

#### Key::    --Timeline--foward----           >--Exit contract/native token
//                                                                         (E)/--Burn-&-Mix Payback-->
//             (A)   /--Random Sends------\                           (D)    /           (H)   /--Temp Dev (token submitter) 
// --Pool season starts--Unqualified Sends--\                   /--Send Native--Dev Pool Payback--New Dev (git update accepted, gets baked in next contract)
//             |      \---Qualified Sends---\   (C)           /           /->--------Rebase    \--Baked Dev (original team)    (I)
//              \---Burn-&-Mix Returns-------\->---Mint Staging->--Minting  (F)            \  (J)                                         (K)
//                       (B)                                       \->--Partici. Payback    \->--Next Pool Season 4% Release->--Next Pool Season [...]
        View in landscape or PC (softwrap)                                        (G)


## Token Life::

#### Key::     --Timeline--foward----      / (up)        \ (down)       \--Split      /--Split     ->Loop<--/     /-->Loop-->\      \<--/<--Loop in--/
//                   |                 |                      |/--Expected Price Dip----\          |                 |       /---->temparory Stablization->||  [...]--(1)
//                   |                 |/--Expected Price Spike--Temparory Stablization--Expexted Price Spike--\     |      /                       || /\  ||  [...]--(2
//        (A)        |       (B)      /|         (C)          |          (D)     /--Expected Price Spike--Expected Price Dip--Expected Price Spike<-/  ||  ||  [...]--(3)
//0--Pool season starts--Forced Inflation--Temparory Stablization--Forced Deflation--Forced Inflation--Forced Deflation--0--[Next Pool Season]         ||  ||  [...]--(4)
//                  \|                 |     /                |\--Expected Price Dip      (E)    \ |   \  (F - K)    |         (A)                     ||  \/  [...]--(5)
//                   |\                |    /                 |    /             |  \----Expected Price Spike--Temparory Stablization--Expected Price Dip<-/   [...]--(6) 
//                   | \--Expected Price Dip                  |   /              |                 |       \   /     |             /  /    ||     ||           [...]--(7)
//                   |                 |   \--Expected Price Spike--Temarory Stablization--Expexted Price Dip--Expected Price Spike->/     \/     ||           [...]--(8)
//                   |                 |                      |                  |                 |                 |             \<------/<------/           [...]--(9)


## Conclusion:

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The start of a token gets inflated then after that there's a many chances but resulting to a end loop of <i>stable, inflate, deflate heavy, stable</i>. Using on-chain data instead of centralized data server systems, we can ensure less involvement by devs and controlling bearers.
