import React from 'react';
import './Education.css';

class Education extends React.Component {
    render() {
        return (
            <div className="education">
                <h3>EDUCATION</h3>
                <ul>
                    <li>
                        <p className="year">
                            <strong>1990</strong>
                        </p>
                        <section>
                            <p>
                                <strong>I was born in Katowice</strong>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Sapiente, exercitationem, totam, dolores iste dolores est aut
                                modi.
              </p>
                        </section>
                    </li>

                    <li>
                        <p className="year">
                            <strong>2005</strong>
                        </p>
                        <section>
                            <p>
                                <strong>Secondary school specializing in artistic</strong>
                            </p>
                            <p>
                                Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur
                                ipsum ducimus quibusdam quis voluptatibus.
              </p>
                        </section>
                    </li>

                    <li>
                        <p className="year">
                            <strong>2009</strong>
                        </p>
                        <section>
                            <p>
                                <strong>First level graduation in Graphic Design</strong>
                            </p>
                            <p>
                                Aspernatur, mollitia, quos maxime eius suscipit sed beatae
                                ducimus quaerat quibusdam perferendis? Iusto, quibusdam
                                asperiores unde repellat.
              </p>
                        </section>
                    </li>

                    <li>
                        <p className="year">
                            <strong>2012</strong>
                        </p>
                        <section>
                            <p>
                                <strong>Secondary level graduation in Graphic Design</strong>
                            </p>
                            <p>Ducimus, aliquam tempore autem itaque et accusantium!</p>
                        </section>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Education;