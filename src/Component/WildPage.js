import React from 'react'

export const WildPage = () => {
  return (
    <div>
        <div className="wildPage">
            <div className="wild-body vh-100">
                <img src="./images/default_bg.png" alt="" className="wildPage_sticker" />
                <div>
                    <section className="wildPage_content">
                        <nobr>
                            <h1 className="wildPage_Para display-6">Oops... Looks like somthing went wrong</h1>
                        </nobr>
                        <br />
                        <Link to="/"><button className="wild_btn rounded bg-secondary bg-gradient" title="Home Page">Go Back</button></Link>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WildPage;
