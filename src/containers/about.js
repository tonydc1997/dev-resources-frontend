import React from 'react';

const About = ({ data }) => {

    const ordered = {};
    Object.keys(data).sort(
        function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    ).forEach(function (key) {
        ordered[key] = data[key];
    });
    return (
        <div>
            <h1 className="text-white text-center mt-3">About Page</h1>
            <p className="text-white text-center">Test</p>

            <h2 className="text-white text-center">Contributors</h2>

            <div className="row mx-5">
                {
                    Object.keys(ordered).map((user, i) => {
                        return (


                            <div className="col-md-3 p-3" >
                                <div className="card cardRes">
                                    <img className="card-img-top img-respsonsive" src={data[user].avatar} alt={data[user].name} />
                                    <div className="card-body ">
                                        <h1>{data[user].name}</h1>
                                        <p className="card-text">{data[user].url.slice(8)}</p>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <div className="row">
                                            <div className="col-md-6 text-left">
                                                <i className="fas fa-globe-americas"></i> {data[user].fContribs ? data[user].fContribs : 0}
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <i className="fas fa-server"></i> {data[user].bContribs ? data[user].bContribs : 0}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default About;