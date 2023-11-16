import React ,{ Component }  from 'react'
import NewsItem from './NewsItem'
import Load from './Load'
import PropTypes from 'prop-types'



export  class News extends Component {

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  static defaultProps = {
    country: 'in',
    category : 'general'
  }
  defaulPropTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  }



  constructor(props){
    super(props)
    this.state = {
      articles : [],
      loading : false,
      page: 1
      
    }
    document.title = `Red Panda- ${this.props.category}`
  }
  async componentDidMount(){
    let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f2f594849de464894f42aa3f89e2788&page=1&pagesize=20`
    this.setState({loading : true})

    let data = await fetch(myurl);
    let parseddata = await data.json()
    this.setState({articles: parseddata.articles, totalResults: parseddata.totalResults, loading : false});
  }
  handlePrev = async()=>{

    let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f2f594849de464894f42aa3f89e2788&page=${this.state.page-1}&pagesize=20`;
    this.setState({loading : true})
    let data = await fetch(myurl);
    let parseddata = await data.json()
    this.setState({articles: parseddata.articles,page: this.state.page -1, loading : false});
    
  }

  handleNext = async()=>{
    
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f2f594849de464894f42aa3f89e2788&page=${this.state.page+1}&pagesize=20`;
      this.setState({loading : true})
      let data = await fetch(myurl);
      let parseddata = await data.json()
      this.setState({articles: parseddata.articles,page: this.state.page +1,loading : false  });

    }

  }

  render() {
    return (
      
      <div className="container my-4" >
        {this.state.loading && <Load/>}
        <h2 className='text-center'>REDpanda - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        
      <div className="row">
        
          {!this.state.loading && this.state.articles.map((element) =>{
            return <div className="col-md-3" key = {element.url}>
            <NewsItem title  = {element.title? element.title.slice(0,33): ""} discription= {element.description? element.description.slice(0,88):""} imageUrl = {element.urlToImage? element.urlToImage: "https://www.investors.com/wp-content/uploads/2019/10/stock-wall-street-flags-adobe.jpg"} newsUrl = {element.url} author = {element.author} date = {element.publishedAt}/>
            </div>
          })}
            
        </div>
        <div className='d-flex justify-content-between my-3'>

        <button type="button" disabled = {this.state.page===1} className="btn btn-dark"  onClick={this.handlePrev}>&larr; Prev</button>

        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
        
        </div>
    )
  }
}
export default News
