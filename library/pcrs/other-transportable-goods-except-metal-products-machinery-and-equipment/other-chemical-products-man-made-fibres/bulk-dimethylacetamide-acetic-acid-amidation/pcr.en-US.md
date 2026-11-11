---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.bulk-dimethylacetamide-acetic-acid-amidation
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bulk N,N-dimethylacetamide from acetic acid and dimethylamine


## 1. Scope and Applicability

This method covers whole unformulated industrial N,N-dimethylacetamide (DMAC), CAS 127-19-5, made from glacial acetic acid and anhydrous dimethylamine through dimethylammonium acetate formation, heat-driven water-forming dehydration, amine/acid recovery and fractional purification. The selected configuration retains the scrubber/condensers, pressure-controlled reactor and reactor column, acid-removal/recycle system, heels column and pan dryer described in Solutia WO2000073251A1, including actual iron conditioning and actual ceramic packing when used. It includes final tanks and bulk transfer. Heating is supplied as purchased steam and electricity; the water-cooled configuration includes its actual cooling loop and demand. No on-site combustion or off-gas incinerator is included in this bounded configuration. It is eligible only with genuine linked utility production and actual final-release interfaces; a plant that operates those additional operations needs their full inventories and a revised boundary before using this method.

Section5 preserves the complete applicability conditions. None of the sources establishes a particular present supplier footprint; source case quantities are not defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.bulk-dimethylacetamide-acetic-acid-amidation |
| classification_refs | CPC 3.0 35220; narrower product and route boundary |
| covered_products | Whole unformulated industrial DMAC from acid/anhydrous-DMA amidation |
| excluded_products | DMF, NMP, ester/anhydride/acetyl-chloride routes, formulated solvents and waste regeneration |
| representative_product | First-accepted bulk DMAC with actual contracted grade and analytical convention |
| production_route | Salt formation → dehydration → amine/acid recovery and fractionation → heels handling → acceptance and bulk transfer |
| market_state | Unformulated liquid retaining measured water/impurities; packaging excluded from net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Industrial DMAC solvent for a separately specified downstream application |
| How much | 1 kg net whole commodity at first acceptance |
| How well | Meet actual contracted assay/water/acidity/alkalinity/impurity methods; no equal solvent-performance assumption |
| How long or cycle | One manufacture and first-acceptance cycle; no downstream service-life claim |
| reference_flow_link | finished_dmac |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | N,N-Dimethylacetamide `5acd7c98-6445-4e38-8c65-10e8592dae7d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | DMAC identity and CAS127-19-5; unformulated whole liquid state; actual contracted grade and supplier; assay and water methods; acid and anhydrous-DMA feeds; salt dehydration and amine/acid recovery route; actual iron and packing; purchased utilities and complete producer burdens; first-acceptance gate and unique event; original cohort and stock genealogy; packaging exclusion and bulk transfer; actual final releases and whole-waste receivers; site and period |

Every qualifier must be declared in the actual data package; missing qualifiers leave its reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| whole_mass | finished_dmac | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure first-accepted whole-liquid net mass using calibrated scales/mass meters or traceable tank conversion; exclude tare and retain measured water/impurities; never reduce to pure-DMAC equivalent. |
| assay_convention | finished_dmac | Actual analytical basis | % | Apply the complete Section5 convention; GC-minus-water is a percentage-point subtraction only on the same basis with actual applicable methods; no additional dry-fraction multiplier or change of whole-liquid reference mass. |
| utility_basis | purchased_steam; condensate_return; electricity | Separate mass and energy ledgers | kg; kWh | Retain steam and returned-condensate mass and enthalpy; retain delivered kWh, converting once by1kWh=3.6MJ if needed. Steam enthalpy is not another imported heat flow. |
| gas_liquid_basis | dimethylamine; nitrogen; dmac_air; dma_air; acid_air; nma_air; water_air; nitrogen_air | Actual state and composition | kg | Volume-to-mass conversion requires measured temperature/pressure, wet/dry basis, composition and compatible density; do not add a whole mixture and its components as duplicate amounts. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of actual acid, anhydrous DMA and auxiliaries with complete upstream burdens |
| starting_condition_role | Physical foreground collection start, not a burden-free cutoff |
| product_classification_scope | CPC3.0 35220; narrower |
| recursive_input_rule | Purchased DMAC is a separate actual startup feed; returned/internal DMAC keeps original history and is not newly synthesized output |
| upstream_dataset_requirement | Compatible real material/utility/asset/treatment producers and measured demand; no duplicate embedded representation of the same background boundary |
| disclosure | Actual route, provider, grade, phase, stocks, complete final outlets and bounded scope |

This method covers whole unformulated industrial N,N-dimethylacetamide (DMAC), CAS 127-19-5, made from glacial acetic acid and anhydrous dimethylamine through dimethylammonium acetate formation, heat-driven water-forming dehydration, amine/acid recovery and fractional purification. The selected configuration retains the scrubber/condensers, pressure-controlled reactor and reactor column, acid-removal/recycle system, heels column and pan dryer described in Solutia WO2000073251A1, including actual iron conditioning and actual ceramic packing when used. It includes final tanks and bulk transfer. Heating is supplied as purchased steam and electricity; the water-cooled configuration includes its actual cooling loop and demand. No on-site combustion or off-gas incinerator is included in this bounded configuration. It is eligible only with genuine linked utility production and actual final-release interfaces; a plant that operates those additional operations needs their full inventories and a revised boundary before using this method.

The bound native Product is precisely N,N-Dimethylacetamide. Its full record has no CAS/formula, fixed assay, manufacturing-route or geography field; the precise compound name and liquid-solvent description agree with IARC identification, not with DMF or NMP. Preserve the native CPC 35499 countermetadata and the mistranslated Chinese aprotic-solvent comment without rewriting them. Applicability instead follows the verified chemical identity and the CPC 3.0 35220 acyclic-amide boundary, with actual supplier, grade, impurities, water, site and route admission. The whole commodity must be unformulated DMAC liquid; arbitrary mixed solvent, polymer solution or waste cannot inherit this UUID. Native identity supplies neither a quantity nor a qualified background provider.

The net principal acid route is CH3COOH + (CH3)2NH → CH3CON(CH3)2 + H2O. This is a reaction identity, not a default yield or per-kg recipe. Retain actual salt inventory, conversion, side products, feed water and independent total/C/H/N/O balances. Monomethylacetamide can concentrate in heels; actual iron and impurities require their own component ledgers. Reacting acid/DMA and generated water are not individually conserved species. No methanol-forming methyl-acetate route, acetic anhydride, acetyl chloride, DMF carbonylation, polymer formulation or waste-solvent regeneration is included. Source case temperatures, pressures, conversion improvements, ratios and purity claims are not default ranges or an environmental advantage.

Fix first acceptance after final refining and quality release as the reference event. Independently sum unique accepted whole-product net masses into Q, excluding all tare; lock each original cohort. Gross dispatch, return, rework, retest and repeated release never create another acceptance. Reconcile Q on its original acceptance basis against disjoint net externally retained delivery, all on-site accepted states, irreversible loss and other terminal disposition. Returned-inspection/rework stocks are actual states. If accepted water evaporates, retain the actual survivor and the lost accepted portion once; do not restore survivor mass and add loss again. Added water/contamination is a separate exchange, not accepted material. Old-cohort service uses its original Q0; zero or unknown Q leaves raw totals and an unresolved result.

Maintain complete raw-material, salt liquor, reactor, reflux, intermediate distillate, heels, pan-dryer, final-tank and returned-product physical stocks and internal transfers at each cut-off. Keep their own accumulated foreground/WIP burdens with lot genealogy; carry inherited amounts once into the released cohort and retain closing unaccepted WIP burdens with WIP. Actual provider aggregate demand and expanded/embedded inventories of the same upstream boundary are alternatives, never additive histories. Distinguish full physical receipt/export quantities from environmental-service/burden vectors. Every waste event retains the full actual contaminated receiver transfer, including substrate, liquor, solids and water once; nested composition is not another exported waste. Several cohorts may share one physical event, but their non-overlapping modeled treatment demands must sum to the actual provider demand. Allocation never turns a full shared export into a smaller physical export or charges the full event to every cohort.

Keep the complete steam/condensate mass and enthalpy interface and cooling-water make-up, return, blowdown, drift and evaporation ledger. State whether gas flow is actual/standard and wet/dry and preserve measured temperature, pressure, composition and conversion; no assumed density. Process heat from electricity or steam is not imported twice. External generation and treatment need compatible real producer datasets and measured service demand; missing providers/burdens are unresolved, not zero. Scope expansion is required for actual fuel combustion, oxidizers, additional reagents, disposable packaging or different feeds. For each newly included operation preserve all atomic species and whole physical waste/packaging interfaces; an isolated CO2 card cannot stand for a burner.

Declare actual contracted assay and impurity limits and complete analytical convention; no default grade, dose, energy or yield is imposed. Eastman T51093 is one commercial specification whose reported DMAC purity is percentage GC purity minus percentage water, with separate GC acidity/alkalinity/DMF and Karl-Fischer water tests. Percentage points on the same basis are not a second dry-fraction correction. This supplier convention is not automatically transferable to another assay. Retain batch calibration, raw chromatograms, water method/matrix applicability and release records. IARC workplace air sampling is not a stack emission-rate method; actual vent loads require matrix-compatible concentration and gas-flow measurements, recovery/condensation checks, variability, limits and final outlet identity. No workplace exposure number or source example becomes a plant emission factor.

This supplier QC/release index is not automatic evidence of a calibrated DMAC mass fraction. Equal percentage scales do not establish equal GC response or water/dry bases; demonstrate calibration and basis compatibility before using a reported percentage in component or elemental mass ledgers. The whole supplied reference mass remains unchanged.

`solutia-dmac-2000`; `eastman-dmac-t51093`; `iarc-dmac-2020`; `eu-cww-2016`; `un-cpc3-2025`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| acid_amidation | Acid/DMA salt dehydration and refining | required | Complete Section5 admission | foreground | finished_dmac |

### Process: Acid/DMA salt dehydration and refining (`acid_amidation`)

#### Inputs

##### Product flows

###### Glacial acetic acid (`acetic_acid`)

Record the actual whole delivered acid, assay, water and receipt/issue/stock masses; do not substitute pure-acid component kg for the whole purchased material. Recovered acid is an internal transfer with inherited history.

- Selected flow: Glacial acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `solutia-dmac-2000`

###### Anhydrous dimethylamine (`dimethylamine`)

The bounded feed is actual anhydrous DMA with measured impurities and gas/liquid delivery state. An aqueous DMA solution is a different whole input and needs a separate route and water-ledger review; a pure-DMA UUID cannot stand for that solution.

- Selected flow: Anhydrous dimethylamine
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `solutia-dmac-2000`

###### N,N-Dimethylacetamide (`startup_dmac`)

Only actual externally received unformulated DMAC startup charge; retain actual grade/provider and opening-tank history. Internal recirculation is not an external purchase or newly accepted product.

- Selected flow: N,N-Dimethylacetamide `5acd7c98-6445-4e38-8c65-10e8592dae7d`
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `solutia-dmac-2000`

###### N,N-Dimethylacetamide (`returned_dmac`)

Record an actual returned whole DMAC commodity and its original lot, impurity/water state and retained burden. It retains original acceptance identity. A diluted mixed waste solvent cannot use this product identity.

- Selected flow: N,N-Dimethylacetamide `5acd7c98-6445-4e38-8c65-10e8592dae7d`
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `solutia-dmac-2000`

###### Iron nails for reactor conditioning (`iron_nails`)

Include only when actually introduced through the nail pot described in the source. Measure the whole items, their composition, retained stock, dissolution and removal; no nail weight, iron dose or proven catalytic performance is prescribed.

- Selected flow: Iron nails for reactor conditioning
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `solutia-dmac-2000`

###### Ceramic distillation packing rings (`ceramic_rings`)

Record actual new packing receipts and complete unused/in-service fleet, dimensions and material. Only evidenced service burdens are attributed to cohorts; do not treat every batch as a new packing purchase.

- Selected flow: Ceramic distillation packing rings
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `solutia-dmac-2000`

###### Gaseous nitrogen for tank blanketing (`nitrogen`)

Conditional actual tank/instrument purge supply, not a stoichiometric reactant or a default flow. Preserve purity, pressure, measured mass or measured gas conversion and linked nitrogen production.

- Selected flow: Gaseous nitrogen for tank blanketing
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `solutia-dmac-2000`

###### Process water for equipment cleaning (`cleaning_water`)

Measure actual external cleaning-water supply separately from reaction water and internal condensate reuse. No fixed cleaning dose is assumed.

- Selected flow: Process water for equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `solutia-dmac-2000`

###### Cooling-loop make-up water (`cooling_makeup`)

Meter actual make-up and stocks in the water-cooled configuration. Recirculating cooling water is not purchased repeatedly; retain pump electricity, blowdown, drift and evaporation interfaces.

- Selected flow: Cooling-loop make-up water
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `solutia-dmac-2000`

###### Purchased process steam (`purchased_steam`)

Measure delivered whole steam mass, pressure, temperature, dryness and upstream producer demand. Its enthalpy difference is an energy ledger, not an additional imported heat flow; the real supplier must retain generation burdens.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `solutia-dmac-2000`

###### Delivered electricity for the DMAC plant (`electricity`)

Meter reactor auxiliaries, pumps, vacuum, refrigeration if present, fractionation, heels drying and loading. Preserve voltage/provider convention and avoid adding the same load to both a submeter and the site residual.

- Selected flow: Delivered electricity for the DMAC plant
- Flow property / unit: Energy / kWh
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `solutia-dmac-2000`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### N,N-Dimethylacetamide (`finished_dmac`)

The whole unformulated industrial liquid first accepted after final refining and grade checks, including measured water and impurities, excluding packaging. This card is 1 kg reference output; Q is an event account, not another physical output.

- Selected flow: N,N-Dimethylacetamide `5acd7c98-6445-4e38-8c65-10e8592dae7d`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `solutia-dmac-2000`; `eastman-dmac-t51093`; `iarc-dmac-2020`

###### Steam condensate returned to the utility supplier (`condensate_return`)

Retain actual condensate transfer mass, enthalpy and ownership. It is the return side of the steam interface, not a saleable co-function, automatic credit or duplicated process-water supply.

- Selected flow: Steam condensate returned to the utility supplier
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `solutia-dmac-2000`

##### Waste flows

###### Water-rich DMAC and amine distillate for treatment (`aqueous_distillate`)

One actual separated aqueous condensate containing reaction/feed water and measured DMAC/DMA/acid. Retain full wet transfer; its dissolved components are nested composition, not separately exported wastes.

- Selected flow: Water-rich DMAC and amine distillate for treatment
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-cww-2016`

###### N-methylacetamide-rich heels dryer residue (`nma_heels`)

Actual whole residue removed after the heels column/pan dryer, with residual DMAC, acid, water and iron recorded. Upstream liquid heels, dried residue and dryer emissions are distinct stage states, never three copies of one discarded mass.

- Selected flow: N-methylacetamide-rich heels dryer residue
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-cww-2016`

###### DMAC equipment-cleaning wastewater (`cleaning_wastewater`)

One actual cleaning effluent, separate from the distillate. Retain whole receiver transfer, composition, destination, treatment basis and cohort provenance; no zero wastewater assumption.

- Selected flow: DMAC equipment-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-cww-2016`

###### Discarded off-specification DMAC liquid (`offspec_dmac`)

Only the actual discarded fraction. Reworked material stays in WIP or its original accepted cohort and is not also waste or newly accepted production.

- Selected flow: Discarded off-specification DMAC liquid
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-cww-2016`

###### Spent ceramic packing with retained DMAC liquor (`spent_packing`)

Retain the full actual contaminated export, including ceramic, retained liquor and solids once. Nested dry ceramic/solvent/water measurements do not create separate exports or added treatment demand unless physically separated.

- Selected flow: Spent ceramic packing with retained DMAC liquor
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-cww-2016`

###### Removed reactor nails with retained DMAC liquor (`removed_nails`)

Conditional whole removed item transfer, with metal dissolution history and retained contamination. Dissolved iron remaining in liquor is not also a discarded nail; physical stock and service burden are separate.

- Selected flow: Removed reactor nails with retained DMAC liquor
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-cww-2016`

###### Cooling-loop blowdown water (`cooling_blowdown`)

Measure actual whole blowdown and receiver service separately from evaporated water and recirculation; no fixed cycles-of-concentration or treatment quantity.

- Selected flow: Cooling-loop blowdown water
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-cww-2016`

##### Elementary flows

###### N,N-dimethylacetamide to ambient air (`dmac_air`)

Actual final uncaptured DMAC from vents, loading, vacuum and dryer; recovery and abatement are measured before final release. Do not count the same DMAC in both a captured waste stream and air.

- Selected flow: N,N-dimethylacetamide to ambient air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-cww-2016`

###### Dimethylamine to ambient air (`dma_air`)

Measure actual remaining DMA after condenser/scrubber returns; returned DMA is not emitted or purchased twice.

- Selected flow: Dimethylamine to ambient air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-cww-2016`

###### Acetic acid to ambient air (`acid_air`)

Quantify actual final acid release separately from recovered acid and acid in wastewater; no generic VOC amount is substituted.

- Selected flow: Acetic acid to ambient air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-cww-2016`

###### N-methylacetamide to ambient air (`nma_air`)

Conditional actual species release, particularly at heels handling/drying; do not infer an emission factor from the presence of NMA in a residue.

- Selected flow: N-methylacetamide to ambient air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-cww-2016`

###### Water vapour to ambient air (`water_air`)

Separate actual cooling evaporation, dryer vapour and other final vapour from liquid water transfers; reconcile reaction water with actual extents, not an invented closure plug.

- Selected flow: Water vapour to ambient air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-cww-2016`

###### Nitrogen to ambient air (`nitrogen_air`)

Conditional actual vented nitrogen with measured gas conditions/composition; unchanged carrier nitrogen is not a reactant-consumption credit or duplicated whole-gas export.

- Selected flow: Nitrogen to ambient air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per 1 kg reference flow; retain the independent complete physical ledger and use the collection protocol below.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eu-cww-2016`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | all inventory rows | First subdivide separately measurable stages/shared facilities; attribute environmental service and burden only by evidenced relevant causality. Distillate and heels are not presumed saleable co-products or substitution credits; a real co-function needs separate evidence/review. Whole physical waste/assets stay unchanged; service vectors remain non-overlapping and use each original cohort Q. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | acid_amidation | finished_dmac | Unique first-acceptance ledger | event id; original cohort; lot genealogy; date; calibrated net whole-product mass; tare; assay/water; disjoint closing states; actual losses/dispositions | Weigh and bind first quality release independently from dispatch; deduplicate returns and rework | kg | Each batch, transfer and stock cutoff | Same cohort and complete period including startup/shutdown and old-cohort services | Complete selected plant stages and shared interfaces | per 1 kg reference flow | Calibration, signed raw records, method applicability, genealogy and provider/receiver evidence |
| cp_material | acid_amidation | acetic_acid; dimethylamine; startup_dmac; returned_dmac; cleaning_water | External whole-material receipt/use and physical stocks | whole-material receipt/issues; composition; water; lot; actual phase; original provider; full raw/WIP/FG tank opening/closing; reflux and returns; inherited own/provider boundaries | Use calibrated weighing, tank or flow records; preserve actual density conversions and avoid correcting already stock-adjusted consumption twice | kg | Each batch, transfer and stock cutoff | Same cohort and complete period including startup/shutdown and old-cohort services | Complete selected plant stages and shared interfaces | per 1 kg reference flow | Calibration, signed raw records, method applicability, genealogy and provider/receiver evidence |
| cp_utility | acid_amidation | nitrogen; cooling_makeup; purchased_steam; electricity; condensate_return | Metered complete utility interfaces | meter; service; unit; pressure/temperature; gas wet/dry actual/standard; composition; steam dryness/enthalpy; condensate; cooling stocks/purge/drift/evaporation; provider boundary | Submeter all included stages and shared services; reconcile full physical utilities and separate attributable producer demand | kg; kWh | Each batch, transfer and stock cutoff | Same cohort and complete period including startup/shutdown and old-cohort services | Complete selected plant stages and shared interfaces | per 1 kg reference flow | Calibration, signed raw records, method applicability, genealogy and provider/receiver evidence |
| cp_waste | acid_amidation | aqueous_distillate; nma_heels; cleaning_wastewater; offspec_dmac; spent_packing; removed_nails; cooling_blowdown | Whole actual waste transfer and distinct provider demand | physical event id; full wet transfer kg; nested substrate/liquor/solid/water; lot history; receiver; treatment technology; provider unit/demand; disjoint cohort assignments; actual remaining stocks | Weigh actual receiver exports, preserve nested components once and separately reconcile non-overlapping modeled treatment/service quantities | kg | Each batch, transfer and stock cutoff | Same cohort and complete period including startup/shutdown and old-cohort services | Complete selected plant stages and shared interfaces | per 1 kg reference flow | Calibration, signed raw records, method applicability, genealogy and provider/receiver evidence |
| cp_air | acid_amidation | dmac_air; dma_air; acid_air; nma_air; water_air; nitrogen_air | Final species emission and gas-state records | outlet; stage; species; concentration; gas volume; time; temperature/pressure; wet/dry basis; condensation/recovery; background/blank; method matrix and detection limit; variability | Use actual applicable outlet tests and measured flow/time; distinguish captured streams, vapor/liquid phases and internal returns; no workplace-to-stack conversion | kg | Each batch, transfer and stock cutoff | Same cohort and complete period including startup/shutdown and old-cohort services | Complete selected plant stages and shared interfaces | per 1 kg reference flow | Calibration, signed raw records, method applicability, genealogy and provider/receiver evidence |
| cp_assets | acid_amidation | iron_nails; ceramic_rings; spent_packing; removed_nails | Complete asset/material fleet and environmental service history | item/lot; whole mass; dimensions/material; new receipts; unused/in-service opening/closing; dissolution; physical removal/receiver; measured use; retained contamination; original cohort Q; provider/history boundary | Keep full physical fleet closure separate from environmental service vectors; actual contamination crosses with its whole waste once, no assumed lifetime or duplicate manufacturing | kg | Each batch, transfer and stock cutoff | Same cohort and complete period including startup/shutdown and old-cohort services | Complete selected plant stages and shared interfaces | per 1 kg reference flow | Calibration, signed raw records, method applicability, genealogy and provider/receiver evidence |
| cp_quality | acid_amidation | finished_dmac; acetic_acid; dimethylamine | Batch analytical identity and method basis | sample/lot; actual contracted grade; calibrated GC chromatograms; method-matched DMAC/DMA/acid/DMF assay; KF water; same-basis convention; calibration/blank/replicates; signed release | Apply the documented actual grade method and retain raw evidence; source supplier specification is not a measured composition or universal analytical convention | %; kg | Each batch, transfer and stock cutoff | Same cohort and complete period including startup/shutdown and old-cohort services | Complete selected plant stages and shared interfaces | per 1 kg reference flow | Calibration, signed raw records, method applicability, genealogy and provider/receiver evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_amounts | all inventory rows | Q = sum(m_first,e) over unique first-accepted whole-product events, Q>0. a_j = A_j,new / Q; A_j,new is the evidenced attributed exchange or separate environmental-service vector, never replacement of full physical records. Old-cohort a_j,old=A_j,old/Q0; without positive known Q retain raw totals only. | cp_acceptance; cp_material; cp_utility; cp_waste; cp_air; cp_assets | Amounts per reference flow and independent full physical ledger |  |
| acceptance_bridge | finished_dmac | Independently check Q = D_net + S_accepted + L + X using disjoint externally retained net delivery, every on-site accepted state, irreversible loss and other terminal dispositions on original acceptance basis. Gross loops do not increase Q; lost water is not restored to survivors and counted again. | cp_acceptance; event genealogy | Reconciliation residual, not Q definition |  |
| stocks_and_history | all inventory rows | For each stage reconcile opening physical stock + external receipts + actual formation = closing stock + external exports + actual consumption, cancelling paired internal transfers. Inherit own foreground WIP burdens once by genealogy; never add provider aggregate demand to its already expanded same-boundary inventory. | cp_material; cp_utility; cp_waste; cp_assets; lot histories | Physical residuals and distinct inherited vectors |  |
| reaction_and_water | all inventory rows | CH3COOH+(CH3)2NH→CH3CON(CH3)2+H2O identifies only the principal reaction; use actual extents and side reactions, no default conversion. Reconcile total mass, C/H/N/O, iron, liquid/vapour water and energy separately; reacting species are not individually conserved and no balancing plug is invented. | cp_material; cp_utility; cp_waste; cp_air; cp_quality | Separate material, elemental, water and energy residuals | `solutia-dmac-2000` |
| whole_waste_service | all inventory rows | Record each actual receiver whole wet waste event once, with substrate/liquor/solids/water as nested components. The sum of non-overlapping treatment-service demand by original cohort equals actual receiver/provider demand; allocation does not reduce actual exports or charge a full event to every cohort. | cp_waste; cp_assets; receiver demand; original Q | Whole physical transfers and separate cohort treatment vectors |  |
| asset_service | iron_nails; ceramic_rings; spent_packing; removed_nails | Full unused/in-service opening + new receipts = closing + actual removals + evidenced dissolution/consumption. Retain actual dimensions, material and history; assign environmental service by measured original-cohort use, without assumed lifetime, item mass or duplicate manufacturing demand. | cp_assets; cp_waste; material and provider histories | Complete physical fleet and separate environmental service |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Meet Section5 whole-product and actual material/provider/grade/phase/destination admission; absent core identity prevents use. | Complete native records, contracts, actual methods and receiver records |
| dq_methods | all inventory rows | Retain actual applicable methods, calibration, chromatograms, water and species/gas bases; source cases do not replace measurements. | Original methods, calibration, GC/KF records and detection limits |
| dq_history | all inventory rows | Keep complete raw/WIP/FG/asset/waste physical quantities separate from environmental vectors; inherit burdens once. | Cutoffs, genealogy, receiver and non-overlapping provider boundaries |
| dq_completeness | all inventory rows | Every actual conditional stream needs quantity or evidenced inapplicability; unknown/not-detected/unmeasured is not zero; missing provider/method is never silently skipped. | Complete process reconciliation, method coverage, unresolved issues and uncertainty |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_admission | all inventory rows | Check complete Section5 native identity, actual grade/route, whole feeds and boundary conditions; metadata35499 alone does not determine identity and DMF/NMP never substitute for DMAC. | `iarc-dmac-2020`; `un-cpc3-2025` |
| validate_accounting | all inventory rows | Check unique first-acceptance Q, all disjoint terminal states, old Q0, actual raw/WIP/FG/asset stocks, whole receiver waste transfers and non-overlapping treatment demand. |  |
| validate_chemistry | all inventory rows | Check the supported water-forming acid/DMA route, actual side reactions and separate total/element/water/energy ledgers; import no ester-route methanol and do not add reaction water as purchased water. | `solutia-dmac-2000` |
| validate_measurements | all inventory rows | Check actual GC/KF convention, actual/standard wet/dry gas bases and final-outlet sampling applicability; occupational concentration is not a factory emission rate or default factor. | `eastman-dmac-t51093`; `iarc-dmac-2020`; `eu-cww-2016` |

If core identity, an essential method, actual producer demand or non-overlapping material relationships remain unresolved, retain raw records and an unresolved conclusion; projection/finite measurement checks and this candidate methodology do not confer scientific approval.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | DMAC input with explicit compatible grade and application |
| allowed_use | This bounded industrial whole-liquid manufacture with actual upstream linkage |
| excluded_use | Pure-DMAC equivalent, DMF/NMP substitution, unknown route, generic solvent function or burden-free purchase cutoff |
| required_metadata | All Section3 qualifiers and complete Section5 conditions |
| required_quality_disclosure | Methods, providers, stock genealogy, quantities, unresolved issues, scope and scientific-review state |
| update_trigger | Change of product, feed, route, provider method, utilities, waste receiver or acceptance gate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| solutia-dmac-2000 | literature | Solutia Inc. WO2000073251A1, Process for manufacture of dimethyl acetamide, 7 December 2000; printed pp.1–5 and claims1–21; referenced drawings are absent from the retained ten-page PDF. https://patents.google.com/patent/WO2000073251A1/en | Acid/DMA salt dehydration and water, amine/acid recycles, vents, heels/pan drying and optional iron; historical process evidence, no present supplier implementation, recipe, case conversion, yield, safety comparison or energy default |
| eastman-dmac-t51093 | standard | Eastman, Dimethylacetamide sales specification T51093, effective27March2017, complete1page. https://www.eastman.com/supplemental/salespecs/71103648.pdf | Commercial whole-liquid identity and method-limited GC-minus-water/Karl-Fischer convention; supplier limits are not universal grade or measured plant composition |
| iarc-dmac-2020 | official_guidance | IARC Monographs123, Some nitrobenzenes and other industrial chemicals (2020), N,N-Dimethylacetamide, Exposure Data §§1.1,1.2.1,1.3–1.4. https://www.ncbi.nlm.nih.gov/sites/books/NBK561930/ | Independent CAS127-19-5/C4H9NO/liquid identity and acid/DMA industrial route; vent/effluent and analytical limitations only, no toxicology, exposure number or industrial emission-factor transfer |
| eu-cww-2016 | official_guidance | European Commission JRC, CWW BREF (2016), BAT2, printed543/PDF573. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Complete process, wastewater and waste-gas stream inventory and variability; no legal applicability, treatment efficiency or DMAC emission factor asserted |
| eu-pef-2021 | official_guidance | Commission Recommendation(EU)2021/2279 AnnexI§4.5, pp.63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General subdivision and justified multifunctionality hierarchy; no fixed shares, automatic credits or complete PEF compliance |
| un-cpc3-2025 | official_guidance | UNSD CPC3.0 Structure,30June2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 35220 acyclic-amide classification context only; no identity by code, accepted mapping or process prescription |
