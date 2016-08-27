import {Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    template: `
    <div>
      <!-- HeaderTab -->
      <table class="uk-table">
        <tr>
          <td class='uk-width-1-3 uk-text-center' style='border: 1px solid;'>
            <a>
              <div  class='uk-width-1-1'>
                <h2 class='uk-text-middle'>FACTORY</h2>
              </div>
            </a>
          </td>
          <td class='uk-width-1-3 uk-text-center' style='border: 1px solid;'>
            <a class='uk-width-1-3  uk-text-middle'>
              <div>
                <h2>MACHINE</h2>
              </div>
            </a>
          </td>
          <td class='uk-width-1-3 uk-text-center' style='border: 1px solid;'>
            <a class='uk-width-1-3 uk-text-middle'>
              <div>
                <h2>ANT</h2>
              </div>
            </a>
          </td>
        </tr>
      </table>
    </div>
    <!-- DASHBOARD -->
    <div id="dashboard">
			<table class="uk-table">
				<tr>
					<td class='uk-width-9-10'></td>
					<td class='uk-width-1-10'>
						<button id='AddBtn' class="uk-button uk-button-large uk-button-primary " data-uk-modal="{target:'#AddBox'}" type="button">
							ADD
						</button>
					</td>
				</tr>
			</table>
      <!-- DATA -->
      <div>
        <table class='uk-table'>
          <tr>
            <td class='uk-width-1-10' style='border: 1px solid;'>
              T1 Blank
            <td>
            <td class='uk-width-2-10' style='border: 1px solid;'>
              <div class='uk-text-center' style='border: 1px solid;'>
                FactoryName
              </div>
              <div class='uk-text-middle uk-text-center' style='border: 1px solid;'>
                Graph Data
              </div>
            <td>
            <td class='uk-width-2-10' style='border: 1px solid;'>
              T3 Data
            <td>
            <td class='uk-width-2-10' style='border: 1px solid;'>
              T4 Data
            <td>
            <td class='uk-width-1-10' style='border: 1px solid;'>
              T5 Blank
            <td>
          </tr>
        </table>
      </div>

      <!-- POPUP BOX -->
      <!-- AddBox -->
      <div id="AddBox" class="uk-modal">
        <div class="uk-modal-dialog">
          <a class="uk-modal-close uk-close"></a>
          <div class="uk-modal-header">
            <form class="uk-form">
            <table class='uk-table'>
              <tr>
                <td>
                  <h3>
                    NAME :
                  </h3>
                </td>
                <td>
                  <h3>
                    <input type="text" placeholder="FACTORY NAME">
                  </h3>
                </td>
              </tr>
                <h3>
                  ADDRESS : <textarea cols="25" rows="" placeholder="ADDRESS"></textarea>
                </h3>

                <h3>
                  DESCRIPTION : <textarea cols="25" rows="" placeholder="DESCRIPTION"></textarea>
                </h3>
              <div class="uk-modal-footer uk-text-right">
                <button class="uk-button uk-button-large uk-button-primary " type="button">
                  ADD
                </button>
              </div>
            </table>
            </form>
          </div>
        </div>
      </div>
      <!-- EditBox -->
      <div id="EditBox" class="uk-modal">
        <div class="uk-modal-dialog">
          <a class="uk-modal-close uk-close"></a>
          <form class="uk-form">
            <h3>
              NAME : <input [(ngModel)]="factName" type="text" placeholder="FACTORY NAME">
            </h3>
            <h3>
              ADDRESS : <textarea cols="25" rows="" [(ngModel)]="address" placeholder="ADDRESS"></textarea>
            </h3>
            <h3>
              MEMBER
              <button class="uk-button uk-button-mini uk-button-success " type="button">
                +
              </button>
            </h3>
            <h3>
              1 :
              <input [(ngModel)]="member1" type="text" placeholder="MEMBER NAME">
              <button class="uk-button uk-button-mini uk-button-danger " type="button">
                -
              </button>
            </h3>
            <h3>
              2 :
              <input [(ngModel)]="member2" type="text" placeholder="MEMBER NAME">
              <button class="uk-button uk-button-mini uk-button-danger " type="button">
                -
              </button>
            </h3>
          <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-large uk-button-primary " type="button">
              EDIT
            </button>
          </div>
          </form>
        </div>
    </div>
    `
})

export class factoryListComponent{
  constructor(
  private _router: Router
  ) { }

  factName: String = "Factory 1";
  address: String = "126 ถนน ประชาอุทิศ แขวง บางมด เขต ทุ่งครุ กรุงเทพมหานคร 10140";
  member1: String = "John Smith";
  member2: String = "Adam Potter";

  goToSensor(){
    this._router.navigate(['Sensor']);
  }
}
