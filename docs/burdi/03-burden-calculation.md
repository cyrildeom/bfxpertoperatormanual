---
sidebar_position: 5
---

# Step 2 : Burden Calculation

The view is splitted on 3 parts
1. The left pane
   1. Target & set point 
2. The upper side of the page
   1. The burden calculation inputs
3. The lower side of the page
   1. The burden calculation outputs
   
---
## Target & set point

The first step of the burden calculation is to define all targets & set point:
![target-setpoint](/img/burdi/02-en-tagetSetpoint.png)


**Target & Set point**
* Mode Weight (optimal mode based on customer workflow)
  * Wet or Dry
* Total coke rate [kg/tHM]

**Slag Constraints Basicity**
  * Activate or not the basicity correction
  * Define which type the site is using 
    * B2 or B3 or B4
  * Give the set point of the selected basicity type
  * Active or not the MgO min

**SI Hot Metal & Target[%]** 
  * Define the Si target of the recipe
    * Hot Metal target Si [%]

**System information**

The operator can see other important information like 
  * Injection details
    * injection rate
    * recommendation
    * CRR
  * Dust Rate 
  * Sludge rate
  * Legend (with color code)


**Target & Set point option "Weight Mode"**

If the customer prefer to input weight data instead of % & rate, this option can be activated.
If the weight mode is activated, the have to define which weight reference :
* Dry

![ref-weight-dry](/img/burdi/02-en-weight-ref-dry.png)
* Wet 

![ref-weight-wet](/img/burdi/02-en-weight-ref-wet.png)

---

## The burden calculation inputs

The operator has to define the recipe composition:
* The raw materials 
  * Burdening, reducing & lost Burden 
  * Chemical analysis (validate or manually adjust them)
  * Defining the corresponding rates of each material (Burdening, reducing & lost Burden)
  * The injection rates for each material

---
## The burden calculation outputs

The bottom display the result of the Burden Calculation for the output production:
• Hot Metal
• Slag 

**You have to keep in mind that all concept of the "Burden Calculation" is calculating the mass balance for :**
* 1 t/tHM
  * **This is not true if weight mode is activated**
