/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if(password==null) return "weak" ;
  var count = 0 ;
  var uppercase = true ;
  var lowercase = true ;
  var nUmber  = true ;
  var LONVSHU  = password.length >= 8  ;
  var SOPE  = true ;
  for(var i = 0 ; i < password.length ;i++ ){
    if(password[i]>='A' && password[i]<='Z' ){ 
      if(uppercase==false) continue ;
      else {
        count++ ;
      uppercase = false ;
      }
    }
    else if(password[i]>='a' && password[i]<='z' ){ 
      if(lowercase==false) continue ;
      else {
        count++ ;
      lowercase = false ;
      }
    }
    else if(password[i]>='0' && password[i]<='9' ){ 
      if(nUmber==false) continue ;
      else {
        count++ ;
      nUmber = false ;
      }
    }
    else if(SOPE ) {
      count++ ; 
      SOPE = false ;
    }
  }
  if(LONVSHU==true){
    count++ ;
  }
  if(count==0 || count==1) return "weak";
  else if(count==2 || count==3) return "medium" ;
  else if(count==4) return "strong"; 
  else return "very strong" ;
}
