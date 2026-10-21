---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.sacks-and-bags-of-plastics
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unprinted monolayer LDPE open-mouth bottom-sealed bags from blown film

## 1. Scope and Applicability

Manufacture empty clear, unprinted, uncoated, unlaminated, non-cellular monolayer LDPE flat bags with one open mouth and heat-sealed bottom. Start with actual virgin LDPE film-grade pellets and each actual whole supplied preparation. Include receipt/storage and actual moisture-conditioning/drying when receiving/storage evidence requires it, dosing, screw plastication, annular blown-tube extrusion, inflation/air cooling, collapse/haul-off, actual temporary winding/unwinding, bottom heat sealing/cutting, inspection and new first release. Identified clean internal scrap retains inherited burdens through actual recirculation. Purchased finished film/bags cannot replace these operations. `hmel-blown-film-2022`; `yongfong-bag-process`; `lyb-lupolen-2420k-2026`

This is an explicit technical synthesis of general PE operations in HMEL, a real LDPE pellet/film-grade example in the complete Lupolen2420K TDS, and bag heat sealing/outgoing inspection in Yong Fong. They are different sources, not a common SKU/order/factory recipe. HMEL offered-grade tables concern LLDPE/HDPE and are not LDPE specifications. The TDS excludes medical/pharmaceutical intent; typical values are not limits. No factory quantities, recipe, settings, density conversion or species emission factor is prescribed.

Exclude HDPE/LLDPE blends, PP/PVC/PET/compostable polymer, bought recyclate, woven textile sacks, paper sacks, foam, multilayer coextrusion, lamination, printing/corona treatment, gussets/handles/valves/zippers/drawstrings, filled goods and bag use/end-of-life. Review a changed route separately, never hide it in zero. This is a narrower product/method choice within CPC36410, not a claim that classification prescribes it. Original CPC notes distinguish textile packing articles27150, paper sacks32152, semi-manufactured film36330 and other plastic packing articles36490; no extra36410 explanatory note is present. `un-cpc3-notes-2025`

Q is newly first-quality-released net bag mass. Same-batch closing FG is already included in Q. Keep actual post-release packing, warehouse, handling and dispatch in a separate matched-cohort service ledger and disclose that supplement separately. At the consolidated physical factory gate cancel internal Q and use actual dispatch/stocks/losses; do not add closing FG to production. A 1kg production reference is not bag-capacity, load-performance or reuse-life equivalence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.sacks-and-bags-of-plastics |
| classification_refs | CPC3.0 36410; narrower candidate; no accepted mapping here. |
| covered_products | The section1 clear empty flat monolayer virgin-LDPE open-mouth bottom-heat-sealed bag from complete pellet conversion. |
| excluded_products | All section1 exclusions; resin and unconverted film are distinct terminal products. |
| representative_product | One specified plain flat bag with measured dimensions/gauge and declared acceptance performance; no assumed SKU mass. |
| production_route | Pellet dosing/plastication → annular monolayer blown tube → air cooling/collapse/haul-off → actual winding/unwinding → bottom heat seal/cut → inspection/new release; later supply services separately tracked. |
| market_state | Empty discrete open-mouth bags at first quality release before customer filling/top closure; removable transport packaging excluded from net bag mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce empty bags of declared geometry and containment performance. |
| How much | 1kg net newly first-quality-released bags of one specified construction. |
| How well | Declared LDPE/additive grade; width/length/gauge tolerances; bottom-seal integrity/strength and visual-defect/intended-load acceptance with test conditions. No automatic food-contact certification. |
| How long or cycle | One declared production/reporting period and packaging application; no default lifetime/reuse count. |
| reference_flow_link | released_bag |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | empty clear flat bag; LDPE-only grade and whole additive formulation; virgin external resin and identified internal recirculation; monolayer with no coating/lamination; unprinted untreated surface; open mouth and bottom heat seal; width/length/gauge and tolerances; seal and intended-load tests/acceptance conditions; electric plastication and sealing route; new first-release net gate Q; actual site/supplier and reporting period; opening/closing WIP with inherited exchange vectors; FG and return history; each packaging identity and separate supply-service scope; actual received resin supply form and moisture/packaging |

Native identity is a manufactured polyethylene bag for packaging/transport/storage, CAS9002-88-4, Product flow, production mix at plant, with Mass as its sole property. It provides no fixed grade, density class, film structure, route, specification, geography, supply location or lifetime. Its classification under other packing articles36490 is inconsistent with the otherwise consistent bag identity: disclose metadata debt, not permission to cover boxes/closures. Apply the actual LDPE-only, monolayer blown-tube, unprinted/unlaminated, open-mouth bottom-seal, net first-release and site/SKU restrictions in the complete consumable context. This identity is not a background inventory or proof of performance equivalence.

Declare every required qualifier in dataset metadata, reference comments or equivalent consumable product context. Missing qualifiers make the package incomplete; a polymer family name cannot replace them.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure new first-release Q after seal/cut/QC excluding removable packaging. Closing released FG already belongs to Q; reinspection/transfers/dispatch do not create production. |
| count_mass | reference product | Mass | kg | Count records need calibrated weighing of representative accepted bags of the same SKU/gauge/lot with uncertainty; multiply verified count by measured mean bag mass before Q aggregation. Geometry or brochure density is not a bag weight. |
| native_conversion | all inventory rows | row-specific physical property | native unit | Keep original units. Integrate genuine rates over matched intervals only; never multiply already-integrated gas/liquid volume by time. Measure independent substance/composition/state-specific density for volume-to-mass. 1kWh=3.6MJ is only an energy-unit identity, not a fuel inventory. |
| single_division | all inventory rows | row numerator and bag mass | row unit per kg | Collect undivided raw observations; finish unit conversion, stock/vector attribution and justified allocation before the sole section8 division. Protocol/card/basis labels reference that operation only. Q=0 keeps real loads and gives no unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received virgin LDPE pellets and every actual whole preparation; all film/bag manufacture remains foreground. |
| starting_condition_role | foreground collection boundary |
| product_classification_scope | Only section1 film-bag subset of CPC3.0 36410. |
| recursive_input_rule | Bought finished film/bags require separate input identification and changed-boundary review; they do not substitute this manufacture. Internal refeed cancels with retained burdens; returns retain original history. |
| upstream_dataset_requirement | Link actual grade/composition/form/location-compatible resin, preparation, utility and packaging backgrounds. UUID identity is not a provider inventory; upstream burdens remain required. |
| disclosure | Site/period/supply origins; whole formulations; stage meters; actual cooling/inflation/winding/sealing; WIP/FG/returns; all failures/rework/idle/cleanup; release manufacture versus observed supply-service supplement. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | bag_line | Include all section1 operations to the newly accepted formed bag, with actual outsourced operations/backgrounds. Winding alone or packing purchased bags is insufficient. Retain stage/cohort records for this integrated process. | hmel-blown-film-2022; yongfong-bag-process |
| boundary_actual | all inventory rows | Cards are specific collection exchanges, not a universal recipe. Evidence actual absence before not_applicable; no UUID/meter gap is zero. Add each actual unlisted preparation, chemical, material, fuel, refrigerant, utility, packaging, waste, species and destination as its own atomic row before quantitative completeness. Changed product/route needs applicability review. | hmel-blown-film-2022; lyb-lupolen-2420k-2026 |
| boundary_release | released_bag | Q is newly first-released net production with linked actual release reversals corrected. Closing released FG is already in Q, never added again or subtracted as WIP. Keep opening/closing WIP quantity/composition/stage and complete inherited per-exchange-unit vectors; consume opening-WIP burdens and carry closing-WIP vectors forward. Preserve all zero-output, startup/shutdown, idle, failed, cleanup and rework activity. | ilcd-allocation-2010 |
| boundary_service | bag_line | Keep actual post-release packing/warehouse/handling/dispatch in separate cohort-linked service accounts including old FG and returns. Old-cohort service is not divided by new-period Q. Carry current-cohort undelivered obligations/burdens explicitly and disclose unobserved future service as unmeasured, not zero. At consolidated physical gates cancel internal Q/rework handoffs and use actual external dispatch/stocks/losses. Reinspection/reshipment never creates new Q. | ilcd-allocation-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bag_line | Integrated blown-film bag manufacture and separate service ledger | required | Only section1 route; preserve stage/cohort ledgers | foreground | 1 kg reference flow |

Preserve distinct manufacturing-release, FG/service and consolidated physical gates. The release result and separately disclosed service supplement retain their own scope; no second bag production output or old-service/new-Q mixing. Conditional exchanges require real occurrence/absence records; add every actual unlisted exchange under boundary_actual.

### Process: Integrated LDPE blown-film bag line (`bag_line`)

#### Inputs

##### Product flows

###### Purchased LDPE film resin (`ldpe`)

One actual supplied virgin LDPE film-grade pellet material including supplier-incorporated additives. Weigh received/issued/returned resin and stock changes. Native identity fixes low-density PE granulate and Product/Mass only; no CAS, synonyms/comment, fixed grade/reactor/recycled share, geography/supply location or extra properties are provided. Confirm actual grade, whole composition and provider before background linking. Lupolen2420K is a separate non-additivated pellet example, not the required factory grade. Incorporated additives are constituent subledgers, not second purchases. Do not use this granulate for finished bag, loose regrind flakes, HDPE or LLDPE.

- Selected flow: polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: `lyb-lupolen-2420k-2026`; `hmel-blown-film-2022`

###### Erucamide slip masterbatch if used (`slip_mb`)

One complete purchased erucamide/LDPE preparation only if actual BOM and supplier composition confirm it. Whole supplied mass is procured once; active fraction/carrier/assay are subledgers. HMEL supports optional masterbatches generically, not this chemistry/dosage. Different preparations or on-site mixing require separate actual purchased ingredients and mixing energy/losses.

- Selected flow: Erucamide-in-LDPE slip masterbatch
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: `hmel-blown-film-2022`

###### Silica antiblock masterbatch if used (`antiblock_mb`)

One actual whole purchased silica/LDPE preparation with independently confirmed composition, silica structure/particle grade, carrier and moisture. Pure silica or silica sand does not verify this whole formulation. No mandatory additive or amount is inferred; incorporated silica/water are not procured again.

- Selected flow: Silica-in-LDPE antiblock masterbatch
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: `hmel-blown-film-2022`

###### LDPE-carrier purging preparation if used (`purge`)

Only an identified whole commercial purge used by the actual line. Collect supplied formulation/grade, whole charge and startup/changeover destinations/contamination; its resin is not another purchase. Troubleshooting does not prove use. Mechanical cleaning without this product requires documented absence.

- Selected flow: LDPE-carrier extruder purging compound
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources:

###### Actual electrical supply (`electricity`)

Meter receipt/actual electric moisture conditioning or drying/dosing, drives, barrel/die heaters, bubble blowers/cooling, haul-off/winding, heat sealing/cutting, extraction/QC and scrap grinding. Separate actual chiller/compressed-air-generation loads and post-release services by cohort. Preserve startup/idle/failure/cleanup/rework. Distinct voltages/routes require distinct exchanges and compatible providers; no country, voltage, generation mix, steam or boiler is presumed.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_energy
- Sources: `hmel-blown-film-2022`; `yongfong-bag-process`

###### Fresh industrial supply water (`water`)

Measure actual external fresh makeup/cleaning water by source/quality. Closed circulation is internal, not repeated purchase. Water already in a formulation is not procured separately. Bubble air cooling does not prove water contact. Actual abstraction needs its own elementary input with real source/compartment.

- Selected flow: Industrial supply water
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `hmel-blown-film-2022`

###### External circulating cooling supply if present (`cooling_water_in`)

Only actual water crossing the external cooling interface. Retain mass/meter interval, quality, temperature/pressure/enthalpy and supplier water-versus-cooling-energy convention. Distinguish fresh makeup/on-site recirculation; reconcile actual return/losses. Do not invent steam or condensate.

- Selected flow: Externally supplied cooling water
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources:

###### Aqueous IPA cleaner if present (`ipa_cleaner`)

One actual whole IPA/water cleaning formulation for an included operation, with assay/carrier water, use location, recovery and losses. Solvent cleaning is not prescribed. For actual on-site preparation replace the whole-purchase row with each purchased ingredient plus mixing energy/losses.

- Selected flow: Aqueous isopropanol cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources:

###### Mineral hydraulic oil if consumed (`hydraulic_oil`)

Actual replenishment/change, contained stock, viscosity/formulation and equipment assignment with waste/leak destination. A closed hydraulic charge is not consumed every cycle. Confirm whole supplier formulation/provider.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources:

###### Steel extruder screen replacement (`screen`)

One actual replacement screen article, with metal grade/mass separate from adhering polymer subledger. Collect replacement interval and spent destination; the troubleshooting table supplies no screen weight.

- Selected flow: Steel woven extruder screen
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: `hmel-blown-film-2022`

###### Sealing-jaw release tape if used (`sealer_tape`)

Only an actual supplied whole coated-glass tape article. Weigh replacements, stock and spent destination; PTFE/glass/adhesive remain constituents, not duplicate inputs. A general heat-sealing statement does not establish its use.

- Selected flow: PTFE-coated glass-fibre sealing-jaw tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources:

###### Temporary paperboard winding core (`core`)

One actual cylindrical paperboard core including incorporated glue, weighed separately from film. Native identity is paperboard tube/core, Product/Mass, production mix at plant; no CAS, fixed dimensions/grade/fibre shares, geography/supply location or extra properties. Confirm actual whole paperboard construction/provider. Not a metal mandrel, complete reel or all packaging, and no consumption per bag is implied. Internal reuse cancels; do not buy the same core each cycle.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `hmel-blown-film-2022`

###### Whole shipping carton (`carton`)

One actual whole supplied carton, conditional on the packing BOM. Retain construction, true fibre/glue composition and tare; no second paper/glue procurement. A native candidate fixed to16.6% primary/83.4% recycled fibre is not adopted for an unverified different or unknown mixture.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Whole supplied paper label (`label`)

One supplied paper-label article including actual adhesive and release liner. Weigh whole supply, with attached label and removed liner as component subledgers. A different actual liner material needs its own identity/card.

- Selected flow: Self-adhesive paper label
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Whole supplied packing tape (`tape`)

One actual PP-backed adhesive tape including supplied paperboard core. Reconcile whole purchase with attached tape, retained core and waste; adhesive is not bought twice.

- Selected flow: Polypropylene pressure-sensitive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Wooden shipment pallet if used (`pallet`)

One actual whole pallet with construction/treatment, ownership, purchase/return receipts, stock and damage. Reusable custody is not bag mass, repeated internal-cycle procurement or automatic coproduct.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Newly first-quality-released bag (`released_bag`)

Native identity is a manufactured polyethylene bag for packaging/transport/storage, CAS9002-88-4, Product flow, production mix at plant, with Mass as its sole property. It provides no fixed grade, density class, film structure, route, specification, geography, supply location or lifetime. Its classification under other packing articles36490 is inconsistent with the otherwise consistent bag identity: disclose metadata debt, not permission to cover boxes/closures. Apply the actual LDPE-only, monolayer blown-tube, unprinted/unlaminated, open-mouth bottom-seal, net first-release and site/SKU restrictions in the complete consumable context. This identity is not a background inventory or proof of performance equivalence. Q counts each eligible first release once after sealing/cutting/QC, excluding removable cartons/labels/tape/pallets and temporary cores. This is the sole production reference; stock/dispatch/returned-bag reinspection are separate custody/service events.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_release
- Sources: `yongfong-bag-process`; `hmel-blown-film-2022`

###### Actual external hot cooling-water return (`cooling_water_return`)

Only actual external return matched to cooling_water_in: mass, interval, temperature/pressure/enthalpy and real quality. Reconcile makeup/leak/evaporation/stocks. Supplier convention governs water/cooling energy; no automatic heat credit or cancellation of hot/cold enthalpies. On-site circulation cancels internally.

- Selected flow: Returned cooling water
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources:

###### Paperboard core returned externally (`returned_core`)

Only a whole actual reusable cylindrical paperboard core returned to its external owner, with the same native Product/Mass, at-plant mix and no fixed dimensions/grade/fibre shares/geography/supply location/extra properties as the input. Confirm construction/provider; weigh and track custody. No presumed return, bag production, waste or avoided-production credit.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Corrugated cardboard carton outgoing (`out_carton`)

Whole actual carton leaving with gross physical shipments, retaining composition/tare/cohort; separate from Q, not a new coproduct.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Self-adhesive paper label outgoing (`out_label`)

Only actual attached paper/adhesive, excluding removed liner and unused retained stock; reconcile supplied-label components.

- Selected flow: Self-adhesive paper label
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Polypropylene pressure-sensitive packing tape outgoing (`out_tape`)

Actual attached tape/adhesive, excluding retained/discarded core; match whole purchase without another procurement.

- Selected flow: Polypropylene pressure-sensitive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Wooden pallet outgoing (`out_pallet`)

Whole actual outward pallets; distinguish gross-shipment custody from external owner-return destination without duplicate movement. Reconcile reusable stocks; not bag output.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Saleable clean LDPE regrind if actual (`sale_regrind`)

Only separately specified actually transferred secondary product with composition/particle form/contamination/moisture and market state. Internal refeed cancels; treatment-bound scrap is waste. Retain full physical output before burden partition, with no fixed economic share or virgin-displacement credit.

- Selected flow: Clean LDPE film regrind
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `ilcd-allocation-2010`

##### Waste flows

###### Unrecovered LDPE film scrap (`waste_ldpe`)

Actual bag/film rejects; split each contamination class and destination. Internal refeed/sold regrind are separate; failed lots retain burdens and are not negative resin input.

- Selected flow: Unrecovered LDPE film scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources:

###### Spent LDPE-carrier purging compound (`waste_purge`)

Actual expelled purge with trapped resin/contaminants in composition subledgers; a balance residual is not measured purge mass.

- Selected flow: Spent LDPE-carrier purging compound
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources:

###### Aqueous bag-line cleaning effluent (`wastewater`)

One actual separately collected aqueous stream with measured water/dissolved/suspended composition and real treatment provider. COD is oxygen demand, not a specific invented chemical mass. Different streams/destinations need own rows.

- Selected flow: Aqueous bag-line cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources:

###### Spent aqueous isopropanol cleaner (`spent_ipa`)

Actual spent IPA/water liquid after use/recovery with assayed composition and destination, separate from aqueous effluent and IPA to air.

- Selected flow: Spent aqueous isopropanol cleaner
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources:

###### Spent mineral hydraulic oil (`waste_oil`)

Actual separately drained oil with contamination/storage/destination. A closed-system fill is not discarded each bag batch.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources:

###### Polymer-contaminated steel extruder screen (`waste_screen`)

One spent screen waste article with metal/adhering-polymer subledgers; attached polymer is not counted again as separate scrap.

- Selected flow: Polymer-contaminated steel extruder screen
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources:

###### Spent PTFE-coated glass-fibre sealing-jaw tape (`waste_sealer_tape`)

Only actual replaced tape with coating/glass/adhesive/contamination and destination. PTFE content does not establish a fluorinated-gas emission.

- Selected flow: Spent PTFE-coated glass-fibre sealing-jaw tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources:

###### Waste paperboard winding core (`waste_core`)

Actual discarded whole core; reusable and externally returned cores are not wasted anew each cycle.

- Selected flow: Waste paperboard winding core
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Waste corrugated cardboard carton (`waste_carton`)

Actual damaged/discarded whole carton and true composition/destination; distinguish empty/attached closing stock and outward custody.

- Selected flow: Waste corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Waste silicone-coated paper label liner (`waste_label_liner`)

Only actual silicone-coated paper liner removed from supplied labels. A different liner polymer or discarded attached label requires its own atomic identity/card.

- Selected flow: Waste silicone-coated paper label liner
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Waste paperboard tape core (`waste_tape_core`)

Actual discarded tape core from the whole supplied article, excluding tape already counted; retain true composition/contamination.

- Selected flow: Waste paperboard tape core
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Waste wooden pallet (`waste_pallet`)

Actual damaged pallet to treatment with wood/moisture/treatment/metal subledgers. Reuse and external owner return are not waste.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

##### Elementary flows

###### Polyethylene particles to air (`pe_air`)

Actual post-capture handling/extrusion/grinding dust; measure particle fractions. Captured dust in waste articles is not emitted again. Conditional species, not an occurrence/amount assertion. Retain actual stack/fugitive compartment, sampling state and each outlet. Add every other actual species/destination before claiming quantitative completeness.

- Selected flow: Polyethylene particles
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `lyb-lupolen-2420k-2026`

###### Water vapour to air (`water_air`)

Actual net cleaning/cooling evaporation with background humidity subtraction and water balance. Free-water phase change is not reaction water. Conditional species, not an occurrence/amount assertion. Retain actual stack/fugitive compartment, sampling state and each outlet. Add every other actual species/destination before claiming quantitative completeness.

- Selected flow: Water vapour
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources:

###### Isopropanol to air (`ipa_air`)

Only actual escaped cleaner IPA; separate capture/recovery and remaining liquid. Conditional species, not an occurrence/amount assertion. Retain actual stack/fugitive compartment, sampling state and each outlet. Add every other actual species/destination before claiming quantitative completeness.

- Selected flow: Isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources:

###### Formaldehyde to air (`formaldehyde_air`)

Only independently identified/quantified actual process/sealing formaldehyde; VOC is not formaldehyde mass. Conditional species, not an occurrence/amount assertion. Retain actual stack/fugitive compartment, sampling state and each outlet. Add every other actual species/destination before claiming quantitative completeness.

- Selected flow: Formaldehyde
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `lyb-lupolen-2420k-2026`

###### Acetaldehyde to air (`acetaldehyde_air`)

Only independently identified/quantified acetaldehyde; total VOC does not become an assumed aldehyde. Conditional species, not an occurrence/amount assertion. Retain actual stack/fugitive compartment, sampling state and each outlet. Add every other actual species/destination before claiming quantitative completeness.

- Selected flow: Acetaldehyde
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `lyb-lupolen-2420k-2026`

###### Ethylene to air (`ethylene_air`)

Only independently identified/quantified ethylene; no default residual monomer or degradation yield. Conditional species, not an occurrence/amount assertion. Retain actual stack/fugitive compartment, sampling state and each outlet. Add every other actual species/destination before claiming quantitative completeness.

- Selected flow: Ethylene
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `lyb-lupolen-2420k-2026`

###### Carbon monoxide to air (`co_air`)

Only independently identified/quantified CO; distinguish degradation from actual combustion, adding its actual fuel/air/species route if present. Conditional species, not an occurrence/amount assertion. Retain actual stack/fugitive compartment, sampling state and each outlet. Add every other actual species/destination before claiming quantitative completeness.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `lyb-lupolen-2420k-2026`

###### Carbon dioxide to air (`co2_air`)

Actual net process-derived CO2 with atmospheric background and carbon origin identified. Electricity background emissions are not emitted again in foreground. Conditional species, not an occurrence/amount assertion. Retain actual stack/fugitive compartment, sampling state and each outlet. Add every other actual species/destination before claiming quantitative completeness.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; report once per reference flow under the sole section8 reporting operation with this card’s scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `lyb-lupolen-2420k-2026`

## 7. Allocation and Co-product Handling

Apply to multifunctional processes only in the stated attributional context, distinct from multifunctional-product QFD. Actual full physical ledgers precede burden shares.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_context | bag_line | Only an explicitly attributional study where partitioning is warranted under its declared goal/situation. Industrial guides support process facts, not LCA allocation. No free allocation/substitution choice or full ILCD/PEF conformity claim. Consequential or multifunctional-product comparison needs separate method review. | ilcd-allocation-2010 |
| alloc_subdivide | all inventory rows | First assign exclusive materials/meters/activities/cohort services; subdivide separable operations and then justified virtual subdivision from real technical relationships. Separate new production from old-FG service and attribute failed/rework/idle activity by cause. Explain remaining inseparability and distortion when feasible subdivision was not performed. | ilcd-allocation-2010 |
| alloc_physical | all inventory rows | For each remaining shared exchange identify/quantify determining physical causality to each real co-function separately: embodied resin, measured incremental drive/heating response or justified parallel-service occupancy can differ. Mass/throughput/time/energy are not interchangeable default keys; correlation/common polymer name does not establish determining causality. Preserve loss-causing activity. | ilcd-allocation-2010 |
| alloc_residual | all inventory rows | Only genuine remaining burdens lacking a determinable physical relation use contemporaneous market value of actual coproducts at the same shared process exit and actual condition/amount. Record moisture/contamination/quality, price/currency/time and separation point. Derive untraded intermediate value by justified correction of later processing/packing/transport, not a clean final-product price. Apply shares only to that residual vector, never full physical outputs; no fixed share/automatic credit. | ilcd-allocation-2010 |
| alloc_scrap | sale_regrind | Internal refeed retains all original burdens and actual grinding/remelt energy/losses and cancels on consolidation; not new purchase or bag production. Treatment-bound scrap keeps explicit waste treatment. Real saleable secondary output requires its actual state/specification and the hierarchy; negative-price waste is not forced into positive coproduct shares. No virgin-displacement/recycling or hypothetical future reuse credit here. | ilcd-allocation-2010 |
| alloc_closure | all inventory rows | For each shared exchange, the sum of inventories attributed to all real co-functions must equal the unallocated inventory. Verify residual shares sum to one without prescribing their values; preserve system-wide consistency for comparable exchanges and disclose justified differences and uncertainty. Physical flows remain full unscaled records. | ilcd-allocation-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

Protocols collect undivided raw observations in native units. aggregation_rule states the final reporting basis only and references the sole report_once operation; no division occurs during collection. Keep manufacture and matched service numerators separately; physical ledgers remain unallocated.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | bag_line | released_bag | weighing_release | SKU; lot; dimensions/gauge; LDPE/additive state; seal/defect/load tests; acceptance spec; release/reversal id/time; gross/tare/net; count and measured same-SKU bag mass; calibration; Q | Calibrated net weighing excluding removable packaging and unique first-release register after cut/seal/QC. Count records need actual same-construction sample mass/uncertainty. Preserve raw masses/reversals before Q aggregation; reinspection/dispatch is not release. | kg | each release/reversal | Complete matched period including failed/Q=0 intervals | Release gate and linked stock cohorts | per 1 kg reference flow | Scales/tare; acceptance tests; release register; duplicate audit |
| cp_material | bag_line | ldpe; slip_mb; antiblock_mb; purge; ipa_cleaner; hydraulic_oil; screen; sealer_tape | raw_stock | Each whole article/formulation; supplier/grade/COA; original mass/unit; opening/receipts/issues/returns/closing; composition/assay/moisture; lot/time/stage; actual site mixing/loss; received supply form/packaging and actual moisture-conditioning need | Reconcile calibrated whole-material weights and supplier receipts against stock. Collect stock-adjusted actual consumption before attribution; carrier/active/assay subledgers do not duplicate procurement. | kg | each lot/issue/return and count | Complete same period and opening history | All included material stores/stages | per 1 kg reference flow | BOM; invoices/COA; weights; stock closure |
| cp_energy | bag_line | electricity | meter_states | Meter start/end/unit; interval; supply/voltage/provider; asset/stage; run/start/stop/idle/failed/rework/cleanup time; kWh; chiller/compressor; manufacture/service cohort | Read meters and reconcile invoices/submeters. Integrate genuine power rates over matched logged time once. Preserve operating states and separate manufacture/service attribution. Actual generator/fuel/heat requires its atomic additions and applicability review. | kWh | each interval/state change | Full period with zero-output activity | Line/utilities with later service separate | per 1 kg reference flow | Meters; bills; state logs; attribution evidence |
| cp_water | bag_line | water; cooling_water_in; cooling_water_return; wastewater | water_thermal_interface | Water identity/interface; original mass/integrated volume; true rate/time; independent density/temperature/pressure; supply/return enthalpy; circulating stock; makeup/evaporation/leaks/formulation water; effluent assay; supplier convention | Use mass meters or actual integrated volumes with independent state-specific substance density. Separate fresh supply/external return/internal circulation and each real interface. No assumed steam/reaction water or water density for every solution. | kg | each matched supply/outlet interval | Same period and interface | Actual cooling/cleaning and effluent outlets | per 1 kg reference flow | Meters; density/assay; temperatures; supply contract; closure |
| cp_pack | bag_line | core; returned_core; carton; label; tape; pallet; out_carton; out_label; out_tape; out_pallet; waste_core; waste_carton; waste_label_liner; waste_tape_core; waste_pallet | article_custody | Each article/component; tare/composition; opening/closing empty or WIP/FG-attached or reusable stock; external purchase/return receipts; gross physical shipments; external owner returns; waste; internal reuse; cohort/time/destination | Weigh whole supplied articles and component subledgers; reconcile each identity across purchase/attachment/custody/return/reuse/waste. Count conversion needs actual article tare. Track packaging on all gross physical shipments including old/returned cohorts, not just net Q. | kg | each packing/custody event and stock count | Production and later services matched separately | All empty/attached/reusable packaging stocks | per 1 kg reference flow | Tare tests; packing BOM; stock/return/waste receipts |
| cp_waste | bag_line | sale_regrind; waste_ldpe; waste_purge; spent_ipa; waste_oil; waste_screen; waste_sealer_tape | outlet_composition | Each actual product/waste identity; original mass/unit; composition/moisture/contamination; stock; lot/time; receiver/destination; sale specification if actual; rework/return origin | Weigh independent outlets and reconcile manifests/stock/receipts. Keep full physical amounts before allocation. Captured species/waste-article constituents are not duplicate outputs. Residuals are not automatically VOC/water/coproduct. | kg | each outlet transfer and count | All normal/failed/rework/cleanup periods | Each real waste/product interface | per 1 kg reference flow | Tickets; assay; receiver/treatment receipts; actual product spec |
| cp_air | bag_line | pe_air; water_air; ipa_air; formaldehyde_air; acetaldehyde_air; ethylene_air; co_air; co2_air | species_compartment | Species/CAS; stack/fugitive compartment; concentration/wet-dry basis; temperature/pressure; integrated volume or true rate/time; background; capture/recovery; detection/uncertainty; species raw mass; state | Use representative actual species measurements and compatible volume/concentration states. Concentration times already-integrated volume once; integrate true flow rate only. General degradation/odour warnings identify no species/factor/amount; nondetection remains bounded by actual detection limits. | kg | each representative state/outlet | Full period with justified sampling coverage | Actual stacks/fugitives/captured outlets | per 1 kg reference flow | Sampling/speciation; volume state; detection/uncertainty |
| cp_cohort | bag_line | all inventory rows | WIP_FG_history | Opening/closing raw/WIP/FG quantity/composition/stage/cohort; complete inherited exchange vectors with original units; internal refeed; release/reversal; gross dispatch D; return linked to original shipment/reversal; actual incremental rework; loss; service meters/custody | Reconcile physical movements and each inherited exchange vector separately; never replace inventory with a scalar impact score. FG retains manufacturing history through service/returns without remaking production. Attribute actual incremental work once to original cohort; missing history is incomplete quantitative data. | native units by exchange | each cohort movement and period close | Matched current/historical cutoffs | Manufacture and separate FG/service ledgers | per 1 kg reference flow | Movement records; historical vectors; linked reversals; service meters |
| cp_allocation | bag_line | all inventory rows | exchange_attribution | Exclusive activities; subdivision; measured shared-exchange response; actual co-functions/amount/state; common exit; residual vector; contemporaneous price/currency; post-gate corrections; shares/sensitivity | Apply section7 per exchange; keep physical ledgers intact and show each raw numerator attribution. Justify remaining inseparability after exclusive/virtual subdivision and determining physical causality before residual market values. | native units and currency | each shared-process/co-function change | Same cohort and contemporaneous market period | Actual common exit before later conditioning/services | per 1 kg reference flow | Technical response; meter/price contracts; state corrections; sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_q | released_bag | Q = sum of eligible new first-quality-released net bag masses after linked actual release reversals. Count records first multiply verified count by measured same-SKU accepted mean bag mass; no assumed single-bag kg/density. Dispatch, reinspection and closing FG do not add production. | cp_release | Q | yongfong-bag-process |
| raw_conversion | all inventory rows | Convert actual raw observations to each exchange numerator unit before attribution: stock-adjusted material weights; kWh meter differences; concentration times compatible integrated gas volume; integrate only genuine rates; use independently measured substance-state density for volume-to-mass. Separate each physical identity/outlet. No Q division here. | cp_material; cp_energy; cp_water; cp_pack; cp_waste; cp_air | converted raw exchange amounts | hmel-blown-film-2022 |
| manufacturing_vectors | all inventory rows | Construct undivided cohort numerator A_i from actual attributable period exchanges plus complete inherited burdens of consumed opening WIP minus the corresponding complete vector carried by closing WIP. Correct raw stock changes; cancel internal refeed/handoffs; preserve failures/start-stop/idle/cleanup/rework; apply section7 to shared burdens. Released FG is not subtracted as WIP. Each vector is per exchange in its original unit, not a scalar impact. Prior-released returned FG retains old manufacture separately and receives only actual incremental work once. | cp_cohort; cp_release; cp_material; cp_energy; cp_water; cp_allocation | A_i | ilcd-allocation-2010 |
| physical_gates | raw physical ledgers | Manufacturing: opening raw/WIP + external inputs + separately identified returned material = closing raw/WIP + new Q + all actual other product/waste/emission outputs + segregated prior-released rework transfers; cancel internal refeed. FG: opening FG + internal Q receipt + actual customer returns = actual gross dispatch D + closing FG + actual FG loss/waste + transfers to rework. Consolidation cancels internal Q/rework and substitutes actual external dispatch/stocks/losses, never Q + closing FG + D. Reconcile full physical masses/relevant elements independently of burden allocation. Include actual carrier-air intake/outlet consistently in a full air balance, subtracting background for net emissions. Do not solve two unknown losses/species from one residual. | cp_cohort; cp_release; cp_material; cp_pack; cp_waste; cp_water; cp_air | reconciled physical gates | ilcd-allocation-2010 |
| water_species | raw physical ledgers | Keep total physical mass/carbon/other relevant elements independent from measured species/water evidence. Ordinary LDPE melt/solidification is physical, not an assumed water-producing cure/polymerisation. Separate formulation water, free-water phase change, independently proved reaction water and actual bound/structural water. No reaction/bound water from a wet-dry residual. COD/VOC remain indicators without independently evidenced chemical conversion. | cp_water; cp_air; cp_material; cp_waste | separate element and species/water evidence | lyb-lupolen-2420k-2026 |
| packaging_balance | each packaging identity | For each article/component separately: opening empty + opening attached WIP/FG + opening reusable + external purchase + external return received = closing empty + closing attached WIP/FG + closing reusable + with gross physical shipments outward + external owner return + waste. Components reconcile with whole supplied articles. Distinguish shipment versus external-return destinations without counting one movement twice. Internal attachment/reuse cancels; no net Q, repeated purchase or automatic coproduct. | cp_pack; cp_cohort | independent balanced packaging ledgers | ilcd-allocation-2010 |
| service_vectors | post-release services | Build separate raw service numerators by actual released cohort for packing/warehouse/handling/dispatch; retain complete inherited FG history. Reverse linked earlier service/dispatch only when the real transaction reverses. Reinspection/reshipment does not recreate production. Incremental return/rework service is attributed once; old-cohort activity is not divided by new current Q. For current-release Q>0 pass its matched service numerator through the same sole reporting operation as a distinct supplement. Future unobserved services are unmeasured scope, not zero. | cp_cohort; cp_pack; cp_energy; cp_allocation | matched service A_i and disclosed service scope | ilcd-allocation-2010 |
| report_once | all non-reference exchanges | x_i = A_i / Q; A_i is the complete attributed raw cohort numerator in the individual row unit; Q is matched newly first-quality-released net bag mass in kg. Divide once only after unit conversion, stock/vector reconciliation and justified allocation. Reference output is1kg. Manufacturing and separately disclosed matched service vectors use this same operation without renormalizing; protocols/cards/basis labels only refer to it. Q=0 keeps loads and yields no unit result. | A_i; Q; cp_release | x_i | ilcd-allocation-2010 |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify actual whole product/formulation/form/route/location/provider and property compatibility; broad UUID supplies no quantity or supplier inventory. Preserve native restrictions. | COA/BOM; actual supplier and identity evidence |
| dq_coverage | bag_line | Representative complete period includes failure/Q=0/start-stop/idle/cleanup/rework and outsourced operations. Missing meters/species/history are gaps, not absence. | Stage/state logs and completeness register |
| dq_measurement | all inventory rows | Keep calibration/tare/sampling/detection/uncertainty and independent density/unit evidence. No bag kg, evaporation, species, yield or energy factor inferred from geometry/smell/residual. | Raw meter and lab reports |
| dq_history | bag_line | Carry full WIP/FG per-exchange vectors and linked release/dispatch/return reversals. Separate incremental work from old manufacture and release-gate result from observed-service supplement/cutoff. | Cohort stock vectors and custody records |
| dq_method | all inventory rows | Disclose allocation hierarchy/residual value evidence and source limits; no fixed physical/economic preference, credits or route equivalence. Actual site data/provider matching precedes quantitative completeness. | Technical response; residual price/state evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | bag_line | Verify every section1 restriction and section3 qualifier against actual BOM/supply/stage/acceptance evidence. Similar class/name does not cover woven/paper sacks, raw film, other polymer or packing purchased bags. | un-cpc3-notes-2025; hmel-blown-film-2022; yongfong-bag-process |
| validate_reference | released_bag | Confirm one unique finished Product output via reference_flow_link, exact bag identity and Mass/kg. Q is new first-release net mass excluding packaging/duplicates/dispatch counts/added closing FG. Unsupported measurement or Q=0 yields no passing unit result. | yongfong-bag-process |
| validate_physical | bag_line | Audit manufacture/FG/consolidated physical gates, material/relevant-element balances, actual species/water evidence, every packaging whole/component ledger and full unscaled product/waste outlets before burden allocation. Investigate residuals with uncertainty; no invented second unknown, reaction water or specific VOC. | lyb-lupolen-2420k-2026; ilcd-allocation-2010 |
| validate_vectors | all inventory rows | Verify raw conversion precedes stock/vector reconciliation and exchange-specific allocation. Each reported manufacturing/matched service numerator divides by same-cohort Q once. Old returns/history/incremental rework stay separate; internal handoffs cancel and zero-output burdens persist. | ilcd-allocation-2010 |
| validate_completeness | all inventory rows | Before quantitative use verify every actual flow, occurrence/absence, species/destination, identity/provider restriction and protocol/allocation evidence. Unresolved auxiliary UUID is identity work, not an invented binding or removed burden. Missing required evidence withholds a complete quantitative result; engineering checks do not approve science/translation/mapping/publication. | hmel-blown-film-2022; ilcd-allocation-2010 |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared LDPE-bag manufacturing supply chain; observed post-release service is a distinct cohort-bound supplement. |
| allowed_use | Compatible construction/route/period/provider; link upstream and actual treatment once only. |
| excluded_use | No entire-CPC coverage, resin/film substitution, bag-capacity equivalence, food/medical certification, consequential credit or unobserved future-service zero. |
| required_metadata | All section3 qualifiers; raw/converted units; Q gate; stage/stock boundary; actual background/provider compatibility; manufacture and separate service period/cohorts. |
| required_quality_disclosure | Calibration/sampling/uncertainty; WIP/FG history; failure/returns; unresolved provider/species; allocation/residual price; source limits and unmeasured service scope. |
| update_trigger | Change of resin/whole preparation, structure/geometry/seal/performance, route/cooling/utilities/provider, recycling/allocation evidence, Q gate or service coverage. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| hmel-blown-film-2022 | handbook | HMEL, Technical Guide to Blown Film Process & Polysure Products, February2022, pp.3-10/13-15. https://www.hmel.in/wp-content/uploads/2025/08/technical_guide_to_blown_film_process__polysure_products-Final.pdf | General PE pellet plastication/annular extrusion/air cooling/orientation/collapse/winding, optional masterbatches, failure and different-polymer/multilayer context. Offered LLDPE/HDPE tables are not this LDPE grade limits, site quantities, emissions or LCA allocation. |
| yongfong-bag-process | extension_guidance | Yong Fong Packaging Sdn. Bhd., Manufacturing process, undated primary page. https://yongfongpkg.com/Process.php | PE-bag extrusion, heat-sealed bottom/conversion and raw-receipt-through-outgoing QC. Broader polymers/printing/design capabilities are context, not this plain route. Embedded printing illustration is not an entire line flowchart. No common SKU/factory recipe/amount or allocation claim. |
| lyb-lupolen-2420k-2026 | handbook | LyondellBasell, Lupolen2420K Technical Data Sheet,10/15/2026, complete3-page edition. https://productsafety.lyondellbasell.com/DirectRequest?ProductGuid=79326e74-b73c-4977-9f56-b9e12367c004&ResponseTypeGuid=f1e32c20-d810-4db0-b25e-8e23a59f3733 | Actual non-additivated LDPE pellet/film-grade example and heat-seal suitability; typical/test limitations, degradation/fines/storage warnings. Medical/pharmaceutical intent excluded. No required grade, universal density/settings, identified species factor or proof of bag maker using this supplier. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, first edition March2010, sections7.9.2/7.9.3, printedpp.255-272/PDF275-292 complete context. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctional-process hierarchy: exclusive/virtual subdivision, exchange-specific determining physical causality, then genuine residual market value in actual common-exit state/time. QFD multifunctional-product example is distinct. Not a recipe/fixed share/recycling credit/full conformity claim. Stock and once-only reporting rules are explicit PCR operational requirements for the foreground protocols. |
| un-cpc3-notes-2025 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, pp.126/147/177-178 and same-edition original repository structure CSV. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Original hierarchy/titles for plastic bags36410 and adjacent textile packing27150/paper bags32152/raw film36330/other packing36490. No extra36410 explanatory note; classification neither specifies this narrow LDPE method nor accepts a mapping. |
