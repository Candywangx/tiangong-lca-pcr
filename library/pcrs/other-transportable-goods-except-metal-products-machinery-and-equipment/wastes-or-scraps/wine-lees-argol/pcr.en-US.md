---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.wine-lees-argol
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wine lees; argol — unprocessed wet gross red-wine lees supply

## 1. Scope and Applicability

This method covers one narrower product within the retained wine-lees/argol identity: whole, wet, unblended gross fermentation lees from the first settling/racking of non-sparkling red wine made from fresh grapes, after the red ferment has been drained/pressed and before fining, filtration, wine recovery from the lees, distillation or tartrate extraction. The supplied material retains its actual entrained wine and suspended sediment. It is released as an industrial feedstock for an identified receiver, for example a distillery, at the producer supply gate. The function is provision of a qualified wet raw material, not production of alcohol, tartaric acid, potassium hydrogen tartrate, a food ingredient or a disposal service. The reference is net wet material mass excluding tanks and packaging.

The route is a transparent technical synthesis: the AWRI commercial winery survey documents initial racking of gross red ferment lees and distinct later reprocessing options; the LBNL guide distinguishes red pressing/fermentation, settled lees and fining/filtering residues; Bertolino documents industrial receipt of liquid and solid vinification lees and the later distillation/tartrate routes. These sources do not describe one common factory, SKU or order. Their numerical yields, fermentation conditions, composition and prices are not defaults. Australian survey practice, California-oriented guidance and an Italian receiver demonstrate the bounded route and use, while each dataset declares its own place, period and receiver. The collection-service page separately demonstrates tank/tanker handover; its wine-specific ABV/VA statement is not a universal lees specification.

Exclude fresh grapes, must, grape juice, finished wine, press-cake pomace of skins/seeds, pre-fermentation juice clarification sludge, fine maturation lees, mineral/protein fining sludge, filter-aid cake, centrifuge desludge, argol/crude crystalline wine tartar, purified tartaric acid or salts, dried lees and any distilled/extracted residue. No blending of different lees types or dilution is allowed to create qualification. Trace dissolved upstream oenological additives and native grape/yeast solids are declared within the whole wet feed, not purchased again. Evidence of mineral fining/filter media, recovered wine removal, extraction or other state change requires an explicit applicability decision; do not erase the operation or its flows to retain this scope. Product/co-product status requires the actual specification, accepted industrial use, transfer and applicable legal/disposal status; a name, free collection or price alone cannot establish either waste status or zero burden.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.wine-lees-argol |
| classification_refs | CPC 3.0:39170 Wine lees; argol; narrower method covers only the specified wet gross wine lees |
| covered_products | Whole wet unprocessed gross red-wine fermentation lees from first racking supplied as an accepted industrial raw material |
| excluded_products | Fine/fining/filter/centrifuge lees; pomace; must/wine; argol crystals; dry distilled or extracted lees; refined chemicals; mixed residues; material sent only for disposal |
| representative_product | Bulk pumpable wet gross red-wine lees with actual retained wine and declared sediment/assay |
| production_route | Fresh red grape wine upstream through fermentation pressing settling and first racking; upstream burden handed over once; dedicated collection containment measurement release storage and bulk handover |
| market_state | Wet suspended fermentation sediment with entrained wine; no recovered-wine depletion or chemical transformation; bulk tank supply |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of whole qualified wet first-rack gross red-wine lees as industrial raw material at the supply-quality gate, with actual bulk handover separately reconciled |
| How much | 1 kg net whole wet qualified lees |
| How well | Actual receiver specification, accepted industrial purpose and legal/transfer status; declare wet assay and untreated first-rack gross-red state, not a universal ethanol or tartrate concentration |
| How long or cycle | One whole lot first supply-quality release in complete H; retain subsequent FG storage/loading/return services without new Q |
| reference_flow_link | qualified_wet_lees |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wine lees, argol `cd8bff4a-187f-401f-ba5e-81a980235141` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole wet gross lees from red still fresh-grape wine; supplier winery and fresh grape origin; vintage and lot traceability; red fermentation and draining/pressing route; first settling/racking vessel and separation time; gross not fine lees and fermentation completion evidence or explicit uncertainty; no fining/filter-aid carryover confirmation and actual upstream additives; wet net mass and sampled moisture/dry matter method; residual wine and ethanol assay with mass/volume basis and temperature; solid origins and measured impurity/additive profile with unknowns; no distillation extraction crystallization drying or blending; identified industrial receiver and actual intended use; receiver lot acceptance criteria and rejection record; actual product/co-product or waste legal and disposal status; upstream common-process burden handover and allocation ownership; first-release gate Q and complete observation interval H; opening/closing WIP and FG with historical release flags and inherited vectors; actual storage time temperature containment and transport-ready bulk configuration; gross dispatch and paired returns separate from Q; site geography period and native flow/provider restrictions |

Declare every qualifier in the reference comment or dataset metadata. Missing actual assays, supplier/provider records and receiver limits remain explicit collection needs; do not substitute invented composition or defaults. The generic native family does not remove the narrower restrictions below.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_wet_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare 1 kg of whole net wet qualified lees. Q is the first overall supply-quality release in H, not sales, dry solids, pure tartrate or ethanol. Include qualified closing FG; exclude opening already released FG and repeat release. |
| `wet_composition` | wet lees and every liquid record | Mass | kg | Keep whole wet mass as the primary physical account. Determine moisture/dry matter and ethanol independently by representative sampling with the actual method, temperature and mass/volume basis; component accounts are non-additive bridges. Use an independently measured density for this substance and state for volume-to-mass conversion; never use water density for lees or infer density from a secondary property coefficient. |
| `raw_once` | all inventory rows | Actual exchange property | actual numerator unit | Collect only unnormalized raw numerators. Convert raw units and integrate true rates before attribution and allocation. An already integrated gas/liquid volume is not multiplied by time again. The calculation normalize_once alone divides the properly assembled numerator by Q. H is an observation interval, never a second denominator; Q=0 retains all actual burdens and physical flows without a unit result. |
| `energy_and_carrier` | electricity and any actual thermal carrier | Net calorific value | MJ | The bound electricity native reference property is Net calorific value and its reference unit is MJ; retain electrical identity and convert metered kWh using 3.6 MJ/kWh from its unit group. This is electrical energy, not net heat or a fuel. Any real steam/hot-water/heat input requires its own atomic card, supply/return mass, state, enthalpy and supplier energy convention; never create a boiler or fuel by assumption. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already separated whole wet gross red ferment lees at first-rack supplier handover; complete preceding grape/wine burden evidence linked once |
| starting_condition_role | Real wet industrial co-product handover, before dedicated collection/release; actual Waste-only material is outside Product qualification |
| product_classification_scope | Narrow wet first-rack gross-red method within CPC39170; no coverage of argol or other excluded lees states |
| recursive_input_rule | Record the whole received lees once with upstream vector; no recursive purchase of its water, wine, yeast or grapes. Same-category returns keep original lot/vector and original Q history; internal transfers cancel only with paired endpoints. |
| upstream_dataset_requirement | Require declared supplying wine route and true common-process inventory/allocated vector, plus actual utility, formulation, article and treatment providers. Flow UUID is identity only, not a ready supplier inventory. |
| disclosure | All section3 qualifiers, actual dedicated stages, prior separation, legal Product/Waste status, receiver use, Q/H, WIP/FG physical and vector stocks, return pairs, missing evidence and downstream exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | entire method | Use already separated wet first-rack gross red ferment lees as the foreground starting condition. Require the real upstream grape/wine route and one burden handover through the actual separation, including shared earlier operations and any exclusive lees collection performed by the supplier. Exclude wine-only operations after separation from the lees burden. Do not buy grapes or wine again or reconstruct cultivation/fermentation within the receiving process. | `awri-practices-2019`; `lbnl-best-winery-2005`; `ilcd-allocation-2010` |
| `boundary_native` | every consumer of wine lees identity | The generic native Product family Wine lees, argol is broader than this route. Its manufactured finished-product/production-mix-at-plant fields and wine-lees/argol comments establish a product family, not wetness, assay, receiver or process burden. Bind only the whole wet unprocessed first-rack gross red-wine sediment in scope, never argol crystals, pure acid/salt/ethanol, pomace, fine/fining/filter sludge or extracted residue. Carry these restrictions and actual supplier state on every input/output using the UUID, including internal release and returns. Product identity does not establish provider compatibility or waste status. | `awri-practices-2019`; `bertolino-raw-materials`; `lbnl-best-winery-2005` |
| `boundary_complete` | all actual operations in H | Include dedicated pumping, containment, representative sampling, necessary actual extraneous-object removal, storage, release, loading, cleaning, maintenance replacements, failed lots, leakage, start/stop, idle and rework. Selected route adds no wine recovery, distillation, acid extraction/crystallization, drying, neutralization or anaerobic wastewater digestion. If any occurs, retain its real inputs and outputs and flag the changed endpoint for scope review; an exclusion is not permission to delete actual activity. Add a specific atomic card and protocol for every actual unlisted fuel, cleaning formulation, aid, package, rejected object or species before claiming completeness. | `lbnl-best-winery-2005`; `awri-practices-2019`; `bertolino-raw-materials` |
| `boundary_ledgers` | production FG and combined physical gates | Keep grossV, inherited environmental vectors A, real joint-process shares and Q distinct. Physical grossV records every real crossing without economic, service or stock-attribution fractions. Production balances opening WIP plus real external feeds and physical additions against closing WIP, first-release transfer Q and all actual waste/emission/sample outputs, with independently evidenced reaction and water-state changes. The FG/service balance uses opening already released FG plus Q plus actual external returns against closing FG, gross dispatch, external returns-out and all service losses. Q is the same paired internal transfer and cancels in the combined gate; qualified closing FG already included in Q is not another production output. Retain physical and burden stocks separately by lot; stock attribution changes A, never physical quantities. | `ilcd-allocation-2010`; `lbnl-best-winery-2005` |
| `boundary_packaging` | bulk supply and any actual transferable package | Declared supply is bulk tank/tanker; a tanker or fixed storage vessel is transport/capital equipment, not packaging consumed per kg. Do not assume a 275-gallon container material from the collection-service page. If an actual transferable package is used, identify and inventory every component separately with opening empty plus attached WIP/FG plus reusable stock plus purchases plus external returns received equal to closing stock plus components leaving with gross physical shipments plus external returns sent plus waste. Paired internal reuse cancels; package mass is excluded from Q and does not become another purchase or automatic co-product. | `lees-removal-service`; `ilcd-allocation-2010` |
| `boundary_emissions` | wet chemistry and every fate | Keep water, ethanol, dry solids and any measured tartrate/yeast fractions as non-additive bridges to whole lees. Independently measure true reaction species, free/reaction/structural water and physical state. Never fit two unknown losses to one mass residual; do not assume ongoing fermentation, all ethanol evaporation, complete conversion or a fixed biogenic CO2 rate. COD/TOC/VOC/total nitrogen or dust indicators are not single molecules. Separate collected spills and washwater from actual environmental discharges; a treatment owner receives each waste once, and only actual releases under foreground control are elementary exchanges. | `lbnl-best-winery-2005`; `ilcd-allocation-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collection_release` | Dedicated wet lees collection and first release | required | Every in-scope wet gross-red lot | Receives separated whole lees and creates first supply-quality release Q | 1 kg reference flow |
| `fg_handover` | Released FG storage loading and returns | required | All actual post-release handling including qualified closing FG and historical opening/returned lots | Separate physical/service account with inherited vectors; no new production Q | 1 kg reference flow; separate historical-lot service account disclosed |

The cards below are one exchange each. Conditional does not mean a presumed quantity of zero; demonstrate absence or add every actual additional named flow. All descriptions are normative consumer restrictions. Opening/closing WIP and FG are stock records, not extra purchases/production. Collection stores raw numerators; the final basis labels reference normalize_once and do not divide at collection.

### Process: Dedicated collection and release (`collection_release`)

#### Inputs

##### Product flows

###### Separated gross wine lees received (`received_gross_lees`)

Weigh the whole supplied wet sediment once at the supplier separation handover, including its retained wine and solids. Dedicated collection begins here; the matching upstream vector ends here. This UUID is a broader manufactured Product family; this card is only whole wet, unblended, undistilled first-rack gross red-wine fermentation sediment with retained wine, without fining/filter-aid carryover, wine-recovery depletion, crystalline argol or refined acid/salt/ethanol. Declare actual winery, separation lot, assay, receiver and Product/legal status; no provider dataset is established by the flow identity.

- Selected flow: Wine lees, argol `cd8bff4a-187f-401f-ba5e-81a980235141`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lots`
- Sources: `awri-practices-2019`; `bertolino-raw-materials`; `lbnl-best-winery-2005`

###### Delivered electricity (`production_electricity`)

Measure the actual physical crossing and retain the phase and lot/service assignment; shared meters require a documented split without duplicate procurement. Conditional chemicals and replacements require actual work records, not a default dose. Only the native CN grid-average consumption mix delivered to user at <1 kV fits this UUID. Record actual site country, voltage, meter and supplier; use a separately verified atomic identity for a different country, voltage, production mix or transformation service. Reference Net calorific value/MJ represents delivered electrical energy; it is not net heat or combustion. Supplier dataset selection remains open.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Cleaning supply water (`production_water`)

Measure the actual physical crossing and retain the phase and lot/service assignment; shared meters require a documented split without duplicate procurement. Conditional chemicals and replacements require actual work records, not a default dose. Only treated piped potable supply water fits this native Product identity; not direct river/groundwater, recycled wash liquor or purchased steam. Use reference Mass/kg; the native secondary volume coefficient is not a density measurement. Retain the actual supply provider and treatment location rather than importing a former Hong Kong record or inferred water density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Purchased sodium hydroxide cleaning solution (`production_caustic`)

Measure the actual physical crossing and retain the phase and lot/service assignment; shared meters require a documented split without duplicate procurement. Conditional chemicals and replacements require actual work records, not a default dose. Conditional on actual use of this single purchased formulation. Record the entire delivered solution once at actual concentration and composition; active NaOH and carrier water are non-additive subaccounts. Distilled-water/pharmaceutical, fixed 30%/50%, or solid-grade native candidates do not establish this unspecified supplied solution. If actually mixed on site, replace this purchase by each real purchased constituent and mixing energy/loss; do not also buy the finished formulation.

- Selected flow: Sodium hydroxide aqueous cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Whole replacement transfer hose (`production_hose`)

Measure the actual physical crossing and retain the phase and lot/service assignment; shared meters require a documented split without duplicate procurement. Conditional chemicals and replacements require actual work records, not a default dose. This card is one actual whole vulcanized non-hard EPDM wine-transfer hose replaced within the declared service scope, not a collection of pipe types, unvulcanized tube, TPU hose or raw rubber. The native manufactured article family is broader than the specific hose; retain its measured whole-article mass, food-contact/ethanol compatibility, reinforcement/fittings, actual composition and supplier. Allocate its service life only with evidence and retain all real replacements; do not assume one hose per batch or purchase its compound ingredients again.

- Selected flow: Tubes, pipes and hoses of vulcanized rubber other than hard rubber `7ab7f1a9-1d4b-4bd1-83cb-a3096d984e3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

##### Elementary flows

###### Measured oxygen uptake (`production_oxygen`)

Include only when actual molecular uptake in this phase is established; unchanged ventilation gases pass through paired gas accounts and are not treated as consumed oxygen. Only actual molecular oxygen uptake from air, CAS 7782-44-7, under the native renewable element resource-from-air identity. This is consumed O2 supported by measured reaction/gas evidence, not total ventilation air, a cylinder supply or an automatic fermentation input. Do not infer uptake solely from COD or use an oxygen emission identity.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_production`
- Sources: `ilcd-allocation-2010`; `lbnl-best-winery-2005`

#### Outputs

##### Product flows

###### First overall qualified wet lees release (`qualified_wet_lees`)

This unique reference row is the paired transfer from WIP to FG at the declared industrial supply-quality release. Count each whole lot first release once, including qualified closing FG, with its measured net wet mass; not a second sale, shipment or component output. This UUID is a broader manufactured Product family; this card is only whole wet, unblended, undistilled first-rack gross red-wine fermentation sediment with retained wine, without fining/filter-aid carryover, wine-recovery depletion, crystalline argol or refined acid/salt/ethanol. Declare actual winery, separation lot, assay, receiver and Product/legal status; no provider dataset is established by the flow identity.

- Selected flow: Wine lees, argol `cd8bff4a-187f-401f-ba5e-81a980235141`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `bertolino-raw-materials`; `awri-practices-2019`; `ilcd-allocation-2010`

##### Waste flows

###### Discarded whole wet lees (`production_wastelees`)

Record actual physical wet/dry basis and complete destination evidence for this phase, including failed or zero-output periods; an unconfirmed treatment or UUID does not make the flow disappear. One measured wet untreated lees waste stream from failed/rejected lots, laboratory samples or collected spills, with each origin and treatment owner recorded separately. This is not qualified Product lees and not dregs with a fixed hazardous fraction, generic food debris, black liquor or distillation residue. Keep washwater separate; contamination changes require their own named atomic stream. Never assume a disposal treatment or zero upstream burden.

- Selected flow: Discarded untreated wet gross red-wine lees
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Cleaning effluent transferred to treatment (`production_wastewater`)

Record actual physical wet/dry basis and complete destination evidence for this phase, including failed or zero-output periods; an unconfirmed treatment or UUID does not make the flow disappear. One actual aqueous cleaning-effluent stream including measured entrained wine/lees and actual cleaner, transferred once to its responsible offsite or separately modelled treatment. Not manganese-slag/wafer wastewater, already secondary-treated effluent or an assumed direct-to-water release. Whole effluent mass is the primary account; COD/TOC and measured species are non-additive characterization bridges. Do not count it again as clean water, wine, ethanol and a full independent discharge.

- Selected flow: Wine-lees tank and hose cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Retired whole EPDM hose (`production_wastehose`)

Record actual physical wet/dry basis and complete destination evidence for this phase, including failed or zero-output periods; an unconfirmed treatment or UUID does not make the flow disappear. Conditional on actual retirement of the specific whole EPDM hose. Preserve reinforcement/fittings and adhered liquid separately from dry hose mass and choose actual treatment once. Tire-dominant waste-rubber candidates and a rubber-labelled candidate with a scrap-steel comment do not prove this contaminated hose endpoint. It is not plastic waste or virgin hose.

- Selected flow: Discarded vulcanized EPDM wine-transfer hose
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

##### Elementary flows

###### Actual ethanol to air (`production_ethanol`)

Conditional on a real measured or uniquely quantified emission in this phase; record species origin, sampling state and fate. Do not apply a default conversion to all lees or residual wine. Only actual ethanol mass emitted to air at the native unspecified-air environmental compartment, CAS 64-17-5; not whole evaporated wine, total VOC, 2-fluoroethanol, phenylethanol, a liquid product, indoor air, water or soil. Use species-resolved evidence, temperature and actual gas-volume/concentration basis; no assumption that all residual alcohol evaporates. Disclose unspecified-air resolution and rebind if a more specific actual compartment is required.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Actual biogenic carbon dioxide to air (`production_co2`)

Conditional on a real measured or uniquely quantified emission in this phase; record species origin, sampling state and fate. Do not apply a default conversion to all lees or residual wine. Only actual biogenic molecular CO2 emitted to unspecified air, CAS 124-38-9. Verify carbon origin and real continued reaction or degassing separately; no default fermentation completion, reaction extent or rate. This is not fossil combustion CO2, a delayed-emission correction, dissolved carbon inventory or stratospheric/long-term emission. No sequestration or avoided-burden credit follows from this flow.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Actual water vapour to air (`production_vapour`)

Conditional on a real measured or uniquely quantified emission in this phase; record species origin, sampling state and fate. Do not apply a default conversion to all lees or residual wine. Only actual H2O vapour emitted to native unspecified air, CAS 7732-18-5, using an independent moisture/gas measurement or a uniquely identified water balance. This is not liquid condensate, reaction water by assumption, plant evapotranspiration, a water-resource input or steam supplied as a Product. Do not derive both ethanol and water loss from one total residual; retain state and actual compartment resolution.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_production`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

### Process: FG storage and bulk handover (`fg_handover`)

#### Inputs

##### Product flows

###### Delivered electricity (`service_electricity`)

Measure the actual physical crossing and retain the phase and lot/service assignment; shared meters require a documented split without duplicate procurement. Conditional chemicals and replacements require actual work records, not a default dose. Only the native CN grid-average consumption mix delivered to user at <1 kV fits this UUID. Record actual site country, voltage, meter and supplier; use a separately verified atomic identity for a different country, voltage, production mix or transformation service. Reference Net calorific value/MJ represents delivered electrical energy; it is not net heat or combustion. Supplier dataset selection remains open.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Cleaning supply water (`service_water`)

Measure the actual physical crossing and retain the phase and lot/service assignment; shared meters require a documented split without duplicate procurement. Conditional chemicals and replacements require actual work records, not a default dose. Only treated piped potable supply water fits this native Product identity; not direct river/groundwater, recycled wash liquor or purchased steam. Use reference Mass/kg; the native secondary volume coefficient is not a density measurement. Retain the actual supply provider and treatment location rather than importing a former Hong Kong record or inferred water density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Purchased sodium hydroxide cleaning solution (`service_caustic`)

Measure the actual physical crossing and retain the phase and lot/service assignment; shared meters require a documented split without duplicate procurement. Conditional chemicals and replacements require actual work records, not a default dose. Conditional on actual use of this single purchased formulation. Record the entire delivered solution once at actual concentration and composition; active NaOH and carrier water are non-additive subaccounts. Distilled-water/pharmaceutical, fixed 30%/50%, or solid-grade native candidates do not establish this unspecified supplied solution. If actually mixed on site, replace this purchase by each real purchased constituent and mixing energy/loss; do not also buy the finished formulation.

- Selected flow: Sodium hydroxide aqueous cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Whole replacement transfer hose (`service_hose`)

Measure the actual physical crossing and retain the phase and lot/service assignment; shared meters require a documented split without duplicate procurement. Conditional chemicals and replacements require actual work records, not a default dose. This card is one actual whole vulcanized non-hard EPDM wine-transfer hose replaced within the declared service scope, not a collection of pipe types, unvulcanized tube, TPU hose or raw rubber. The native manufactured article family is broader than the specific hose; retain its measured whole-article mass, food-contact/ethanol compatibility, reinforcement/fittings, actual composition and supplier. Allocate its service life only with evidence and retain all real replacements; do not assume one hose per batch or purchase its compound ingredients again.

- Selected flow: Tubes, pipes and hoses of vulcanized rubber other than hard rubber `7ab7f1a9-1d4b-4bd1-83cb-a3096d984e3b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Released lees to FG service (`qualified_lees_transfer`)

Pair exactly with qualified_wet_lees; opening FG is a separate stock and is never new first-release Q. This UUID is a broader manufactured Product family; this card is only whole wet, unblended, undistilled first-rack gross red-wine fermentation sediment with retained wine, without fining/filter-aid carryover, wine-recovery depletion, crystalline argol or refined acid/salt/ethanol. Declare actual winery, separation lot, assay, receiver and Product/legal status; no provider dataset is established by the flow identity.

- Selected flow: Wine lees, argol `cd8bff4a-187f-401f-ba5e-81a980235141`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `bertolino-raw-materials`; `lees-removal-service`; `ilcd-allocation-2010`

###### Actual external qualified-lees returns (`external_lees_returns`)

Only a real identified return retaining this Product identity; restore original lot and burden history and reverse the matching original handover when appropriate. Contaminated or discarded returns use their actual Waste identity instead. This UUID is a broader manufactured Product family; this card is only whole wet, unblended, undistilled first-rack gross red-wine fermentation sediment with retained wine, without fining/filter-aid carryover, wine-recovery depletion, crystalline argol or refined acid/salt/ethanol. Declare actual winery, separation lot, assay, receiver and Product/legal status; no provider dataset is established by the flow identity.

- Selected flow: Wine lees, argol `cd8bff4a-187f-401f-ba5e-81a980235141`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `bertolino-raw-materials`; `lees-removal-service`; `ilcd-allocation-2010`

##### Elementary flows

###### Measured oxygen uptake (`service_oxygen`)

Include only when actual molecular uptake in this phase is established; unchanged ventilation gases pass through paired gas accounts and are not treated as consumed oxygen. Only actual molecular oxygen uptake from air, CAS 7782-44-7, under the native renewable element resource-from-air identity. This is consumed O2 supported by measured reaction/gas evidence, not total ventilation air, a cylinder supply or an automatic fermentation input. Do not infer uptake solely from COD or use an oxygen emission identity.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `ilcd-allocation-2010`; `lbnl-best-winery-2005`

#### Outputs

##### Product flows

###### Gross physical lees handover (`gross_lees_dispatch`)

Measure every actual net wet product quantity crossing into the receiver tanker/custody, including opening FG; preserve gross dispatch separately from returns and Q. This is the actual industrial feedstock delivery endpoint, not receiver distillation. This UUID is a broader manufactured Product family; this card is only whole wet, unblended, undistilled first-rack gross red-wine fermentation sediment with retained wine, without fining/filter-aid carryover, wine-recovery depletion, crystalline argol or refined acid/salt/ethanol. Declare actual winery, separation lot, assay, receiver and Product/legal status; no provider dataset is established by the flow identity.

- Selected flow: Wine lees, argol `cd8bff4a-187f-401f-ba5e-81a980235141`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `bertolino-raw-materials`; `lees-removal-service`; `ilcd-allocation-2010`

###### Actual Product lees returned out (`external_lees_return_out`)

Record only an actual separate outgoing return with matching lot, custody, reason and destination. It is not a negative purchase or extra Q; material losing Product status is recorded as its actual waste stream. This UUID is a broader manufactured Product family; this card is only whole wet, unblended, undistilled first-rack gross red-wine fermentation sediment with retained wine, without fining/filter-aid carryover, wine-recovery depletion, crystalline argol or refined acid/salt/ethanol. Declare actual winery, separation lot, assay, receiver and Product/legal status; no provider dataset is established by the flow identity.

- Selected flow: Wine lees, argol `cd8bff4a-187f-401f-ba5e-81a980235141`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fg`
- Sources: `bertolino-raw-materials`; `lees-removal-service`; `ilcd-allocation-2010`

##### Waste flows

###### Discarded whole wet lees (`service_wastelees`)

Record actual physical wet/dry basis and complete destination evidence for this phase, including failed or zero-output periods; an unconfirmed treatment or UUID does not make the flow disappear. One measured wet untreated lees waste stream from failed/rejected lots, laboratory samples or collected spills, with each origin and treatment owner recorded separately. This is not qualified Product lees and not dregs with a fixed hazardous fraction, generic food debris, black liquor or distillation residue. Keep washwater separate; contamination changes require their own named atomic stream. Never assume a disposal treatment or zero upstream burden.

- Selected flow: Discarded untreated wet gross red-wine lees
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Cleaning effluent transferred to treatment (`service_wastewater`)

Record actual physical wet/dry basis and complete destination evidence for this phase, including failed or zero-output periods; an unconfirmed treatment or UUID does not make the flow disappear. One actual aqueous cleaning-effluent stream including measured entrained wine/lees and actual cleaner, transferred once to its responsible offsite or separately modelled treatment. Not manganese-slag/wafer wastewater, already secondary-treated effluent or an assumed direct-to-water release. Whole effluent mass is the primary account; COD/TOC and measured species are non-additive characterization bridges. Do not count it again as clean water, wine, ethanol and a full independent discharge.

- Selected flow: Wine-lees tank and hose cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Retired whole EPDM hose (`service_wastehose`)

Record actual physical wet/dry basis and complete destination evidence for this phase, including failed or zero-output periods; an unconfirmed treatment or UUID does not make the flow disappear. Conditional on actual retirement of the specific whole EPDM hose. Preserve reinforcement/fittings and adhered liquid separately from dry hose mass and choose actual treatment once. Tire-dominant waste-rubber candidates and a rubber-labelled candidate with a scrap-steel comment do not prove this contaminated hose endpoint. It is not plastic waste or virgin hose.

- Selected flow: Discarded vulcanized EPDM wine-transfer hose
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

##### Elementary flows

###### Actual ethanol to air (`service_ethanol`)

Conditional on a real measured or uniquely quantified emission in this phase; record species origin, sampling state and fate. Do not apply a default conversion to all lees or residual wine. Only actual ethanol mass emitted to air at the native unspecified-air environmental compartment, CAS 64-17-5; not whole evaporated wine, total VOC, 2-fluoroethanol, phenylethanol, a liquid product, indoor air, water or soil. Use species-resolved evidence, temperature and actual gas-volume/concentration basis; no assumption that all residual alcohol evaporates. Disclose unspecified-air resolution and rebind if a more specific actual compartment is required.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Actual biogenic carbon dioxide to air (`service_co2`)

Conditional on a real measured or uniquely quantified emission in this phase; record species origin, sampling state and fate. Do not apply a default conversion to all lees or residual wine. Only actual biogenic molecular CO2 emitted to unspecified air, CAS 124-38-9. Verify carbon origin and real continued reaction or degassing separately; no default fermentation completion, reaction extent or rate. This is not fossil combustion CO2, a delayed-emission correction, dissolved carbon inventory or stratospheric/long-term emission. No sequestration or avoided-burden credit follows from this flow.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

###### Actual water vapour to air (`service_vapour`)

Conditional on a real measured or uniquely quantified emission in this phase; record species origin, sampling state and fate. Do not apply a default conversion to all lees or residual wine. Only actual H2O vapour emitted to native unspecified air, CAS 7732-18-5, using an independent moisture/gas measurement or a uniquely identified water balance. This is not liquid condensate, reaction water by assumption, plant evapotranspiration, a water-resource input or steam supplied as a Product. Do not derive both ethanol and water loss from one total residual; retain state and actual compartment resolution.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the measured unnormalized numerator for this row and phase; reference the same single per-reference calculation in section8 after real unit conversion and attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `lbnl-best-winery-2005`; `ilcd-allocation-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_scope` | attributional system | Apply the ILCD attributional multifunctional-process procedure within the declared goal; it is not unrestricted choice between physical/economic allocation or substitution. First separate dedicated lees and wine-only steps and attempt real or virtual subdivision. Assign dedicated lees collection/release/handling directly to lees; wine-exclusive finishing after the real separation remains with wine. Record a quantitative reason when a theoretically possible subdivision cannot be obtained. | `ilcd-allocation-2010` |
| `allocation_causality` | genuine residual shared grape/wine operations | For each still-shared exchange identify and quantify the determining physical causal relationship to the actual co-functions at the real separation, including its operating constraint. Physical embodiment and service occupancy may differ by exchange; a mass, dry-matter, ethanol, energy or wine-volume ratio alone is not proof of causality. Share only the environmental numerator of the genuinely common operations and reconcile all co-function shares to the unsplit inventory. Never scale the physical wet lees, wine, waste or emission amounts to make the balance close. | `ilcd-allocation-2010` |
| `allocation_residual` | only exchanges lacking determining physical causality | Justify why no determining physical causal relationship remains before applying the general market-value criterion to the residual common process. Use actual contemporaneous amounts and market values of the actual co-functions at the same separation gate in their real wet, bulk, unrefined condition; remove later wine finishing, storage, transport and purification value. A price of refined tartaric acid, ethanol or packaged wine cannot stand in for wet lees. Document zero/negative/missing prices, actual waste/disposal service status, missing data and sensitivity instead of inventing a ratio or treating free collection as automatic zero burden. | `ilcd-allocation-2010`; `lees-removal-service`; `bertolino-raw-materials` |
| `allocation_handover` | supplier receiver and returned lots | Accept the supplier-allocated upstream vector once only when its boundary, lot, co-functions, physical amounts, exclusive operations and method are documented. Do not allocate that upstream vector again at the receiver or treat a carbon footprint as a full inventory. If the supplying record is unallocated, obtain its common inventory and make one transparent allocation under the preceding hierarchy. Keep inherited opening WIP/FG vectors attached to their lots; a returned/retested lot is not new production. Carry original delivery burden once, reverse the real paired delivery where relevant and add only real incremental return/rework service F. X can remove only a proven same-side duplicate in OTHER; new water/material/energy is never a deduction. | `ilcd-allocation-2010` |
| `allocation_no_credit` | all product and waste fates | Keep real product/co-product status separate from disposal Waste status, receiver treatment services and native Product identity. Neither the CPC waste heading nor a positive price decides the LCA allocation. Assign treatment and dedicated handover once to the responsible owner. Grant no default recycling, alcohol, acid, fuel or displaced-product credit; downstream manufacture is outside this wet-feedstock method. | `ilcd-allocation-2010`; `bertolino-raw-materials` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols retain raw observations only, including complete zero-output and adjacent stock history. The aggregation_rule is a final target-scope label pointing to normalize_once, not an instruction to pre-divide the collected values. Actual unit conversion, inheritance and allocation occur in the calculation layer.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lots` | collection_release | whole wet feed and WIP | raw_record | lot; winery; grape origin; red route; separation vessel; time; first-rack proof; gross/fine status; actual fining/filter aids; wet mass; tare; opening WIP; closing WIP; inherited vector; transfer pair | Use calibrated net weighing and reconciled supplier separation records. Sample the actual mixed-within-lot sediment representatively; do not blend lots to meet specifications. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_release` | collection_release | first overall qualified wet lot release | raw_record | lot; net wet mass; first-release date; acceptance tests; receiver; intended use; legal status; release flag history; failed lots; rework; repeat test; qualified closing FG; Q | Weigh or use traceable calibrated tank/load-cell mass for each completed qualifying lot at the stated supply-quality gate; retain acceptance decision and exclude packaging. Compute Q only in first_release_q. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_fg` | fg_handover | FG gross dispatch returns and service | raw_record | lot; opening FG; closing FG; original Q flag; internal transfer pair; gross tanker handover mass; external return in; external return out; original delivery reverse; inherited vector; storage duration; loading losses; service F; duplicate proof X | Match net wet weighbridge or calibrated transfer/tank records and custody receipts. Trace history of each lot and its vector through every return and retest without creating new production. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_assay_production` | collection_release | composition and state bridges | raw_record | lot; sampled time; temperature; moisture; dry matter method; residual wine determination; ethanol; ethanol mass/volume basis; actual solids origin; impurity; additives; sample preservation; independent density; uncertainty; unmeasured fractions | Use representative documented sampling and laboratory methods suited to volatile wet lees; distinguish drying volatile losses from water. Retain raw units, analytical recovery and uncertainty; unknown is not zero. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_assay_service` | fg_handover | composition and state bridges | raw_record | lot; sampled time; temperature; moisture; dry matter method; residual wine determination; ethanol; ethanol mass/volume basis; actual solids origin; impurity; additives; sample preservation; independent density; uncertainty; unmeasured fractions | Use representative documented sampling and laboratory methods suited to volatile wet lees; distinguish drying volatile losses from water. Retain raw units, analytical recovery and uncertainty; unknown is not zero. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_utilities_production` | collection_release | each electricity water or actual separate carrier | raw_record | row_id; phase; meter before; meter after; time; raw unit; true rate or integrated amount; voltage; geography; supply identity; provider; water temperature; independently measured density; startstop; idle; cleanup; shared-meter allocation; no-duplicate procurement | Collect raw meter intervals and invoices; submeter phase/services or justify a causal split. Electricity retains kWh and exact 3.6 conversion to MJ; liquid volumes need their own density. Add each actual fuel/thermal carrier and return as a separate card with native state and energy convention. | original meter unit | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_utilities_service` | fg_handover | each electricity water or actual separate carrier | raw_record | row_id; phase; meter before; meter after; time; raw unit; true rate or integrated amount; voltage; geography; supply identity; provider; water temperature; independently measured density; startstop; idle; cleanup; shared-meter allocation; no-duplicate procurement | Collect raw meter intervals and invoices; submeter phase/services or justify a causal split. Electricity retains kWh and exact 3.6 conversion to MJ; liquid volumes need their own density. Add each actual fuel/thermal carrier and return as a separate card with native state and energy convention. | original meter unit | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_consumables_production` | collection_release | each supplied formulation and whole replacement article | raw_record | row_id; supplied formulation; concentration; full composition; purchased mass; opening stock; closing stock; batch issue; carrier water subaccount; actual mixing route; hose whole mass; polymer; vulcanized status; reinforcement; supplier; replacement; life allocation; waste owner; adhered lees | Use weighed issues and actual supplier formulation/article specifications. Count whole purchased formulations/articles once. For site mixing record each purchased raw constituent plus actual energy and losses instead of duplicating the premix; retain actual replacement/waste history. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_consumables_service` | fg_handover | each supplied formulation and whole replacement article | raw_record | row_id; supplied formulation; concentration; full composition; purchased mass; opening stock; closing stock; batch issue; carrier water subaccount; actual mixing route; hose whole mass; polymer; vulcanized status; reinforcement; supplier; replacement; life allocation; waste owner; adhered lees | Use weighed issues and actual supplier formulation/article specifications. Count whole purchased formulations/articles once. For site mixing record each purchased raw constituent plus actual energy and losses instead of duplicating the premix; retain actual replacement/waste history. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_waste_production` | collection_release | each wet lees waste and cleaning effluent | raw_record | row_id; origin lot; phase; failed batch; spill; sample; wet mass; dry mass if measured; liquid volume; independent density; actual constituents; COD/TOC indicators; fate; custody; treatment owner; transfer receipt; direct discharge evidence; uncertainty | Weigh each actual separate waste and reconcile to a single treatment owner/receipt; sample aqueous stream and preserve indicators as non-additive. Collected spills are not direct soil/water emissions; actual direct discharge requires species/medium cards and its own evidence. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_waste_service` | fg_handover | each wet lees waste and cleaning effluent | raw_record | row_id; origin lot; phase; failed batch; spill; sample; wet mass; dry mass if measured; liquid volume; independent density; actual constituents; COD/TOC indicators; fate; custody; treatment owner; transfer receipt; direct discharge evidence; uncertainty | Weigh each actual separate waste and reconcile to a single treatment owner/receipt; sample aqueous stream and preserve indicators as non-additive. Collected spills are not direct soil/water emissions; actual direct discharge requires species/medium cards and its own evidence. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_species_production` | collection_release | each real gas species and oxygen uptake | raw_record | row_id; phase; species; CAS; biogenic/fossil origin; physical state; sampling point; air/water/soil fate; concentration; actual integrated volume; true volumetric rate; time only for rate; temperature; pressure; humidity; independent species density; blanks; uptake; reaction evidence; uncertainty | Use species-resolved measurement or an independently constrained stoichiometric balance with real reaction evidence. Integrate only actual rates; use measured state-specific gas conversion. Never infer ethanol and water from one residual or turn COD/VOC into molecules. Keep unknowns open. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_species_service` | fg_handover | each real gas species and oxygen uptake | raw_record | row_id; phase; species; CAS; biogenic/fossil origin; physical state; sampling point; air/water/soil fate; concentration; actual integrated volume; true volumetric rate; time only for rate; temperature; pressure; humidity; independent species density; blanks; uptake; reaction evidence; uncertainty | Use species-resolved measurement or an independently constrained stoichiometric balance with real reaction evidence. Integrate only actual rates; use measured state-specific gas conversion. Never infer ethanol and water from one residual or turn COD/VOC into molecules. Keep unknowns open. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_allocation_production` | collection_release | inherited vectors and true common process | raw_record | lot; supplier inventory boundary; unique burden handover; common stage; exclusive lees step; wine-only step; co-functions; unsplit inventory; subdivision feasibility; exchange-specific causal test; remaining market value; separation gate; wet state; contemporaneous date; quantities; currency; price adjustments; sensitivity; vector rollforward; F; OTHER; same-side X proof | Acquire complete upstream inventory evidence and actual responsibility agreement. Separate real/virtual subdivision, causal allocation and only residual market value. Reconcile all shares and stock vectors without physical scaling or second supplier allocation. | original exchange unit | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_allocation_service` | fg_handover | inherited vectors and true common process | raw_record | lot; supplier inventory boundary; unique burden handover; common stage; exclusive lees step; wine-only step; co-functions; unsplit inventory; subdivision feasibility; exchange-specific causal test; remaining market value; separation gate; wet state; contemporaneous date; quantities; currency; price adjustments; sensitivity; vector rollforward; F; OTHER; same-side X proof | Acquire complete upstream inventory evidence and actual responsibility agreement. Separate real/virtual subdivision, causal allocation and only residual market value. Reconcile all shares and stock vectors without physical scaling or second supplier allocation. | original exchange unit | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_packaging_production` | collection_release | each actual transferable packaging component | raw_record | component; material; whole supplied article; measured mass; opening empty; attached WIP; attached FG; reusable opening; purchases; external return received; closing; gross shipment attached; external return sent; waste; paired internal reuse | Verify the actual bulk configuration; no transferable package is assumed. If present, add each component as a specific atomic row, measure it and reconcile the complete component ledger. Transport/capital vessels remain equipment services. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |
| `cp_packaging_service` | fg_handover | each actual transferable packaging component | raw_record | component; material; whole supplied article; measured mass; opening empty; attached WIP; attached FG; reusable opening; purchases; external return received; closing; gross shipment attached; external return sent; waste; paired internal reuse | Verify the actual bulk configuration; no transferable package is assumed. If present, add each component as a specific atomic row, measure it and reconcile the complete component ledger. Transport/capital vessels remain equipment services. | kg | each lot/event and meter interval | complete H plus adjacent stock/release history including zero output | actual supplier separation and dedicated collection/release/FG service gates | per 1 kg reference flow | Original receipts and logs; calibration; representative sampling; paired custody; independent balance; uncertainty and explicit unresolved needs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `first_release_q` | sole production release gate | Q = sum of newly first-released whole net wet lot masses in H; count each lot once from historical flags, include qualified closing FG and exclude opening already released FG, packaging and retests. | cp_release; cp_lots; cp_fg | Q | `bertolino-raw-materials`; `awri-practices-2019`; `ilcd-allocation-2010` |
| `physical_gate_balance` | manufacture FG and combined gate | Reconcile each whole-stream grossV at its actual physical gate: opening stock + actual inputs + actual external returns = closing stock + actual outputs + actual external returns-out, with independently evidenced reaction and water-state terms. Production includes Q as output; FG includes the same paired Q as input; cancel Q only in the combined gate. Keep each unqualified loss and all zero-output activity. Never multiply physical amounts by allocation or burden-stock shares. | cp_lots; cp_release; cp_fg; cp_utilities_production; cp_utilities_service; cp_consumables_production; cp_consumables_service; cp_waste_production; cp_waste_service; cp_species_production; cp_species_service | grossV | `ilcd-allocation-2010`; `lbnl-best-winery-2005` |
| `burden_rollforward` | each lot and environmental exchange j | Roll A separately from physical stock: inherited opening-WIP vector + actual incoming supplier vector + real new dedicated burden + correctly allocated true common burden = vector assigned to first-release lots + closing-WIP vector + explicitly attributed failed/other-lot vectors. Failure, spoilage, trial, start/stop, idle, cleaning and rework burdens attributable to this product cohort remain in its A even when their physical material is rejected; a quality gate cannot remove these burdens. Defer only demonstrably held future-WIP or genuinely other-product vectors with a named owner and reconciliation. Keep each opening/closing FG vector and actual service incremental F separately; original released burden is not produced again. Only a documented same-side repeated entry in OTHER may be X; apply X once and never deduct new repair inputs. Reconcile the unsplit inventory and all co-functions before normalization. | cp_allocation_production; cp_allocation_service; cp_lots; cp_release; cp_fg; cp_utilities_production; cp_utilities_service; cp_consumables_production; cp_consumables_service | A_j | `ilcd-allocation-2010` |
| `composition_bridge` | each wet material and true species | Use measured whole-stream wet mass and independent representative assays to report dry matter, moisture, residual wine, ethanol and measured solids on explicit non-additive bases. Convert a raw liquid volume only using its independently measured density at the actual state, or a species gas volume using matched species concentration and independently documented state conversion. Already integrated volumes are not multiplied by H. Actual reaction species and water forms require independent constraints; preserve unresolved fractions. | cp_assay_production; cp_assay_service; cp_lots; cp_species_production; cp_species_service; cp_waste_production; cp_waste_service | non_additive_bridge | `lbnl-best-winery-2005`; `ilcd-allocation-2010` |
| `normalize_once` | all inventory rows | result_j = numerator_j / Q; execute once only after raw-unit conversion, real attribution and necessary common-process allocation. numerator_j is tagged grossV_j physical or A_j environmental and these are non-additive ledgers. H is not divided again; cards and aggregation labels only reference this same result. For Q=0 retain all raw flows, stock vectors and burdens with declared later inheritance and issue no per-unit result. Report first-release product vectors and subsequent FG/service vectors separately by actual lot. Append real post-release service only once to the matching transferred product vector if a delivered inventory is reported, without dividing an already normalized vector again. Opening/returned lots keep their original Q history and own raw service account; do not assign them to new Q. The complete H physical grossV gate remains unscaled and separately reconciled regardless of the environmental cohort attribution. | cp_release; cp_allocation_production; cp_allocation_service; cp_lots; cp_fg; cp_utilities_production; cp_utilities_service; cp_consumables_production; cp_consumables_service; cp_waste_production; cp_waste_service; cp_species_production; cp_species_service | result_j | `ilcd-allocation-2010` |
| `package_balance` | each actual packaging component | For each component reconcile opening empty + opening attached WIP/FG + opening reusable + actual purchases + actual external returns received = closing component stock + attached to gross physical shipment + actual external returns sent + waste. Paired internal reuse cancels; no division is performed here, and packaging never contributes to Q or automatic co-product output. | cp_packaging_production; cp_packaging_service; cp_fg; cp_lots | component_balance | `lees-removal-service`; `ilcd-allocation-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | every lot and native consumer | Retain first-rack gross-red origin, complete wet-state restrictions, assays and industrial receiver acceptance. Every bound identity must match native type, all names/comments, CAS, route, state, geography, medium and complete reference-property/unit chain; its supplier dataset is a separate suitability decision. Unconfirmed auxiliary identities remain concrete and disclosed, never replaced by incompatible neighbors. | Supplier separation logs; full specifications and native objects; exact property/unit objects; acceptance and laboratory records |
| `dq_completeness` | H and adjacent stock history | Retain all failed, zero-output, start/stop, idle, trial, cleanup, repair and rework activity, opening/closing WIP and FG, grossV and per-flow A vectors; measure each additional actual exchange atomically. Unknown and unmeasured are explicit, not zero or pass. | Inventory reconciliation; meter logs; lot history; return pairs; maintenance and failure records |
| `dq_quantity` | all reported results | Collection remains raw and unnormalized, including original units/rates and calibration uncertainty. Use the sole calculation-stage normalization, maintain independent mass/element/species/water checks and non-additive composition bridges, and disclose Q=0 without a per-unit number. | Raw records; calibration; representative sampling; independent balances; calculation provenance |
| `dq_representativeness` | sources and background links | Disclose actual country, winery, period, technology, receiver and native restrictions. Survey prevalence, illustrative reactions and benchmark figures are not factory measurements or defaults. Report primary-data share, missing suppliers/assays, uncertainty and allocation sensitivity separately from a true identity or methodology hold. | Source context; site records; provider rationale; sensitivity ledger and explicit gaps |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_endpoint` | reference and every lot | Verify whole wet first-rack gross red-wine lees, no excluded route/state, actual industrial use and receiver criteria; measured net wet mass is distinct from dry matter, ethanol and argol. Source pages establish a bounded method, not a proven contemporary factory lot. A batch without core identity/endpoint evidence cannot be declared applicable. | `awri-practices-2019`; `bertolino-raw-materials`; `lbnl-best-winery-2005` |
| `validation_q` | first release and FG service | Use one unique Product reference row qualified_wet_lees at 1 kg wet basis. Verify Q once per whole lot with historical flags and qualified closing FG included; opening FG, repeated tests, deliveries, returns, internal transfers and component assays do not create Q. Keep full loading/storage/handling services with inherited vectors; paired Q cancels only in the combined physical gate. | `ilcd-allocation-2010`; `bertolino-raw-materials` |
| `validation_quantity` | all physical burden and component accounts | Reconcile manufacturing, FG and combined mass gates without allocation fractions on physical flows. Independently constrain water/ethanol/solids and real reactions/elements; no two unknowns fitted to one residual, indicators as molecules or duplicated whole-plus-component exchanges. Each packaging component has its complete gross-shipment stock balance. Unknown/failed/zero-output flows remain visible. | `ilcd-allocation-2010`; `lbnl-best-winery-2005`; `lees-removal-service` |
| `validation_normalization` | every card protocol and calculation | Verify raw numerator collection, actual unit/state/rate conversion and upstream attribution before the sole normalize_once division. H is not a second divisor; Q=0 emits no unit result. Confirm source_ids, all qualifiers, description restrictions and non-additive ledgers survive the complete typed projection; no skipped relationship may be called a pass. | `ilcd-allocation-2010` |
| `validation_native` | each UUID and separate provider | Check actual search membership and full native identity before dataset use, including its type, all names/comments/CAS, full state/route/geography/medium and exact reference property and unit group. Apply the bounded CN <1kV electricity restriction, treated tap-water identity, specific vulcanized whole-hose role and actual air species/compartment. Reject native chemical/state/route conflicts even if a name matches; blank auxiliary UUIDs remain disclosed. | `ilcd-allocation-2010`; `lbnl-best-winery-2005` |
| `validation_allocation` | upstream shared stage and every service | Verify real/virtual subdivision first, exchange-specific determining physical causality next and only justified residual same-gate same-state contemporaneous market value. Reconcile common shares to unsplit inventory; accept supplier vectors once. Preserve original returned-lot burdens, actual original-delivery reverse, real incremental F and only proven same-side duplicate X in OTHER. No default zero burden, ratio, credit or disposal technology. | `ilcd-allocation-2010`; `bertolino-raw-materials`; `lees-removal-service` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Qualified wet industrial wine-lees feedstock supply with upstream vector linked once; dedicated gate-to-gate foreground plus separately disclosed FG/service account |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared unprocessed gross red-wine lees raw material at the identified supply gate for a receiver meeting its actual criteria; actual downstream manufacturing model links this wet feed once |
| excluded_use | Whole CPC39170 coverage claim; fine/filter/fining/sludge/argol/dry/extracted endpoints; pure ethanol/acid/salt equivalent; zero-burden waste by name; undocumented industrial acceptance; generic disposal/recycling/credit model |
| required_metadata | Every section3 qualifier; source lineage; phase boundary; Q/H; physical and vector stocks; product/waste decisions; receiver use; exact native restrictions; allocation ownership and original measurements |
| required_quality_disclosure | Primary measurement share; unknown composition/assay/provider identities; temporal/geographic/technological fit; physical/element/species balance uncertainty; allocation residuals and sensitivity; Q=0 intervals; all actual extra operations and completeness limits |
| update_trigger | Different wine route/separation stage; fining/filter aid or recovery introduced; wet/solid/chemical state change; new receiver specification; different supply geography/voltage; changed cleaning or equipment; stock/return policy; material evidence or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `awri-practices-2019` | literature | Nordestgaard, S., AWRI Vineyard and Winery Practices Survey, May 2019, ISBN 978-0-9873388-4-6. https://www.awri.com.au/wp-content/uploads/2019/05/AWRI_Practices_Survey_Final_Report.pdf ; PDF121-122/printed119-120, PDF139/printed137, methods PDF157-159/printed155-157. | Commercial Australian gross red ferment lees first separation and distinct reprocessing/bentonite alternatives. 2016 voluntary survey with later follow-up; used-at-all prevalence is not batch yield/composition or proof of one receiver lot. |
| `bertolino-raw-materials` | literature | Gruppo Bertolino, Raw materials, publisher page snapshot 24 October 2026. https://www.gruppobertolino.com/en/raw-materials/ ; complete Wine Lees, Grape Marc, Wine and Calcium Tartrate sections. | Primary Italian industrial receiver evidence for liquid/solid vinification lees as raw material. Distillation, tartrate concentration/drying and digestion are distinct downstream transformations, not this foreground. No specific red first-rack assay, acceptance limit, plant yield or supplier order is established. |
| `lees-removal-service` | literature | Lees Removal Service, Towards Sustainable Winemaking, complete primary collection page, snapshot 24 October 2026. https://leesremoval.com/ | Tank/tanker wine-lees collection and bonded handover context. The wine-specific alcohol/VA statement and no-cost pickup are not universal lees quality, economic value, composition, packaging material or waste-status rules; destination treatment is unstated. |
| `lbnl-best-winery-2005` | handbook | Galitsky et al., BEST Winery Guidebook: Benchmarking and Energy and Water Savings Tool for the Wine Industry, LBNL/PUB-3184, 2005. DOI 10.2172/862318. https://www.osti.gov/servlets/purl/862318 ; printed6-11,13-15,52 (PDF14-19,21-23,60). | Independent process guide for red fermentation/pressing, racking sediment, fining/filter-media counterexamples, pumping, water and cleaning-effluent boundaries. California-oriented benchmark synthesis is not a single factory; no numerical yield, chemistry, water saving, temperature or recipe is adopted. |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, sections7.9.1-7.9.3, printed255-272/PDF275-292. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctional-process scope; real/virtual subdivision; exchange-specific determining physical causality; only residual process-gate real-state market values; reconcile allocated inventories. Not evidence for winery yield/composition, arbitrary mass allocation, default percentages or substitution credits. |
