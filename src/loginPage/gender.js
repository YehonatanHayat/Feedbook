
import React from 'react';

function Gender(){

    return (

<div className="mb-3 d-flex align-items-center">
<label htmlFor="gender" className="gender-label me-2">Gender</label>
<i className="bi bi-info-circle info-icon" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say."></i>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
  <label className="form-check-label" htmlFor="male">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
  <label className="form-check-label" htmlFor="female">Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
  <label className="form-check-label" htmlFor="other">Other</label>
</div>
</div>
    );
}
export default Gender;   