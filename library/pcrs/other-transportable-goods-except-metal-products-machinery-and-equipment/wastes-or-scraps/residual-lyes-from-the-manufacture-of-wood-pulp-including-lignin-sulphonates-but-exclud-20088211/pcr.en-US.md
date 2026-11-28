---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.residual-lyes-from-the-manufacture-of-wood-pulp-including-lignin-sulphonates-but-exclud-20088211
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Concentrated calcium spent sulphite liquor for industrial supply

## 1. Scope and Applicability

This PCR covers one physically bounded industrial product: clarified calcium acid-bisulphite spent liquor, evaporatively concentrated as an unmodified whole aqueous feedstock with actual sugars, inorganic salts and retained water. The foreground begins with received debarked virgin softwood chips and includes the complete joint digestion/washing stage that creates the residual liquid, rather than a purchased-product packing shortcut. It stops at first quality release to a specified industrial feedstock specification; required later handling is separately retained. [Sources: unsd-cpc-39230; jrc-pulp-bref-2015; lignostar-calcium-liquor]

The route is a transparent technical synthesis of JRC process evidence and a supplier’s liquid-product description. These are not one same contemporary factory, SKU or order; site-specific acid/base/wood and supply interfaces must be evidenced. No universal yield, solids fraction, composition, dose, process temperature/time or emission factor is prescribed. FAO’s separately described purified calcium lignosulfonate (40-65) uses additional purification and drying; those steps and its numerical food specifications cannot be borrowed for this whole-liquid endpoint. Legal product/waste status and receiver acceptance are actual dataset requirements. [Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor; jecfa-calcium-2008]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.residual-lyes-from-the-manufacture-of-wood-pulp-including-lignin-sulphonates-but-exclud-20088211 |
| classification_refs | CPC 3.0:39230; narrower calcium spent-sulphite-liquor subset; mapping acceptance is separate |
| covered_products | Clarified and evaporatively concentrated whole calcium spent sulphite liquor from virgin softwood pulping; industrial liquid feedstock with residual sugars and inorganic salts |
| excluded_products | Tall oil; kraft/soda black liquor; magnesium/sodium/ammonium-base liquors; chemically modified or ultrafiltered purified lignosulphonate; dried powder; ethanol; vanillin; fodder yeast; fibre pulp as the reference product; waste-treatment service |
| representative_product | Unmodified calcium lignosulphonate-bearing brown liquor concentrate accepted by a named industrial receiver for binder or dispersant feedstock use |
| production_route | Received debarked virgin softwood chips; calcium-carbonate/SO2 cooking-acid preparation; batch acid bisulphite cooking; blow and fibre washing/screening; liquor clarification; indirect-steam evaporation with actual SO2 recovery; first liquid quality release |
| market_state | Bulk aqueous concentrate at first quality release; measured net wet mass; declared solids fraction and calcium counterion; no universal solids specification; later storage/loading/dispatch reported as separate incremental services |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Industrial calcium whole-liquor binder/dispersant feedstock provision |
| How much | 1 kg net wet newly first-released concentrate |
| How well | Actual receiver specification for solids, pH, calcium, residual sugars/salts, free SO2 and insolubles; no purified-grade equivalence |
| How long or cycle | One production/release cohort; no downstream use-life claim |
| reference_flow_link | liquor_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Residual lyes from the manufacture of wood pulp, including lignin sulphonates, but excluding tall oil `eb0f8f48-b84e-4202-adaf-41b7ce30b584` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | virgin softwood species and shares; chip volume convention and measured moisture; calcium acid bisulphite route; carbonate assay and SO2 supply form; free and combined SO2 in cooking acid; cook programme; pulp and liquor separation gate; whole liquid without purification or modification; calcium counterion and actual dissolved salts; dry-solids fraction and test method; residual sugars and insolubles; pH and free SO2; receiver use and actual acceptance limits; net wet lot mass excluding packaging; first release event and unique lot identity; WIP inheritance by exchange; steam supply and condensate return convention; gas recovery and each actual outlet; legal and market status; site and period; conditional electricity binding geography and voltage |

Declare every required qualifier in dataset metadata, process/reference-flow notes or an equivalent field; a missing qualifier makes the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_wet_mass | liquor_release | Mass | kg | Q is the sum of net wet mass of unique newly first-released concentrate lots measured under cp_release. Use the same Q for all manufacturing rows. It excludes containers, shipment rechecks, previously released returns and repeated transfers. Dry-solids content is a qualifier and composition subledger, never a second denominator. The statistical residual-lye label does not prescribe alkaline pH; actual acid-sulphite chemistry and measured release pH govern. |
| solution_basis | liquid_so2; calcium_carbonate; caustic_solution; liquor_release | Mass | kg | Record each purchased supply once in its entire delivered form. Assay, carrier water, calcium, sulphur, lignosulphonate and sugars are contained subaccounts. In-house acid preparation counts purchased carbonate, SO2 and added water plus actual mixing energy/losses; its internal acid is not another purchase. |
| physical_units | all inventory rows | Row-specific property | kg; m3; MJ | Convert raw quantities before allocation and normalization. Integrated volume is not multiplied by time; integrate only genuine rates. Liquid density must be measured for that exact liquid at recorded temperature and solids. Wood-chip bulk density requires matched moisture, size and packing. Never use a water density or a secondary flow coefficient to invent either density. |
| utilities_basis | electricity; heating_steam; returned_condensate | Energy and Mass | MJ; kg | Electricity kWh converts to MJ by 3.6; the adopted AC identity uses the native Net calorific value property only as its energy reference, never a fuel heating value. Steam is kg of actual delivered water vapour with pressure, temperature, quality and enthalpy records. Keep supply and returned-condensate mass and enthalpy distinct; adopt one supplier burden convention per interface and never both kg-steam and a duplicate heat-service provider. |
| species_and_water | all inventory rows | Mass | kg | Close total wet mass and independent dry solids/C/S/Ca accounts before allocation. Free water, net reaction water, physical vapour and hydrate/structural water need separate evidence. The carbonate-acid reaction and lignin sulphonation require measured feed/speciation/extent; do not fit two unknown species with one balance residual. COD/TOC/VOC readings are indicators with their reported bases, not identified chemical mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received debarked virgin softwood chips with inherited forestry/chipping burdens; purchased SO2, calcium carbonate, fresh water and utilities |
| starting_condition_role | Foreground material-to-concentrate manufacture including the joint pulping stage that creates the residual liquid |
| product_classification_scope | Narrower than CPC3.0:39230; one calcium-base industrial liquid branch; no automatic coverage of other residual lyes |
| recursive_input_rule | Internal weak liquor, recovered SO2, evaporator recycle and same-lot rework cancel at matched transfer links. They are not new purchases. Externally purchased concentrate cannot replace the chip-to-liquor manufacturing start; a purchased-liquor finishing dataset needs a different declared boundary. |
| upstream_dataset_requirement | Match upstream chip species/preparation/volume convention; supplied chemical formulations and their entire delivered mass; water source/treatment; actual electricity supply; actual steam return contract; external treatment and actual inbound transport. Missing providers remain disclosed rather than zero. |
| disclosure | Declare site/period and all stages, joint unbleached wet pulp gate, actual external supply/treatment interfaces, WIP/FG cutoffs, outlet topology, failure periods, allocation and first-release versus incremental post-release services. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_chain | mill | Include receipt/screening and storage of chips; acid preparation; batch digestion; blow; pulp washing/screening; weak-liquor collection; decanting; indirect evaporation; SO2 collection/absorption and actual reuse; sampling, cleaning, idle/start-stop and first quality release. The unbleached wet pulp leaves this joint boundary at its measured separation state; its later exclusive bleaching/drying belongs to the pulp system. | jrc-pulp-bref-2015; lignostar-calcium-liquor |
| boundary_route | mill | Use the calcium-carbonate/SO2 acid route with purchased SO2 and indirect supplied steam. This is a transparent technical synthesis, not one factory/SKU. Do not copy the magnesium/sodium recovery boiler, MgO ash loop, fermentation, vanillin, yeast, ultrafiltration, pH modification or spray drying into this branch. Actual use of such a process requires a scope review and explicit atomic additions. | jrc-pulp-bref-2015; lignostar-calcium-liquor; jecfa-calcium-2008 |
| boundary_recovery | weak liquor and outlets | Partition each measured weak-liquor transfer by source and actual destination: concentrate supply, internal reuse, external treatment or evidenced other branch. Fractions are mutually exclusive and exhaust the parent quantity; the same organic solids cannot be both sold and burnt. SO2 stripped and recovered to acid is internal reuse, not purchased SO2 or an energy coproduct. No default combustion, energy recovery or displacement credit. | jrc-pulp-bref-2015; lignostar-calcium-liquor |
| boundary_utilities | utilities and treatment | The declared base branch uses electrically driven handling/pumping and externally supplied indirect steam; it invents no on-site fuel boiler. Capture actual condensate returned to the supplier as a separate Product return with temperature/enthalpy and water ownership agreement, not an elementary emission or sale. Heating-loop blowdown, evaporator dirty condensate and cooling-water purge are distinct. Off-site wastewater treatment is linked once; raw pollutant loads in transferred wastewater are not additional direct discharges. Any on-site treatment or combustion actually present needs a reviewed process with every chemical, fuel and species separately added. | jrc-pulp-bref-2015 |
| boundary_first_release | liquor_release and post_release | Q counts only newly first quality-released net wet concentrate. Released closing FG already belongs to Q and is never added again as production. Later storage, loading, dispatch, reinspection and return handling remain in a separate cohort service ledger with actual energy, cleaning, packaging and losses. Returned released goods retain original manufacturing burden; only real incremental rework enters the service ledger. Combining manufacturing and service modules cancels the matched internal Q transfer and counts no second output. | jrc-pulp-bref-2015; ilcd-allocation-2010 |
| boundary_completeness | all exchanges | Each card is one chemical, supplied formulation, physical material, waste stream or emission species. Route conditions belong to that card. Add a separate card and protocol extension for each actual unlisted defoamer, descaler, lubricant, refrigerant, cleaning chemical, cooling purge or identified air/water species before claiming completeness. Absence needs process/meter evidence; an unresolved UUID never makes a genuine flow zero. | jrc-pulp-bref-2015; lignostar-calcium-liquor |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mill | Joint calcium pulping and liquor concentration | required | Declared chip-to-liquid route | Whole manufacturing unit with independent stage ledgers | 1 kg reference flow |
| post_release | Post-release cohort services | conditional | Actual storage/loading/dispatch and return services | Separate incremental service ledger; cp_services | Declared cohort service basis; no new Q |

The manufacturing cards belong to mill. Instantiate each actual post_release utility/material/waste/species service card separately using cp_services and the corresponding utility/packaging/outlet protocol with an explicit service basis; a manufacturing unit value is never a raw service numerator. Keep unallocated physical streams and attributed burden vectors as distinct views.

### Process: Joint calcium pulping and liquor concentration (`mill`)

#### Inputs

##### Product flows

###### Wood Chip (`wood_chips`)

Received debarked virgin softwood chips, not agglomerated/resin-coated furnish or kraft pulp. Native Product identity is broad and Volume-based; record species, moisture, contamination and the exact loose/solid chip-volume convention. Independently weigh wet mass and measure matched bulk density for mass closure and supplier conversion; the UUID does not prove density or provider compatibility.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume / m3
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Calcium carbonate (`calcium_carbonate`)

One complete calcium-carbonate supply charged to cooking-acid make-up. Generic Product identity has no stated assay, particle size, coating, geography or route; its preserved legacy Other-goods classification is not chemical evidence. Require supplier calcium-carbonate identity and carbonate/impurity/moisture assays; no assumption of pure precipitated grade and no duplicate Ca or carrier-water purchase.

- Selected flow: Calcium carbonate `699cf1be-0ca2-4c34-af60-fd58a8e9d549`
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Purchased liquid sulphur dioxide for acid make-up (`liquid_so2`)

One net delivered liquid-SO2 supply with assay, storage loss and actual vaporisation/absorption utilities. It is not an air emission, recovered internal gas, sulfuric acid, sodium sulfite or calcium silicate. No compatible uncontradicted Product identity is adopted; do not bind an indoor elementary SO2 record or a Product candidate retaining an elementary-flow description.

- Selected flow: Purchased liquid sulphur dioxide for acid make-up
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Fresh water (`fresh_water`)

External supplied freshwater for cooking-acid preparation, washing, scrubber/cooling make-up and cleaning, separately metered by use. This native Product Mass identity has no source, purity or treatment promise; preserve each actual supplier/quality and match upstream treatment. It is not direct environmental abstraction, seawater, deionised water by default or internal condensate. No density is inferred from a separate tap-water secondary property.

- Selected flow: Fresh water `f919c997-a3fc-4274-b239-9cbcd07d52ad`
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Alternating current (`electricity`)

One actual grid-electricity supply for all included manufacturing operations with stage submeters. This binding is only customer-side CN grid-average AC at 35–330 kV; it is neither a generation/photovoltaic record nor Korean electricity. Confirm that interface before binding; other site/voltage/supply requires its own verified identity/provider. Record internal transformation losses once if inside the gate. Native reference property is Net calorific value in MJ; it establishes an energy unit only.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: jrc-pulp-bref-2015

###### Externally supplied water steam for indirect heating (`heating_steam`)

Actual water-vapour mass crossing the heating interface for digestion and evaporation, with pressure, temperature, quality, enthalpy and supplier return/water convention. Steam is isolated from liquor by heat exchangers in this branch; a real direct injection requires separately measured water incorporation. No 11.0 MPaG grade is assumed, and a heat-service UUID cannot replace kg steam. No on-site boiler or duplicated fuel/provider is invented.

- Selected flow: Externally supplied water steam for indirect heating
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: jrc-pulp-bref-2015

###### Purchased aqueous sodium hydroxide cleaning solution (`caustic_solution`)

Conditional actual cleaning reagent or compatible external gas-scrubber make-up; do not assume its use, concentration or entry into product. Record whole supplied solution once, with NaOH assay/carrier-water subaccounts and spent cleaning-liquid destination. Solid 95–98% and fixed 30% or 50% candidates are not interchangeable with an unknown solution.

- Selected flow: Purchased aqueous sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015

###### HDPE tamper-evident loading seal (`hdpe_seal`)

Conditional one supplied formed HDPE seal if actually attached to a bulk outlet; weigh the whole article including documented retained minor constituents. HDPE resin, sheet, lining, mixed closure families and an unspecified packaging bundle are not this article. Manufacturing and post-release service consumption are separate. Bulk tanks/tankers are durable equipment with disclosed service allocation, never product net mass or a fresh tank purchase per lot.

- Selected flow: HDPE tamper-evident loading seal
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources: jrc-pulp-bref-2015

#### Outputs

##### Product flows

###### Residual lyes from the manufacture of wood pulp, including lignin sulphonates, but excluding tall oil (`liquor_release`)

The selected broad residual-lye Product identity is restricted here to newly first-released clarified calcium acid-sulphite whole liquor concentrate: aqueous, unmodified, unpurified, actual solids, sugars, dissolved salts, pH and calcium counterion. Production mix at plant and unspecified treatment do not prove a calcium grade or provider. Its Chinese general-comment variant calls excluded tall oil 松香油; retain the official basename above and the explicit tall-oil exclusion. Never substitute kraft black liquor or refined dry lignosulphonate. This row alone is the reference output.

- Selected flow: Residual lyes from the manufacture of wood pulp, including lignin sulphonates, but excluding tall oil `eb0f8f48-b84e-4202-adaf-41b7ce30b584`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_release`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Washed unbleached calcium-sulphite softwood pulp slurry (`wet_pulp`)

Joint fibre output at the wash/separation gate, including its independently measured water and dry pulp content. This is not the residual-liquor denominator or a bleached/dried market pulp. Keep actual wet mass, dry fraction, retained liquor/salts and destination; physical output is reported without an automatic avoided-pulp credit. Its exclusive later finishing is outside this liquor manufacture.

- Selected flow: Washed unbleached calcium-sulphite softwood pulp slurry
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Returned heating-steam condensate water (`returned_condensate`)

Actual clean condensate crossing back to the steam supplier, measured separately with return temperature/enthalpy and water ownership contract. It belongs to the heating physical mass/energy gate, not the liquor condensate waste. Reconcile input steam with returned mass, true vent losses, blowdown and stock; no assumed complete return and no automatic coproduct credit.

- Selected flow: Returned heating-steam condensate water
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: jrc-pulp-bref-2015

###### HDPE tamper-evident loading seal carried with gross shipments (`hdpe_seal_out`)

Only the physical outward leg of the same individual seal type. Track gross actual movements, including seals on replaced/returned lots; no new Q, no additional procurement, and no saleable coproduct. The service ledger carries incremental post-release operations.

- Selected flow: HDPE tamper-evident loading seal carried with gross shipments
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources: jrc-pulp-bref-2015

##### Waste flows

###### Rejected softwood chip screening residue (`chip_screen_reject`)

Actual rejected chip fraction, with its moisture and specific cause, destination and treatment; distinguish clean wood fines from contaminated material by separate cards when both exist. It cannot disappear from the original wood/water/carbon account or generate an assumed fuel credit.

- Selected flow: Rejected softwood chip screening residue
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Calcium-sulphite knot and fibre screening reject slurry (`pulp_screen_reject`)

One measured wet screening-reject stream with dry fibre, retained liquor and water subledgers. Internal return cancels before external output; external treatment and distinct contamination streams remain separately identified.

- Selected flow: Calcium-sulphite knot and fibre screening reject slurry
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Calcium cooking-acid preparation settling sludge (`acid_preparation_sludge`)

Actual preparation sludge of measured carbonate/sulphite/sulphate/impurity composition and moisture. Do not label it pure gypsum or infer hydrate water from a generic calcium-sulphate CAS. Keep the real waste stream distinct from decanter sludge.

- Selected flow: Calcium cooking-acid preparation settling sludge
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Calcium spent-liquor decanter sludge (`liquor_decanter_sludge`)

Insoluble material actually removed before concentration with measured entrained whole liquor and water. Keep it as one receiving waste stream with composition subaccounts; no additional purchase or duplicate lignosulphonate loss. If an isolated chemically distinct scale is removed, add its own row.

- Selected flow: Calcium spent-liquor decanter sludge
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Spent-sulphite-liquor evaporation dirty condensate (`dirty_condensate`)

Actual condensed water from liquor evaporation sent to external treatment, carrying measured SO2/sulphite, methanol, organic-acid and COD/TOC subaccounts. This is one wet transfer; measured contained chemicals are not emitted again as direct water releases. Any internal condensate reuse cancels and any separate treatment/stripper is explicitly inventoried.

- Selected flow: Spent-sulphite-liquor evaporation dirty condensate
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015

###### Calcium-sulphite equipment cleaning wastewater (`cleaning_effluent`)

Actual aqueous cleaning outlet with whole cleaning solution, entrained fibre/liquor and measured composition; no assumed zero during downtime. Route to the named treatment provider. Other process effluent is not silently bundled into this row.

- Selected flow: Calcium-sulphite equipment cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015

###### Calcium-sulphite pulp-washer aqueous purge (`washer_purge`)

Actual washing-water purge not already transferred as weak liquor or entrained pulp water. Reconcile wash water, recycled filtrate and fibre carryover. If entirely internally recovered, demonstrate that topology rather than deleting its raw records.

- Selected flow: Calcium-sulphite pulp-washer aqueous purge
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015

###### Indirect heating-loop water blowdown (`heating_blowdown`)

Conditional actual heating-water purge distinct from supplier-returned condensate and liquor dirty condensate; record salt content, temperature and receiver. A nonexistent purge is documented not applicable; input steam cannot be made to balance by inventing this outlet.

- Selected flow: Indirect heating-loop water blowdown
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources: jrc-pulp-bref-2015

###### Rejected calcium spent-sulphite liquor concentrate (`offspec_liquor`)

Only actual rejected whole liquid sent outside for treatment; separately retain off-spec closing WIP and internal rework without creating new Q. If actually sold as a different product, document lawful function and price and create a separate Product card before allocation.

- Selected flow: Rejected calcium spent-sulphite liquor concentrate
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

###### Discarded HDPE tamper-evident loading seal (`hdpe_seal_waste`)

Actual broken/removed seals as a single waste type. Weigh and reconcile with seal stocks, gross outward attachment and external returns; internal reuse cancels. It is neither recovered-resin production nor a credit.

- Selected flow: Discarded HDPE tamper-evident loading seal
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources: jrc-pulp-bref-2015

##### Elementary flows

###### sulfur dioxide (`so2_air`)

Actual residual SO2, CAS7446-09-5, after collection/absorption, with measured gas state and outlet-specific capture. The native Elementary binding is emissions to air unspecified, non-long-term; known stack/urban/indoor distinctions require the correct medium identity. Recovered internal SO2 and sulphite in wastewater are not this emission.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015

###### methanol (`methanol_air`)

Only actual measured methanol CAS67-56-1 released to air after capture; not total VOC, alpha-methylbenzyl alcohol, indoor methanol or an agricultural-soil flow. Native air-unspecified non-long-term binding requires disclosure of actual receptor and replacement when a known specific compartment applies. Methanol remaining in transferred dirty condensate is a contained subaccount. The catalog synonym list also contains sodium methoxide, methanol-water mixtures and functional-group/formulation terms; those are not authorized identities. Selection is restricted to analytically identified neutral methanol matching the primary basename/CAS, not those synonym alternatives.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015

###### acetic acid (`acetic_air`)

Only actual identified acetic acid CAS64-19-7 escaping to air; neither total acidity/COD nor indol-3-ylacetic acid or an aqueous transfer. Native air-unspecified non-long-term binding requires actual outlet/receptor disclosure and correct rebinding for a known specific compartment. No volatile-acid emission is presumed from concentration alone. The native synonym catalog also mentions sodium acetate, cellulose diacetate and formulation names; these are chemically distinct and excluded. Only measured acetic acid matching the primary basename/CAS is adopted.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015

###### water vapour (`water_vapour_air`)

Actual uncondensed water vapour CAS7732-18-5 crossing to air, excluding water condensed for reuse/treatment or returned to supplier. Native air-unspecified non-long-term Mass binding is not a purchased steam identity. Widely mixed water/isotope synonyms do not authorize heavy water; selected physical substance is ordinary H2O vapour.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015

###### Carbon dioxide from calcium-carbonate acid reaction to air (`carbonate_co2_air`)

Actual geogenic carbonate carbon released as CO2 during acid preparation, after separately measuring reacted carbonate, retained inorganic carbon and any gas capture. It is not fossil-fuel CO2 or biogenic wood-carbon CO2. Do not adopt a fossil-labelled UUID, infer complete reaction, or infer water formation without balanced measured reaction evidence.

- Selected flow: Carbon dioxide from calcium-carbonate acid reaction to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row a_j from the sole final normalization in section 8; do not divide again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outlets`
- Sources: jrc-pulp-bref-2015; lignostar-calcium-liquor

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_status | joint outputs | This method is attributional and applies the ILCD hierarchy only where allocation is required. Determine legal status, positive/negative/zero market value and actual function of wet pulp, weak liquor and rejected material at their real gates. A CPC waste label or sale alone proves neither burden-free input nor a treatment function. Negative-value or ambiguous streams need a separate service/system-boundary assessment; do not force a positive product price. | ilcd-allocation-2010 |
| allocation_subdivide | each exchange | First separately measure or virtually subdivide exclusive processes: liquor clarification/concentration and its sampling, steam, cleaning and losses belong to liquor; exclusive pulp finishing belongs to pulp. Use physical process understanding and traceable quantitative relationships for virtual subdivision. Justify any remaining black box and document distortion if practicable subdivision was not performed. | ilcd-allocation-2010 |
| allocation_causality | remaining shared exchange j | For every still-shared exchange identify its determining physical causal relationship with each function. A conserved element, material destination, heat duty or equipment time is usable only when it determines that exchange, with losses and non-valued outputs accounted for. Wet mass, dry mass or energy content alone is not a universal key. Keep exchange-specific alpha_j and its test evidence; do not reuse one allocation fraction automatically for all chemicals, energy and releases. | ilcd-allocation-2010 |
| allocation_residual_value | genuinely inseparable remainder | Only the remaining flows without a defensible determining physical relation use contemporaneous representative market value at the common pulp/weak-liquor separation gate and actual states. If only concentrate or bleached pulp is traded, derive gate values transparently from matched sales and attributable downstream processing, storage, packaging and transport costs; use actual quantities and documented time/currency conventions. Do not use purified powder prices for sugar/salt-bearing weak liquor. Report sensitivity and unresolved/negative-price treatment; invent no fixed ratio and no arbitrary physical/economic choice. | ilcd-allocation-2010 |
| allocation_no_credit | returns and coproducts | Keep complete unallocated physical mass/species ledgers independently of the partitioned burden vectors. Pulp and each external branch are measured physical outputs, never automatic credits. Internally reused SO2, water and off-spec liquor cancel at exact transfers; they are not sales or fresh purchases. Condensate return follows the explicit upstream supplier agreement without an automatic coproduct/recovery credit. | jrc-pulp-bref-2015; ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | mill | First quality release | calibrated tank/scale and release record | lot_id; event_id; first_release_flag; gross_mass; tare_mass; wet_net_mass; dry_fraction; sampling_method; pH; free_SO2; calcium; residual_sugars; insolubles; acceptance_limits; rejected_mass; opening_FG; closing_FG; opening_WIP; closing_WIP | Weigh each lot net of container; sample a homogenised lot at stated locations/time using a validated solids/species method; retain buyer limits and first-release decision. Record failed/rechecked/returned lots separately. Raw aggregation requirements: Retain raw lot masses and unique first-release event list; sum eligible new wet net masses to Q; keep closing FG in the release cohort and never add it again; no exchange normalization here. The aggregation field below declares the reporting basis only; this protocol performs no division and the sole final normalization in section 8 calculates it. | kg; fraction; assay units | each batch and release event | complete declared manufacturing cohort and all failed periods | concentrate release tank and actual laboratory | per 1 kg reference flow | scale/tank calibration; sample chain; analytical QC; receiver specification; signed release; stock reconciliation |
| cp_materials | mill | Each atomic purchased supply and joint material | receipt/issue/stock and preparation record | row_id; event_id; supplier; supplied_form; raw_unit; quantity; opening_stock; closing_stock; assay; moisture; carrier_water; species; chip_volume_convention; measured_density; density_temperature; WIP_mass; WIP_burden_vector; internal_transfer_id; destination | Weigh purchases/issues and gross physical outputs separately; meter each transfer; pair chip volume and wet mass at matched packing/moisture; retain actual acid recipe, chemical speciation and stage stocks. Raw aggregation requirements: Retain unnormalised event quantities by row and stage; separately reconcile opening plus receipts versus closing plus issues; preserve all inherited per-exchange vectors and internal links; feed calc_raw and calc_burden. The aggregation field below declares the reporting basis only; this protocol performs no division and the sole final normalization in section 8 calculates it. | kg; m3; kg/m3; assay units | each receipt/issue/transfer and stock cutoff | same cohort plus opening WIP provenance | wood yard; acid plant; digester; washers; clarifier; evaporator | per 1 kg reference flow | invoices; batch sheets; assay certificates; paired mass/volume measurements; calibrated meters; transfer and WIP ledgers |
| cp_utilities | mill | Electricity and each water/steam interface | submeter and supplier contract | row_id; meter_id; raw_quantity; raw_unit; start_end_reading; timestamp; pressure; temperature; steam_quality; mass; enthalpy; condensate_return_mass; return_enthalpy; supplier_water_ownership; cooling_makeup; purge; duration; failure_idle_cleaning_state | Use stage submeters and reconciled main meters; meter steam/return independently and document thermodynamic calculation state and ownership. Retain true rate versus integrated reading; record zero-output periods. Raw aggregation requirements: Retain raw numerator totals by carrier and stage without dividing; separate dedicated and shared service and supply/return legs; feed calc_raw then calc_burden. The aggregation field below declares the reporting basis only; this protocol performs no division and the sole final normalization in section 8 calculates it. | MJ; kWh; kg; m3; pressure; temperature; kJ/kg | continuous or each event with period totals | whole cohort including start-stop/idle/cleanup | all included manufacturing utility interfaces | per 1 kg reference flow | calibration; meter reconciliation; provider boundary; enthalpy/state method; failure logs |
| cp_outlets | mill | Each waste and actual emission species | transfer manifest and outlet/species monitoring | row_id; source_zone; destination; outlet_id; parent_total; partition_id; event_id; wet_mass; dry_solids; species; concentration_basis; gas_volume; volume_is_integrated; gas_flow_rate; interval; gas_temperature; pressure; humidity; measured_capture; bypass; raw_unit | Weigh each waste and sample actual composition; measure each identified gas species with matching dry/wet gas volume and conditions after capture; record bypasses and fugitive releases. Describe treatment receivers and exclude double counting of contained pollutants. Raw aggregation requirements: Retain raw species and wet-stream numerators and parent/outlet topology; total and source partitions are alternative views not additive; convert only through calc_raw before allocation. The aggregation field below declares the reporting basis only; this protocol performs no division and the sole final normalization in section 8 calculates it. | kg; m3; kg/m3; mg/Nm3; kg/h | each transfer and monitored interval | full cohort including failed/cleanup/abnormal events | each source-resolved liquid and gas outlet | per 1 kg reference flow | manifest; receiver; laboratory QC and detection limits; gas standard state; capture tests; independent balance |
| cp_packaging | mill | Each individual HDPE seal type | stock and physical-movement ledger | seal_type; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchases; external_returns_received; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; gross_outward_attached; external_return_outward; waste; internal_reuse; unit_article_mass; event_id; cohort | Count and weigh the actual whole seal article by type and track every custody movement; split manufacturing from post-release service. Absence requires a verified bulk-transfer configuration. Raw aggregation requirements: Retain complete raw six-leg balance per article; cancel internal reuse; never infer kg/article from item count; do not divide here or mix packaging into Q. The aggregation field below declares the reporting basis only; this protocol performs no division and the sole final normalization in section 8 calculates it. | kg; items | each movement and cutoff | same physical opening/closing cutoffs plus service period | all controlled storage/loading points | per 1 kg reference flow | stock count; article weighing; purchase/return/shipment/waste tickets; custody links |
| cp_allocation | mill | Every shared burden exchange | subdivision/causality and common-gate value worksheet | exchange_id; exclusive_scope; raw_burden; causal_test; alpha_j; common_gate_state; actual_joint_quantities; contemporaneous_prices; currency; price_period; exclusive_downstream_cost; inherited_allocated_vector; uncertainty; sensitivity | Submeter or virtually subdivide; test each remaining exchange-specific determining physical relation; derive gate values only for the genuine remainder from traceable contracts/costs. Do not reallocate inherited already-assigned burdens. Raw aggregation requirements: Keep allocation worksheets in native numerator units; form alpha_j evidence and exclusive/shared split without normalizing; calc_burden uses them once. The aggregation field below declares the reporting basis only; this protocol performs no division and the sole final normalization in section 8 calculates it. | native row unit; currency; fraction | each campaign and price update | same common-gate cohort and representative price period | joint pulping and exclusive liquor branch | per 1 kg reference flow | causal tests; calibration; gate-state price corrections; provenance; sensitivity |
| cp_services | post_release | Released-cohort storage and dispatch | cohort service and FG ledger | cohort_id; original_release_id; opening_FG; closing_FG; gross_dispatch; customer_return; incremental_rework; storage_time; utility_row; packaging_row; raw_service_quantity; original_burden_link | Meter real incremental storage/loading/cleaning by released cohort including original historical FG and returns; retain original manufacturing burden link; separate every utility/material/waste/species. Raw aggregation requirements: Retain raw service numerators and cohort linkage; never treat dispatch or reinspection as new Q; do not add already-included closing FG to manufacturing output. The aggregation field below declares the reporting basis only; this protocol performs no division and the sole final normalization in section 8 calculates it. | native row units; kg; time | each service event | actual service period; historical cohort provenance retained | post-release tank/loading interfaces | per 1 kg reference flow | meter/custody logs; FG balance; actual incremental rework; original release |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | For each event convert its actual raw quantity to the card unit before allocation. For concentration times an already integrated volume use that volume once; for a true rate integrate over time once. Gas concentration and volume must share normal/actual state and dry/wet basis. Derive mass from volume only with independently measured substance-specific density; preserve reaction/species evidence. | raw_quantity; raw_unit; measured_density; gas_state; cp_materials; cp_utilities; cp_outlets | R_j | jrc-pulp-bref-2015 |
| calc_burden | all inventory rows | For each burden exchange form A_j = dedicated_current_j + alpha_j * shared_current_j + inherited_open_WIP_j - carried_close_WIP_j. Current terms include all failed, idle, start-stop, cleaning and real pre-release rework loads. Inherited vectors are already attributed and cannot receive alpha_j again. Keep each WIP lot and exchange linked to eventual release; no mass-only carryover. Physical joint-output and outlet ledgers remain unallocated; their reported A_j is the appropriate measured physical quantity without a coproduct credit. | R_j; alpha_j; inherited_open_WIP_j; carried_close_WIP_j; cp_materials; cp_allocation | A_j | ilcd-allocation-2010 |
| normalize_once | all inventory rows | a_j = A_j / Q; A_j = attributable unnormalised exchange numerator in the declared card unit; a_j = exchange amount per 1 kg reference flow. Execute this division once only when Q > 0; cards and collection aggregation reference this same result without another division. For Q = 0 retain every raw and inherited load with its destination/cohort; report no unit result and no zero or fabricated denominator. | A_j; Q; cp_release | a_j | ilcd-allocation-2010 |
| calc_physical_gates | mill; post_release | For each stage and the combined boundary reconcile opening physical stock + all real external inputs + external returns received = closing physical stock + gross physical outward movements + actual emissions. Internal transfer pairs cancel only at the combined gate. Gross V is the complete event-resolved net wet physical outward quantity, not net customer sales or Q. F includes only newly first-released events. X may remove only an exact duplicate event on the same side from OTHER; it never removes a distinct outflow, loss, return or coproduct. Released Q is either a physical transfer at a module boundary or contained in released closing FG and later movements; never add Q and the same closing FG again. | opening_stock; external_inputs; external_returns; closing_stock; gross_V; actual_emissions; F; X; OTHER; cp_materials; cp_release | reconciled physical gates | jrc-pulp-bref-2015 |
| calc_packaging | hdpe_seal; hdpe_seal_out; hdpe_seal_waste | For each actual seal type: opening empty/attached-WIP/attached-FG/reusable + external purchases + external returns received = closing empty/attached-WIP/attached-FG/reusable + attached seals on gross outward shipments + external returns sent + waste. These are six distinct legs with all opening/closing locations; cancel internal reuse. Match the same physical cutoff and gross shipment events; no net-product Q substitution or repeated purchase. | cp_packaging; opening_packaging; purchases; returns_received; closing_packaging; gross_attached_out; returns_sent; waste | balanced per-type packaging account | ilcd-allocation-2010 |
| calc_outlet_topology | all physical outlets | Each mixed outlet total equals its non-overlapping measured source partitions at the same sampling/control point. Choose the total or the complete source partitions for inventory and one receiving provider for that actual transfer; never add both views or bind several complete treatment providers. Independently reconcile chemical species and water; indicators cannot fill missing species. | cp_outlets; parent_total; source_partitions; provider_id | single-counted physical outlet | jrc-pulp-bref-2015 |
| calc_services | post_release | Preserve original release-cohort manufacturing burden on historical FG and customer returns. Reinspection/dispatch creates no new production; assign only measured incremental storage, loading, cleaning and real rework to its cohort. On combination cancel matched internal release transfers and retain complete FG, gross shipment, return, waste and service records. Report separate service intensity with its explicit service basis without applying manufacturing normalize_once a second time. | cp_services; original_burden_link; raw_service_quantity; cohort_id | incremental service ledger | ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify full native identity and all hard facets before each dataset binding; core residual-liquor UUID is broad and conditional utility identities retain their exact restrictions. Supplier/grade/auxiliary UUID gaps are disclosed, not zero. | native records; exact support chain; supplier certificates; scope and media evidence |
| dq_sampling | cp_release; cp_outlets | Use representative homogenised lot sampling and validated solids/species analyses with detection limits, calibration, repeats, uncertainty and sampling bias. No cited food-grade purity or supplier typical solids becomes a release limit. | sampling plan; method validation; analytical QC; actual receiver limits |
| dq_completeness | all stages | Collect the full declared representative campaign/period and abnormal/failed/Q0/idle/cleanup events; track opening/closing WIP and per-exchange inherited vectors. No negative unexplained balance or unsupported not-applicable row may be treated as complete. | production logs; calibration; WIP provenance; independent physical and C/S/Ca/water checks |
| dq_method | allocation and post-release | Keep source applicability and vintage separate from current plant records. Report allocation causality/value corrections and sensitivity; supplier heat/water convention; complete service/cohort and packaging ledgers. Do not claim scientific/translation approval from engineering checks. | ILCD worksheet; foreground records; original sources; service/packaging reconciliation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | whole dataset | Confirm calcium acid-bisulphite whole-liquid supply from chip pulping, explicit wet pulp separation and declared industrial receiver. Reject a kraft black-liquor, other counterion, purchased-finished-liquid repack, purified powder, tall-oil or disposal-service substitution. | unsd-cpc-39230; jrc-pulp-bref-2015; lignostar-calcium-liquor; jecfa-calcium-2008 |
| validate_denominator | liquor_release; all inventory rows | Require unique cp_release first-release Q and exactly one 1 kg wet reference output. Verify A_j/Q occurs only in normalize_once; raw collection and cards do not divide again. Q0 has loads but no unit result. Closing released FG, reinspection, returns and dispatch never increase Q. | ilcd-allocation-2010 |
| validate_physical | each stage and combined gate | Require complete gross V and independent wet mass, dry solids, carbon, sulphur, calcium and water checks using measured speciation/reaction extents and independent stocks. Match internal transfer state/quantity and cancel at combined gate; retain failures, rejects, every external branch and WIP burden vectors. No two unknowns fitted by one residual. | jrc-pulp-bref-2015; lignostar-calcium-liquor |
| validate_inventory | all inventory rows | Verify each card’s property/unit and full description, raw protocol, source ids and actual condition. Add every actual unlisted atomic exchange; missing quantities and UUIDs are unresolved, not zero. Exact native reference-property and unit-group chain and declared media/voltage/geography restrictions must remain compatible with the dataset. | jrc-pulp-bref-2015 |
| validate_outlets | liquid and air outlets | Verify source partitions exhaust each parent without overlap; total and partitions are not additive and each actual transfer has one provider. Dirty-condensate contained species are not direct water emissions. Steam supplier return, air vapour, reaction water and dirty condensate remain distinct. Unknown species/flow states prevent a completeness claim. | jrc-pulp-bref-2015 |
| validate_allocation | cp_allocation | Verify exclusive/virtual subdivision first, then exchange-specific determining physical causality, then only the remaining common-gate contemporaneous actual-state market values. No fixed allocation ratio, arbitrary mass/price choice or assumed energy/coproduct credit; inherited vectors are not reallocated. | ilcd-allocation-2010 |
| validate_services_packaging | post_release; cp_packaging | Require complete opening/closing FG cohort service links and each packaging type’s six-leg physical balance at identical cutoffs. Seals carried on gross shipments are not net product Q or new purchases. Combining modules cancels matched internal Q and keeps all real incremental services and return/rework events. | ilcd-allocation-2010 |
| validate_evidence | all claims | Require complete cited sources and foreground applicability, explicit technical-synthesis limits, primary lot/meter/sample data and truthful uncertainty. Candidate engineering conformance is separate from methodology review, translation review, mapping acceptance and publication. | jrc-pulp-bref-2015; lignostar-calcium-liquor; jecfa-calcium-2008; ilcd-allocation-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Industrial binder/dispersant-feedstock modelling for the declared calcium whole-liquid concentrate at the stated solids and gate |
| allowed_use | Compatible liquid feedstock supply with actual receiver acceptance and declared allocation, upstream and service conventions |
| excluded_use | Universal lignosulphonate chemistry; purified food grade; powder; tall oil; kraft black liquor; other counterions; automatically credited fuel/recovery; waste-treatment service |
| required_metadata | virgin softwood species and shares; chip volume convention and measured moisture; calcium acid bisulphite route; carbonate assay and SO2 supply form; free and combined SO2 in cooking acid; cook programme; pulp and liquor separation gate; whole liquid without purification or modification; calcium counterion and actual dissolved salts; dry-solids fraction and test method; residual sugars and insolubles; pH and free SO2; receiver use and actual acceptance limits; net wet lot mass excluding packaging; first release event and unique lot identity; WIP inheritance by exchange; steam supply and condensate return convention; gas recovery and each actual outlet; legal and market status; site and period; conditional electricity binding geography and voltage |
| required_quality_disclosure | Primary meters and sampling; source vintage/applicability; unknowns and auxiliary UUID/provider gaps; complete Q0 and failure data; independent balances; WIP vectors; allocation evidence and sensitivity; utility return contracts; separate service/packaging accounting |
| update_trigger | Changed wood/base/acid route, purification/modification, concentration state, outlet/recovery topology, first-release gate, steam/electric supply, receiver use, legal/market status, material allocation, or evidence invalidation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-39230 | official_guidance | United Nations Statistics Division, CPC Version 3.0, code39230, official detail and repository source CPC_Ver_3.0_Structure_30Jun2025.csv; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39230 | Classification context including lignin sulphonates and explicit tall-oil exclusion; not identity, product status or LCA allocation evidence. |
| jrc-pulp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board, 2015, §§4.1.1–4.1.5/4.2.2/4.3.22; PDF409/415/417–424/437/456/471/517–518, printed371/377/379–386/399/418/433/479–480; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Primary technical route context: calcium versus magnesium recovery; fibre/liquor split; byproduct branches; SO2/condensate and failure controls. Fig4.4 is magnesium and Fig4.10 includes yeast; neither is the selected calcium whole-liquid plant. No numerical defaults or current compliance claims. |
| lignostar-calcium-liquor | handbook | LignoStar Group BV, Calcium Lignosulfonates, Calcium Bisulfite Pulping Process and liquid/powder interface, undated page retained2026-10-26; https://www.lignostar.com/en/calcium-lignosulfonates/ | First-party supplier technical description of calcium-counterion cooking, carbonate/hydroxide acid make-up, decanting, evaporation and industrial supply. Supports feasible liquid branch; typical solids/time/temperature and marketing statements are not prescriptions. Not one shared SKU/factory or LCA allocation method. |
| jecfa-calcium-2008 | official_guidance | FAO/WHO JECFA, Calcium Lignosulfonate (40-65), Chemical and Technical Assessment, 69th JECFA2008, §§4–5, PDF1–3 with complete8-page context; https://www.fao.org/fileadmin/templates/agns/pdf/jecfa/cta/69/Calcium_Lignosulfonate__40_65.pdf | Independent primary manufacturing counterexample: acid adjustment, ultrafiltration and spray drying define a purified food-grade endpoint beyond this whole industrial liquid. Supports retaining sugar/sulfite/calcium context, not transferring food-grade limits, purified-polymer identity or quantitative inventory. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March2010, §§7.9.2–7.9.3, PDF275–292/printed255–272, especially printed256/259/264–268; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation when required: subdivision/virtual subdivision, exchange-specific determining physical causality and residual actual-state common-gate economic values. This is method guidance, not pulp recipe, a factory fraction, automatic zero burden or recovery credit. |
