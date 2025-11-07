import $ from 'jquery'
import '../styles/app.css'

export function createLayout() {
  let $toolbar = $('<nav>').addClass('top-toolbar')
  let $mainContainer = $('<div>').addClass('main-container')

  let $leftBar = $('<div>').attr('id', 'shape-panel').addClass('left-bar').attr('data-testid', 'shape-panel')
  let $centerArea = $('<main>').attr('id', 'main-view').addClass('center-area')
  let $rightBar = $('<div>')
    .attr('id', 'shape-properties')
    .attr('data-testid', 'shape-properties')
    .addClass('right-bar')
    .text('Project name + list of 3D objects')

  $mainContainer.append($leftBar, $centerArea, $rightBar)
  $('body').append($toolbar, $mainContainer)
}
