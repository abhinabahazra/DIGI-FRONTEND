import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import swal from 'sweetalert';
import "./ReadMore.css";


const userInitvalue = {
    publication: '',
    subtitle: '',
    player1: '',
    player1_role: '',
    player1_image: '',
    // 
    player2: '',
    player2_role: '',
    player2_image: '',
    // 
    player3: '',
    player3_role: '',
    player3_image: '',
    // 
    player4: '',
    player4_role: '',
    player4_image: '',
    // 
    player5: '',
    player5_role: '',
    player5_image: '',
    // 
    player6: '',
    player6_role: '',
    player6_image: '',
    // 
    player7: '',
    player7_role: '',
    player7_image: '',
    // 
    player8: '',
    player8_role: '',
    player8_image: '',

}

class ReadMore extends Component {



    constructor(props) {
        super(props);
        this.state = {
            userDetails: userInitvalue,
            movie_id: "",
            movie_title: "",
            movie_price: "",
            banner: "",
            genre: "",
            language: "",
            duration: "",
            category: ""


        }

    }


    getMovieCastById = async (movieId) => {
        let data = {
            movie_id: movieId

        }
        console.log("sssssssssssssssssss", data)
        await axios.post('https://www.api3.digimovieplex.com/api/getMoviePlayerDetails', data).then((res) => {
            console.log("suvaaaaaaaaaaaaaa", res.data.status);
            if (res.data.status === 'success') {
                console.log("xxxxxx", res.data.response.txt_player1_image)
                this.setState({
                    userDetails: {
                        ...this.state.userDetails,
                        subtitle: res.data.response.yn_movie_subtitle,
                        publication: res.data.response.txt_publication,
                        player1: res.data.response.txt_player1,
                        player1_role: res.data.response.txt_player1_role,
                        player1_image: res.data.response.txt_player1_image,
                        // 
                        player2: res.data.response.txt_player2,
                        player2_role: res.data.response.txt_player2_role,
                        player2_image: res.data.response.txt_player2_image,
                        // 
                        player3: res.data.response.txt_player3,
                        player3_role: res.data.response.txt_player3_role,
                        player3_image: res.data.response.txt_player3_image,
                        // 
                        player4: res.data.response.txt_player4,
                        player4_role: res.data.response.txt_player4_role,
                        player4_image: res.data.response.txt_player4_image,
                        // 
                        player5: res.data.response.txt_player5,
                        player5_role: res.data.response.txt_player5_role,
                        player5_image: res.data.response.txt_player5_image,
                        // 
                        player6: res.data.response.txt_player6,
                        player6_role: res.data.response.txt_player6_role,
                        player6_image: res.data.response.txt_player6_image,
                        // 
                        player7: res.data.response.txt_player7,
                        player7_role: res.data.response.txt_player7_role,
                        player7_image: res.data.response.txt_player7_image,
                        // 
                        player8: res.data.response.txt_player8,
                        player8_role: res.data.response.txt_player8_role,
                        player8_image: res.data.response.txt_player8_image,
                    }
                })
            }
        })


    }




    componentDidMount() {
        let { id } = this.props.match.params;
        console.log("aaaaaa", JSON.parse(decodeURIComponent(id)))
        let params = JSON.parse(decodeURIComponent(id));
        this.setState({ movie_id: params.mid, category: params.mcat, movie_title: params.mtitle, movie_price: params.mprice, genre: params.mgenre, language: params.mlanguage, duration: params.mmin, banner: params.mpic, }, () => {
            this.getMovieCastById(this.state.movie_id);
        });


        // this.hashGenerate();
    }



    render() {
        console.log("movie", this.state.player1_image)
        return (
            <div>
                <div className="container-fluid">
                    <h1 className="heading">
                     {this.state.movie_title}
                    </h1>
                    <h2>Actors & Actress</h2>
                    <Grid container>
                        <Grid className="card4" sm={2}>
                            <div className="">
                                <img className="readmore_img" src={`https://www.api3.digimovieplex.com/${this.state.userDetails.player1_image}`} />        <div className="container">
                                    <h4><b>{this.state.userDetails.player1}</b></h4>
                                    <p>{this.state.userDetails.player1_role}</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid className="card4" sm={2}>
                            <div className="">
                                <img className="readmore_img" src={`https://www.api3.digimovieplex.com/${this.state.userDetails.player2_image}`} />        <div className="container">
                                    <h4><b>{this.state.userDetails.player2}</b></h4>
                                    <p>{this.state.userDetails.player2_role}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid className="card4" sm={2}>
                            <div className="">
                                <img className="readmore_img" src={`https://www.api3.digimovieplex.com/${this.state.userDetails.player3_image}`} />        <div className="container">
                                    <h4><b>{this.state.userDetails.player3}</b></h4>
                                    <p>{this.state.userDetails.player3_role}</p>
                                </div>
                            </div>
                        </Grid>
                        {
                            this.state.userDetails.player4 ?
                                <Grid className="card4" sm={2}>
                                    <div className="">
                                        <img className="readmore_img"                                       
                                            src={(this.state.userDetails.player4_image) ? `https://www.api3.digimovieplex.com/${this.state.userDetails.player4_image}` : 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png'}                   
                                       />        <div className="container">
                                            <h4><b>{this.state.userDetails.player4}</b></h4>
                                            <p>{this.state.userDetails.player4_role}</p>
                                        </div>
                                    </div>
                                </Grid> : ''
                        }

                        {
                            this.state.userDetails.player5 ?
                                <Grid className="card4" sm={2}>
                                    <div className="">
                                        <img className="readmore_img"
                                        src={(this.state.userDetails.player5_image) ? `https://www.api3.digimovieplex.com/${this.state.userDetails.player5_image}` : 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png'} 
                                         />     
                                            <div className="container">
                                            <h4><b>{this.state.userDetails.player5}</b></h4>
                                            <p>{this.state.userDetails.player5_role}</p>
                                        </div>
                                    </div>
                                </Grid> : ''
                        }

                        {
                            this.state.userDetails.player6 ?
                                <Grid className="card4" sm={2}>
                                    <div className="">
                                        <img className="readmore_img" 
                                        src={(this.state.userDetails.player6_image) ? `https://www.api3.digimovieplex.com/${this.state.userDetails.player6_image}` : 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png'}
                                         />        <div className="container">
                                            <h4><b>{this.state.userDetails.player6}</b></h4>
                                            <p>{this.state.userDetails.player6_role}</p>
                                        </div>
                                    </div>
                                </Grid> : ''
                        }

                        {
                            this.state.userDetails.player7 ?
                                <Grid className="card4" sm={2}>
                                    <div className="">
                                        <img className="readmore_img" 
                                       src={(this.state.userDetails.player7_image) ? `https://www.api3.digimovieplex.com/${this.state.userDetails.player7_image}` : 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png'}
                                        />        <div className="container">
                                            <h4><b>{this.state.userDetails.player7}</b></h4>
                                            <p>{this.state.userDetails.player7_role}</p>
                                        </div>
                                    </div>
                                </Grid> : ''
                        }

                        {
                            this.state.userDetails.player8 ?
                                <Grid className="card4" sm={2}>
                                    <div className="">
                                        <img className="readmore_img" 
                                        src={(this.state.userDetails.player8_image) ? `https://www.api3.digimovieplex.com/${this.state.userDetails.player8_image}` : 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png'}
                                         />        <div className="container">
                                            <h4><b>{this.state.userDetails.player8}</b></h4>
                                            <p>{this.state.userDetails.player8_role}</p>
                                        </div>
                                    </div>
                                </Grid> : ''
                        }


                    </Grid>

                    <h3>Publication House : {this.state.userDetails.publication}</h3>
                    <h3>Sub-title Available ? : {this.state.userDetails.subtitle}</h3>
                </div>
            </div>
        );
    }
}

export default ReadMore;


{/* <Grid container spacing={2} className="fade_back">
    <Grid className="card" id="new_lab" item xs={12} sm={7}>
        <h2>{this.state.movie_title}</h2>
        <h2>ccccc{this.state.userDetails.player1}</h2>
        <p>{this.state.category} | {this.state.language} | {this.state.genre} | {this.state.duration} Minutes</p>
        <h4>Ticket Price</h4>
        <h5>Rs.{this.state.movie_price}</h5>
    </Grid>
    <Grid item xs={12} sm={5} className="fade_back_img">
        <img className="readmore_img" src={`https://www.api3.digimovieplex.com/${this.state.banner}`} />
    </Grid>
</Grid> */}
