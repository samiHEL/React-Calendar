import React from 'react';

const Event = () => {
    return (
        <div className="section is-fullheight">
            <div className="container">
                <div className="column is-4 is-offset-4">
                    <div className="box">
                        <form>
                            <div className="field">
                                <label className="label">Date de Réservation</label>
                                <div className="control">
                                    <input className="input" type="email" name="date" required />
                                </div>
                            </div>
                            <button type="submit" className="button is-block is-info is-fullwidth">Réserver</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;