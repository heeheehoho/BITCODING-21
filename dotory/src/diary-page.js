import React, {Component} from 'react';
import './diary-page.css';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import Content from "./components/Content"
import Control from "./components/Control"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"

class DiaryPage extends Component { //자바랑 거의 비슷 subject를 객체지향으로 코딩했으므로 추가해도 계속 생김
    constructor(props){
      super(props);
      this.max_content_id=3;
    this.state ={
      mode:'create',
      selected_content_id:2,
      subject:{title: '오늘의 일기', sub:'오늘 하루는?'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'일기',desc:'오늘도 코딩은 정말 개빡쳐'},
        {id:2, title :'일상', desc: '오늘 눈이 내렸다'},
        {id:3, title :'자유', desc:' 과제하기, 프로젝트 마무리하기'}
      ]
    }
  }
  render() {
    
      console.log('App render');
      var _title, _desc, _article =null;

      if(this.state.mode==='welcome'){
        _title=this.state.welcome.title;
        _desc=this.state.welcome.desc;
        _article =<ReadContent title={_title} desc={_desc}></ReadContent>

      }else if(this.state.mode==='read'){
     
         var i=0;
         while(i<this.state.contents.length){
           var data=this.state.contents[i];
           if(data.id===this.state.selected_content_id){
             _title=data.title;
             _desc=data.desc;
             break;
           }
           i+=1;
         }
         _article=<ReadContent title={_title} desc={_desc}></ReadContent>
       } else if (this.state.mode ==='create'){
         _article=<CreateContent onSubmit={function(_title,_desc){
          this.max_content_id=this.max_content_id+1;
          var _contents=this.state.contents.concat( //concat은 원래 배열을 해치지 않고 추가하는 방법 push는 원래 배열 깨고 추가하는 방법인데 concat이 좋음
          {id:this.max_content_id, title:_title, desc: _desc}          
          )
          this.setState({
            contents:_contents
          });
          console.log(_title,_desc);
         }.bind(this)}></CreateContent>
       }
      
      return (
    <div className="App"> 
     <Subject
      title={this.state.subject.title}
      sub={this.state.subject.sub}
      onChangePage={function(){
        this.setState({mode:'welcome'});
      }.bind(this)}></Subject>
     
      <Control onChangeMode={function(_mode){
        this.setState({
          mode:_mode
        });
      }.bind(this)}></Control>
       <TOC
       onChangePage ={function(id){
         this.setState({
           mode:'read',
           selected_content_id:Number(id)
         });
      }.bind(this)}
      data={this.state.contents}>
      </TOC>
        {_article}
      </div>
    );
  }
}

export default DiaryPage;









