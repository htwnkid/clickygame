import React from "react";
import "./gameboard.css";

function Gameboard(props) {

    // sorting logic
    props.cards = []

    return (
        <div class="container">

            {props.cards.map(el, i => <div id={i} onClick={this.props.cardClicked}>{el}</div>)}

            <div class="row">
                <div id="slot1" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot2" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot3" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot4" class="col-sm">
                    One of three columns
                    </div>
            </div>

            <div class="row">
                <div id="slot5" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot6" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot7" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot8" class="col-sm">
                    One of three columns
                    </div>
            </div>

            <div class="row">
                <div id="slot9" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot10" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot11" class="col-sm">
                    One of three columns
                    </div>
                <div id="slot12" class="col-sm">
                    One of three columns
                </div>
            </div>

        </div>

    );

}

export default Gameboard;