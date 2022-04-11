import * as React from "react"
import Image from "next/image"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Link from "../src/Link"

import PoolDiagram from "../public/static/pool_diagram.PNG"
import SystemDiagram from "../public/static/system_diagram.png"

export default function Index() {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Container maxWidth="md">
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to LS Swap!
          </Typography>
          <Typography gutterBottom>
            LS Swap is a <strong>D</strong>ecentralized <strong>EX</strong>
            change (DEX) currently running on a private Diem testnet.
          </Typography>

          <Typography variant="h5" component="h1" gutterBottom>
            What is a DEX?
          </Typography>
          <Typography gutterBottom>
            A DEX allows users to exchange cryptocurrencies/tokens in a
            completely decentralized manner without the need for institutions.
            This is done through a collection of smart contracts to ensure
            security and reproducibility.
          </Typography>

          <Typography variant="h5" component="h1" gutterBottom>
            How does a DEX work?
          </Typography>
          <Typography gutterBottom>
            DEXs rely on liquidity pools in order to function properly. These
            are stored reserves of all of the different tokens in an exchange. A
            small commission fee will be charged for each exchange, growing the
            pool reserves. Users are incentivized to provide liquidity to pools
            to gain the commission fees. In exchange for providing liquidity, a
            user will get a proof of liquidity (LP) token. They can then later
            trade in their LP tokens to gain back their proportion of of the
            liquidity pool.
          </Typography>
          <Image src={PoolDiagram} />

          <Divider sx={{ my: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Project Overview
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            Background and Motivation
          </Typography>
          <Typography gutterBottom>
            Blockchain has experienced an exponential rise in adoption and
            popularity in the past decade.
            <ul>
              <li>
                <strong>Decentralized Applications (DApps)</strong> are apps on
                the blockchain that operate in a trustless manner.
              </li>
              <li>
                <strong>Decentralized Finance (DeFi)</strong> are DApps that
                provide users the means to participate in financially related
                activities
              </li>
              <li>
                <strong>Decentralized Exchanges (DEX)</strong> are DeFi apps
                that enable users to exchange cryptocurrencies and become
                liquidity providers, earning small commissions on exchanges.
              </li>
            </ul>
            Using the Diem blockchain, our team has engineered a
            proof-of-concept DEX in order to:
            <ul>
              <li>
                Demonstrate the feasibility of creating such applications using
                Diem
              </li>
              <li>
                Showcase the power of DEXs in a visual and accessible manner to
                people who are unfamiliar with this field
              </li>
            </ul>
            <strong>GOAL:</strong> Create a prototype DEX and launch it on the
            Diem blockchain with means for users to interact with the exchange.
          </Typography>

          <Typography variant="h5" component="h1" gutterBottom>
            User Token Flow Diagram
          </Typography>
          <Image src={PoolDiagram} />
          <Typography variant="h5" component="h1" gutterBottom>
            Requirements
          </Typography>
          <Typography gutterBottom>
            <ul>
              <li>
                <strong>Exchange Tokens:</strong> Users must be able to exchange
                one type of token to another.
              </li>
              <li>
                <strong>Liquidity Deposit:</strong> Users must be able to
                deposit a pair of tokens to the DEX and receive a proof of
                liquidity.
              </li>
              <li>
                <strong>Liquidity Withdrawal:</strong> Users must be able to
                exchange their LP coin back for their proportional token share
                of the reserves.
              </li>
              <li>
                <strong>Audited User Interface:</strong> The UI should achieve
                an average score of greater than 90/100 across each web page
                when.
              </li>
              <li>
                <strong>Performant Application</strong> The web server should be
                able to handle at least 100 requests per minute and at least 10
                concurrent users.
              </li>
            </ul>
          </Typography>

          <Typography variant="h5" component="h1" gutterBottom>
            Design Overview
          </Typography>
          <Typography gutterBottom>
            <strong>React app:</strong> a webapp with 5 pages that users can use
            to interact with the DEX.
            <ul>
              <li>
                <strong>About us:</strong> The landing page of our application.
                This page contains high-level information about DEXs and the
                project.
              </li>
              <li>
                <strong>My garage:</strong> The financial overview of the user’s
                tokens, stakes, and past transactions.
              </li>
              <li>
                <strong>Swap Meet:</strong> Where users are able to exchange one
                coin for another.
              </li>
              <li>
                <strong>Dealership:</strong> Where users can add or withdraw
                liquidity from the six pools created for our project.
              </li>
              <li>
                <strong>Spec Sheet:</strong> Displays numerical metrics about
                the exchange and tokens in the form of real-time graphs.
              </li>
            </ul>
            <strong>Flask API:</strong> facilitates exchange requests on the
            behalf of the user and acts as a bridge between the UI and the
            blockchain.
            <br />
            <br />
            <strong>Diem modules and scripts:</strong> The smart contracts that
            execute desired transactions on the blockchain.
          </Typography>

          <Typography variant="h5" component="h1" gutterBottom>
            System Context Diagram
          </Typography>
          <Image src={SystemDiagram} />
          <Typography variant="h5" component="h1" gutterBottom>
            Design Challenges
          </Typography>
          <Typography gutterBottom>
            <ul>
              <li>
                <strong>Missing/Outdated Documentation</strong> forced the team
                to scrub through Diem’s GitHub repository to find answers to our
                questions and discover which features are currently implemented.
              </li>
              <li>
                <strong>Changing Specifications</strong> to the Move programming
                language forced the team to migrate and update our smart
                contracts to work with the new revisions.
              </li>
              <li>
                <strong>Missing Features</strong> that our team expected to be
                present required us to devise workarounds until the
                functionality is added.
              </li>
              <li>
                <strong>Lack of Diem Developer Engagement</strong> hampered the
                team’s ability to receive feedback about bugs in the developing
                Diem ecosystem.
              </li>
            </ul>
          </Typography>

          <Typography variant="h5" component="h1" gutterBottom>
            Testing and Results
          </Typography>
          <Typography gutterBottom>
            <ul>
              <li>
                <strong>Exchange Tokens, Liquidity Deposit/Withdrawal:</strong>{" "}
                Move unit tests confirmed smart contract functionality, manual
                testing confirmed end- to-end implementation.
              </li>
              <li>
                <strong>Smart Contract Code Coverage:</strong> testing code
                coverage of 73% achieved.
              </li>
              <li>
                <strong>Audited User Interface:</strong> average scores of 96.5
                (desktop) and 92.45 (mobile) were achieved through a Lighthouse
                Labs audit.
              </li>
              <li>
                <strong>Performant Application</strong> 17261 frontend
                requests/min and 130 backend requests/min were processed for 10
                concurrent users with maximum latency being 324.58 ms.
              </li>
            </ul>
          </Typography>

          <Typography variant="h5" component="h1" gutterBottom>
            Future Work
          </Typography>
          <Typography gutterBottom>
            <ul>
              <li>
                <strong>Eliminate the Flask API:</strong> the functionality the
                API provides can be implemented in the APP side, eliminating the
                need for this centralized server.
              </li>
              <li>
                <strong>Integrate with wallet providers:</strong> Wallet
                providers do not yet support Diem and the Diem wallet did not
                have resources for the team to inte- grate it into our project
                in time.
              </li>
              <li>
                <strong>Utilize the First Party Diem Framework</strong> for
                creating new currencies, once full functionality is developed.
              </li>
              <li>
                <strong>Utilize the Move Prover</strong> to automatically prove
                logical properties of our smart contracts, once developed.
              </li>
            </ul>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
