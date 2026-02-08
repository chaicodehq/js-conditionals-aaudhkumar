/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if(billAmount<=0) return null ;
  if( serviceRating%1!=0  ||  (serviceRating<1 || serviceRating>5)){
    
    return null ;

  }

  var b = 0 ; 
  var a = 0.00 ;
  if(serviceRating==1){
    b = 5 ; 
    a = 0.05*billAmount ; 
  }
  else if(serviceRating==2){
    b = 10 ; 
    a = 0.10*billAmount ;
  }
  else if(serviceRating==3){
    b = 15 ; 
    a = 0.15*billAmount ;
  }
  else if(serviceRating==4){
    b = 20 ; 
    a = 0.20*billAmount ;
  }
  else if(serviceRating==5){
    b = 25 ; 
    a = 0.25*billAmount ;
  }

  return { tipPercentage : b ,tipAmount : a , totalAmount : a+billAmount } ;


}
