import $ from 'jquery';
import {TweenMax} from 'gsap';

class App {

  constructor(){

    this.DOs = {
      $room: $('.js-room'),
      $doors: $('.js-door'),
      $books: $('.js-book')
    };

    this.state = {
      wWidth: window.innerWidth,
      wHeight: window.innerHeight,
      clickX: undefined,
      clickY: undefined,
      mousedown: false
    };

    this.initRotation();
    this.initDoors();
    this.initBooks();
  }


  adjustPerspective(e){
    let xDrag = e.originalEvent.clientX,
        yDrag = e.originalEvent.clientY,
        xStart = this.state.clickX,
        yStart = this.state.clickY,
        xDest = xDrag - xStart,
        yDest = yDrag - yStart;

    TweenMax.to(this.DOs.$room, .2, {
      rotationX: `+=${(yDest/100) * -1}`,
      rotationY: `+=${xDest/100}`
    });
  }


  initRotation(){
    $(window).on('mousemove', (e)=>{
      if( this.state.mousedown === true ){
        this.adjustPerspective(e);
      }
    })
    $(window).on('mousedown', (e)=>{
      this.state.mousedown = true;
      this.state.clickX = e.originalEvent.clientX;
      this.state.clickY = e.originalEvent.clientY;
    });
    $(window).on('mouseup', ()=>{ this.state.mousedown = false; });
    $(window).on('resize', ()=>{
      this.state.wWidth = window.innerWidth;
      this.state.wHeight = window.innerHeight;
      this.state.clickX = undefined;
      this.state.clickY = undefined;
    })
  }


  moveDoor(e){

    if ( $(e.target).index() === 2 ){

      TweenMax.to( $(e.target), 1, {
        x: ( e.target._gsTransform.xPercent === 0 ) ? '-100%' : '0%',
        z: ( e.target._gsTransform.xPercent === 0 ) ? '1%' : '0%'
      });

    } else {

      TweenMax.to( $(e.target), 1, {
        x: ( e.target._gsTransform.xPercent === 0 ) ? '100%' : '0%',
        z: ( e.target._gsTransform.xPercent === 0 ) ? '1%' : '0%'
      });

    }
  }


  initDoors(){
    this.DOs.$doors.on('click', (e)=>{ this.moveDoor(e); });
    TweenMax.set( this.DOs.$doors, {x:'0%'} );
  }


  closeBook(el){
    $(el).removeClass('is-opened');
  }


  openBook(el){
    $(el).addClass('is-opened');
  }


  initBooks(){
    this.DOs.$books.on('click', (e)=>{
      e.stopPropagation();
      if( $( e.target ).hasClass('is-opened') ){
        this.closeBook( e.target );
      }else{
        this.DOs.$books.removeClass('is-opened');
        this.openBook( e.target );
      }
    });
  }

}

let app = new App();