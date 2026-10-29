---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.paper-faced-gypsum-board
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Paper-faced gypsum board manufacture from purchased stucco

This PCR applies only to whole ordinary paper-faced gypsum board made from whole purchased calcined stucco with direct natural-gas drying. It covers a real manufacture route through first quality release and the actual disclosed subsequent cohort services. It does not set a recipe, board thickness, moisture limit, performance class or lifetime. The source-supported route and the accounting identities below are transparent technical synthesis, not measured production quantities or proof of one contemporary order. All conditions in this document and each flow-card description remain applicable together.

## 1. Scope and Applicability

Apply only when the declared finished composite and all process conditions above match. Gypsum powder, mineral-binder wood/fibre board and gypsum blocks need different terminal identity and operations. Paper-grade/auxiliary identity gaps or uncollected future site quantities do not create an imaginary factory result.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.paper-faced-gypsum-board |
| classification_refs | CPC 3.0 37530; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Ordinary whole paper-faced gypsum wall/ceiling board made from purchased calcined hemihydrate with direct natural-gas drying; actual product configuration is declared |
| excluded_products | Bagged plaster powder; raw gypsum; dense/hollow blocks; cast ornaments; glass-mat and gypsum-fibre panels; vegetable-fibre mineral-binder board; installed wall systems; special-performance products without specific review; on-site calcination or indirect-steam/thermal-oil drying routes |
| representative_product | One intact dried gypsum-core board with paper on both faces and actual declared additives; packaging removed for net weighing |
| production_route | Receive and prepare whole purchased stucco and each separate supply article; dose and mix slurry/foam; feed between two liners; form and hydrate on conveyor; wet cut; direct-gas dry; end trim; inspect and first release; trace actual subsequent packaging/storage/handling separately |
| market_state | Manufactured dried rigid uninstalled board at plant; first quality release is the production gate; no assumed service life or installed-system functional equivalence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply intact paper-faced gypsum lining board as a manufactured construction product; installed wall performance belongs to a separate system study |
| How much | 1 kg net whole first-released board of one declared configuration and acceptance condition |
| How well | Actual manufacturer/specification acceptance, dimensional and paper/core integrity checks and applicable recorded tests; no default threshold or inferred fire/acoustic class |
| How long or cycle | One manufacturing cohort through first quality release; report the actual subsequent service observation horizon separately; no default installed lifetime |
| reference_flow_link | finished_board |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Gypsum Board `0cf61f85-2df7-4f65-be58-257d4252fb02` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Whole composite configuration and actual gypsum feed origin/phases; Paper on both faces and each actual formulation with carrier water; Measured net board mass and accepted moisture/conditioning state; True single-face outline area and measured shape-specific geometry; Actual thickness and mass/area/count conversions with independent measurements; Product grade and manufacturer specification/tests without default strength/fire/acoustic values; First-release cohort/Q and full failed/zero-output operation records; Direct-gas dryer and actual utility/carrier supplier interfaces; Opening/closing WIP inheritance vectors and accepted-FG/service horizon; Each packaging physical leg and once-only upstream ownership; Installed assets/fluids and new/old repairs with current service share; Actual gas species/media and independent phase-water/reaction evidence |

The qualifiers must appear in dataset metadata, process/reference comments or equivalent consumable fields. Both liners and actual incorporated constituents belong to the reference; removable transport packaging does not. All native restrictions in finished_board apply to the reference object.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = sum of measured net masses of the whole boards first released in the declared cohort; calibrated weighing excludes shipping packaging and records actual moisture state. Once released, retained FG is already included in Q. |
| native_energy | energy rows | Net calorific value | MJ | Preserve native extensive energy quantity for electricity. Convert raw kWh to MJ using the exact dimensional identity 1 kWh = 3.6 MJ before attribution; do not apply Mass/kg requirements to an energy numerator. Fuel mass and heat content remain separate linked subledgers. |
| actual_area | geometry disclosure | Area | m2 | Record the sum of actual single-face projected outlines. L times W is valid only for verified rectangles; nonrectangular/cutout shapes use measured or traceable drawing-specific geometry. No bounding box, doubled faces, nominal thickness-derived density or secondary-property factor substitutes for independent mass/area measurements. |
| raw_volume | volume conversion | Volume | m3 | Distinguish cumulative volume from a rate: use a total once and integrate only genuine rates. Convert gas or liquid total volume with independent density for that same substance and actual temperature/pressure/composition/wet state; never assume water density for another material. |
| native_count | asset/count disclosure | Number of items | item | Item(s) and item represent the same physical count with factor 1; they do not imply kg per item. If converting a board count to mass, measure net M for the same complete configuration/conditioning state on a calibrated scale with sampling scope and uncertainty. Asset count is physical stock; current asset service is a separate burden fraction. |
| phase_water | water phase and composition | Mass | kg | Measure free moisture independently from hemihydrate/dihydrate/anhydrite phase fractions and reaction extent using suitable phase-sensitive analysis. Preserve supplied formulation carrier water and structural water as composition subledgers; unknown phase is not an invented separate water exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole purchased calcined hemihydrate stucco delivered to mixer-feed storage, plus separately supplied liner papers, named additives and utilities; upstream mining/calcination belong to the actual compatible supplier dataset |
| starting_condition_role | Purchased intermediate manufacture through first board quality release; disclosed actual post-release services are additional cohort-linked activity |
| product_classification_scope | Paper-faced board is a narrower manufactured plaster-article category within CPC 3.0 37530; powder and plant-fibre mineral-binder board are distinct |
| recursive_input_rule | Externally bought board is not a shortcut to this manufacture route. Actual returned same-cohort board is traced without new Q; internal scrap reuse cancels at combined boundary. Real purchased recovered material requires separate compatible identity and upstream burden treatment |
| upstream_dataset_requirement | Bind each whole supply article once to a provider matching actual phase/form/route/geography/time and embodied components; identify ingress packaging and transport ownership. No default avoided burden |
| disclosure | Declare cohort, gates, process configuration, failed/idle operations, all stocks, all species, phase/physical/energy balances, actual services and evidence limitations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | entire foreground | Include receipt and preparation; real dosing/foam preparation; slurry mixing; liner forming; hydration/setting; wet cut; direct-natural-gas drying with actual recirculation and control; trimming; quality checks and first release. Include all startup/shutdown, failed, zero-output, idle, cleanup and rework activities. This is a technical synthesis across primary sources, not a claim that they describe one SKU or factory. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `ga-making-gypsum-board` |
| b_purchased | purchased intermediates | Whole purchased stucco and formulations enter once. Phase assays, constituent CaSO4, structural/free/carrier water and included paper chemicals are composition subledgers. If actual on-site calcination or another heating route occurs, this route does not apply until the complete upstream/utility/loss/emission units and compatible identities are separately reviewed; do not invent a boiler or buy the same stucco twice. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions` |
| b_first_release | Q and accepted FG | Q is new first-quality-release net whole-board mass, including the same cohort closing accepted FG. Dispatch, return or retesting never creates new production. Keep all actual packaging/storage/handling after Q in an original-cohort service ledger with its own observation horizon; exclude only unused/unassigned service charge from that service period. Do not deduct already performed service merely because FG remains in stock. Actual post-release work requires manufacturer/specification permission, post-work tests and actual acceptance/rejection with final disposition. Record every added/removed new or old material/part and free/carrier/crystal/reaction-water phase independently. Repair-held FG is one labelled FG substate or a disjoint repair-WIP state, never both. Neither broken facings nor hardened/rewetted core is assumed restored; no new Q. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. | `ga-making-gypsum-board`; `ilcd-detailed-2010` |
| b_physical | gross physical gates | Retain all gross physical incoming and outgoing legs regardless of burden allocation shares. At manufacturing gate reconcile complete wet-state raw/WIP/installed-fluid/repair stocks and actual external species against first-release board and real outputs. At warehouse gate reconcile opening FG plus first-release board plus actual returns and added matter against closing FG plus gross shipments, samples, damaged disposal and real water/material losses. At combined gate cancel internal Q and internal reuse once. No mass allocation coefficient scales physical legs. Include the full independent physical quantities and each inherited exchange vector for unused/non-WIP material stores as well as every raw/WIP state; preserve receipt/issue/closing identities and whether a quantity is already net consumption. Do not apply a second stock correction to either that quantity or its already reconciled vector. Record stage_internal_in and stage_internal_out as matched same-event physical transfers and inherited exchange vectors, retaining row, provider, property/unit, gate, phase, period and cohort coordinates; cancel only the matched pair at the combined boundary. Actual hydration formation/consumption remains in its species/phase subledger, not a second external receipt. First WIP-to-FG acceptance enters accepted_production once; all other FG transfers are mutually exclusive and retain original Q, so a stock movement never repeats first acceptance. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `ilcd-detailed-2010` |
| b_actual_atoms | all exchanges | Every actual supplied formulation, material, fuel, energy carrier, packaging article, waste and real emitted species needs one distinct atomic row. Conditional absence requires affirmative evidence; unknown is not zero or not_applicable. Add actual unlisted exchanges with their true identity and native property before use. No total dust/NOx/VOC/COD/carbon indicator is a surrogate specific chemical species. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions` |
| b_water_interface | water and utilities | For every real external cooling-water or heat-carrier interface, disclose gross supplied/returned mass, real phase, temperature/pressure/enthalpy and provider water/energy ownership. External usable return water is Product; actual blowdown or contaminated liquid is its own Waste stream. Never duplicate complete carrier-provider energy or substitute a nonexistent steam/condensate circuit. For actual cooling-water/heat-carrier Product supply and external Product return, the physical numerator is the independently measured full gross native-unit leg V_j, so this same normalization gives V_j/Q for manufacture or V_j/original Q for the observed service horizon. It is not a stock-corrected water consumption, attributed heat burden or economic/service share. Keep the independent attributable supplier/service burden and carrier mass/phase/P/T/enthalpy separately with one provider; no added purchase, boiler/steam system or return credit is implied. | `grenzebach-gypsum-solutions`; `ilcd-detailed-2010` |

## 6. Process Inventory Structure

The production chain is receipt/preparation → dosing and slurry/foam mixing → two-paper forming → setting by hydration → wet cutting → direct-gas drying → end trimming/quality checks → first release. Step-specific raw records and independent physical/phase gates are mandatory even where one process below aggregates the complete manufacture. Use exactly one atomic exchange per card and retain its complete description. A conditional row is used only when actually present; absent requires evidence and unknown remains unresolved. Every card references the same normalize_once result in its native numerator unit; none performs a second division. New real ingredients, utility carriers, species, repair matter, packaging or external returns not listed here must receive additional physically specific rows before a data package is complete. No collective other input/output or zero placeholder hides them.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_board | Whole-board manufacture through first quality release | required | Receive/prepare purchased supplies; dose/mix; paper forming; hydration; wet cut; direct-gas drying; trimming and first acceptance | foreground manufacture | per 1 kg reference flow |
| p_dispatch | Performed packaging, storage and handling service | required | Real post-release services and FG movements linked to original cohort and declared horizon; no second production output | actual cohort support/service | per 1 kg reference flow |
| p_support | Actual equipment, maintenance and water-interface support | required | Actual physical assets/parts/fluids and justified current service burden for manufacturing and disclosed FG services | actual cohort support/service | per 1 kg reference flow |

### Process: Whole-board manufacture through first quality release (`p_board`)

Receive/prepare purchased supplies; dose/mix; paper forming; hydration; wet cut; direct-gas drying; trimming and first acceptance

#### Inputs

##### Product flows

###### Purchased calcined hemihydrate stucco (`stucco`)

One whole purchased powder delivery to the slurry mixer; record feed source, phases, additives and free moisture. Native China at-plant calcined hemihydrate Product requires exact upstream output-name agreement. Purchase it once: calcium sulfate, crystal water, assay fractions and included additives are subledgers. Raw dihydrate, anhydrite and cured paste cannot replace this flow. Transport and supplier-included ingress packaging have one upstream owner. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Stucco (calcined gypsum, hemihydrate), at plant `e984f1ce-5697-4303-8627-5d7e0a3a5e1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Front gypsum-board liner paper roll (`face_paper`)

Actual front paper roll, with moisture, coating and grammage; both faces belong to the whole finished composite. Finished paper is purchased once; its pulp, sizing and included water are not repurchased. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Front gypsum-board liner paper roll
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Back gypsum-board liner paper roll (`back_paper`)

Actual back liner roll separately from front liner and end tape; retain supplier-included components and one upstream burden owner. This is manufactured liner paper, not a bag, optical cardboard or purchased pulp. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Back gypsum-board liner paper roll
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Unmodified starch powder (`starch`)

When this actual unmodified granular polysaccharide is added, record plant origin, moisture and supplier grade. Native at-plant Starch is a product family, without a fixed grade or geographic supply; it is not an adhesive formulation, wet starch stream or permission to substitute chemically modified starch. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Modified starch powder for gypsum-paper bonding (`modified_starch`)

Conditional distinct whole purchased modified starch grade; identify actual modification chemistry and supplier. Do not bind unmodified Starch merely because both are polysaccharides; do not include this separately when already in a purchased formulation. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Modified starch powder for gypsum-paper bonding
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Purchased liquid gypsum-board foaming preparation (`foaming_soap`)

Only the actual single supplied aqueous surfactant formulation, with composition certificate, carrier water and concentration subledger. Meter the whole preparation once, plus only separately added dilution water. No antifoam, blowing-agent polymer melt or generic surfactant UUID substitutes without compatible formulation evidence. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Purchased liquid gypsum-board foaming preparation
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Purchased ground gypsum-seed accelerator preparation (`accelerator`)

Conditional actual whole supplied accelerator with measured dihydrate phase, coatings and any starch carrier; no fixed dose. If made on site, record each real purchased ingredient and grinding/drying energy and loss instead of additionally buying a fictitious preparation. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Purchased ground gypsum-seed accelerator preparation
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Purchased gypsum-setting retarder preparation (`retarder`)

Conditional single supplied retarder formulation; supplier composition and actual carrier govern its individual identity. An unspecified protein or organic-carbon assay does not establish a particular molecule. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Purchased gypsum-setting retarder preparation
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Expanded perlite board filler (`perlite`)

Conditional actually expanded filler; do not substitute unexpanded mineral, a filtration-aid grade or quantified paper content. Record moisture, particle structure and supplier treatment. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Expanded perlite board filler
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Expanded vermiculite board filler (`vermiculite`)

Conditional actual expanded filler; retain particle form, source and moisture, without inferring fire performance or copying an ore identity. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Expanded vermiculite board filler
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Chopped glass-fibre board-core reinforcement (`glass_fibre`)

Conditional measured chopped glass fibre within the declared ordinary paper-faced product; identify glass type, sizing, moisture and length. Glass-mat facings, yarn and fibre-reinforced polymer are different products. A marketed special-performance board requires a fresh applicability review. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Chopped glass-fibre board-core reinforcement
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Purchased cellulosic pulp for board core (`pulp`)

Conditional actual purchased pulp, separately from supplied finished liner paper; record virgin/recovered origin, pulping route, supplied wet mass and independent dry content. A virgin wood-pulp paper-production record does not automatically identify recovered board-core pulp. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Purchased cellulosic pulp for board core
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Purchased aqueous paper-edge adhesive preparation (`edge_glue`)

Conditional actual supplied adhesive preparation for edge closure; meter whole product including carrier water once. Polymer resin alone is not the complete adhesive. On-site mixing requires separately purchased chemicals, water, energy and losses. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Purchased aqueous paper-edge adhesive preparation
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Liquid tap water for slurry and actual dilution (`mix_water`)

Actual separately delivered treated liquid tap water; record supply, temperature and independent density if converting total volume to mass. Exclude carrier water already in purchased stucco, wet pulp and formulations. Do not use Hong Kong volume-reference screening density or water-resource/emission records for this purchased input. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The native secondary Volume coefficient is not measured density and is not used for conversion. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Medium-voltage grid electricity (`board_electricity`)

China grid-average consumption mix delivered to user at 1–35 kV only; not power-plant production, a provincial mix by guess or another voltage. Sum preparation, dosing, mixer, forming conveyor, dryer fans, saws and dust-control meters, including measured internal transformation loss once. MJ is the native energy-property unit; kWh is converted before allocation. Provider year and losses remain actual data requirements. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_mj_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Gaseous natural gas burned in board dryer (`dryer_gas`)

Actual gaseous fuel burned in the industrial dryer, on native Mass/kg basis; record total mass or total gas volume with independent gas density at declared temperature/pressure/composition, and separate measured NCV/energy subledger. No methane CAS is imposed on the whole mixture and no fixed density or LHV is borrowed. The native corrected CPC classification retains an older Other goods source category; this does not override its consistent fuel identity. Upstream supply excludes foreground combustion when direct exhaust is counted here. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Natural gas `c536902d-9d84-4984-8504-ab88cdbe8b7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_kg_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

##### Waste flows

##### Elementary flows

###### Atmospheric oxygen intake (`air_o2`)

Actual oxygen CAS 7782-44-7 in fresh drying/combustion/sweep air; measure integrated air amount and composition at one dry/wet state. This is a resource from air, not purchased compressed gas or an emission used backwards. Internal recirculation cancels; no aggregate air flow is added over the atomic species. Atmospheric CO2 has no invented fossil or biogenic attribution. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Atmospheric dinitrogen intake (`air_n2`)

Actual dinitrogen CAS 7727-37-9 in fresh drying/combustion/sweep air; measure integrated air amount and composition at one dry/wet state. This is a resource from air, not purchased compressed gas or an emission used backwards. Internal recirculation cancels; no aggregate air flow is added over the atomic species. Atmospheric CO2 has no invented fossil or biogenic attribution. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Atmospheric argon intake (`air_ar`)

Actual argon CAS 7440-37-1 in fresh drying/combustion/sweep air; measure integrated air amount and composition at one dry/wet state. This is a resource from air, not purchased compressed gas or an emission used backwards. Internal recirculation cancels; no aggregate air flow is added over the atomic species. Atmospheric CO2 has no invented fossil or biogenic attribution. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. Native dictionary synonyms mention Ar-40/Ar-41, but this binding is natural elemental Ar CAS 7440-37-1 only, with no isotope-specific activity or inventory implied. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Atmospheric water vapour intake (`air_h2o`)

Actual water vapour CAS 7732-18-5 in fresh drying/combustion/sweep air; measure integrated air amount and composition at one dry/wet state. This is a resource from air, not purchased compressed gas or an emission used backwards. Internal recirculation cancels; no aggregate air flow is added over the atomic species. Atmospheric CO2 has no invented fossil or biogenic attribution. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Atmospheric water vapour intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Atmospheric carbon dioxide intake (`air_co2`)

Actual carbon dioxide CAS 124-38-9 in fresh drying/combustion/sweep air; measure integrated air amount and composition at one dry/wet state. This is a resource from air, not purchased compressed gas or an emission used backwards. Internal recirculation cancels; no aggregate air flow is added over the atomic species. Atmospheric CO2 has no invented fossil or biogenic attribution. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Atmospheric carbon dioxide intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

#### Outputs

##### Product flows

###### First-released whole paper-faced gypsum board (`finished_board`)

One kg net whole dried rigid board at its first manufacturing quality release: gypsum core plus both paper liners, actual incorporated fibres, fillers, adhesives and retained free/structural water; exclude removable shipping packaging. Native at-plant building-material Product describes dried gypsum board with paper or fibreglass surface alternatives; this PCR selects paper on both faces and interior wall/ceiling board only. No fixed thickness, recipe, grade, geography or performance is inferred. Slurry, bagged powder, blocks and glass-mat facings are excluded. Q includes the same cohort closing accepted FG once; closing FG is neither a second production output nor a deduction from its manufacturing burden. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Gypsum Board `0cf61f85-2df7-4f65-be58-257d4252fb02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `generic`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `epa-gypsum-1993`; `ga-making-gypsum-board`; `ga-gypsum-board-identity`

##### Waste flows

###### Clean gypsum-board liner-paper offcut (`paper_trim`)

Actual clean offcut before incorporation; wet mass and actual treatment recorded separately from gypsum-contaminated composite trim. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Clean gypsum-board liner-paper offcut
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Gypsum-paper composite board trimming (`board_trim`)

Actual wet/dry composite cuttings; record gypsum, paper and water by measured composition subledger, without also exporting those components as full waste streams. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Gypsum-paper composite board trimming
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Unreleased failed paper-faced gypsum board (`failed_board`)

All failed, broken and startup board before first quality release; retain manufacturing and treatment loads even when sold or externally recycled. Internal reuse is a traced internal transfer, never a new purchase or output Q. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Unreleased failed paper-faced gypsum board
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Waste gypsum-paper slurry from mixer cleanout (`slurry_waste`)

Actual wet cleanout slurry including retained water; separately measured dry composition and phase state. COD is an indicator and does not determine a chemical mass or a second water unknown. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Waste gypsum-paper slurry from mixer cleanout
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Collected gypsum-paper production dust (`dust_waste`)

Dust captured by the actual filter and not internally returned; weigh the complete captured material. It is not the outlet air emission or gypsum-only dust by assumption. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Collected gypsum-paper production dust
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Destructively tested unreleased gypsum-board sample (`quality_sample`)

Actual destructive quality-test sample before release, with real disposition; its production and testing burden remains in the producing cohort. Do not count it in accepted Q or automatically transfer its load out. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Destructively tested unreleased gypsum-board sample
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Gypsum-board manufacturing aqueous effluent (`effluent`)

Actual separately exported process liquid with measured wet mass, dissolved and suspended species and treatment owner. Retained slurry water is not re-exported as this separate stream; dilution does not erase chemical mass. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Gypsum-board manufacturing aqueous effluent
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

##### Elementary flows

###### Fossil carbon dioxide to air (`exhaust_co2`)

Actual individual species CAS 124-38-9 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Fossil carbon monoxide to air (`exhaust_co`)

Actual individual species CAS 630-08-0 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Nitrogen monoxide to air (`exhaust_no`)

Actual individual species CAS 10102-43-9 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission.   The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.  Positive canonical ordinary molecular name and CAS, Elementary Emissions-to-air unspecified category and native reference Mass/kg define this admitted occurrence. Noisy HNO/N2O4/ion/isotope/carbon-black/graphite aliases do not redefine that ordinary species or authorize their substitution. Actual species, gas state and receiving compartment must match; fossil CH4 requires independently established fossil origin, and no aggregate NOx/VOC or native coefficient supplies a quantity or factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Nitrogen dioxide to air (`exhaust_no2`)

Actual individual species CAS 10102-44-0 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission.   The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.  Positive canonical ordinary molecular name and CAS, Elementary Emissions-to-air unspecified category and native reference Mass/kg define this admitted occurrence. Noisy HNO/N2O4/ion/isotope/carbon-black/graphite aliases do not redefine that ordinary species or authorize their substitution. Actual species, gas state and receiving compartment must match; fossil CH4 requires independently established fossil origin, and no aggregate NOx/VOC or native coefficient supplies a quantity or factor.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Sulfur dioxide to air (`exhaust_so2`)

Actual individual species CAS 7446-09-5 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Fossil methane to air (`exhaust_ch4`)

Actual individual species CAS 74-82-8 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission.   The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.  Positive canonical ordinary molecular name and CAS, Elementary Emissions-to-air unspecified category and native reference Mass/kg define this admitted occurrence. Noisy HNO/N2O4/ion/isotope/carbon-black/graphite aliases do not redefine that ordinary species or authorize their substitution. Actual species, gas state and receiving compartment must match; fossil CH4 requires independently established fossil origin, and no aggregate NOx/VOC or native coefficient supplies a quantity or factor.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Water vapour to air (`exhaust_water`)

Actual individual species CAS 7732-18-5 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Dinitrogen to air (`exhaust_n2`)

Actual individual species CAS 7727-37-9 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Argon to air (`exhaust_ar`)

Actual individual species CAS 7440-37-1 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. Native dictionary synonyms mention Ar-40/Ar-41, but this binding is natural elemental Ar CAS 7440-37-1 only, with no isotope-specific activity or inventory implied. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Residual oxygen to air (`exhaust_o2`)

Actual individual species CAS 7782-44-7 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission.  The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.  Positive canonical ordinary molecular name and CAS, Elementary Emissions-to-air unspecified category and native reference Mass/kg define this admitted occurrence. Noisy HNO/N2O4/ion/isotope/carbon-black/graphite aliases do not redefine that ordinary species or authorize their substitution. Actual species, gas state and receiving compartment must match; fossil CH4 requires independently established fossil origin, and no aggregate NOx/VOC or native coefficient supplies a quantity or factor.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Atmospheric carbon dioxide leaving dryer (`passthrough_co2`)

Actual individual species CAS 124-38-9 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Atmospheric carbon dioxide leaving dryer
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

###### Calcium sulfate dihydrate particles to air (`exhaust_gypsum`)

Actual individual species CAS 10101-41-4 at the real outlet; keep phase, source-origin and receiving medium explicit. For bound elementary UUIDs the native medium is air unspecified, not indoor, long-term, urban-by-guess, water or soil. Integrate measured rate once or use a cumulative total directly. Independent speciation is mandatory: NOx, VOC, COD, total carbon and total dust cannot be assigned wholly to this species. Gross inlet/outlet species remain in physical balances; atmospheric pass-through is kept separate from newly formed fossil CO2. Water vapour separates evaporated free water, combustion water and independently measured phase-change water; crystal water remaining in board is not an emission. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Calcium sulfate dihydrate particles to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_board`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`

### Process: Performed packaging, storage and handling service (`p_dispatch`)

Real post-release services and FG movements linked to original cohort and declared horizon; no second production output

#### Inputs

##### Product flows

###### Kraft-paper gypsum-board end tape (`end_tape`)

Actual identification end tape; include printing and supplied adhesive once in its whole supplied article or split actual on-site applications individually. It is shipping/identification material, excluded from net board Q. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. P only: actual purchased whole article, including separately invoiced or bundled paid packaging; identify its payment and provider owner once. Non-purchased first external ingress N_ext (including non-paid supplier-included I), and actual ER/S/EO use distinct event records and their own physical rows; no receipt is both P and N_ext. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Kraft-paper gypsum-board end tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polypropylene transport strap (`pp_strap`)

One actual solid polypropylene strap article; not twine, woven bag or resin purchased again. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. P only: actual purchased whole article, including separately invoiced or bundled paid packaging; identify its payment and provider owner once. Non-purchased first external ingress N_ext (including non-paid supplier-included I), and actual ER/S/EO use distinct event records and their own physical rows; no receipt is both P and N_ext. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polyethylene transport film (`pe_film`)

Actual PE film article CAS 9002-88-4, with thickness and additive content disclosed. Native at-plant Product is polyethylene film; its luggage CPC path is a classification anomaly while basename, CAS and comment agree on PE film. The PET comparison in its comment is not PET identity. No finished bag or multilayer PET substitution. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. P only: actual purchased whole article, including separately invoiced or bundled paid packaging; identify its payment and provider owner once. Non-purchased first external ingress N_ext (including non-paid supplier-included I), and actual ER/S/EO use distinct event records and their own physical rows; no receipt is both P and N_ext. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Wooden gypsum-board transport riser (`wood_riser`)

Actual wooden riser as one supplied article; specify timber, attached pieces, moisture, reuse status and measured mass. No EURO-pallet dimensions or single-item mass are imposed. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. P only: actual purchased whole article, including separately invoiced or bundled paid packaging; identify its payment and provider owner once. Non-purchased first external ingress N_ext (including non-paid supplier-included I), and actual ER/S/EO use distinct event records and their own physical rows; no receipt is both P and N_ext. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Wooden gypsum-board transport riser
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Paperboard transport edge protector (`edge_guard`)

Actual formed paperboard protector with coatings and supplier-included glue recorded once; optical cardboard, tubes and cartons do not establish its identity. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. P only: actual purchased whole article, including separately invoiced or bundled paid packaging; identify its payment and provider owner once. Non-purchased first external ingress N_ext (including non-paid supplier-included I), and actual ER/S/EO use distinct event records and their own physical rows; no receipt is both P and N_ext. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Paperboard transport edge protector
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Medium-voltage grid electricity for finished-board service (`service_electricity`)

Actual performed packaging, storage and handling electricity assigned to original release cohort and observation horizon. Same native China user-side 1–35 kV grid-average limit as manufacturing electricity; neither a fixed storage duration nor repeated production burden. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_mj_dispatch`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Diesel fuel for actual handling (`forklift_diesel`)

Actual forklift fuel on native mass basis. Native foreground material identity leaves grade, formulation, density, LHV, refinery, geography and provider unspecified; measure them independently. A complete forklift-operation provider and its fuel, capital and exhaust cannot be added together. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_kg_dispatch`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Kraft-paper gypsum-board end tape I (`end_tape_i`)

I: actual non-purchased supplier-included whole-article first ingress, as a non-additive identified child of N_ext, even when provider burden is already included; not bundled paid P, a genuine ER return or internal transfer. Other non-purchased first external ingress requires its own physically specific conditional row when it actually occurs; never place it in outgoing S/EO or invent prior outward history. Actual identification end tape; include printing and supplied adhesive once in its whole supplied article or split actual on-site applications individually. It is shipping/identification material, excluded from net board Q. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Kraft-paper gypsum-board end tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Kraft-paper gypsum-board end tape ER (`end_tape_er`)

ER: actual external returned article received in independently weighed current usable state, with evidence linking this same article/item to its prior outward event and original cohort; not new manufacture/purchase or first non-purchased external ingress N_ext. Unknown prior outward history remains unresolved and cannot be asserted as ER. A damaged mixed Waste return needs its true Waste identity instead. Actual identification end tape; include printing and supplied adhesive once in its whole supplied article or split actual on-site applications individually. It is shipping/identification material, excluded from net board Q. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Kraft-paper gypsum-board end tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polypropylene transport strap I (`pp_strap_i`)

I: actual non-purchased supplier-included whole-article first ingress, as a non-additive identified child of N_ext, even when provider burden is already included; not bundled paid P, a genuine ER return or internal transfer. Other non-purchased first external ingress requires its own physically specific conditional row when it actually occurs; never place it in outgoing S/EO or invent prior outward history. One actual solid polypropylene strap article; not twine, woven bag or resin purchased again. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polypropylene transport strap ER (`pp_strap_er`)

ER: actual external returned article received in independently weighed current usable state, with evidence linking this same article/item to its prior outward event and original cohort; not new manufacture/purchase or first non-purchased external ingress N_ext. Unknown prior outward history remains unresolved and cannot be asserted as ER. A damaged mixed Waste return needs its true Waste identity instead. One actual solid polypropylene strap article; not twine, woven bag or resin purchased again. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polyethylene transport film I (`pe_film_i`)

I: actual non-purchased supplier-included whole-article first ingress, as a non-additive identified child of N_ext, even when provider burden is already included; not bundled paid P, a genuine ER return or internal transfer. Other non-purchased first external ingress requires its own physically specific conditional row when it actually occurs; never place it in outgoing S/EO or invent prior outward history. Actual PE film article CAS 9002-88-4, with thickness and additive content disclosed. Native at-plant Product is polyethylene film; its luggage CPC path is a classification anomaly while basename, CAS and comment agree on PE film. The PET comparison in its comment is not PET identity. No finished bag or multilayer PET substitution. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polyethylene transport film ER (`pe_film_er`)

ER: actual external returned article received in independently weighed current usable state, with evidence linking this same article/item to its prior outward event and original cohort; not new manufacture/purchase or first non-purchased external ingress N_ext. Unknown prior outward history remains unresolved and cannot be asserted as ER. A damaged mixed Waste return needs its true Waste identity instead. Actual PE film article CAS 9002-88-4, with thickness and additive content disclosed. Native at-plant Product is polyethylene film; its luggage CPC path is a classification anomaly while basename, CAS and comment agree on PE film. The PET comparison in its comment is not PET identity. No finished bag or multilayer PET substitution. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Wooden gypsum-board transport riser I (`wood_riser_i`)

I: actual non-purchased supplier-included whole-article first ingress, as a non-additive identified child of N_ext, even when provider burden is already included; not bundled paid P, a genuine ER return or internal transfer. Other non-purchased first external ingress requires its own physically specific conditional row when it actually occurs; never place it in outgoing S/EO or invent prior outward history. Actual wooden riser as one supplied article; specify timber, attached pieces, moisture, reuse status and measured mass. No EURO-pallet dimensions or single-item mass are imposed. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Wooden gypsum-board transport riser
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Wooden gypsum-board transport riser ER (`wood_riser_er`)

ER: actual external returned article received in independently weighed current usable state, with evidence linking this same article/item to its prior outward event and original cohort; not new manufacture/purchase or first non-purchased external ingress N_ext. Unknown prior outward history remains unresolved and cannot be asserted as ER. A damaged mixed Waste return needs its true Waste identity instead. Actual wooden riser as one supplied article; specify timber, attached pieces, moisture, reuse status and measured mass. No EURO-pallet dimensions or single-item mass are imposed. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Wooden gypsum-board transport riser
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Paperboard transport edge protector I (`edge_guard_i`)

I: actual non-purchased supplier-included whole-article first ingress, as a non-additive identified child of N_ext, even when provider burden is already included; not bundled paid P, a genuine ER return or internal transfer. Other non-purchased first external ingress requires its own physically specific conditional row when it actually occurs; never place it in outgoing S/EO or invent prior outward history. Actual formed paperboard protector with coatings and supplier-included glue recorded once; optical cardboard, tubes and cartons do not establish its identity. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Paperboard transport edge protector
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Paperboard transport edge protector ER (`edge_guard_er`)

ER: actual external returned article received in independently weighed current usable state, with evidence linking this same article/item to its prior outward event and original cohort; not new manufacture/purchase or first non-purchased external ingress N_ext. Unknown prior outward history remains unresolved and cannot be asserted as ER. A damaged mixed Waste return needs its true Waste identity instead. Actual formed paperboard protector with coatings and supplier-included glue recorded once; optical cardboard, tubes and cartons do not establish its identity. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Paperboard transport edge protector
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

###### Atmospheric oxygen for handling (`service_air_o2`)

Actual individual fresh-air species for on-site handling combustion; use resource-from-air identity only. Match inlet temperature, pressure, dry/wet state, composition and cumulative air volume; no aggregate air duplication or invented origin for atmospheric CO2. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Atmospheric dinitrogen for handling (`service_air_n2`)

Actual individual fresh-air species for on-site handling combustion; use resource-from-air identity only. Match inlet temperature, pressure, dry/wet state, composition and cumulative air volume; no aggregate air duplication or invented origin for atmospheric CO2. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Atmospheric argon for handling (`service_air_ar`)

Actual individual fresh-air species for on-site handling combustion; use resource-from-air identity only. Match inlet temperature, pressure, dry/wet state, composition and cumulative air volume; no aggregate air duplication or invented origin for atmospheric CO2. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. Native dictionary synonyms mention Ar-40/Ar-41, but this binding is natural elemental Ar CAS 7440-37-1 only, with no isotope-specific activity or inventory implied. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Atmospheric water vapour for handling (`service_air_h2o`)

Actual individual fresh-air species for on-site handling combustion; use resource-from-air identity only. Match inlet temperature, pressure, dry/wet state, composition and cumulative air volume; no aggregate air duplication or invented origin for atmospheric CO2. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Actual ordinary gaseous H2O intake includes independently observed sorption/condensation during normal FG/package storage/handling and actual work, not only combustion air. Record disjoint source-process/event/cohort and package/component-water subaccounts once; no repair event or permission is needed for natural humidity. Separate supplied article water, free/sorbed water and measured structural/reaction phase change; no mass/Volume conversion or water fraction from one residual.

- Selected flow: Atmospheric water vapour for handling
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Atmospheric carbon dioxide for handling (`service_air_co2`)

Actual individual fresh-air species for on-site handling combustion; use resource-from-air identity only. Match inlet temperature, pressure, dry/wet state, composition and cumulative air volume; no aggregate air duplication or invented origin for atmospheric CO2. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Atmospheric carbon dioxide for handling
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

#### Outputs

##### Product flows

###### Kraft-paper gypsum-board end tape S (`end_tape_s`)

S: actual full whole-article outgoing leg with gross physical shipments, not net deliveries, original manufacture, returns subtraction or board Q. Actual identification end tape; include printing and supplied adhesive once in its whole supplied article or split actual on-site applications individually. It is shipping/identification material, excluded from net board Q. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Kraft-paper gypsum-board end tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Kraft-paper gypsum-board end tape EO (`end_tape_eo`)

EO: actual external whole-article return sent to supplier/custodian, independently weighed and distinct from S; no default waste, negative purchase or credit. Actual identification end tape; include printing and supplied adhesive once in its whole supplied article or split actual on-site applications individually. It is shipping/identification material, excluded from net board Q. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Kraft-paper gypsum-board end tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polypropylene transport strap S (`pp_strap_s`)

S: actual full whole-article outgoing leg with gross physical shipments, not net deliveries, original manufacture, returns subtraction or board Q. One actual solid polypropylene strap article; not twine, woven bag or resin purchased again. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polypropylene transport strap EO (`pp_strap_eo`)

EO: actual external whole-article return sent to supplier/custodian, independently weighed and distinct from S; no default waste, negative purchase or credit. One actual solid polypropylene strap article; not twine, woven bag or resin purchased again. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polyethylene transport film S (`pe_film_s`)

S: actual full whole-article outgoing leg with gross physical shipments, not net deliveries, original manufacture, returns subtraction or board Q. Actual PE film article CAS 9002-88-4, with thickness and additive content disclosed. Native at-plant Product is polyethylene film; its luggage CPC path is a classification anomaly while basename, CAS and comment agree on PE film. The PET comparison in its comment is not PET identity. No finished bag or multilayer PET substitution. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Polyethylene transport film EO (`pe_film_eo`)

EO: actual external whole-article return sent to supplier/custodian, independently weighed and distinct from S; no default waste, negative purchase or credit. Actual PE film article CAS 9002-88-4, with thickness and additive content disclosed. Native at-plant Product is polyethylene film; its luggage CPC path is a classification anomaly while basename, CAS and comment agree on PE film. The PET comparison in its comment is not PET identity. No finished bag or multilayer PET substitution. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Wooden gypsum-board transport riser S (`wood_riser_s`)

S: actual full whole-article outgoing leg with gross physical shipments, not net deliveries, original manufacture, returns subtraction or board Q. Actual wooden riser as one supplied article; specify timber, attached pieces, moisture, reuse status and measured mass. No EURO-pallet dimensions or single-item mass are imposed. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Wooden gypsum-board transport riser
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Wooden gypsum-board transport riser EO (`wood_riser_eo`)

EO: actual external whole-article return sent to supplier/custodian, independently weighed and distinct from S; no default waste, negative purchase or credit. Actual wooden riser as one supplied article; specify timber, attached pieces, moisture, reuse status and measured mass. No EURO-pallet dimensions or single-item mass are imposed. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Wooden gypsum-board transport riser
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Paperboard transport edge protector S (`edge_guard_s`)

S: actual full whole-article outgoing leg with gross physical shipments, not net deliveries, original manufacture, returns subtraction or board Q. Actual formed paperboard protector with coatings and supplier-included glue recorded once; optical cardboard, tubes and cartons do not establish its identity. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Paperboard transport edge protector
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Paperboard transport edge protector EO (`edge_guard_eo`)

EO: actual external whole-article return sent to supplier/custodian, independently weighed and distinct from S; no default waste, negative purchase or credit. Actual formed paperboard protector with coatings and supplier-included glue recorded once; optical cardboard, tubes and cartons do not establish its identity. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Only when this actual external event occurs; absence requires evidence and unknown is not zero. Numerator is complete independent gross native-unit V_j, divided once by original Q for actual H; no stock correction, burden/economic share, new upstream provider, new purchase on reuse or credit. Internal matched transfers cancel; whole wet article/components/water one owner. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously.

- Selected flow: Paperboard transport edge protector
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

##### Waste flows

###### Waste kraft-paper end tape (`tape_waste`)

Actual complete wet-state article and real external disposition, with original cohort trace. Sale or export for treatment does not automatically remove manufacturing or treatment burdens. Post-release damaged board cannot be assumed repairable; manufacturer/specification permission, postwork tests, acceptance and disposition are required. Packaging gross physical legs are independent of economic burden shares. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. One actual collected mixed packaging outlet uses one qualified whole-mixture Waste exchange and one real treatment/provider record. Its independently measured per-origin W raw accounts must conserve the total with uncertainty; total OR partition are alternatives, never additive exits. Existing material W cards are non-additive origin children for that event, not fabricated separate outlets. Real separate outlets retain their own correct Waste identities/treatment. Add/reselect a specific compatible mixed Waste only when the real outlet exists, not for six-leg symmetry.

- Selected flow: Waste kraft-paper end tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Waste polypropylene transport strap (`pp_waste`)

Actual complete wet-state article and real external disposition, with original cohort trace. Sale or export for treatment does not automatically remove manufacturing or treatment burdens. Post-release damaged board cannot be assumed repairable; manufacturer/specification permission, postwork tests, acceptance and disposition are required. Packaging gross physical legs are independent of economic burden shares. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. One actual collected mixed packaging outlet uses one qualified whole-mixture Waste exchange and one real treatment/provider record. Its independently measured per-origin W raw accounts must conserve the total with uncertainty; total OR partition are alternatives, never additive exits. Existing material W cards are non-additive origin children for that event, not fabricated separate outlets. Real separate outlets retain their own correct Waste identities/treatment. Add/reselect a specific compatible mixed Waste only when the real outlet exists, not for six-leg symmetry.

- Selected flow: Waste polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Waste polyethylene transport film (`pe_waste`)

Actual complete wet-state article and real external disposition, with original cohort trace. Sale or export for treatment does not automatically remove manufacturing or treatment burdens. Post-release damaged board cannot be assumed repairable; manufacturer/specification permission, postwork tests, acceptance and disposition are required. Packaging gross physical legs are independent of economic burden shares. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. One actual collected mixed packaging outlet uses one qualified whole-mixture Waste exchange and one real treatment/provider record. Its independently measured per-origin W raw accounts must conserve the total with uncertainty; total OR partition are alternatives, never additive exits. Existing material W cards are non-additive origin children for that event, not fabricated separate outlets. Real separate outlets retain their own correct Waste identities/treatment. Add/reselect a specific compatible mixed Waste only when the real outlet exists, not for six-leg symmetry.

- Selected flow: Waste polyethylene transport film
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Waste wooden transport riser (`riser_waste`)

Actual complete wet-state article and real external disposition, with original cohort trace. Sale or export for treatment does not automatically remove manufacturing or treatment burdens. Post-release damaged board cannot be assumed repairable; manufacturer/specification permission, postwork tests, acceptance and disposition are required. Packaging gross physical legs are independent of economic burden shares. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. One actual collected mixed packaging outlet uses one qualified whole-mixture Waste exchange and one real treatment/provider record. Its independently measured per-origin W raw accounts must conserve the total with uncertainty; total OR partition are alternatives, never additive exits. Existing material W cards are non-additive origin children for that event, not fabricated separate outlets. Real separate outlets retain their own correct Waste identities/treatment. Add/reselect a specific compatible mixed Waste only when the real outlet exists, not for six-leg symmetry.

- Selected flow: Waste wooden transport riser
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Waste paperboard edge protector (`guard_waste`)

Actual complete wet-state article and real external disposition, with original cohort trace. Sale or export for treatment does not automatically remove manufacturing or treatment burdens. Post-release damaged board cannot be assumed repairable; manufacturer/specification permission, postwork tests, acceptance and disposition are required. Packaging gross physical legs are independent of economic burden shares. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. One actual collected mixed packaging outlet uses one qualified whole-mixture Waste exchange and one real treatment/provider record. Its independently measured per-origin W raw accounts must conserve the total with uncertainty; total OR partition are alternatives, never additive exits. Existing material W cards are non-additive origin children for that event, not fabricated separate outlets. Real separate outlets retain their own correct Waste identities/treatment. Add/reselect a specific compatible mixed Waste only when the real outlet exists, not for six-leg symmetry.

- Selected flow: Waste paperboard edge protector
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

###### Damaged released paper-faced gypsum board (`released_scrap`)

Actual complete wet-state article and real external disposition, with original cohort trace. Sale or export for treatment does not automatically remove manufacturing or treatment burdens. Post-release damaged board cannot be assumed repairable; manufacturer/specification permission, postwork tests, acceptance and disposition are required. Packaging gross physical legs are independent of economic burden shares. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows.

- Selected flow: Damaged released paper-faced gypsum board
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cohort`
- Sources: `ga-making-gypsum-board`; `ilcd-detailed-2010`

##### Elementary flows

###### Fossil carbon dioxide from handling to air (`service_co2`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Fossil carbon monoxide from handling to air (`service_co`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Nitrogen monoxide from handling to air (`service_no`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers.   The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.  Positive canonical ordinary molecular name and CAS, Elementary Emissions-to-air unspecified category and native reference Mass/kg define this admitted occurrence. Noisy HNO/N2O4/ion/isotope/carbon-black/graphite aliases do not redefine that ordinary species or authorize their substitution. Actual species, gas state and receiving compartment must match; fossil CH4 requires independently established fossil origin, and no aggregate NOx/VOC or native coefficient supplies a quantity or factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Nitrogen dioxide from handling to air (`service_no2`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers.   The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.  Positive canonical ordinary molecular name and CAS, Elementary Emissions-to-air unspecified category and native reference Mass/kg define this admitted occurrence. Noisy HNO/N2O4/ion/isotope/carbon-black/graphite aliases do not redefine that ordinary species or authorize their substitution. Actual species, gas state and receiving compartment must match; fossil CH4 requires independently established fossil origin, and no aggregate NOx/VOC or native coefficient supplies a quantity or factor.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Water vapour from handling to air (`service_water`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. Actual ordinary H2O vapour output includes independently observed desorption/evaporation from FG/packages during normal storage/handling or actual work, not only handling-engine exhaust. Match real source/event and true air medium; do not duplicate the same emission in a package subaccount, liquid/wet-waste outlet or structural-water inference. Natural moisture change needs no repair; retain original Q/H and full wet stocks.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Sulfur dioxide from handling to air (`service_so2`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Fossil methane from handling to air (`service_ch4`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers.   The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.  Positive canonical ordinary molecular name and CAS, Elementary Emissions-to-air unspecified category and native reference Mass/kg define this admitted occurrence. Noisy HNO/N2O4/ion/isotope/carbon-black/graphite aliases do not redefine that ordinary species or authorize their substitution. Actual species, gas state and receiving compartment must match; fossil CH4 requires independently established fossil origin, and no aggregate NOx/VOC or native coefficient supplies a quantity or factor.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Dinitrogen leaving handling combustion (`service_n2`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Argon leaving handling combustion (`service_ar`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. Native dictionary synonyms mention Ar-40/Ar-41, but this binding is natural elemental Ar CAS 7440-37-1 only, with no isotope-specific activity or inventory implied. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Residual oxygen leaving handling combustion (`service_o2`)

Actual individual handling exhaust species, assigned to the original cohort service horizon. Record specific chemical/CAS, gaseous phase and true outlet medium; bound UUID is air unspecified only. Never infer this amount from total NOx/VOC or copy dryer exhaust. Gross air components use separately measured service-air inlet and outlet subledgers.  The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.  Positive canonical ordinary molecular name and CAS, Elementary Emissions-to-air unspecified category and native reference Mass/kg define this admitted occurrence. Noisy HNO/N2O4/ion/isotope/carbon-black/graphite aliases do not redefine that ordinary species or authorize their substitution. Actual species, gas state and receiving compartment must match; fossil CH4 requires independently established fossil origin, and no aggregate NOx/VOC or native coefficient supplies a quantity or factor.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

###### Atmospheric carbon dioxide leaving handling (`service_atmospheric_co2`)

Actual atmospheric pass-through CO2, separate from newly generated fossil CO2; no invented biogenic/fossil origin, avoided-emission credit or reverse resource binding. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Atmospheric carbon dioxide leaving handling
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_dispatch`
- Sources: `ilcd-detailed-2010`

### Process: Actual equipment, maintenance and water-interface support (`p_support`)

Actual physical assets/parts/fluids and justified current service burden for manufacturing and disclosed FG services

#### Inputs

##### Product flows

###### Mineral hydraulic-oil preparation (`hydraulic_oil`)

Actual complete new or replenishment fluid; identify whole formulation and water. Retain installed-fluid opening/closing mass and every real addition/removal, even when newly added fluid remains installed. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Mineral hydraulic-oil preparation
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Bearing lubricating-grease preparation (`grease`)

Actual whole supplied bearing grease, not a mineral-oil constituent or generic lubricant selector; weigh new and removed grease with composition. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Bearing lubricating-grease preparation
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Steel board-cutting saw blade (`steel_blade`)

Actual steel auxiliary cutting blade in matching sawing/shearing blank preparation. Native Product permits this consumable family but supplies no wear rate. Record new, installed, removed and wasted article mass separately; no diamond-wire or carbide substitution. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Steel saw blades or shear knives `970801c9-08c1-4d9c-999d-4b66609430be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Polyester gypsum-dust filter bag (`filter_bag`)

Conditional actual filter-bag article, with whole frame/coating included only if actually supplied together. Dust retained at stock close and its water remain measured; not clean polyester resin. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Polyester gypsum-dust filter bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Fired refractory brick dryer lining (`refractory`)

Only actual fired refractory ceramic bricks in the burner/dryer; native Product is high-temperature lining brick, without fixed composition, density or lifetime. Nonrefractory board and castable repairs need separate identities. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Aqueous alkaline equipment-cleaning preparation (`cleaner`)

Conditional single actual supplied detergent preparation with carrier-water subledger; separate actually added wash water, then trace spent liquid and wet solids without duplicating their water. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Aqueous alkaline equipment-cleaning preparation
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Liquid tap water for equipment cleaning (`wash_water`)

Actual separately supplied treated liquid tap water for cleaning, beyond formulation carrier water; native water-production Product is not Hong Kong volume-based screening water. Independently measure total volume and density if mass conversion is needed. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → kg (reference factor 1); preserve the native extensive unit and the full article/route/geography/type/media conditions above. The native secondary Volume coefficient is not measured density and is not used for conversion. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Liquid heat-exchanger cooling water supply (`cooling_water`)

Conditional actual external heat-exchanger supply only; record mass, temperature, enthalpy and supplier water/energy ownership. It does not imply that this direct-gas route has steam, a boiler or a thermal-oil system. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. For actual cooling-water/heat-carrier Product supply and external Product return, the physical numerator is the independently measured full gross native-unit leg V_j, so this same normalization gives V_j/Q for manufacture or V_j/original Q for the observed service horizon. It is not a stock-corrected water consumption, attributed heat burden or economic/service share. Keep the independent attributable supplier/service burden and carrier mass/phase/P/T/enthalpy separately with one provider; no added purchase, boiler/steam system or return credit is implied.

- Selected flow: Liquid heat-exchanger cooling water supply
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Gypsum-slurry pin mixer (`mixer_asset`)

Actual individual asset configuration; physical installed-item stock and purchased/retired items are separate from its current cohort service-burden share. No fixed lifespan or one whole machine per kg. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Gypsum-slurry pin mixer
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Paper-faced board forming conveyor (`forming_asset`)

Actual individual forming/conveyor asset, excluding separately inventoried mixer, dryer and saw. Physical item legs remain gross while only justified current service charge enters A_j. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Paper-faced board forming conveyor
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Direct-gas gypsum-board dryer (`dryer_asset`)

Actual complete dryer asset configuration with fans/control included exactly once, distinct from current gas/electricity and maintenance. Historical unconsumed charge is tracked; no invented future capacity or lifetime. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Direct-gas gypsum-board dryer
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Gypsum-board end saw (`saw_asset`)

Actual saw asset apart from replaceable cutting blade; record physical opening, acquisitions, transfers, retirement and closing plus justified current service use. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Gypsum-board end saw
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Gypsum-board fabric-filter dust collector (`filter_asset`)

Actual individual collector asset, separately inventoried bag, electricity and captured dust not repurchased inside a complete provider. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Gypsum-board fabric-filter dust collector
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

###### Board-handling forklift (`forklift_asset`)

Actual forklift asset only, distinguished from its separately measured fuel, maintenance and exhaust or a complete rented operation service. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Board-handling forklift
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Liquid cooling-water return to supplier (`cooling_return`)

Only actual externally returned heat-exchange water, retaining gross mass, temperature, enthalpy and supplier agreement. It is an external Product return, not an avoided-water coproduct or a nonexistent steam-condensate assumption. Internal recirculation cancels. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership. For actual cooling-water/heat-carrier Product supply and external Product return, the physical numerator is the independently measured full gross native-unit leg V_j, so this same normalization gives V_j/Q for manufacture or V_j/original Q for the observed service horizon. It is not a stock-corrected water consumption, attributed heat burden or economic/service share. Keep the independent attributable supplier/service burden and carrier mass/phase/P/T/enthalpy separately with one provider; no added purchase, boiler/steam system or return credit is implied.

- Selected flow: Liquid cooling-water return to supplier
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `grenzebach-gypsum-solutions`; `ilcd-detailed-2010`

##### Waste flows

###### Removed hydraulic-oil preparation (`used_oil`)

Actual individual removed material in its complete wet state, including adhering gypsum/oil/water where real. Retain opening/closing installed stocks and every new/old material and water-phase X_in/X_out; do not delete real additions merely because they remain in closing stock. De-duplicate only amounts already in other incoming/outgoing terms. Record actual treatment with no automatic waste-sale credit. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Removed hydraulic-oil preparation
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `ilcd-detailed-2010`

###### Removed bearing lubricating grease (`used_grease`)

Actual individual removed material in its complete wet state, including adhering gypsum/oil/water where real. Retain opening/closing installed stocks and every new/old material and water-phase X_in/X_out; do not delete real additions merely because they remain in closing stock. De-duplicate only amounts already in other incoming/outgoing terms. Record actual treatment with no automatic waste-sale credit. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Removed bearing lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `ilcd-detailed-2010`

###### Worn steel cutting blade (`worn_blade`)

Actual individual removed material in its complete wet state, including adhering gypsum/oil/water where real. Retain opening/closing installed stocks and every new/old material and water-phase X_in/X_out; do not delete real additions merely because they remain in closing stock. De-duplicate only amounts already in other incoming/outgoing terms. Record actual treatment with no automatic waste-sale credit. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Worn steel cutting blade
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `ilcd-detailed-2010`

###### Spent polyester filter bag (`spent_filter`)

Actual individual removed material in its complete wet state, including adhering gypsum/oil/water where real. Retain opening/closing installed stocks and every new/old material and water-phase X_in/X_out; do not delete real additions merely because they remain in closing stock. De-duplicate only amounts already in other incoming/outgoing terms. Record actual treatment with no automatic waste-sale credit. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Spent polyester filter bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `ilcd-detailed-2010`

###### Spent fired refractory brick (`spent_refractory`)

Actual individual removed material in its complete wet state, including adhering gypsum/oil/water where real. Retain opening/closing installed stocks and every new/old material and water-phase X_in/X_out; do not delete real additions merely because they remain in closing stock. De-duplicate only amounts already in other incoming/outgoing terms. Record actual treatment with no automatic waste-sale credit. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Spent fired refractory brick
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `ilcd-detailed-2010`

###### Spent aqueous alkaline cleaning liquid (`spent_cleaner`)

Actual individual removed material in its complete wet state, including adhering gypsum/oil/water where real. Retain opening/closing installed stocks and every new/old material and water-phase X_in/X_out; do not delete real additions merely because they remain in closing stock. De-duplicate only amounts already in other incoming/outgoing terms. Record actual treatment with no automatic waste-sale credit. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Spent aqueous alkaline cleaning liquid
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `ilcd-detailed-2010`

###### Heat-exchanger cooling-water blowdown (`cooling_blowdown`)

Actual individual removed material in its complete wet state, including adhering gypsum/oil/water where real. Retain opening/closing installed stocks and every new/old material and water-phase X_in/X_out; do not delete real additions merely because they remain in closing stock. De-duplicate only amounts already in other incoming/outgoing terms. Record actual treatment with no automatic waste-sale credit. No compatible Tiangong flow UUID is adopted; keep this single physical exchange and resolve its actual native identity before dataset release. The normalized LCI amount never replaces the unscaled gross physical movement/stock ledger; preserve both fields and their distinct ownership.

- Selected flow: Heat-exchanger cooling-water blowdown
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair`
- Sources: `ilcd-detailed-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

These rules address justified attributional multifunctional processes only; no free choice between arbitrary physical and economic fractions. Preserve all source and document ancestor conditions.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_context | study framework | Use this hierarchy only in justified attributional modelling where allocation applies; identify decision context and explain why substitution/system expansion is not the applicable solution. Industrial manufacturing sources do not establish LCA allocation. | `ilcd-detailed-2010` |
| a_subdivide | shared operations | First collect dedicated operations; subdivide physically separable operations and virtually subdivide exchange-specific dedicated materials/services. Record failed and idle loads in their causing cohort. Avoid allocating an entire mixed plant as one black box when its actual operations can be separated. | `ilcd-detailed-2010` |
| a_causality | remaining individual exchanges | For each genuinely remaining shared exchange identify its determining physical causality and justified relationship to each function; capacity-limiting area/volume/time/mass need evidence. Different exchanges may require different causes. Board dry mass or market price is never an arbitrary universal coefficient. | `ilcd-detailed-2010` |
| a_residual_value | irreducible common-process remainder | Only a genuine remainder without determining physical attribution may use contemporaneous market value at the same real common-process gate and actual moisture/quality/bulk state. Correct downstream transport, conditioning, packaging and processing differences; document values, denominator and sensitivity. Do not set fixed proportions or automatic credit; zero/negative or missing values require specific review. | `ilcd-detailed-2010` |
| a_waste | rejects and external transfers | Ordinary rejects, manufacturing waste, breakage and quality samples retain their manufacturing and treatment burden even if sold or sent away. T_j is allowed once only for a real distinct cohort/function with a justified allocation or burden-handover decision and receipt; it is not physical waste mass times an economic share. Internal recycling gives neither new upstream purchase nor avoided-product credit. | `ilcd-detailed-2010` |
| a_assets | capital and services | Keep physical machinery/parts/installed-fluid stocks separate from current service-burden attribution. Use measured actual service use and a documented charge denominator with prior unused/unassigned charge carried forward; no fabricated lifetime, future factory quantity, or one entire machine per kg. A complete outsourced/rental service and its already included fuel, capital and maintenance cannot both be charged. | `ilcd-detailed-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect un-divided raw records only. Conversion, true attribution and inheritance precede one normalization. Mathematical stock/conservation identities here define data-package accounting; primary industrial sources supply route context rather than these exact bookkeeping equations. Keep raw physical ledgers separate from allocated burden vectors. Uncollected quantities and phase/species relationships cannot be declared passing. The aggregation_rule cell is only the same-reference association label of the result calculated once below; all raw aggregation conditions are retained in collection_method. It never instructs division during collection.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | p_board | Each whole supplied raw material | weighing_and_receipt | row_id; cohort_id; stage; timestamp; material/chemical identity; supplier; native raw unit; gross actual quantity; measurement state; opening stock; closing stock; status; uncertainty; unused/non-WIP stores each full physical quantity and inherited exchange vector; gross receipt versus already-net consumption flag and prior stock-correction evidence ; stage_internal_in; stage_internal_out; matched_transfer_id; inherited_vector_coordinates | Use calibrated scales and supplier/receipt/BOM records for each real article; assay free water, phases and formulation components independently. Preserve both real incoming amount and closing wet-state stock. Do not collect a normalized value. Raw aggregation condition: Retain raw totals by row and cohort; collect only un-divided raw fields for convert_raw and attribute_vector  Retain raw/WIP/non-WIP physical quantities separately from every inherited exchange history; do not repeat a stock correction on a quantity/vector already reconciled as net consumption. Record stage_internal_in and stage_internal_out as matched same-event physical transfers and inherited exchange vectors, retaining row, provider, property/unit, gate, phase, period and cohort coordinates; cancel only the matched pair at the combined boundary. Actual hydration formation/consumption remains in its species/phase subledger, not a second external receipt. First WIP-to-FG acceptance enters accepted_production once; all other FG transfers are mutually exclusive and retain original Q, so a stock movement never repeats first acceptance. | kg | Each delivery/batch and inventory opening/close | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual supply/storage/dosing/mixer gates | per 1 kg reference flow | Calibration; delivery; composition; ownership and reconciliation records |
| cp_water | p_board | Separately added liquid mixing water | meter_and_density | row_id; cohort_id; cumulative_volume; mass_if_weighed; temperature; pressure; independent_density; meter_start; meter_end; unit; carrier_water_already_in_supplies | Measure separately supplied water; record cumulative totals or actual rate logs distinctly and independently determine density at the same state. Do not infer density from a flow secondary factor. Raw aggregation condition: Retain raw volume/mass and density without division; convert_raw produces extensive kg once | kg | Each meter interval and batch | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual water inlet and mixing gate | per 1 kg reference flow | Meter calibration; density method/state; carrier-water de-duplication |
| cp_energy_mj_board | p_board | Individual electricity or individual fuel in its row unit | meter_fuel_log | row_id; cohort_id; equipment; stage; meter_start; meter_end; cumulative_total_or_rate; original_unit; duration_if_rate; fuel_composition; independent_density; density_state; measured_NCV; provider_boundary; operation_status | Meter every real operating/failed/idle/cleanup state; keep raw kWh, kg or total gas volume and independent density/NCV records as observed. A cumulative m3 reading is not multiplied by operating time. Distinguish whole-provider inputs from separately modelled fuel/exhaust. Raw aggregation condition: Keep un-divided raw extensive totals; convert_raw then attribute_vector; no protocol-level normalization | MJ | Each meter interval and batch | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual process meters and service-cohort assignment | per 1 kg reference flow | Meter/scale calibration; fuel analysis; provider scope; failed/zero-output logs |
| cp_energy_mj_dispatch | p_dispatch | Individual electricity or individual fuel in its row unit | meter_fuel_log | row_id; cohort_id; equipment; stage; meter_start; meter_end; cumulative_total_or_rate; original_unit; duration_if_rate; fuel_composition; independent_density; density_state; measured_NCV; provider_boundary; operation_status | Meter every real operating/failed/idle/cleanup state; keep raw kWh, kg or total gas volume and independent density/NCV records as observed. A cumulative m3 reading is not multiplied by operating time. Distinguish whole-provider inputs from separately modelled fuel/exhaust. Raw aggregation condition: Keep un-divided raw extensive totals; convert_raw then attribute_vector; no protocol-level normalization | MJ | Each meter interval and batch | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual process meters and service-cohort assignment | per 1 kg reference flow | Meter/scale calibration; fuel analysis; provider scope; failed/zero-output logs |
| cp_energy_kg_board | p_board | Individual electricity or individual fuel in its row unit | meter_fuel_log | row_id; cohort_id; equipment; stage; meter_start; meter_end; cumulative_total_or_rate; original_unit; duration_if_rate; fuel_composition; independent_density; density_state; measured_NCV; provider_boundary; operation_status | Meter every real operating/failed/idle/cleanup state; keep raw kWh, kg or total gas volume and independent density/NCV records as observed. A cumulative m3 reading is not multiplied by operating time. Distinguish whole-provider inputs from separately modelled fuel/exhaust. Raw aggregation condition: Keep un-divided raw extensive totals; convert_raw then attribute_vector; no protocol-level normalization | kg | Each meter interval and batch | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual process meters and service-cohort assignment | per 1 kg reference flow | Meter/scale calibration; fuel analysis; provider scope; failed/zero-output logs |
| cp_energy_kg_dispatch | p_dispatch | Individual electricity or individual fuel in its row unit | meter_fuel_log | row_id; cohort_id; equipment; stage; meter_start; meter_end; cumulative_total_or_rate; original_unit; duration_if_rate; fuel_composition; independent_density; density_state; measured_NCV; provider_boundary; operation_status | Meter every real operating/failed/idle/cleanup state; keep raw kWh, kg or total gas volume and independent density/NCV records as observed. A cumulative m3 reading is not multiplied by operating time. Distinguish whole-provider inputs from separately modelled fuel/exhaust. Raw aggregation condition: Keep un-divided raw extensive totals; convert_raw then attribute_vector; no protocol-level normalization | kg | Each meter interval and batch | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual process meters and service-cohort assignment | per 1 kg reference flow | Meter/scale calibration; fuel analysis; provider scope; failed/zero-output logs |
| cp_gas_board | p_board | Every distinct inlet/outlet gas species | species_measurement | row_id; cohort_id; outlet/inlet; chemical_name; CAS; phase; compartment; cumulative_gas_volume; rate_if_actual; time_interval_if_rate; temperature; pressure; wet_or_dry_basis; humidity; species_fraction; independent_density_or_molar_state; background_origin; control_device; uncertainty | Use matched-state volumetric/mass monitoring and actual species analysis; collect true intervals and total air separately for dryer and handling. Separate filter inlet/captured material/outlet, atmospheric pass-through, fuel-generated species and water sources. Unknown species stays unknown; indicators never fill its chemical mass. Raw aggregation condition: Preserve raw gas totals/rates and analytical results; integrate only rates in convert_raw; attribute without scaling physical gross ledgers | kg | Each representative actual operating state with full-horizon integration | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Real inlet/outlet with location and medium | per 1 kg reference flow | Speciation QA/QC; dry/wet consistency; independent gas state; balance residuals |
| cp_gas_dispatch | p_dispatch | Every distinct inlet/outlet gas species | species_measurement | row_id; cohort_id; outlet/inlet; chemical_name; CAS; phase; compartment; cumulative_gas_volume; rate_if_actual; time_interval_if_rate; temperature; pressure; wet_or_dry_basis; humidity; species_fraction; independent_density_or_molar_state; background_origin; control_device; uncertainty; source_process/event/cohort; normal FG/package sorption/condensation/desorption/evaporation; non-additive package water child IDs; original Q/H | Use matched-state volumetric/mass monitoring and actual species analysis; collect true intervals and total air separately for dryer and handling. Separate filter inlet/captured material/outlet, atmospheric pass-through, fuel-generated species and water sources. Unknown species stays unknown; indicators never fill its chemical mass. Raw aggregation condition: Preserve raw gas totals/rates and analytical results; integrate only rates in convert_raw; attribute without scaling physical gross ledgers Actual ordinary gaseous H2O intake includes independently observed sorption/condensation during normal FG/package storage/handling and actual work, not only combustion air. Record disjoint source-process/event/cohort and package/component-water subaccounts once; no repair event or permission is needed for natural humidity. Separate supplied article water, free/sorbed water and measured structural/reaction phase change; no mass/Volume conversion or water fraction from one residual. Actual ordinary H2O vapour output includes independently observed desorption/evaporation from FG/packages during normal storage/handling or actual work, not only handling-engine exhaust. Match real source/event and true air medium; do not duplicate the same emission in a package subaccount, liquid/wet-waste outlet or structural-water inference. Natural moisture change needs no repair; retain original Q/H and full wet stocks. | kg | Each representative actual operating state with full-horizon integration | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Real inlet/outlet with location and medium | per 1 kg reference flow | Speciation QA/QC; dry/wet consistency; independent gas state; balance residuals |
| cp_release | p_board | Whole accepted board and Q | acceptance_and_net_weighing | cohort_id; configuration; board_id; first_release_timestamp; net_mass; packaging_tare; moisture_condition; phase_assay; acceptance_spec; test_result; pass_fail; actual_single_face_area; shape; traceable_drawing; measured_thickness; measured_count; M_if_count_conversion; calibration; original_release_flag | Weigh accepted whole boards excluding removable packaging on calibrated equipment. Retain manufacturer specification and actual dimensional, paper/core integrity and applicable performance test records; do not infer an unperformed test. Measure geometry independently. Flag original first release; later retest/dispatch/returns cannot be recounted. Raw aggregation condition: Collect raw accepted net mass and original release flags; release_q sums only new first-release masses once; include closing accepted FG | kg | Each acceptance lot/board and cohort closure | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Selected first manufacturing quality gate | per 1 kg reference flow | Calibrated scale; measured geometry; permission/specification; tests; release and rejection records |
| cp_waste | p_board | Each actual production waste or sample | weighing_and_disposition | row_id; cohort_id; wet_mass; independent_moisture; phase/composition; destination; treatment; transport; sale_if_any; internal_return; burden_owner; distinct_function_decision_if_any | Weigh separately each actual stream; match transfer/treatment tickets and reject/sample/cleanup registers. Keep all associated treatment loads and internal-loop trace; no sale-based automatic deduction. Raw aggregation condition: Collect gross raw quantities and owner evidence; no division and no economic scaling of physical mass | kg | Each waste movement and cohort close | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual manufacturing and treatment gates | per 1 kg reference flow | Scale tickets; analysis; disposal/treatment receipts; rejection logs |
| cp_pack | p_dispatch | Each separate packaging article | packaging_six_leg_stock | material_id; cohort_id; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; P_purchased; I_supplier_ingress; ER_external_return_received; S_gross_shipment; EO_external_return_out; W_waste; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; wet_state; X_in_by_species; X_out_by_species; upstream_owner; internal_reuse; row_id; actual distinct external event and gate; article/component assembly bridge and paired handoff; independent per-origin W raw quantities and mixed outlet total, non-additive total OR partition; actual receiver/treatment owner ; bundled_paid_P; first_nonpurchased_N_ext; I_nonadditive_child; same_item_prior_outward_id; payment_and_owner_evidence | Weigh each actual tape/strap/film/riser/guard and all other real ingress packages with stock and dispatch records. Identify supplied whole-article components and each separately entering repair/water species. Supplier-included packaging is physical input even when its upstream burden is already in supplier data. Raw aggregation condition: Retain all gross P/N_ext/ER/S/EO/W with I non-additive within N_ext and full wet stocks; packaging_balance checks once. Internal reuse cancels and X terms only de-duplicate against other incoming/outgoing terms  X overlap evidence must name another same-direction material/water flow term; opening/closing stocks cannot serve as an overlap deduction. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously. One actual collected mixed packaging outlet uses one qualified whole-mixture Waste exchange and one real treatment/provider record. Its independently measured per-origin W raw accounts must conserve the total with uncertainty; total OR partition are alternatives, never additive exits. Existing material W cards are non-additive origin children for that event, not fabricated separate outlets. Real separate outlets retain their own correct Waste identities/treatment. Add/reselect a specific compatible mixed Waste only when the real outlet exists, not for six-leg symmetry. For every component use mutually exclusive receipt classifications: P includes separately paid and bundled paid acquisition; N_ext is first non-purchased external acquisition, with non-paid supplier-included I recorded as a non-additive child. Other first non-purchased ingress has its own specific conditional row only when observed, not ER or an outgoing leg. ER requires the same item prior outward event; EO is a real distinct external return out. Unknown payment, prior history or ownership stays unresolved. Retain each gross event and complete wet stocks; P/I/N_ext/ER do not imply a second upstream provider or automatic credit. | kg | Each receipt/shipment/return/waste and stock opening/close | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Manufacturing ingress through actual service horizon | per 1 kg reference flow | Receipt/shipment IDs; supplier scope; wet-state weights; species ledger; reusable movement |
| cp_cohort | p_dispatch | Accepted FG and original service history | cohort_stock_and_service | original_cohort; original_Q; manufacturing_vector_id; service_horizon; opening_FG; first_release_in; gross_G; gross_R; original_shipment_link; added_water/material; actual_losses; closing_FG; rejects; samples; postwork_permission; postwork_tests; acceptance; disposition; performed_service; unused_unassigned_charge; added and removed new/old material and parts; free/carrier/crystal/reaction water phases; labelled repair-held FG or disjoint repair-WIP; actual maker/specification permission; post-work tests; acceptance/rejection and final destination ; accepted_production; other_FG_transfers; mutually_exclusive_event_id | Reconcile exact original board/cohort and all FG movements; preserve original manufacturing vectors for traceability without charging them again. New service has its own real horizon and original Q. Actual postrelease work requires permission/tests/disposition; returns need no fictitious same-mass original delivery or new release. Raw aggregation condition: Record raw physical G/R/stocks and performed-service quantities; original Q is only a link here; do not normalize in protocol or carry performed service as unused  Independently measure actual post-work additions/removals and wet custody states; retain each once with original-cohort vectors. Verify actual maker/specification permission and tests/acceptance/disposition without assuming hardened or damaged paper/core restores. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. Record stage_internal_in and stage_internal_out as matched same-event physical transfers and inherited exchange vectors, retaining row, provider, property/unit, gate, phase, period and cohort coordinates; cancel only the matched pair at the combined boundary. Actual hydration formation/consumption remains in its species/phase subledger, not a second external receipt. First WIP-to-FG acceptance enters accepted_production once; all other FG transfers are mutually exclusive and retain original Q, so a stock movement never repeats first acceptance. | kg | Each FG/service event and horizon close | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Original release cohort and real warehouse/service gate | per 1 kg reference flow | Original release/shipment IDs; stock reconciliation; permission and test records |
| cp_repair | p_support | Each new/old part and actual water phase | installed_stock_and_movements | row_id; equipment_id; cohort_id; opening_installed_wet_mass; new_purchase; old_removed; external_return_in; external_return_out; real_X_in; real_X_out; closing_installed_wet_mass; composition; water_phase; temperature; enthalpy_if_heat_interface; supplier_water_energy_owner; waste_treatment; actual source_process and original Q/H; authorization/result/hold/disposition; complete gross carrier Product supply/return V_j; thermal state/provider ownership; disjoint repair-custody stock | Record individual physical new/old parts and fluid additions/removals on calibrated scales/meters with independent composition/moisture. Keep complete closing wet mass plus actual incoming additions even if retained. X terms only remove duplication with other incoming/outgoing terms, never with a stock term. Raw aggregation condition: Retain gross legs and installed wet stocks; assign current maintenance/service once without subtracting a performed service because FG is retained For actual cooling-water/heat-carrier Product supply and external Product return, the physical numerator is the independently measured full gross native-unit leg V_j, so this same normalization gives V_j/Q for manufacture or V_j/original Q for the observed service horizon. It is not a stock-corrected water consumption, attributed heat burden or economic/service share. Keep the independent attributable supplier/service burden and carrier mass/phase/P/T/enthalpy separately with one provider; no added purchase, boiler/steam system or return credit is implied. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. | kg | Each maintenance/fluid/water movement and period stock | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Real installed equipment and external water-return gates | per 1 kg reference flow | Work orders; new/old weights; independent water analyses; provider agreement; treatment |
| cp_asset | p_support | Each physical machine and current service charge | asset_stock_and_service | asset_id; configuration; opening_items; purchased_items; transferred_in; transferred_out; retired_items; closing_items; prior_unassigned_burden_vector; actual_service_use; service_capacity_basis; assigned_current_share; remaining_unassigned_charge; repair_overlap; provider_scope | Audit physical asset stock independently of service attribution. Document actual service records, charge basis, uncertainty and remaining capacity/charge without fabricating a lifetime or future output. Subdivide dedication before sharing; match no double-counted complete provider. Raw aggregation condition: Collect physical item legs plus independent raw service use/charge fields; current justified service equivalent enters attribute_vector once; no normalization in collection | item | Each asset event and service interval | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual individual asset and original manufacturing/service cohorts | per 1 kg reference flow | Asset register; service/charge derivation; uncertainty; installed-fluid and repair reconciliation |
| cp_phase | p_board | Independent phase/free-water and reaction evidence | phase_sensitive_measurements | sample_id; batch; wet_mass; free_moisture_method; phase_sensitive_method; hemihydrate; dihydrate; anhydrite; reaction_extent; independent_evaporation; combustion_water; paper/formulation_water; dissolved_species; uncertainty | Use validated free-moisture and phase-sensitive methods such as appropriately separated XRD/TGA/DSC analyses; avoid inadvertently counting analytical dehydration as free moisture. Measure phase transformation and evaporation independently at feed, wet set board, dryer and released product. Raw aggregation condition: Retain raw measurements and uncertainty; phase_balance checks independently from total physical mass; no residual fitting of multiple unknowns | kg | Each material/phase-changing state and representative batch | Full declared cohort plus associated startup/idle/cleanup and original service observation horizon | Actual slurry/setting/dryer/release gates | per 1 kg reference flow | Validated phase/moisture methods; representative sampling; calibration; analytical uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | every raw exchange | First preserve observed raw units. Convert cumulative quantity once to the row native extensive unit; for genuine rates sum rate times its measured interval. For electricity E_MJ = E_kWh * 3.6. For a gas/liquid cumulative V, mass = V * independent_same_state_density. Composition and carrier mass/energy remain subledgers; no Q division occurs here. | raw_quantity; raw_unit; true_rate_interval; independently_measured_state_and_density; composition | R_j_native_raw; gross_physical_leg | `epa-gypsum-1993`; `grenzebach-gypsum-solutions` |
| release_q | new accepted whole-board cohort | Q = sum(new_first_release_net_mass). Include newly accepted closing FG. Exclude packaging and unreleased failed/sample mass. Existing released stock, returns, retests and dispatch do not increase Q. For count conversion use independently measured same-configuration net M and actual count before summation; never use a native secondary coefficient as M. | cp_release net masses; original release flags; actual configuration; independently measured M if needed | Q in kg; one original manufacturing cohort | `ga-making-gypsum-board`; `ga-gypsum-board-identity` |
| attribute_vector | each extensive inventory coordinate j | A_j = Bopen_j + R_j + Sperformed_j - Bclose_j - Tlegitimate_j. R_j is converted current manufacturing activity with real justified attribution applied once; Sperformed_j is actual performed post-release service assigned to the original cohort/horizon. Each raw receipt or service event enters exactly one of R_j and Sperformed_j, never both; retain gross physical activity separately. Bopen/Bclose carry each exchange inherited raw/WIP vector and unused/unassigned service or material charge. Manufacturing Bclose excludes released FG; performed original-cohort service is not unused. Tlegitimate requires the distinct-function/cohort decision and receipt under a_waste. Already stock-corrected R is not stock-corrected again. Trace internally returned material vectors without double entry. Physical custody, packaging legs, physical asset movements, and actual cooling-water/carrier Product supply/return coordinates instead use full independent V_j for the same normalization, without changing the separately assigned burden vector. Every actually occurred post-release operation, including unauthorized/unapproved, failed or rejected work, and all actual material/water/energy/loss/waste/burdens are collected under original Q and observed H. Manufacturer/specification permission, configuration-specific posttests and acceptance govern authorization, continued qualification and actual hold/rejection/disposition only, never deletion of an occurred load. No new Q, assumed repair/restoration or route authorization follows. | Bopen_j; converted_raw_R_j; justified_attribution; Sperformed_j; Bclose_j; Tlegitimate_j; inherited_vectors | Unnormalized attributed A_j vector; separate gross physical ledger | `ilcd-detailed-2010` |
| normalize_once | each nonreference inventory row j | q_j = A_j / Q; A_j = attributed extensive amount for the original cohort in the row native numerator unit; q_j = that amount per 1 kg reference flow. Execute this normalization once only when Q > 0. For post-release services use the linked original cohort Q and disclose the actual service horizon. The finished reference row is the 1 kg identity. Flow cards and aggregation only reference this same result; they do not divide again. At Q = 0 retain raw loads/stocks and issue no unit result. For an occurrence explicitly reporting physical custody/acquisition/removal (FG receipt/gross dispatch/return, packaging/waste legs or asset movements), use its independently measured unallocated gross native-unit movement as A_j for this same single division by original Q; it is a physical movement per Q, not an attributed burden vector. Label that basis and retain the absolute gross ledger separately. Do not stock-correct or economically scale that gross leg. Actual asset-service rows keep only their documented service burden; a full physical acquisition/charge is not service, a new purchase on reuse, or an automatic credit/transfer. For actual cooling-water/heat-carrier Product supply and external Product return, the physical numerator is the independently measured full gross native-unit leg V_j, so this same normalization gives V_j/Q for manufacture or V_j/original Q for the observed service horizon. It is not a stock-corrected water consumption, attributed heat burden or economic/service share. Keep the independent attributable supplier/service burden and carrier mass/phase/P/T/enthalpy separately with one provider; no added purchase, boiler/steam system or return credit is implied. | A_j; Q; original_cohort_id; service_horizon_if_applicable | q_j in row-native numerator unit per 1 kg whole first-released board | `ilcd-detailed-2010` |
| phase_balance | each actual sulfate/phase/water state | For independently measured molar hemihydrate conversion extent xi_H, CaSO4·0.5H2O + 1.5 H2O becomes CaSO4·2H2O; any actual anhydrite hydration needs its own measured extent xi_A and 2 H2O per CaSO4. Independently measure actual reverse dehydration where present. Retain free, structural, reaction and carrier water separately as state/composition subledgers without a second purchase. Total physical mass and Ca/S/H/O/C balances do not establish the unknown extents or evaporated water. | cp_phase; independently measured phase amounts/extents; free moisture; supplied component water; measured evaporation; combustion species | Separate phase/species/water checks and unresolved residuals | `epa-gypsum-1993`; `grenzebach-gypsum-solutions` |
| physical_gates | manufacturing/FG/combined boundaries | At each physical gate, opening complete wet material/installed stocks + gross external incoming species + true internal incoming = closing complete wet stocks + gross external outgoing species + true internal outgoing. At manufacture the internal board output is Q; at FG the same Q is incoming and closing FG is real stock. Cancel that internal Q and internal reuse at combined gate only. Include actual returned mass, added water/material, real losses, repair/asset legs and carrier water; do not substitute burden shares or assume return mass equals an original delivery. Record stage_internal_in and stage_internal_out as matched same-event physical transfers and inherited exchange vectors, retaining row, provider, property/unit, gate, phase, period and cohort coordinates; cancel only the matched pair at the combined boundary. Actual hydration formation/consumption remains in its species/phase subledger, not a second external receipt. First WIP-to-FG acceptance enters accepted_production once; all other FG transfers are mutually exclusive and retain original Q, so a stock movement never repeats first acceptance. | all gross physical legs; opening/closing raw/WIP/FG/installed/reusable stocks; internal link IDs | Independent gate closure and species/element residuals; no fitted missing flows | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `ilcd-detailed-2010` |
| packaging_balance | each individual actual packaging material | O_empty + O_WIP + O_FG + O_reusable + P + N_ext + ER + X_in = C_empty + C_WIP + C_FG + C_reusable + S + EO + W + X_out. P is actual purchased packaging including bundled paid supply; N_ext is first non-purchased external ingress and includes non-paid supplier-included I once, never plus I again. ER is genuine external return received with same-item prior outward evidence; S accompanies gross physical shipments; EO is external return sent; W is real waste. X is actual separately entering/leaving repair matter or water by species, removed only when already in another incoming/outgoing term. Preserve real new input and full closing wet mass simultaneously. Internal reuse cancels; no packaging enters net board Q. Deduplicate X only against the same species/material already represented in another same-direction flow term, never against opening/closing stock. Whole actual wet P/I article ingress has one physical receipt and one upstream owner; actual retained repair matter/water remains both in input and in the complete wet closing stock. Whole supplied wet packaging counts included substrate/liner/adhesive/coating/hardware and water once as measured child accounts. Truly separately purchased onsite components have independent receipts/owners only when disjoint from the whole article, or through a measured component-to-assembly bridge with matched internal handoff cancellation. Never add complete assembled tare and those same constituent supplies twice. Retain true extra ingress and full wet closing stock simultaneously. One actual collected mixed packaging outlet uses one qualified whole-mixture Waste exchange and one real treatment/provider record. Its independently measured per-origin W raw accounts must conserve the total with uncertainty; total OR partition are alternatives, never additive exits. Existing material W cards are non-additive origin children for that event, not fabricated separate outlets. Real separate outlets retain their own correct Waste identities/treatment. Add/reselect a specific compatible mixed Waste only when the real outlet exists, not for six-leg symmetry. For every component use mutually exclusive receipt classifications: P includes separately paid and bundled paid acquisition; N_ext is first non-purchased external acquisition, with non-paid supplier-included I recorded as a non-additive child. Other first non-purchased ingress has its own specific conditional row only when observed, not ER or an outgoing leg. ER requires the same item prior outward event; EO is a real distinct external return out. Unknown payment, prior history or ownership stays unresolved. Retain each gross event and complete wet stocks; P/I/N_ext/ER do not imply a second upstream provider or automatic credit. | cp_pack six legs; each opening/closing state; actual X species and de-duplication links | Each packaging physical closure; one upstream burden owner; no automatic coproduct | `ga-making-gypsum-board`; `ilcd-detailed-2010` |
| asset_service | each asset and each installed fluid/repair item | Physical asset O + purchases + transfers_in = C + transfers_out + retirements, using complete actual item configuration. For every new/old repair material and water phase apply the corresponding wet-mass equation with actual X_in/X_out; de-duplicate X only with other real incoming/outgoing terms. Current justified service charge is assigned by dedicated use then the allocation hierarchy; carry only unused/unassigned charge, without replacing full closing physical stock with a burden share. | cp_asset physical items and service fields; cp_repair wet-state legs; actual allocation decision | Separate complete physical stocks and once-attributed current service vector | `ilcd-detailed-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Whole supplied article and every native restriction must match actual product/route. Keep each unresolved auxiliary identity and provider compatibility condition explicit. | Native identity/profile; supplier composition; actual process and provider boundary |
| dq_measurement | all quantities | Retain calibrated raw totals, actual rate intervals, independent densities and same-configuration geometry/mass/count evidence; report sampling and uncertainty. No numerical site quantities are fabricated here. | cp_release; cp_water; cp_energy_mj_board; cp_energy_mj_dispatch; cp_energy_kg_board; cp_energy_kg_dispatch; cp_gas_board; cp_gas_dispatch |
| dq_cohorts | every gate and service | Full zero-output/failed/startstop/idle/cleanup/rework history, raw/WIP inheritance vectors and exact first-release FG bridge; performed original service stays charged when FG remains. | Opening/closing physical and vector ledgers; original release/shipment IDs; service horizon |
| dq_sources | method and ranges | Use primary industrial evidence for compatible qualitative route only; ILCD for the justified attributional hierarchy only. No case recipe, dimensions, fuel factor, emission factor, lifetime or performance threshold is a default. Major input/energy/water/waste ranges remain an explicit evidence need until compatible empirical or site evidence exists. | Source-specific applicability and counterexamples; no fabricated empirical range |
| dq_phase | physical/species/phase closure | Independently measure free water, phase fractions, reaction extent and actual chemical species. Publish residuals and unmeasured scope; mass closure alone is insufficient. | cp_phase; separate mass/element/species balances and analytical QC |
| dq_ownership | packaging/capital/waste/provider | Preserve gross legs and full wet closing stocks including supplier ingress and retained additions; document one upstream owner and no double-counted full service, waste-sale credit or stock correction. | cp_pack; cp_asset; cp_repair; treatment/provider receipts |

## 9. Validation Rules

Apply these checks with the complete scope, boundary, allocation and calculation context. A blank UUID, missing amount, unknown species or unsupported phase relationship is disclosed, not silently treated as zero or completed evidence.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference and each UUID | Verify whole dried paper-faced composite applicability, every native basename/synonym/comment/CAS/grade/route/form/geography/type/medium and all properties. Bound row restrictions are mandatory; a UUID alone does not verify a provider. A true core-product mismatch or unresolved core identity blocks use; an ordinary auxiliary/provider/future-measurement gap stays explicitly unresolved without automatic core failure. | `ga-making-gypsum-board`; `ga-gypsum-board-identity`; `ilcd-detailed-2010` |
| v_basis | all normalized quantities | Reference amount, first-release Q, selected finished row, native units, collection denominators and the single normalization must agree. Preserve Q=0 actual loads and stocks with no unit result. Unknown calculations are review-required; do not remove a scientific condition to make a finite checker pass. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `ilcd-detailed-2010` |
| v_water | phase and reaction evidence | Total physical mass, relevant Ca/S/H/O/C balances and independent real species/phase-water evidence are separate checks. Quantify reaction extent and free-water evaporation independently; never fit two unknowns to one residual. Bound water in received stucco and released board is not a separate purchased input or unmeasured emission. COD/VOC/carbon indicators remain indicators. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `ilcd-detailed-2010` |
| v_stocks | all physical and burden gates | Reconcile manufacturing, FG and combined physical gates with all gross species, packaging and asset legs; cancel only internal crossings. Reconcile each inherited burden vector separately. Closing released FG and already performed service cannot be subtracted from manufacturing; stock-corrected consumption cannot be corrected a second time. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `ilcd-detailed-2010` |
| v_pack | each packaging material | For each actual packaging article reconcile all six P/N_ext/ER/S/EO/W legs, with I retained within N_ext plus opening/closing empty, attached-to-WIP, attached-to-FG and reusable stock. Supplier-included ingress remains real material with one upstream owner. Only de-duplicate X_in/X_out against other incoming/outgoing terms; real new input retained in closing stock is not cancelled. No automatic packaging coproduct or new board Q. For every component use mutually exclusive receipt classifications: P includes separately paid and bundled paid acquisition; N_ext is first non-purchased external acquisition, with non-paid supplier-included I recorded as a non-additive child. Other first non-purchased ingress has its own specific conditional row only when observed, not ER or an outgoing leg. ER requires the same item prior outward event; EO is a real distinct external return out. Unknown payment, prior history or ownership stays unresolved. Retain each gross event and complete wet stocks; P/I/N_ext/ER do not imply a second upstream provider or automatic credit. | `ga-making-gypsum-board`; `ga-gypsum-board-identity`; `ilcd-detailed-2010` |
| v_rework | post-release operations | Retest, dispatch and return do not create new production. Actual post-release work requires manufacturer/specification permission, postwork tests, acceptance and disposition records. Do not assume broken gypsum board is restored; its disassembly/recycling may be a distinct operation whose additional materials, water, energy and waste must all be recorded. | `ga-making-gypsum-board`; `ga-gypsum-board-identity`; `ilcd-detailed-2010` |
| v_completeness | dataset quality and reporting | Report actual record coverage, zero/absent/unknown distinctions, raw units and conversion evidence, species speciation, cohort histories, provider ownership and uncertainty. Source context provides methodology, not a factory recipe or default range; no fixed thickness/moisture/strength/fire/thermal/acoustic/lifetime is adopted. Record every unresolved exchange identity and missing empirical range; no claim of completed scientific/translation review follows from engineering checks. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `ilcd-detailed-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Attributional inventory of the declared first-released whole paper-faced board and explicitly disclosed observed cohort services |
| allowed_use | Compatible manufactured product and direct-gas route after actual data, identity, boundary, conversion and quality checks; use measured area/count conversion only |
| excluded_use | Installation/use/lifetime comparisons or unmeasured fire/acoustic/strength claims; powder/block/fibre-board substitution; on-site calcination and unreviewed heating routes; assuming a mapped/reviewed/published PCR |
| required_metadata | Complete reference qualifiers; site/year; configuration; feed/formulations; first-release Q and all stock/vector gates; native restrictions; original cohort and service horizon |
| required_quality_disclosure | All unresolved auxiliary/provider/range and measurement gaps; actual analytical/speciation/phase coverage; attribution rationale; uncertainty; exclusion evidence; source applicability |
| update_trigger | Changed product facings/formulation/feed phase or heating route; changed provider/native identity; new empirical evidence or failed physical/phase/cohort check |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-gypsum-1993 | official_guidance | US EPA AP-42 11.16 Gypsum Manufacturing; July 1993 / reformatted January 1995; https://www.epa.gov/sites/default/files/2020-10/documents/c11s16.pdf | Complete primary process context including Figure 11.16-1, wallboard hydration/drying/finishing and adjacent plaster route; qualitative decomposition only. Tables and footnotes are not adopted as default emission factors, dimensions, recipe or allocation. |
| grenzebach-gypsum-solutions | handbook | Grenzebach Gypsum Solutions; edition unspecified; https://www.grenzebach.com/fileadmin/Grenzebach_Group/Gips/Grenzebach_Gypsum_Solutions_EN.pdf | Primary equipment-maker route synthesis: pages6–11 paper handling, mixing/forming, dryer, trimming/bundling and real heating alternatives; pages12–13 block counterexample. No numerical plant transfer or LCA allocation. |
| ga-making-gypsum-board | handbook | Gypsum Association, Making Gypsum Board; https://gypsum.org/making-gypsum-board/ (complete tool-returned article text retrieved 2026-10-20) | Primary association description of paper-faced composite manufacture, rehydration, free-moisture drying, end identification and support/storage. No numerical thresholds or lifetime. |
| ga-gypsum-board-identity | handbook | Gypsum Association, What is Gypsum Board?; https://gypsum.org/what-is-gypsum-board/ (complete tool-returned article text retrieved 2026-10-20) | Paper-faced gypsum-core product identity and distinction from wider gypsum-panel products and special core-additive boards. Not a complete ASTM standard or factory specification. |
| ilcd-detailed-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA — Detailed Guidance; first edition March 2010; sections7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Justified attributional multifunctional-process hierarchy: subdivision/virtual subdivision, exchange-specific determining physical causality, then actual common-gate market value for genuine remainder. Does not support industrial recipe, emission factors or default physical/economic shares. |
