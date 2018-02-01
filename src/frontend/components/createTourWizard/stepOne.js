import React from "react";


class StepOne extends React.Component {
    render(){
        return(

            <form className='tour-form' onSubmit={this.createTourForm}>
                <div className='tourName'>
                    <label htmlFor="tourName"></label>
                    <input onChange={this.handleChange} type="text" name="tourName" placeholder='Tour Name' />
                </div>


                <h1>FEATURES</h1>
                <div className='tour-features-container'>
                    <div className='left-checkboxes'>
                        <div>
                            <label htmlFor="requireCheckin">Require Check-in</label>
                            <input type='checkbox' />
                        </div>
                        <div>
                            <label htmlFor="commentSection">Comment Section</label>
                            <input type='checkbox' />
                        </div>
                        <div>
                            <label htmlFor="reactions">Reactions</label>
                            <input type='checkbox' />
                        </div>
                        <div>
                            <label htmlFor="hasToBeInOrderCheckpoints">Checkpoints in Order?</label>
                            <input onChange={this.handleChange} type="checkbox" name="inOrder"/>
                        </div>
                    </div>

                    <div className='right-checkboxes'>

                        <div>
                            <label htmlFor="requireCheckin">Timed</label>
                            <input type='checkbox' />
                        </div>
                        <div>
                            <label htmlFor="isPrivate">Is Private?</label>
                            <input onChange={this.handleChange} type="checkbox" name="isPrivate"/>
                        </div>
                        <div>
                            <label htmlFor="date-time">Date/Time</label>
                            <input type='checkbox' />
                        </div>
                    </div>
                </div>

                <div className='tour-description'>
                    <label htmlFor="tourDescription">Tour Description</label>
                    <textarea onChange={this.handleChange} type="text" name="tourDescription" maxLength='5000'/>
                </div>

                <div className='start-end-date-container'>
                    <label htmlFor="startDate">Start Date</label>
                    <input onChange={this.handleChange} type="date" name="startDate"/>

                    <label htmlFor="endDate">End Date</label>
                    <input onChange={this.handleChange} type="date" name="endDate"/>
                </div>

                {/* <label htmlFor="isPrivate">Is Private?</label>
                        <input onChange={this.handleChange} type="checkbox" name="isPrivate"/> */}

                {/* <label htmlFor="hasToBeInOrderCheckpoints">Checkpoints in Order?</label>
                        <input onChange={this.handleChange} type="checkbox" name="inOrder"/> */}


                {/* <label className=''>Choose file</label> */}
                {/*
                 <div className='file-select-container'>

                    <input type="file" onChange={this._handleImageChange.bind(this)} />
                </div>


                <label>Checkpoint(s):</label>
                <input type="text" ref="checkpointName" />
                <input type="number" ref="lat" />
                <input type="number" ref="long" />
                <ul>
                    {
                        this.state.checkpoints.length > 0 ?
                            this.state.checkpoints.map((check, index) =>
                                <li key={index}>Checkpoint Name: {check.checkpointName}, Lat: {check.lat}, Long: {check.long}</li>
                            )
                            :
                            <li>No checkpoints</li>
                    }
                </ul>
                <button onClick={this.makeCheckpoint}>Make Checkpoint</button>

                <input type="submit" value="make tour" />

                */}

            </form>

        )
    }




}

export default StepOne
