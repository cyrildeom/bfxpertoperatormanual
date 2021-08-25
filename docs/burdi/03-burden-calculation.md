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

![123](/img/burdi/02-123.png)
   
---
## Target & set point

The first step of the burden calculation is to define all targets & set point:
![target-setpoint](/img/burdi/02-en-tagetSetpoint.png)


**Target & Set point**
* Mode Weight (optimal mode based on customer workflow)
  * Wet or Dry
* Total coke rate [kg/tHM]
  * The operator ha to define the value for the recipe
  * The system will check if the recipe composition reach the defined target
    ![totalCokeRate](/img/burdi/02-en-totalCokeRate.png)
 
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

![burdenCalculationinputs.](/img/burdi/02-en-burdenCalculationInputs.png)

The operator has to define the recipe composition:
* The raw materials 
  * Burdening, reducing & lost Burden 
  * Chemical analysis (validate or manually adjust them)
  * Defining the corresponding rates of each material (Burdening, reducing & lost Burden)
  * The injection rates for each material

### Burdening Materials

The operator has to define the list of **Burdening Materials** 
* (Ore/Pellets/Sinter/Basicity regulator [e.g. Quartzite, etc.]) 
* The individual rates / or percentage that the operator wants to add to the recipe

![selectMaterials](/img/burdi/02-en-selectMaterials.gif)

**@info: the order of selection of each material is going to be the order of display in the table.**
Change order of raw materials

![changeOrder](/img/burdi/02-en-changeOrder.gif)

### Reducing Materials
The Reducing materials are divided in 2 species:
* Reducing Agent
* Reducing Agent at tuyere level (injection)
  The operators have to define the mode for each reducing material.
  * Weight or Rate and the metrics (t, kg/tHM, Nm3/tHM, g/Nm3,...)

### Analysis

The operator has the possibility to display all analyses via a toggle button, and/or manually update them (if required*).
![analysis](/img/burdi/02-en-analysis.gif)

### Basicity correction

The operator has the possibility to activate:
* Basicity correction on the left panel
* Define on which correction the recipe is going to be calculated
  * B2
  * B3
  * B4
* Define the basicity correction ( B+ / B- / No correction) on the Burdening materials

![basicityCorrection](/img/burdi/02-basicityCorrection.gif)
    
### Features
The operator can easily reply a material by another one
![replaceMaterial](/img/burdi/02-en-replaceMaterial.gif)

## Lost Burden
The Lost Burden are the dust & sludge generated during the process.
The lost burden has a small impact on the overall process this is why this section the information are hidden and selected by default.

The operator has the possibility to :
* Adjust the Rate 
* Manually update the analyses if required
  ![lostBurden](/img/burdi/02-en-lostBurden.gif)


---
## The burden calculation outputs

The bottom display the result of the Burden Calculation for the output production:
* Hot Metal
* Slag 

![burdenCalculationOutputs](/img/burdi/02-en-burdenCalculationOutputs.png)

**You have to keep in mind that all concept of the "Burden Calculation" is calculating the mass balance for :**
* 1 t/tHM
  * **This is not true if weight mode is activated**

## Burden Calculation

When the operator has finalized the definition of the recipe, the next step is to launch a "Burden Calculation" mass balance by sending all data to the Burden Calculation Model.

![burdenCalculationEngine](/img/burdi/02-en-burdenCalculationEngine.png)

1. Data are sent to the "Burden Calculation Model"
   1. The model is going to do make burden check in order to generate 
      1. Output calculation
      2. errors or warnings 
         * Error has to be solved in order move in the composition matrix step
         * Warning is just to operator that the system detect inconsistencies/deviations/...  .

    Error & warnings are display on the right side of the screen.

   ![error](/img/burdi/02-en-errorWarning.png)

| ERROR    |     WARNING   |
  |----------|:-------------:|
  | ![error](/img/burdi/02-en-error.png)|  ![warning](/img/burdi/02-en-warning.png)||

In the table below, you can see the complete list of error & warning in the Burden Calculation view.

| N°|**ERROR LIST** |
|----------|:-------------:|
| 1 | Remove all basicity corrections OR uncheck basicity constraint |
| 2 | Burden composition differs from 100 % |
| 3 | {X} density can't be equal or lower than 0, please check this material analysis |
| 4 | You can't mix modes for top charged reducing agents |
| 5 | Burden reference weight can't be equal or lower than 0 |
| 6 | Burden reference total coke rate can't be equal or lower than 0 |
| 7 | Total coke rate should be {X} kg/tHM |
| 8 | Total coke weight should be {X} t |
| 9 | Please specify additive for MgO addition |
| 10 | Please use another additive for the MgO correction, the selected one has a MgO content of less than {0} % |
| 11 | MgO constrainst needs to be upper 0 |
| 12 | Remove MgO correction additive OR uncheck MgO constraint |
| 13 | Please specify only one correction for MgO |
| 14 | Basicity correction can't be equal or lower than 0 |
| 15 | No basicity correction have been defined |
| 16 | Missing paired correction for ferrous materials (B+ AND B-) |
| 17 | Can't mix simultaneously ferrous and additives basicity correction |
| 18 | More than one material for same basicity correction ({X}) has been selected |
| 19 | Can't use paired B+ and B- for additives (B+ OR B-) |
| 20 |B+ correction basicity is lower than B- correction basicity. Are B+ and B- corrections switched? |
| 21 |With selected materials and constraints, {X} can't be lower than {1:0.000} and upper than {2:0.000} |
| 22 |Unable to reach the basicity SP with this additive (Setpoint => {0}={1:0.000} ; without additive => {0}={2:0.000}) |
| 23 |Calculation exited without reducing the FE error : {0:0.000} % |
| 24 |Calculation exited without reducing the basicity error : {0:0.000} |
| 25 |Calculation reached the maximum MgO corrective allowed rate |
| 26 |MgO correction material rate is lower than minimum required rate |
| 27 |B- correction material rate is upper than maximum allowed rate |
| 27 |B+ correction material rate is lower than minimum required rate  |
| 28 |B- correction material rate is upper than maximum allowed rate |
| 29 |Calculation exited without reducing the basicity error : {0:0.000} |
| 30 |Slag basicity {X} is out of range regarding the operating target: {1:0.00} +/- {2:0.00} |
| N° |<center>**WARNING LIST**</center> |
| 1 |The hot metal Si set point is not equal to the target |
| 2 | No injection target is defined for family "{X}" |
| 3 | The injection set point is not equal to the target for family "{X}" |
| 4 | The basicity correction set point is not equal to the current value |
| 5 | No basicity correction will be applied to this calculation |


Assuming that the calculation has passed successfully.
The engine is going to update :
* displays the result of the calculation 
* generates the summary.
* generates all alarms/warnings 

in case of success the "Send to matrix" button will be accessible:

![move to composition](/img/burdi/02-en-burdenCalculationSuccess.png)

The operator has the possibility to move to the next step
* The **Composition Matrix**


