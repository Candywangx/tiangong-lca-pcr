---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.bulk-glacial-acetic-acid-rhodium-methanol-carbonylation
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Bulk glacial acetic acid from rhodium-catalysed methanol carbonylation


## 1. Scope and Applicability

This PCR covers independent manufacture of bulk technical-grade glacial acetic acid (CH3COOH, CAS 64-19-7), assayed at least 99.8 wt%, by continuous rhodium-catalysed carbonylation of fossil industrial methanol with purified fossil-source CO, followed by purification, storage and loading. The product is one chemical species with measured residual water and impurities; it is not a generic organic-acid mixture. This is a manufacturing dataset, not a dilution-only or recovered-acid purification proxy. [jrc-lvoc-2017; celanese-acetic-2021]

Exclude aqueous grades below the assay limit, vinegar/fermentation, acetaldehyde or hydrocarbon oxidation, iridium/cobalt routes, fatty acids and acid oils, salicylic acid and its salts/esters, other acids, salts, esters, anhydrides, halides and peroxides as reference products. A real by-product remains a separately identified exchange, not an extension of the reference category. Do not adopt patent concentrations or historical single-producer consumption as universal recipes, yields or emission factors. [celanese-acetic-2021; celanese-carbonylation-2020]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.bulk-glacial-acetic-acid-rhodium-methanol-carbonylation |
| classification_refs | CPC 3.0:34140; narrower |
| covered_products | Bulk technical glacial acetic acid >=99.8 wt%, specified carbonylation route |
| excluded_products | Diluted acid; fatty/other acids; salicylic acid; salts; esters; anhydrides; other routes |
| representative_product | CH3COOH in bulk liquid dispatch |
| production_route | Fossil methanol + purified CO; rhodium/iodide catalysis; flash separation and distillation; actual guard bed if installed |
| market_state | Accepted liquid at plant loading gate, excluding transport-vessel mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Technical acid feedstock |
| How much | 1 kg |
| How well | Actual SKU passes >=99.8 wt% CH3COOH assay; declare water and individual impurities |
| How long or cycle | One gate dispatch; no service-life function |
| reference_flow_link | finished_acid |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Acetic acid (acetic acid) (`2cf748a4-30e8-4efd-aec4-05beb20604dc`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS; assay method and mass fraction; water; impurities; SKU; rhodium route; fossil feed origins; net mass excluding vessel; dispatch state/temperature; site/period; actual upstream providers; utility basis; actual waste/outfall media; co-product status and allocation |

Required qualifiers must accompany the dataset metadata or reference-flow comment; absent identity or quantity/provider compatibility prevents complete dataset linkage. The functional quantity is the whole accepted commercial product mass, including residual water and impurities, not contained pure acid. The >=99.8 wt% floor is this PCR's declared reference-product identity convention; it is not the Celanese sales specification. The historical Celanese global, China and Europe sheets specify at least 99.85 wt% acid using a freezing-point assay convention. Record the actual supplier specification, assay method, mass-fraction interpretation and uncertainty; do not treat a freezing-point result alone as independent closure of every impurity or as a current supplier guarantee. [celanese-acetic-2021]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_reference | finished_acid | Mass | kg | Weigh net accepted product using cp_product. Keep total product, CH3COOH, water and impurities separate; never divide by pure acid while labelling the result per kg commercial product. |
| utility_basis | electricity; gas; steam | Native property or explicitly unresolved steam mass | MJ; m3; kg | Electricity kWh × 3.6 = MJ. Gas volume needs T/P/composition/Z/provider basis. Steam requires mass and enthalpy delivery/return records; MJ property alone does not prove net usable heat. cp_energy. |
| speciation | acetic_fresh; acetate_fresh; no_air; no2_air | Species mass | kg | Analytical acid equivalents, carbon totals or NO2-equivalent NOx are not direct species masses. Convert only with actual measured speciation and stated molecular basis; unresolved reporting remains pending. cp_emissions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received methanol, purified CO and actual catalyst/promoter supplies |
| starting_condition_role | Independent chemical synthesis foreground; manufacturing from feedstocks |
| product_classification_scope | CPC 3.0:34140; narrower |
| recursive_input_rule | Purchased acetic acid charge requires its own upstream manufacturing dataset; internal recovered acid/catalyst/light ends are internal links, not recursive fresh production |
| upstream_dataset_requirement | Compatible supplier geography, technology, purity, state, reference quantity and temporal basis for every material, energy and external treatment; disclose unresolved links |
| disclosure | Reaction, separation, recycle, storage/loading, utilities, abatement, water and treatment ownership, stock changes, coproducts and all released species |

Aggregate reaction, flash, light/heavy-end distillation, guard-bed purification, tank/loading, assigned utility generation and onsite abatement into one foreground unit so intermediate acid is not a second reference output. Retain the site process drawing and stage meters: feed → reactor → flash → purification → tank → loading; flash catalyst liquid and recovered light ends return to the reactor; vent → absorption → actual recovery/oxidation/flare endpoint; aqueous purge → actual onsite or external treatment. Every internal link has identical mass/composition/time at its two ends. [celanese-carbonylation-2020; jrc-lvoc-2017]

Include start-up/shutdown, cleaning, purge, losses and actual onsite treatment over the declared period. Purchased steam excludes supplier generation emissions from this foreground; onsite fuel generation includes its fuel, water and measured stack releases. External wastewater transfer includes receiver burdens through a compatible dataset, without also counting raw wastewater as a direct water emission. Equipment construction/capital is excluded from routine operating exchange totals and disclosed; any study including it uses separately measured atomic material/service rows. Bulk dispatch uses reusable vessels. For every actual packing component, container, seal, liner, maintenance material and external return, collect the full physical quantity, composition, incoming/outgoing movement and opening/closing stock before any service or burden allocation. Preserve container tare separately from acid net mass. Record cleaning inputs and wastes atomically; document reuse cycles and measured service shares in a separate burden ledger. A reduced service share never replaces the whole physical amount or creates repeated fresh container consumption. No cut-off may silently remove hazardous iodide/metal/species streams. [jrc-cww-2016]

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| acid_manufacture | Carbonylation, purification, loading and actual onsite services | required | All qualifying product manufacturing; conditional exchanges only when present | foreground_production | 1 kg |

### Process: Manufacturing and gate dispatch (`acid_manufacture`)

The rows below are a minimum discovery and recording frame, not a recipe or closed species list. Every applicable row requires real collection; evidence of non-use/non-release is required for omission or zero. Add one atomic row for every additional actual input, recovered product, primary sludge, nutrient, cleaning chemical, regenerant, filter medium, refrigerant, packaging component, or emitted species identified by the site source inventory. Screen the actual rhodium/iodide route for hydrogen iodide, dimethyl ether, formic acid, heavier aldehydes, alkyl iodides, corrosion metals and guard-bed metals where relevant; their presence in a patent does not establish a site release or dosage. Do not hide real exchanges in an umbrella row. [jrc-cww-2016; celanese-carbonylation-2020]

#### Inputs

##### Product flows

###### Fossil industrial methanol (`methanol`)

Coal/coking/natural-gas industrial methanol only; measure received commercial mass, water, assay, carbon origin and provider basis. This identity does not prescribe a market-average upstream dataset.

- Selected flow: Methanol (market average) (`adbc8430-7937-4ade-b7a5-cb1797dda661`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Carbon monoxide feed (`carbon_monoxide_feed`)

Purified fossil-source CO supplied across the unit boundary, not raw syngas. Reconcile gas composition and measured mass; convert volume using actual temperature, absolute pressure, dry/wet basis and compressibility.

- Selected flow: Carbon Monoxide (`69422d71-f1a5-4c70-bb58-126262b8ddc2`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Methyl iodide promoter (`methyl_iodide_makeup`)

Record actual methyl iodide (CH3I, CAS 74-88-4) SKU, phase, assay, whole received formulation, make-up and recovery; recycled circulation is not fresh consumption. Distinguish pure methyl iodide from solvent-diluted supply and separately retain its carrier composition. Do not substitute methylammonium or formamidinium iodide, or use an air-emission identity for the purchased promoter.

- Selected flow: Methyl iodide promoter
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Rhodium carbonyl iodide catalyst solution (`rhodium_catalyst_makeup`)

Conditional on an actual rhodium carbonyl iodide catalyst solution supplied across the boundary; collect full solvent/water/metal/iodide composition, chemical form, phase, supplier and assay. Keep whole solution mass and contained Rh separate. If the active complex is formed onsite from a purchased precursor, record each actual precursor supply as its own concrete atomic exchange instead of inventing a purchased reaction-medium solution. Components already contained in the solution are not additional fresh inputs. No generic copper catalyst substitution.

- Selected flow: Rhodium carbonyl iodide catalyst solution
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Lithium iodide (`lithium_iodide`)

Conditional on the actual co-catalyst recipe; specify hydrate state, solution state and assay. No patent concentration is a default dosage.

- Selected flow: Lithium iodide
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Lithium acetate (`lithium_acetate`)

Conditional on actual use; identify anhydrous/hydrated material and carrier water. Sodium acetate is a different species.

- Selected flow: Lithium acetate
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Fresh glacial acetic acid charge (`fresh_acetic_charge`)

Conditional purchased start-up or replacement acid of at least 99.8 wt% assay; track stock changes and supplier. Exclude internally recovered acid from this fresh input.

- Selected flow: Acetic acid (acetic acid) (`2cf748a4-30e8-4efd-aec4-05beb20604dc`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Deionised process water (`process_water`)

Measure fresh reaction, washing and cleaning water from ion exchange/RO supply. Record purpose and treatment; carrier water already in received solutions is not charged twice.

- Selected flow: Deionised water (`5b3acbab-2518-4406-8736-d21f222d757a`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Purchased tap water for cooling makeup (`cooling_water`)

Conditional on treated tap-water supply. Record fresh makeup only, density if converted from volume, and actual origin; raw abstraction needs its own resource flow and treatment inventory.

- Selected flow: Water, tap (`6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Sodium hydroxide solution, 30% (`caustic`)

Conditional measured neutralisation with actual 30 wt% NaOH solution; amount is whole solution kg. Record NaOH and water fractions separately in the physical ledger. Other grades require their own compatible flow.

- Selected flow: Sodium hydroxide（30%） (`47926319-2558-4b19-bbab-0ff264fca360`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Metal-functionalised cation-exchange iodide guard resin (`guard_resin`)

Conditional installed guard bed; collect actual polymer, functional metal, wet/dry basis, charge, replacement and regeneration recipe. An anion resin is not an automatic substitute.

- Selected flow: Metal-functionalised cation-exchange iodide guard resin
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Purchased medium-voltage electricity (`electricity`)

Conditional CN grid-average 1–35 kV supply, matching the native locationOfSupply. Meter delivery; convert kWh to MJ using 3.6. Preserve the native Net calorific value property; other supply geographies, voltage levels or provider routes require separate compatible records. The product flow does not supply a site-specific electricity burden factor.

- Selected flow: Alternating current (`3d76981f-964a-4865-b588-0e067a2a1163`)
- Flow property / unit: Net calorific value / MJ
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Purchased process steam (`steam`)

One steam exchange on delivered mass basis. Measure pressure, absolute/gauge convention, temperature, dryness/superheat, mass, return condensate and enthalpies. Match supplier reference to delivered steam mass or demonstrated net heat before energy linkage.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Pipeline natural gas (`gas`)

Conditional onsite boiler/oxidiser fuel; native reference Volume/m3. Collect temperature, absolute pressure, wet/dry composition, compressibility, calorific basis and provider m3 definition. Secondary mass factors are not density.

- Selected flow: natural gas in the gaseous state (`4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`)
- Flow property / unit: Volume / m3
- Flow property UUID: `93a60a56-a3c8-22da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Air-separated gaseous nitrogen (`blanket_nitrogen`)

Conditional on actual air-separated gaseous N2 for blanketing/purge; measure full fresh delivered N2 mass, purity, gas state, supply pressure and provider kg basis. The selected gaseous inerting product does not specify an exclusive manufacturing route or a fixed purity/pressure; actual air-separation supply still requires supplier evidence. Qualitative make-up or venting comments are not quantity or emission defaults. Liquid nitrogen or internally generated air is a different supply route.

- Selected flow: Nitrogen gas (`92233c86-8e75-441c-94de-03cc91bc7c10`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

#### Outputs

##### Product flows

###### Accepted bulk glacial acetic acid (`finished_acid`)

1 kg net accepted commercial product at least 99.8 wt% CH3COOH, excluding transport vessel mass. Water and every impurity remain part of the product mass, not extra reference output.

- Selected flow: Acetic acid (acetic acid) (`2cf748a4-30e8-4efd-aec4-05beb20604dc`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_product`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Separated propionic acid co-product (`propionic_acid`)

Conditional only on actual separate recovered, accepted and sold propionic acid with declared assay. Trace impurity in main acid is not a co-product.

- Selected flow: Separated propionic acid co-product
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Recovered methyl acetate co-product (`methyl_acetate_coproduct`)

Conditional on real export with specification and receiver. Internal light-end recycle is not a co-product.

- Selected flow: Recovered methyl acetate co-product
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Exported carbonylation purge gas for fuel (`purge_fuel`)

One measured gas mixture transferred to a named fuel user; disclose CO/H2/CO2/CH4/VOC/water composition and calorific basis. Onsite oxidation remains internal, followed by actual stack emissions.

- Selected flow: Exported carbonylation purge gas for fuel
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Returned steam condensate (`condensate_return`)

Conditional return to the steam supplier; meter clean condensate mass and temperature. It is an external water/enthalpy return, not an avoided burden or acid co-product.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_product`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

##### Waste flows

###### Acetic-acid-unit wastewater sent to external treatment (`effluent_transfer`)

One wastewater mixture at transfer point; measure whole wet mass, flow, pH, water, organics, salts, iodide and metals and receiver treatment. Do not use manganese-slag wash water.

- Selected flow: Acetic-acid-unit wastewater sent to external treatment
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Aqueous sodium-acetate neutralisation purge (`neutralization_purge`)

One actual aqueous waste mixture separated for external treatment; quantify acetate, sodium, residual free acid, water and iodide. It is neither pure salt nor automatically a saleable co-product.

- Selected flow: Aqueous sodium-acetate neutralisation purge
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Spent rhodium-containing catalyst solution (`spent_catalyst`)

Conditional removed catalyst mixture sent to a named treatment/recovery route; report actual solution mass, Rh/iodide/solvent/water. Do not report contained metal again as an elementary release unless released.

- Selected flow: Catalyst waste (`9f527622-cc4a-3014-a59e-a0383c602b5d`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Acetic-acid heavy distillation bottoms (`heavy_bottoms`)

One removed heavy organic residue mixture; analyse species, free acid, iodide, metals, water and physical state; include measured receiver route. Do not substitute citric acid residue.

- Selected flow: Acetic-acid heavy distillation bottoms
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Chemical wastewater biological sludge (`biological_sludge`)

Conditional onsite biological treatment; collect whole removed sludge wet mass, dry solids, organic carbon, metal/iodide content and receiving conditions. Distinguish primary sludge; add its own atomic row when present.

- Selected flow: Sludge (`725c8f6e-7975-4155-a250-1f95ef70c508`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### Spent metal-functionalised iodide guard resin (`spent_guard_resin`)

One spent guard-resin waste exchange with retained liquid, functional metal and captured iodide measured; record regeneration versus disposal and receiver.

- Selected flow: Spent metal-functionalised iodide guard resin
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

##### Elementary flows

###### Fossil carbon dioxide (`co2_fossil`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: carbon dioxide (fossil) (`08a91e70-3ddc-11dd-923d-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Biogenic carbon dioxide (`co2_biogenic`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known. Retain real biogenic CO2 even when a GHG reporting convention excludes it; no bio-carbon fraction is assumed.

- Selected flow: carbon dioxide (biogenic) (`08a91e70-3ddc-11dd-9c15-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Fossil carbon monoxide (`co_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: carbon monoxide (fossil) (`08a91e70-3ddc-11dd-924e-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Methanol to air (`methanol_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: methanol (`fe0acd60-3ddc-11dd-a935-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Acetic acid to air (`acetic_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: acetic acid (`08a91e70-3ddc-11dd-92c3-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Methyl iodide to air (`methyl_iodide_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: iodomethane (`7c2371e9-8623-4fe9-a6cc-a996a8d79d7a`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Methyl acetate to air (`methyl_acetate_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: methyl acetate (`08a91e70-3ddc-11dd-9690-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Acetaldehyde to air (`acetaldehyde_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: acetaldehyde (`fe0acd60-3ddc-11dd-a7a5-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Hydrogen to air (`hydrogen_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: hydrogen (`08a91e70-3ddc-11dd-949c-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Fossil methane to air (`methane_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: methane (fossil) (`08a91e70-3ddc-11dd-9610-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Nitrogen monoxide to air (`no_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known. Use actual species mass; total NOx as NO2-equivalent alone cannot populate NO or NO2. Keep unresolved speciation explicit and exclude N2O from NOx.

- Selected flow: nitrogen monoxide (`08a91e70-3ddc-11dd-96ee-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Nitrogen dioxide to air (`no2_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known. Use actual species mass; total NOx as NO2-equivalent alone cannot populate NO or NO2. Keep unresolved speciation explicit and exclude N2O from NOx.

- Selected flow: nitrogen dioxide (`08a91e70-3ddc-11dd-96e5-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Nitrous oxide to air (`n2o_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: nitrous oxide (`08a91e70-3ddc-11dd-94c3-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Sulfur dioxide to air (`so2_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: sulfur dioxide (`fe0acd60-3ddc-11dd-ac48-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### PM2.5 to air (`pm25_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known. Use disjoint size fractions, never sum PM2.5, cumulative PM10 and total particulate as independent masses.

- Selected flow: particles (PM2.5) (`08a91e70-3ddc-11dd-9293-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### PM2.5–PM10 to air (`pm10_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known. Use disjoint size fractions, never sum PM2.5, cumulative PM10 and total particulate as independent masses.

- Selected flow: particles (PM2.5 - PM10) (`08a91e70-3ddc-11dd-9501-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### PM above 10 µm to air (`pmover10_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known. Use disjoint size fractions, never sum PM2.5, cumulative PM10 and total particulate as independent masses.

- Selected flow: particles (> PM10) (`fe0acd60-3ddc-11dd-a70a-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Water vapour to air (`water_air`)

Actual outdoor-air emission, unspecified subcompartment, after control; keep stack and fugitive raw records separate. Use site-specific compartment when known.

- Selected flow: water vapour (`fe0acd60-3ddc-11dd-ac04-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Liquid water to fresh water (`water_fresh`)

Actual fresh-water release at installation outfall after onsite treatment; transfer to an external treatment plant is a waste exchange, not this release. Retain measured whole effluent volume and composition separately from the water component and each dissolved/suspended species. The native reference is Volume/m3; conversion to a water-component mass requires actual density and water fraction. Do not add whole effluent mass to the same water and pollutant masses in physical closure, or use its total volume as proof of pure-water volume without a documented basis.

- Selected flow: Water (`5e50fc01-19c6-4377-a1cc-bc65a12498ea`)
- Flow property / unit: Volume / m3
- Flow property UUID: `93a60a56-a3c8-22da-a746-0800200c9a66`
- Unit group UUID: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Free acetic acid to fresh water (`acetic_fresh`)

Actual fresh-water release at installation outfall after onsite treatment; transfer to an external treatment plant is a waste exchange, not this release. Distinguish measured free acid from dissociated acetate at actual pH; acid-equivalent analytical reporting must be converted with documented speciation, not duplicated.

- Selected flow: acetic acid (`08a91e70-3ddc-11dd-92c7-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Acetate ion to fresh water (`acetate_fresh`)

Actual fresh-water release at installation outfall after onsite treatment; transfer to an external treatment plant is a waste exchange, not this release. Distinguish measured free acid from dissociated acetate at actual pH; acid-equivalent analytical reporting must be converted with documented speciation, not duplicated.

- Selected flow: Acetate ion to fresh water
- Flow property / unit: Mass / kg
- Flow property UUID:
- Unit group UUID:
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Methanol to fresh water (`methanol_fresh`)

Actual fresh-water release at installation outfall after onsite treatment; transfer to an external treatment plant is a waste exchange, not this release.

- Selected flow: methanol (`fe0acd60-3ddc-11dd-a939-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Iodide ion to fresh water (`iodide_fresh`)

Actual fresh-water release at installation outfall after onsite treatment; transfer to an external treatment plant is a waste exchange, not this release.

- Selected flow: iodide (`08a91e70-3ddc-11dd-94d6-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Sodium ion to fresh water (`sodium_fresh`)

Actual fresh-water release at installation outfall after onsite treatment; transfer to an external treatment plant is a waste exchange, not this release.

- Selected flow: Sodium, ion (`6a3f413e-8aab-4c58-93b0-1f51c9714adb`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### Rhodium to fresh water (`rhodium_fresh`)

Actual fresh-water release at installation outfall after onsite treatment; transfer to an external treatment plant is a waste exchange, not this release. Native elemental-metal mass is total released Rh; dissolved/particulate speciation and treatment fate still need analysis.

- Selected flow: rhodium (`fe0acd60-3ddc-11dd-abb9-0050c2490048`)
- Flow property / unit: Mass / kg
- Flow property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`
- Unit group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

## 7. Allocation and Co-product Handling

First separate independently metered operations; retain unallocated physical mass/water/carbon/species accounts. Recovered internal solvent, catalyst, acid and condensate within the unit cancel as equal internal transfers. Only actual accepted external products with receiver/specification and positive documented economic or physical function are co-products; trace constituents and treatment wastes are not. Keep their full physical output masses before allocation.

For inseparable joint operation, document the physical causal relationship and use measured causal allocation where defensible; otherwise use period-matched net sales values for economic allocation, disclosing prices, product quantities, market status and sensitivity. Shares sum to one. Allocate attributable environmental burdens and shared inputs, never multiply actual co-product physical outputs by the acid share. Do not use both an avoided-product credit and allocation for the same output. Waste treatment follows actual producer/receiver responsibility. Condensate return is a metered water/enthalpy transfer, not automatically a substitution credit. These are attributional modelling rules implemented through cp_allocation, following subdivision, physical causality and, when necessary, another supported relationship. For economic allocation, adjust observed sales values to the same joint-production gate by separately recording downstream purification, compression or packing costs; use a positive measured total value and disclose sensitivity. No preselected share or credit is provided. [ilcd-general-2010]

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | acid_manufacture | Reference output, accepted coproduct and return | dispatch scale and assays | SKU; CAS; net product kg; CH3COOH fraction x; water fraction w; impurity fractions; stock kg; rejects; temperature; destination | Calibrated tank/vehicle weighing excluding tare; batch assay using validated supplier method with traceable uncertainty; sum accepted lots and reconcile opening/closing stocks | kg; mass fractions | Each batch/event; continuous utility/outfall records where applicable | One declared representative consecutive operating year including start/stop, or complete measured shorter campaign with seasonality disclosure | Qualifying production unit and assigned services | per 1 kg reference flow | Calibration; methods; uncertainty; stock and flow reconciliation; receiver and provider evidence |
| cp_materials | acid_manufacture | Each supplied atomic material and physical container movement | receipts; meters; laboratory; recipe | row_id; SKU; CAS; supplier; route; actual chemical composition; received mass; water; hydrate; spent stock; recovery; carbon origin; full packaging/container/maintenance amounts; external returns; reuse cycles; service shares; | Weigh or meter each fresh exchange; cross-check delivery and assay; separate whole mixture from active component; use stock-adjusted consumption, excluding internal circulation  Preserve full physical quantities before separate service/burden allocation. | kg | Each batch/event; continuous utility/outfall records where applicable | One declared representative consecutive operating year including start/stop, or complete measured shorter campaign with seasonality disclosure | Qualifying production unit and assigned services | per 1 kg reference flow | Calibration; methods; uncertainty; stock and flow reconciliation; receiver and provider evidence |
| cp_water | acid_manufacture | Each water intake and return | water meter; sampling; drawing | source; purpose; water mass or volume; temperature; density; return; evaporation; blowdown; carrier water; internal recycle | Meter fresh and discharged water separately; analyse density/quality where conversion is needed; map every inlet, recycle and outlet without counting cooling circulation as uptake | kg; m3 | Each batch/event; continuous utility/outfall records where applicable | One declared representative consecutive operating year including start/stop, or complete measured shorter campaign with seasonality disclosure | Qualifying production unit and assigned services | per 1 kg reference flow | Calibration; methods; uncertainty; stock and flow reconciliation; receiver and provider evidence |
| cp_energy | acid_manufacture | Each delivered utility and onsite generation | utility meters and enthalpy balance | voltage; kWh; MJ; fuel volume; T; absolute P; dry/wet composition; Z; NCV/GCV; steam kg; supply P/T/dryness; condensate kg/T; supplier reference; meter loss; supply geography; exported energy; heat loss; energy stock changes; common enthalpy datum; | Use calibrated stage and facility meters; reconcile shared utilities causally; actual thermodynamic records establish steam enthalpy and matched return; match native property and upstream reference quantity before linking | MJ; m3; kg | Each batch/event; continuous utility/outfall records where applicable | One declared representative consecutive operating year including start/stop, or complete measured shorter campaign with seasonality disclosure | Qualifying production unit and assigned services | per 1 kg reference flow | Calibration; methods; uncertainty; stock and flow reconciliation; receiver and provider evidence |
| cp_wastes | acid_manufacture | Each external atomic waste mixture | weighbridge; manifests; analysis | row_id; wet mass; water; dry solids; acid; acetate; sodium; iodide; metals; organic carbon; physical state; receiver; treatment; fate | Weigh each actual removed stream and obtain representative composition and receiver receipt; distinguish catalyst, heavy bottoms, aqueous purge, primary and biological sludge and guard resin; do not repeat one split under two rows | kg | Each batch/event; continuous utility/outfall records where applicable | One declared representative consecutive operating year including start/stop, or complete measured shorter campaign with seasonality disclosure | Qualifying production unit and assigned services | per 1 kg reference flow | Calibration; methods; uncertainty; stock and flow reconciliation; receiver and provider evidence |
| cp_emissions | acid_manufacture | Each actual species/medium | source inventory; direct measurement; lab | species CAS; source; medium/submedium; exhaust or water flow; concentration; time; T/P; dry/wet; oxygen basis; pH/speciation; detector limits; control bypass; combustion carbon origin; size intervals; wet-air intake; humidity; O2/N2/other carrier components; gross outgoing carrier; inlet background; whole effluent and water fraction; | Measure final stack/outfall and fugitive sources over operations and abnormal events; use validated species analysis and synchronized flow; sample before/after treatment for fate reconciliation; retain detection limits and uncertainty; include all discovered substances | kg; m3; concentration | Each batch/event; continuous utility/outfall records where applicable | One declared representative consecutive operating year including start/stop, or complete measured shorter campaign with seasonality disclosure | Qualifying production unit and assigned services | per 1 kg reference flow | Calibration; methods; uncertainty; stock and flow reconciliation; receiver and provider evidence |
| cp_allocation | acid_manufacture | Physical joint production and burden allocation | unit meters; contracts; period sales | product mass; assay; causal relationship; independent unit inputs; receiver; same-period net price; burden share; sensitivity | Keep full physical outputs separately from allocated burden ledger; justify subdivisions and causal/economic shares using real records, no assumed price or zero-value co-product | kg; currency; share | Each batch/event; continuous utility/outfall records where applicable | One declared representative consecutive operating year including start/stop, or complete measured shorter campaign with seasonality disclosure | Qualifying production unit and assigned services | per 1 kg reference flow | Calibration; methods; uncertainty; stock and flow reconciliation; receiver and provider evidence |

Retain total period quantities before protocol aggregation and before service or co-product allocation. P is the net accepted main-product kg dispatched at the declared gate. A_i is the measured full physical exchange total for the same unit and period; keep receipts, dispatches, internal movements and opening/closing stocks separately, then document any stock adjustment for consumption. Physical exchanges use A_i/P per 1 kg reference flow. Any allocated burden numerator is a separate B_i, reported as B_i/P with its allocation rule; it never replaces A_i in physical closure. P excludes off-grade diversion, internal transfer and carrier-vessel tare. Complete datasets require P>0 and composition closure.

Maintain separate total-mass, elemental, water-species, energy and stock ledgers. Measure actual wet air admitted for combustion/aeration, including its moisture and O2/N2/other composition, and the complete outgoing vent carrier on the same physical basis. Resolve each actual carrier/component and pollutant separately without counting a whole stream twice. Report inlet environmental background and outgoing gross quantities separately; any net-added emission convention must be explicit and must not erase gross physical closure. The net reaction CH3OH + CO → CH3COOH neither generates nor consumes water; actual side reactions, neutralisation, combustion and treatment may do so and need measured reaction extents and a water-species balance. Elemental hydrogen/oxygen balance does not replace the water-species ledger. Electricity/heat in MJ belongs in an energy ledger, not in a kg material sum; retain supplied/exported energy, common thermodynamic bases, losses and storage changes. [celanese-acetic-2021; celanese-carbonylation-2020; jrc-cww-2016]

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | a_i = A_i / P; retain every full physical exchange before allocation; fixed reference output = 1 kg. Allocated burden b_i = B_i / P is a separate ledger, never a replacement for physical a_i. | A_i; B_i; P; cp_product; applicable collection protocol | a_i; b_i | ilcd-general-2010 |
| product_components | finished_acid | Contained acid = sum(p_b × x_b); product water = sum(p_b × w_b); measured impurities = sum(p_b × respective fraction); P = sum(p_b); fractions close with actual uncertainty. Active-acid-basis burden, when separately requested, uses total burden / contained acid and is explicitly labelled a separate result. | p_b; x_b; w_b; impurity fractions; cp_product | acid; water; impurities; P | celanese-acetic-2021 |
| species_load | elementary outputs | For mass-referenced species, released kg = sum(C_s × Vdot × delta_t), where C_s is species kg/m3, Vdot is m3 per unit time and delta_t uses that same time unit; alternatively use C_s × measured interval volume without multiplying by time again, or validated integrated mass measurement. Convert reported units and T/P/wet/dry/oxygen bases explicitly to matching actual concentration/flow bases before integration. water_fresh retains its native m3 reference and a separately documented water-component basis. Convert analytical carbon/acid/NOx equivalents only with documented species definition and molecular masses. No default destruction fraction. | concentration; flow; time; measurement basis; cp_emissions | species kg | jrc-cww-2016 |
| steam_delivery | steam; condensate_return | Q_net = sum(m_in × h_in) - sum(m_return × h_return), with a declared common enthalpy datum and measured phases. Deduct other measured exported enthalpy as required by actual supplier definition; never reuse paper-drying MJ/kg factors. Steam mass is retained as its own exchange basis. | steam mass; h_in; return mass; h_return; cp_energy | Q_net; delivered steam mass | jrc-cww-2016 |
| physical_closure | acid_manufacture | Inputs + opening stocks = physical outputs + closing stocks, with reacted species balances and measured uncertainty. Water ledger includes carrier water, steam/return, cleaning, cooling makeup/blowdown, product, residues, effluent and evaporation; reaction water generation/consumption is explicit. Carbon ledger includes feed, fuel, actual products/residues and all C-containing emissions; distinguish fossil/biogenic and internal gas combustion. Iodine/Rh balances include catalyst/promoter makeup, stocks, recoveries, guard resin, waste and released species. Measured neutralisation CH3COOH + NaOH → CH3COONa + H2O is reconciled, not imposed as perfect yield. | cp_materials; cp_water; cp_product; cp_wastes; cp_emissions; stocks | mass; water; carbon; species residuals and uncertainty | jrc-cww-2016; celanese-acetic-2021 |
| joint_burdens | shared operation | Causal measured shares, or f_j = (p_j × net_price_j) / sum(p_k × net_price_k) if no defensible physical relationship; use measured prices adjusted to the same gate and positive total value; shares sum to 1. Preserve all full physical exchanges separately. Disclose subdivisions, price period, additional processing costs and sensitivity. | cp_allocation; masses; prices; causal evidence | allocated burden ledger | ilcd-general-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | Check species CAS, mixture composition, hard route/state restrictions, native property/unit group and exact localized display; match actual supply or receiver reference basis independently of UUID validity. No correction or nearby-species substitutes. Intended-use comments alone do not establish an exclusive manufacturing route or grade; enforce actual hard identity fields and measured supply compatibility. | cp_materials; cp_product; native identity chain |
| coverage | acid_manufacture | Reconcile all feed and outputs over same declared period, stage and abnormal operation; sampling plans represent all actual sources, not only regulatory pollutants. Unknown amounts are missing, never zero. | cp_emissions; jrc-cww-2016 |
| balance | acid_manufacture | Report physical mass/water/carbon/Rh/iodine residuals and instrument/lab uncertainty; investigate imbalance rather than inventing compensating elementary flows. | cp_water; cp_wastes; cp_product |
| supplier_link | steam; gas; all purchased exchanges | UUID identity alone does not approve provider, quantity, geography or burden compatibility. Demonstrate utility reference and matched net delivery; preserve concrete unresolved links until real supplier records are available. | cp_energy; supplier evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_acceptance | finished_acid | One final reference product output; 1 kg commercial net mass; actual assay >=99.8 wt%; all required qualifiers and route confirmed. | celanese-acetic-2021 |
| stream_fates | all inventory rows | Require actual occurrence/absence evidence, explicit flow direction, single exchange, collector, receiver/medium and per-1-kg basis. No duplicate wastewater transfer plus raw-water emission, internal recycle plus fresh input, or waste plus contained-metal emission. | jrc-cww-2016 |
| species_completeness | elementary outputs | Release inventory includes actual VOC species and carbon source, metals/iodide and disjoint PM; NOx basis/speciation verified, N2O separate, biogenic CO2 retained. Add actual missing species atomically; reporting aggregate TOC/COD/TSS checks are diagnostics, not extra organic-species mass. | jrc-cww-2016 |
| physical_and_burden_accounts | acid_manufacture | Physical outputs, stock changes, reaction/water/carbon/iodine/Rh balances and allocation burden ledger remain separately reviewable. Missing closure, utility/provider basis or unmeasured applicable exchanges prevent a complete production dataset, without fabricating PCR defaults. | jrc-cww-2016 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing; attributional inventory |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualifying route/SKU; transparent independent units or disclosed joint-operation allocation |
| excluded_use | All other acids/derivatives; aqueous lower grades; bio/fermentation or oxidation routes; claimed industry-average recipe; methodology approval from a checker result |
| required_metadata | Reference qualifiers; primary measurement periods; source and process drawing; native flow identities and compatible providers; physical balances; receiver routes; allocation and uncertainty |
| required_quality_disclosure | Measured scope, uncertainty, all missing quantities/UUIDs/provider bases, zero/non-use evidence and unreviewed scope |
| update_trigger | Changed route, catalyst, grade, source composition, utility basis, treatment, co-products or primary evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-lvoc-2017 | official_guidance | European Commission JRC, LVOC BREF (2017), section 2.1.2.3.1 route C (printed 20 / PDF58), section 2.2.10 (printed56 / PDF94). https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf; retrieved 2026-10-13 | Qualitative carbonylation/purification boundary; generic gas/catalyst fate. Route A/B emission lists are excluded. No temperatures, pressures, ratios or factors used as defaults. |
| celanese-acetic-2021 | handbook | Celanese, Glacial Acetic Acid Product Quality, Regulatory & Technical Information Package, status 11 October 2021, PDF1,4,9,10,18–20. https://www.celanese.com/-/media/cewebjssapp/project/documents/acetic-acid-product-dossier.pdf; retrieved 2026-10-13 | Primary technical product, rhodium methanol/CO manufacturing and distillation, bulk delivery, acid/water blending and distinct derivatives. Historical 99.85 wt% freezing-point sales specification example only, distinct from the PCR 99.8 wt% reference floor; actual SKU assay and current specification required, no universal recipe. |
| jrc-cww-2016 | official_guidance | European Commission JRC, CWW BREF (2016), BAT2–5 printed543–544 / PDF573–574; treatment definitions PDF586. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf; retrieved 2026-10-13 | Chemical-sector source/stream inventory, flow/species monitoring and treatment-fate collection. Method adapted to foreground LCI; no BAT-AEL or default efficiency represents actual emissions. |
| celanese-carbonylation-2020 | literature | Celanese International Corp, US10807935B2, Process for continuous acetic acid production, grant 20 October 2020; Background; Reaction medium; Flash vessel; Purification/guard beds; Figure1. https://patents.google.com/patent/US10807935B2/en; retrieved 2026-10-13 | Primary patented topology and conditional component/impurity/guard-bed candidates. Patent embodiments, settings, concentrations and examples are not generic prescriptions; actual plant recipe and all additional species require measurement. |
| ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March 2010, allocation discussion printed79–81 / PDF99–101. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; retrieved 2026-10-13 | Attributional subdivision/allocation, physical causality and economic relationships; gate-adjusted observed market values and allocation limitations. No recipe, price, allocation share or provider quantity supplied. |
