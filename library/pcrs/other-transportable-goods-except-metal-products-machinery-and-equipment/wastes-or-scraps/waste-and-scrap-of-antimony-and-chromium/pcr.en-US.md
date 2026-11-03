---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-antimony-and-chromium
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Source-segregated chromium casting riser pieces for chromium recovery

## 1. Scope and Applicability

This attributional PCR covers one product boundary: source-segregated solid chromium-metal casting risers removed from cooled high-purity chromium ingots before mother-billet scalping/hot extrusion and first released as feed for a specified chromium recycler. The real formation starts with the original whole chromium supply forms and controlled-oxygen vacuum induction casting; it is not a scrap-purchase-and-packing model. Primary evidence positively describes the cooled riser cut-off and subsequent billet use. Its riser contains a solidification pipe and porosity: solid means solid-state pieces, not a fully dense article. Measure mass independently rather than using external dimensions or a default density. Exotech documents real recycled chromium feed use and solid-scrap reception. This is a transparent qualitative technical synthesis across primary sources, not a claim of one contemporary SKU, factory, order, recipe or universal receiver specification. `mrc-chromium-casting-2000`; `exotech-chromium-feed`; `exotech-solid-reception`

Exclude antimony scrap and Sb/Cr mixtures; chromium-plated steel; FeCr and other Fe/Ni/Pb-main alloys; chromium chemical sludge, oxide powder, ash, slag and detached scale; grinding/cutting fines as the reference form; sintered-target manufacturing remnants; used sputter targets or backing plates; recovered metal, chromium powder and finished targets. No default alloy recipe, purity, density, yield, plant setting, zero burden or recovery credit is supplied. Actual cut-off equipment and receiver acceptance require foreground evidence. The CPC 39368 leaf is broader than this product; an overlapping old 41609 title cannot override this narrow methodology boundary. `un-cpc3-2025`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-antimony-and-chromium |
| classification_refs | CPC 3.0:39368; narrower; candidate context only |
| covered_products | One single-heat solid chromium-metal-matrix casting riser first released to agreed chromium-recycling feed requirements |
| excluded_products | Antimony or mixed Sb/Cr scrap; plated steel; FeCr or Fe/Ni/Pb-main alloys; chemical sludge/oxides/slag/ash/scale; reference fines; sintered or spent target scrap; recovered metal or powder |
| representative_product | Source-segregated chromium casting riser pieces for chromium recovery |
| production_route | Original whole chromium feed -> actual crucible conditioning and controlled-oxygen induction casting -> cooling -> actual riser cut-off -> source segregation and necessary preparation -> first receiver-grade release -> original-cohort services to actual reception |
| market_state | Unrefined solid whole riser; measured net whole mass; agreed chemistry and physical acceptance; no downstream recovery assumed |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one specified chromium recycler with qualified solid casting-riser feed |
| How much | 1 kg |
| How well | single chromium casting heat and original feed origin; chromium metal matrix with independently measured oxygen and oxide inclusions; complete elemental assay including Sb Fe Pb and relevant contaminants; cooled cut-off riser form with recorded shrinkage pipe and porosity distinct from scale ash powder sludge and alloy scrap; actual cut-off method and tool and any fluid; mother billet gate before scalping and extrusion; source-specific flake briquette and chromium oxide supply forms; vacuum induction casting and crucible conditioning history; actual segregation and preparation; specified chromium recycler acceptance and contamination limits; unique first-release lot and net whole-riser kg Q_c; opening and closing raw WIP FG and component stocks with per-exchange inherited vectors; gross movements and genuine return history; actual site period utilities and emission media; allocation relation and common-gate state and prices if needed; original cohort and actual postrelease service horizon H; all purchase and nonpurchase first physical component receipts; supplier-included burden scope and container ownership; individual waste destinations and actual species |
| How long or cycle | One unique first-release cohort; later actual service uses original Q_c and observed H |
| reference_flow_link | released_riser |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Waste and scrap of antimony and chromium `c42e4c47-7b87-4213-bd68-8e8719f6e24a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | single chromium casting heat and original feed origin; chromium metal matrix with independently measured oxygen and oxide inclusions; complete elemental assay including Sb Fe Pb and relevant contaminants; cooled cut-off riser form with recorded shrinkage pipe and porosity distinct from scale ash powder sludge and alloy scrap; actual cut-off method and tool and any fluid; mother billet gate before scalping and extrusion; source-specific flake briquette and chromium oxide supply forms; vacuum induction casting and crucible conditioning history; actual segregation and preparation; specified chromium recycler acceptance and contamination limits; unique first-release lot and net whole-riser kg Q_c; opening and closing raw WIP FG and component stocks with per-exchange inherited vectors; gross movements and genuine return history; actual site period utilities and emission media; allocation relation and common-gate state and prices if needed; original cohort and actual postrelease service horizon H; all purchase and nonpurchase first physical component receipts; supplier-included burden scope and container ownership; individual waste destinations and actual species |


Every qualifier must be declared in the actual package and the complete reference-exchange description. The broad Product identity is used for one qualified chromium riser only; its complete native record has no fixed shape/grade/CAS/geography or literal Sb+Cr mixture restriction. Actual route, form and acceptance come from independent source and foreground evidence, never from the classification alone. Explicitly mixed native records, an elementary chromium flow and the source of a finished chromium article are not substitutes. The release card repeats the complete restrictions so selection never loses them.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q_c is calibrated net whole-solid first-release mass from cp_release; released_riser is 1 kg after the sole normalization. Closing accepted FG already belongs to Q_c. Do not replace it by contained chromium kg or gross shipments. |
| native_units | all inventory rows | actual extensive property | kg; MJ; t*km | Preserve each row dimension. Mass uses kg; energy uses MJ with its verified Units of energy group 93a60a57-a3c8-11da-a746-0800200c9a66. Convert g to kg and kWh to MJ once using native factors 0.001 and 3.6 before attribution. Integrated volume gets no second time factor; true rates are integrated. Any density is independently measured for that substance/state. Item(s) and item may share factor one but never imply an item kg. |
| phase_and_heat | metal water gas and heat | mass and actual enthalpy | kg; MJ | Independently measure intrinsic oxide/metal fractions, free water and actual gas species; preserve phase and element subledgers without adding components to wholes. Reconcile real sensible/latent/chemical heat and heat exchange using measured states; no invented reaction water, steam export or cooling credit. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of the original whole chromium feed forms and actual separate oxide powder before source casting; a compatible verified source-formation module may replace only the same measured stages with readable burdens |
| starting_condition_role | supplied_material |
| product_classification_scope | CPC 3.0:39368; narrower |
| recursive_input_rule | Internal wash metal and raw/WIP/FG transfers cancel with history; external finished scrap does not create new casting manufacture or Q. Retain actual inherited providers once. |
| upstream_dataset_requirement | Use one compatible provider for every whole chromium supply form, oxide powder, whole refractory article and actual utility. Trace chromium feed through its real primary/secondary metal production and actual refining/degassing/form preparation and transport; do not infer an electrolytic route merely from the flake name. Supplied formulations and manufactured articles are charged once; constituent assays and carrier water are subledgers. Actual onsite preparation instead requires each purchased constituent plus real energy and loss. An independently verified source module may carry formation, but its raw gates, co-outputs, allocation and inherited exchange vector must be readable; never copy a full batch burden to both billet and riser. |
| disclosure | single chromium casting heat and original feed origin; chromium metal matrix with independently measured oxygen and oxide inclusions; complete elemental assay including Sb Fe Pb and relevant contaminants; cooled cut-off riser form with recorded shrinkage pipe and porosity distinct from scale ash powder sludge and alloy scrap; actual cut-off method and tool and any fluid; mother billet gate before scalping and extrusion; source-specific flake briquette and chromium oxide supply forms; vacuum induction casting and crucible conditioning history; actual segregation and preparation; specified chromium recycler acceptance and contamination limits; unique first-release lot and net whole-riser kg Q_c; opening and closing raw WIP FG and component stocks with per-exchange inherited vectors; gross movements and genuine return history; actual site period utilities and emission media; allocation relation and common-gate state and prices if needed; original cohort and actual postrelease service horizon H; all purchase and nonpurchase first physical component receipts; supplier-included burden scope and container ownership; individual waste destinations and actual species |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_route | whole source chain | Include actual high-purity chromium flake receipt and any separately supplied chromium briquette and Cr2O3 powder; whole-crucible conditioning and wash melts; vacuum induction melting under actual argon exchanges; steel-mould casting; controlled cooling; removal of the cooled solid riser; source segregation; necessary foreign-object removal and receiver-grade testing; and unique first release. Preserve failure, start/stop, idle, cleanup and rework loads. The mother billet leaves at the same post-cut gate before scalping, extrusion and target machining; those later billet-only operations cannot be allocated backward onto an already separated riser. Buying finished scrap and packing it does not fulfil this route. | `mrc-chromium-casting-2000`; `jrc-ilcd-2010` |
| sb_supply | each supplied whole input | Use one compatible provider for every whole chromium supply form, oxide powder, whole refractory article and actual utility. Trace chromium feed through its real primary/secondary metal production and actual refining/degassing/form preparation and transport; do not infer an electrolytic route merely from the flake name. Supplied formulations and manufactured articles are charged once; constituent assays and carrier water are subledgers. Actual onsite preparation instead requires each purchased constituent plus real energy and loss. An independently verified source module may carry formation, but its raw gates, co-outputs, allocation and inherited exchange vector must be readable; never copy a full batch burden to both billet and riser. | `jrc-ilcd-2010` |
| sb_release | first release and FG | Q_c is newly first-released whole net solid riser mass for the named recycler in cohort c. The specification gate is at the generating/preparing facility after required tests; actual delivery to the recycler is retained as a later service. Exclude all packages, detached foreign matter and separately measured free water from Q_c; intrinsic oxide inclusions remain within the whole metal-matrix riser. Closing released FG already belongs to Q_c and is never added beside Q_c as production. Reinspection, shipment, borrowed container receipt, return or rework creates no second Q. Reverse an invalid release only against its original lot and restore any corrected release to that original cohort. | `jrc-ilcd-2010` |
| sb_stock | every exchange and cohort | Retain physical quantities and complete inherited per-exchange vectors for opening/closing raw stores, WIP, FG and containers. Convert raw original units before attribution. For newly released work assign current eligible loads plus opening-WIP history minus closing-WIP history; do not deduct closing accepted FG production history. Internal raw/WIP/FG issues and wash-metal returns transfer both quantity and history and cancel on consolidation. Include failed and zero-output batches and all measured start/stop, idle, cleaning and rework; Q_c=0 retains real loads and yields no unit result. | `jrc-ilcd-2010` |
| sb_service | postrelease services to reception | Keep performed storage, packing, handling, actual freight, recycler reception, returned deliveries and incremental rework in disjoint original-cohort service accounts. Use original fixed Q_c and observed horizon H; H is never a production denominator. Opening/closing released lots keep historical manufacturing vectors. Reverse the original delivery leg for a true customer return while retaining original production and adding only genuine incremental services. Unserved FG and unfinished transport/reception are disclosed; partial service history cannot claim a completed receiving gate. Contract manufacture and leased/entrusted container ownership do not alter these physical gates or burden inheritance. | `jrc-ilcd-2010` |
| sb_physical | production FG and consolidated gates | Use unallocated physical V for balances and attributed exchange vector A for burdens. Production opening raw/component stores and WIP plus external receipts plus old FG entering rework equals corresponding closing stores/WIP plus gross newly released transfer V_new plus old FG returned to FG plus all external outlets. V_new already contains Q_c and attached packages; do not add Q_c again. FG opening gross stock plus V_new plus true external returns plus old FG returned plus service component issues equals closing gross FG plus gross shipments plus old FG sent to rework plus actual external losses. Cancel paired internal legs in the combined gate. Reconcile total mass and Cr/O/Sb/Fe/Pb and each relevant element independently from actual phase/species evidence; one residual cannot fit two unknowns. Whole mixed outlets and source partitions are non-additive. X_in or X_out removes only an exactly duplicated OTHER term on the same side; never a stock or opposite-side flow. | `jrc-ilcd-2010` |
| sb_components | every real packaging container and attachment | For each concrete component k close opening_k + P_k + N_ext_k + ER_k = closing_k + grossS_k + EO_k + W_k at the same physical gate. Opening/closing includes empty stock, components attached to raw/WIP, attached FG and reusable stock without overlap. P means real purchases only. N_ext means all first external nonpurchase physical receipts including supplier-included packaging and first entrusted, borrowed or leased receipt. ER requires the same identified component to have an earlier external dispatch. These three ingress classes are mutually exclusive; opening stock cannot replace current receipts. Record actual material/form/type/direction and independently measured quantity for every event through its specific atomic receipt card/interface. Missing an actual interface makes that concrete package incomplete; do not just add a symbol or reuse a purchase UUID blindly. Internal issues/reuse cancel. grossS follows gross shipments, never Q or economic allocation. Measured transformation/moisture changes need separately identified physical legs. | `jrc-ilcd-2010` |
| sb_component_burdens | component ownership and supply coverage | Physical receipt classification is separate from ownership, original cohort, inherited per-exchange vector, supplier-included scope and actual incremental rental/return services. Charge manufacture once under its real provider agreement; a nonpurchase receipt is not zero burden and a return is not a new purchase, new Q or credit. For a whole purchased drum/cylinder record its component material partitions without purchasing those parts again. Supplier-included attachments retain their measured receipt even if their manufacture is already inside a provider; do not add it twice. One physical waste outlet has one provider; source partitions sum to its whole without duplication. | `jrc-ilcd-2010` |
| sb_extend | all actual exchanges | The finite cards are specific candidate interfaces, not a measured factory BOM. Mark absence only from actual route evidence. Before claiming completeness add a separately named atomic row/interface for every real unlisted tool, saw/abrasive/EDM consumable, entire cutting-fluid preparation, vacuum-pump oil, fuel, water circuit, package attachment, waste outlet and emitted chemical species. Declare actual material and cut-off technology without inventing an alloy recipe or lubricant. Thermal cut-off, wet chemical purification, milling or blending changes require scope review. Gas, free/reaction/structural water, condensate and heat are separate actual-state ledgers. External returned cooling water or real condensate is Product return with measured mass/state/enthalpy and supplier water/energy scope; do not create an unobserved boiler or steam system. | `jrc-ilcd-2010` |



### Component-part receipt interfaces

When a supplied whole article has attachments, instantiate these concrete material/form interfaces for every actual event with independently measured kg, exact P/N_ext/ER direction, grossS/EO/W outlet and stock location. The table names physical parts, not additional whole-article purchases. A partition of a purchased whole drum is a physical child receipt whose manufacture may already be inherited; financial procurement and physical partition are not added together. A real valve/gasket of an unlisted composition must be named and extended before the package is complete; do not invent its alloy or elastomer.

| interface_id | material_and_form | event_direction | quantity_and_record |
| --- | --- | --- | --- |
| drum_steel_body_receipt | Steel open-head drum body | P or N_ext or ER | measured body kg; actual event id; cp_components; separate grossS EO W and all stock legs |
| drum_steel_lid_receipt | Steel open-head drum lid | P or N_ext or ER | measured lid kg; actual event id; cp_components; same physical gate and retained history |
| drum_steel_ring_receipt | Steel drum closure ring | P or N_ext or ER | measured ring kg; actual event id; cp_components; same physical gate and retained history |
| cylinder_steel_body_receipt | Seamless steel argon-cylinder body | P or N_ext or ER | measured empty body kg; actual event id; cp_components; actual valve cap and guard separately identified |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cast_riser_route | Original chromium casting through first riser release | required | All real formation and preparation events | foreground with joint-process companion ledger | released_riser; 1 kg |
| cohort_service | Original-cohort services through actual recycler reception | conditional | Every actual postrelease event including returns | actual service ledger | per reference flow |
| component_pool | Individual physical component pools | conditional | Each actual packaging container and attachment event | physical movements separate from burden ownership | per reference flow |


Collect undivided raw quantities. The protocol aggregation cell states the final result basis only; it does not perform a division. Cards reuse the one calc_normalize result x_i_c after raw conversion, actual assignment and stock history. For companion physical output/movement cards keep gross V as a separate reconciliation result and never add that companion or a second provider to the allocated reference inventory. All card descriptions, preceding applicability and ancestor rules are consumable restrictions. Conditional cards are not evidence of actual presence. A real unlisted exchange requires its own concrete row before completion.

### Process: Original chromium casting through first riser release (`cast_riser_route`)

#### Inputs

##### Product flows

###### High-purity chromium metal flake (`chromium_flake`)

Record the whole actual flake supply once with manufacturer, form, batch and Cr/O/impurity assay plus its actual production/refining history. It is metallic chromium, not chromite, FeCr, stainless steel, Cr2O3 powder or an elementary chromium emission. Wash-melt charges and production charges remain distinct operational subaccounts; internal wash-metal reuse is not another external purchase. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: High-purity chromium metal flake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_charge`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Chromium metal briquette (`chromium_briquette`)

Separate actual briquette receipts from flake receipts. The patent example includes briquettes but does not establish a universal fraction, binder, density or grade. Require actual whole supply specification; any binder is a constituent subledger of that purchased article unless separately mixed onsite. No ore or ferrochromium proxy. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Chromium metal briquette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_charge`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Chromium(III) oxide powder (`chromium_oxide`)

Only the actual separately supplied Cr2O3 powder added to the metal melt; CAS 1308-38-9 and oxidation state must be verified against the supplier. Whole powder mass and assay are independent records. It is an input chemical, never the reference metallic scrap; CrO3 or chromium ore is incompatible. No patent recipe or reaction yield is imposed. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Chromium(III) oxide powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_charge`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Argon, gaseous (`argon_supply`)

Use only gaseous argon Product input on Mass/kg; the complete native name fixes gas state and supplies no grade, CAS, geography or production route. Independently verify Ar identity (supplier CAS 7440-37-1), purity, moisture and pressure. Preserved old broad source-classification labels do not change this gas identity or certify supply. Exclude liquid argon, air and elementary emissions. Meter all real purge/refill/failed-cycle uses, including losses; do not derive mass from an unmeasured assumed gas density. Cylinders are separate physical pools and provider scope must prevent duplicate gas/container manufacture. The native reference property is Mass; its support group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg. No native dataset version belongs in the PCR.

- Selected flow: Argon, gaseous `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Alternating-current electricity at the actual user connection (`electricity`)

Meter induction, vacuum, mould preheat, cooling pumps, cutting, extraction, weighing and controls separately where possible. Collect voltage, grid/source route, location and generation/T&D ownership. This row is unbound: the inspected CN <1 kV flow cannot silently represent the US patent installation or a different grid, and the US generic record does not establish this factory supply. A name match is not supply evidence. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Alternating-current electricity at the actual user connection
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Magnesia-stabilized zirconia casting crucible (`zirconia_crucible`)

Record the whole actual manufactured crucible, installation/replacement, opening/closing life stock and measured consumption or causal service assignment. Its actual composition and erosion into metal require supplier and wear records; do not turn the patent composition into separate ZrO2/MgO purchases or assume a crucible lifetime. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Magnesia-stabilized zirconia casting crucible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_articles`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Steel chromium-ingot casting mould (`steel_mould`)

One whole actual steel mould with measured stock and service history. Reuse is an internal use, not purchase per heat. Actual grade/coating and any separately supplied release preparation need their own verified records. Native steel-drum records with CTUe reference property cannot represent this mould or Mass/kg packaging. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Steel chromium-ingot casting mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_articles`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Ceramic chromium-ingot cooling cover (`ceramic_cover`)

The source describes an actual ceramic insulator covering the ingot during cooling without establishing its material recipe. Record one whole actual cover and its real supplier-declared ceramic composition and consumption/service life. Missing composition is a concrete package data gap, not permission to label it alumina or to omit it. Electrical ceramic insulators are not a compatible thermal-cover identity. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Ceramic chromium-ingot cooling cover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_articles`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Tap-water makeup to the actual cooling circuit (`cooling_makeup`)

Conditional only if this real circuit receives tap-water makeup. Meter fresh input separately from internal circulation and declare temperature, chemistry and independently measured density for any volume-to-mass conversion. The inspected Hong Kong Volume-reference water flow and its screening secondary density are not adopted. Record a different actual water source as a separate concrete input. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Tap-water makeup to the actual cooling circuit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chromium casting mother billet after riser cut-off (`mother_billet`)

Weigh the whole physical mother billet at the common post-cut gate and retain its assay, history and eventual target-fabrication route. This is a companion joint-process physical output for reconciliation and co-output attribution, not a second reference output, credit or provider in the allocated riser inventory. Preserve its disjoint allocated vector in the joint-process portfolio; never add its full vector to the riser. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Chromium casting mother billet after riser cut-off
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joint`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Unique first-released solid chromium riser (`released_riser`)

Use this broad native Product name only for the single source-segregated chromium-metal-matrix solid cooled casting riser in this PCR. Full native names/comments specify production mix at plant and unspecified treatment but no fixed grade, CAS, route, form, geography or required Sb+Cr mixture. The display is a category label; it does not prove a physical mixture, casting route or acceptance. Independent primary route evidence and the following actual qualifiers restrict every occurrence: single chromium casting heat and original feed origin; chromium metal matrix with independently measured oxygen and oxide inclusions; complete elemental assay including Sb Fe Pb and relevant contaminants; cooled cut-off riser form with recorded shrinkage pipe and porosity distinct from scale ash powder sludge and alloy scrap; actual cut-off method and tool and any fluid; mother billet gate before scalping and extrusion; source-specific flake briquette and chromium oxide supply forms; vacuum induction casting and crucible conditioning history; actual segregation and preparation; specified chromium recycler acceptance and contamination limits; unique first-release lot and net whole-riser kg Q_c; opening and closing raw WIP FG and component stocks with per-exchange inherited vectors; gross movements and genuine return history; actual site period utilities and emission media; allocation relation and common-gate state and prices if needed; original cohort and actual postrelease service horizon H; all purchase and nonpurchase first physical component receipts; supplier-included burden scope and container ownership; individual waste destinations and actual species. It is not a Sb/Cr blend, chromated steel, FeCr, oxide sludge/ash, Cr2O3 chemical or finished target. Keep the whole measured riser with intrinsic inclusions; no assumed chemical purity, yield or recycling credit. The native reference property is Mass; its support group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg. No native dataset version belongs in the PCR.

- Selected flow: Waste and scrap of antimony and chromium `c42e4c47-7b87-4213-bd68-8e8719f6e24a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `un-cpc3-2025`; `mrc-chromium-casting-2000`; `exotech-chromium-feed`; `exotech-solid-reception`; `jrc-ilcd-2010`

##### Waste flows

###### Captured chromium-riser cutting fines (`captured_cut_fines`)

Conditional weighed collected cutting outlet. Preserve actual whole composition, moisture, contamination and named receiver. It is separate from the solid reference riser and from atmospheric chromium species. If one mixed filter cake is the actual outlet, replace with that exact single mixture and keep constituent assays as non-additive subledgers. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Captured chromium-riser cutting fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Spent magnesia-stabilized zirconia crucible (`spent_crucible`)

Conditional real removed whole refractory waste with attached metal measured separately as a partition; retain route and treatment provider. Do not add constituent masses to the same whole waste or presume chromium-free disposal. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Spent magnesia-stabilized zirconia crucible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Cooling-circuit blowdown wastewater (`cooling_blowdown`)

Conditional actual waste-water outlet; measure whole water and analytical Cr species and each relevant solute independently. COD and total chromium are indicators, not fabricated molecular masses. Supplier-returned clean heat-exchanger water is a separate Product return rather than this waste. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Cooling-circuit blowdown wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

##### Elementary flows

###### Argon emitted to actual ambient air (`argon_air`)

Actual purge/exhaust Ar reaching the stated air compartment after any recovery; measure or independently reconcile gas with stored/recovered argon. This is a separate elemental species and direction from purchased gaseous argon. A vacuum exhaust transfer is not automatically an ambient emission. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Argon emitted to actual ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Metallic chromium particulate emitted to actual air (`chromium_zero_air`)

Conditional only when speciation establishes Cr(0) particulate crossing the actual ambient boundary. Total PM or total chromium does not establish this amount. Retain particle size and receiving compartment; do not select a Cr(III) ion, Cr(VI) compound or resource flow by element name. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Metallic chromium particulate emitted to actual air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Chromium(III) oxide particulate emitted to actual air (`chromium_oxide_air`)

Conditional independently identified Cr2O3 atmospheric mass, not a second expression of the same total chromium or total PM. No oxidation yield is inferred from a mass-balance residual. Other real oxide/ion species require distinct named rows. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Chromium(III) oxide particulate emitted to actual air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

###### Water vapour from the actual cooling circuit to air (`water_vapour`)

Conditional actual evaporative loss; independently close circuit water and actual gas state. Separate free moisture, sorbed/structural water and chemically formed water. No reaction water is invented to close chromium or oxygen balance. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Water vapour from the actual cooling circuit to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `mrc-chromium-casting-2000`; `jrc-ilcd-2010`

### Process: Original-cohort services through actual recycler reception (`cohort_service`)

#### Inputs

##### Product flows

###### Alternating-current electricity at the actual user connection (`service_electricity`)

Meter actual postrelease storage/handling/packing energy separately from production and bind to original cohort Q_c and observed H. Same supplier/voltage/geography checks as production electricity. No repeated production or hidden service exclusion for closing FG. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Alternating-current electricity at the actual user connection
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-2010`

###### Road freight transport of the chromium-riser consignment (`road_freight`)

Conditional actual outsourced road service to the recycler receiving gate with real distance, load, vehicle, return trips and provider scope. Calculate actual tonne-km from kg and km; no default distance or payload. Each other actual transport mode needs its own row. The consignment includes actual packages in transported gross load without adding those packages to Q_c. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Road freight transport of the chromium-riser consignment
- Flow property / unit: Transport service / t*km
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-2010`

###### Returned previously released chromium casting riser (`returned_riser`)

Only a real return linked to the original external dispatch and original release cohort. Weigh the whole physical return and retain its historical exchange vector. It is not a new scrap purchase, first nonpurchase receipt or new Q. Reverse the original delivery and assign genuine incremental handling/rework once; do not borrow a reference-flow UUID without independently checking the returned state. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Returned previously released chromium casting riser
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Individual physical component pools (`component_pool`)

#### Inputs

##### Product flows

###### Polyethylene bag purchase receipt P (`pe_bag_purchase`)

One actual PE bag/liner; native Product Mass/kg; CAS 9002-88-4; production mix at plant and no fixed grade, size or geography. Independently verify polymer, film/closure components, clean/used state and supplier. It is not PP, woven seed sacks or a collection of packaging materials. P is real purchased first receipt only. Measure gross/tare/net article kg and ownership/provider history; service-life allocation is independent of receipt quantity. The native reference property is Mass; its support group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg. No native dataset version belongs in the PCR.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### First nonpurchase external polyethylene bag receipt (`pe_bag_first_nonpurchase`)

One actual PE bag/liner; native Product Mass/kg; CAS 9002-88-4; production mix at plant and no fixed grade, size or geography. Independently verify polymer, film/closure components, clean/used state and supplier. It is not PP, woven seed sacks or a collection of packaging materials. N_ext includes every actual first supplier-included, entrusted, borrowed or leased physical receipt of this component. Record event-level kg and real source/form/type/direction. This is an independent nonpurchase receipt interface, not a symbolic addition or copy of the purchase binding. Keep original vector and supplier-included scope; ownership does not erase physical receipt or imply zero burden. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: First nonpurchase external polyethylene bag receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Polyethylene bag genuinely returned after external dispatch (`pe_bag_return_in`)

One actual PE bag/liner; native Product Mass/kg; CAS 9002-88-4; production mix at plant and no fixed grade, size or geography. Independently verify polymer, film/closure components, clean/used state and supplier. It is not PP, woven seed sacks or a collection of packaging materials. ER requires identifiable prior external dispatch of this same component. Measure actual returned kg and retain original cohort/history plus incremental rental/return/cleaning service. First-ever outside receipt is N_ext or P instead; internal store/WIP/FG issue is not ER. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Polyethylene bag genuinely returned after external dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Steel open-head transport drum purchase receipt P (`steel_drum_purchase`)

Only if one actual steel open-head drum is used. Record measured whole body/lid/ring partitions and actual gasket material separately; no assumed volume or steel grade. Do not bind inspected drum candidates whose native reference property is CTUe. P is real purchased first receipt only. Measure gross/tare/net article kg and ownership/provider history; service-life allocation is independent of receipt quantity. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Steel open-head transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### First nonpurchase external steel open-head drum receipt (`steel_drum_first_nonpurchase`)

Only if one actual steel open-head drum is used. Record measured whole body/lid/ring partitions and actual gasket material separately; no assumed volume or steel grade. Do not bind inspected drum candidates whose native reference property is CTUe. N_ext includes every actual first supplier-included, entrusted, borrowed or leased physical receipt of this component. Record event-level kg and real source/form/type/direction. This is an independent nonpurchase receipt interface, not a symbolic addition or copy of the purchase binding. Keep original vector and supplier-included scope; ownership does not erase physical receipt or imply zero burden. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: First nonpurchase external steel open-head drum receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Steel open-head transport drum genuinely returned after external dispatch (`steel_drum_return_in`)

Only if one actual steel open-head drum is used. Record measured whole body/lid/ring partitions and actual gasket material separately; no assumed volume or steel grade. Do not bind inspected drum candidates whose native reference property is CTUe. ER requires identifiable prior external dispatch of this same component. Measure actual returned kg and retain original cohort/history plus incremental rental/return/cleaning service. First-ever outside receipt is N_ext or P instead; internal store/WIP/FG issue is not ER. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Steel open-head transport drum genuinely returned after external dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Seamless steel argon cylinder purchase receipt P (`argon_cylinder_purchase`)

Only if actual gaseous argon is delivered in this identified seamless steel cylinder. Track body, valve and cap/guard as real separate component partitions with measured material and state; never assume a cylinder capacity or multiply gas mass by a container factor. For a real bulk supply this pool is absent with evidence. P is real purchased first receipt only. Measure gross/tare/net article kg and ownership/provider history; service-life allocation is independent of receipt quantity. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Seamless steel argon cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### First nonpurchase external seamless steel argon cylinder receipt (`argon_cylinder_first_nonpurchase`)

Only if actual gaseous argon is delivered in this identified seamless steel cylinder. Track body, valve and cap/guard as real separate component partitions with measured material and state; never assume a cylinder capacity or multiply gas mass by a container factor. For a real bulk supply this pool is absent with evidence. N_ext includes every actual first supplier-included, entrusted, borrowed or leased physical receipt of this component. Record event-level kg and real source/form/type/direction. This is an independent nonpurchase receipt interface, not a symbolic addition or copy of the purchase binding. Keep original vector and supplier-included scope; ownership does not erase physical receipt or imply zero burden. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: First nonpurchase external seamless steel argon cylinder receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Seamless steel argon cylinder genuinely returned after external dispatch (`argon_cylinder_return_in`)

Only if actual gaseous argon is delivered in this identified seamless steel cylinder. Track body, valve and cap/guard as real separate component partitions with measured material and state; never assume a cylinder capacity or multiply gas mass by a container factor. For a real bulk supply this pool is absent with evidence. ER requires identifiable prior external dispatch of this same component. Measure actual returned kg and retain original cohort/history plus incremental rental/return/cleaning service. First-ever outside receipt is N_ext or P instead; internal store/WIP/FG issue is not ER. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Seamless steel argon cylinder genuinely returned after external dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Polyethylene bag on gross physical shipments (`pe_bag_shipment`)

One actual PE bag/liner; native Product Mass/kg; CAS 9002-88-4; production mix at plant and no fixed grade, size or geography. Independently verify polymer, film/closure components, clean/used state and supplier. It is not PP, woven seed sacks or a collection of packaging materials. Measure actual component kg physically leaving with gross consignments, including repeated dispatches and separately traceable customer receipts; do not use net Q, net sales or allocation shares. This is a physical reconciliation transfer with retained burden history, not an extra coproduct or manufacturing provider. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Polyethylene bag on gross physical shipments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Polyethylene bag returned externally to owner (`pe_bag_return_out`)

One actual PE bag/liner; native Product Mass/kg; CAS 9002-88-4; production mix at plant and no fixed grade, size or geography. Independently verify polymer, film/closure components, clean/used state and supplier. It is not PP, woven seed sacks or a collection of packaging materials. EO is actual external return not already counted in grossS. Weigh it and record recipient, original component/cohort, ownership, gas/contents removed, inherited vector and actual incremental service; no negative manufacture or credit. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Polyethylene bag returned externally to owner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Steel open-head transport drum on gross physical shipments (`steel_drum_shipment`)

Only if one actual steel open-head drum is used. Record measured whole body/lid/ring partitions and actual gasket material separately; no assumed volume or steel grade. Do not bind inspected drum candidates whose native reference property is CTUe. Measure actual component kg physically leaving with gross consignments, including repeated dispatches and separately traceable customer receipts; do not use net Q, net sales or allocation shares. This is a physical reconciliation transfer with retained burden history, not an extra coproduct or manufacturing provider. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Steel open-head transport drum on gross physical shipments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Steel open-head transport drum returned externally to owner (`steel_drum_return_out`)

Only if one actual steel open-head drum is used. Record measured whole body/lid/ring partitions and actual gasket material separately; no assumed volume or steel grade. Do not bind inspected drum candidates whose native reference property is CTUe. EO is actual external return not already counted in grossS. Weigh it and record recipient, original component/cohort, ownership, gas/contents removed, inherited vector and actual incremental service; no negative manufacture or credit. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Steel open-head transport drum returned externally to owner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Seamless steel argon cylinder on gross physical shipments (`argon_cylinder_shipment`)

Only if actual gaseous argon is delivered in this identified seamless steel cylinder. Track body, valve and cap/guard as real separate component partitions with measured material and state; never assume a cylinder capacity or multiply gas mass by a container factor. For a real bulk supply this pool is absent with evidence. Measure actual component kg physically leaving with gross consignments, including repeated dispatches and separately traceable customer receipts; do not use net Q, net sales or allocation shares. This is a physical reconciliation transfer with retained burden history, not an extra coproduct or manufacturing provider. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Seamless steel argon cylinder on gross physical shipments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Seamless steel argon cylinder returned externally to owner (`argon_cylinder_return_out`)

Only if actual gaseous argon is delivered in this identified seamless steel cylinder. Track body, valve and cap/guard as real separate component partitions with measured material and state; never assume a cylinder capacity or multiply gas mass by a container factor. For a real bulk supply this pool is absent with evidence. EO is actual external return not already counted in grossS. Weigh it and record recipient, original component/cohort, ownership, gas/contents removed, inherited vector and actual incremental service; no negative manufacture or credit. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Seamless steel argon cylinder returned externally to owner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

##### Waste flows

###### Polyethylene bag discarded as its identified whole waste article (`pe_bag_waste`)

One actual PE bag/liner; native Product Mass/kg; CAS 9002-88-4; production mix at plant and no fixed grade, size or geography. Independently verify polymer, film/closure components, clean/used state and supplier. It is not PP, woven seed sacks or a collection of packaging materials. W is measured real discarded article with contamination and destination; add separately measured actual contents as partitions without summing them twice. Use one treatment provider for the real whole outlet, with disjoint origin partitions; no automatic metal/plastic recovery credit. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Polyethylene bag discarded as its identified whole waste article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Steel open-head transport drum discarded as its identified whole waste article (`steel_drum_waste`)

Only if one actual steel open-head drum is used. Record measured whole body/lid/ring partitions and actual gasket material separately; no assumed volume or steel grade. Do not bind inspected drum candidates whose native reference property is CTUe. W is measured real discarded article with contamination and destination; add separately measured actual contents as partitions without summing them twice. Use one treatment provider for the real whole outlet, with disjoint origin partitions; no automatic metal/plastic recovery credit. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Steel open-head transport drum discarded as its identified whole waste article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

###### Seamless steel argon cylinder discarded as its identified whole waste article (`argon_cylinder_waste`)

Only if actual gaseous argon is delivered in this identified seamless steel cylinder. Track body, valve and cap/guard as real separate component partitions with measured material and state; never assume a cylinder capacity or multiply gas mass by a container factor. For a real bulk supply this pool is absent with evidence. W is measured real discarded article with contamination and destination; add separately measured actual contents as partitions without summing them twice. Use one treatment provider for the real whole outlet, with disjoint origin partitions; no automatic metal/plastic recovery credit. No compatible flow UUID is adopted for this specific row; retain actual identity and provider matching as collection work. Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; any other dimension requires its own verified support chain.

- Selected flow: Seamless steel argon cylinder discarded as its identified whole waste article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i_c (the sole already-calculated normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `jrc-ilcd-2010`

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_subdivide | joint casting and preparation | This PCR is attributional and addresses cases requiring allocation. First use dedicated measurement and physical or virtual subdivision for riser-only separation/QA/packing, billet-only continuation, common conditioning and each waste-control operation. Keep the full joint process physically visible. Wash melts that are remelted internally carry the original history once plus actual new work; failed heats are not erased. | `jrc-ilcd-2010` |
| al_causality | each remaining shared exchange | Identify the determining physical causality separately for every still-shared input, emission and waste/service exchange: demonstrate how changing billet or riser function changes that exchange. Composition, mass, thermal requirement, equipment duty or processing time may be relevant only with an evidenced causal model for that exchange. A checklist is not free choice and a single mass ratio does not automatically allocate all furnace/argon/refractory loads. Document the causal gate and uncertainty. | `jrc-ilcd-2010` |
| al_remaining | only residual exchanges without causal relation | Only after justified inability to subdivide and to establish determining physical causality apply a documented other relation, normally contemporaneous market value at the same common process gate and actual state. Use actual relevant quantities and prices for unextruded billet and unrefined riser in their actual purity/form/packaging; not finished target prices against dirty scrap at a different gate. Do not invent a fixed ratio, positive value for disposal or a missing price. If needed values or treatment of a real negative/zero-value stream are unresolved, that concrete quantitative package remains incomplete pending an applicable waste-transfer decision; do not manufacture zero burden or recycling credit. Preserve exchange-vector conservation and sensitivities. | `jrc-ilcd-2010` |
| al_provider | inherited burdens and actual services | The original chromium production and actual formation burden enters once and is assigned between genuine co-functions at its real gate; scrap naming, ownership and nonpurchase receipt do not erase it. Keep component manufacture, physical P/N_ext/ER movements and real rental/return/cleaning services independent. No substitution or avoided primary chromium, no new production from internal reuse and no inferred credit. Gross V remains unallocated for physical closure while assigned A vectors sum to original extensive loads. | `jrc-ilcd-2010` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols cover the full declared campaign/period and every included operating state and store through the same gates. Keep raw numeric records undivided. The aggregation_rule cell gives a supported final reporting basis and refers to calc_normalize only once; service quantities always remain linked to the original cohort. Retain calibration, actual methods, analytical QA, time coverage, signed balances, provider scopes and every applicability decision as quality evidence.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_charge | cast_riser_route | Metal and chemical receipts and raw stock | supplier lot tickets plus calibrated weighing and certificates | material and full supplied form; gross; tare; net kg; Cr O and impurity assay; purchased or nonpurchase event; opening and closing stock; actual issue; wash melt linkage; provider vector | Weigh each whole supply and reconcile issue and stock in raw kg; retain actual production history and no second assay purchase. | kg | each receipt and charge | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_gas | cast_riser_route | Gaseous argon | gas meter and cylinder mass/custody record | gas batch; purity; meter start and end; mass; actual pressure temperature and compressibility; stored gas; purge and recovery; cylinder owner; provider scope | Collect undivided actual mass or integrated volume and independently measured gas conversion conditions; a true rate alone is integrated over time. | kg | each refill and metered interval | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_energy | cast_riser_route | Electrical energy | revenue meter plus operation submeters | raw kWh; meter timestamps; voltage; grid source; country; operation; start stop idle and cleaning; onsite generation; losses and provider scope | Collect raw meter differences without output division; independently reconcile each actual supply and operation. Convert kWh to MJ once before assignment. | MJ | each metered interval | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_articles | cast_riser_route | Whole crucible mould and ceramic cover | article receipt installation wear and removal ledger | one specific article identity; material composition; measured article kg; opening and closing article stock; installation; loss and erosion; actual service record; provider scope | Weigh/trace every whole article and physical consumption; measure allocation drivers independently; no assumed per-heat replacement or lifetime. | kg | each receipt replacement and campaign | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_joint | cast_riser_route | Full joint process and mother billet | heat log paired transfer and stock vectors | heat id; operation sequence; wash and failed heats; gross feed and every output V; mother billet kg and assay; riser kg and assay; raw WIP history; allocated vector per function; causal model; common gate state and actual prices if needed | Retain every raw physical leg and inherited vector; independently reconcile mass elements and energy; keep gross companion billet apart from the allocated reference inventory. | kg | each heat and period stocktake | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_release | cast_riser_route | Unique first riser release | calibrated release weighing plus receiver agreement | unique lot and original cohort; net whole solid kg; tare; separate loose matter and free water; metallic matrix and elemental/phase assay; actual cut-off and preparation; specification; first-release decision and timestamp; Q_c; closing FG; reversals | Weigh each newly accepted whole riser on a calibrated scale; link agreed receiver criteria and unique original release. Sum raw eligible kg once; closing accepted FG is already included. | kg | each first release and reversal | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_outlets | cast_riser_route | Each specific solid waste outlet | scale ticket analytical result and receiving manifest | single actual mixture or article; gross and tare; net kg; moisture; phase and element analysis; destination; opening and closing waste stock; whole and source partitions; single provider | Weigh each real whole outlet; preserve independent constituent subledgers and non-additive source partitions. | kg | each removal and stocktake | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_species | cast_riser_route | Each actual atmospheric species | postcontrol sampling or independently validated species balance | chemical species; CAS and oxidation state; particle size; actual receiving air compartment; raw concentration; integrated gas volume or true flow rate; moisture and reference state; control capture; detection and uncertainty | Measure the actual species after the last included control. Concentration times integrated volume is already integrated; no extra time factor. Keep total-PM and total-metal indicators outside species sums. | kg | each representative operating state | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_water | cast_riser_route | Each actual circuit water leg | water meters scales and independent water/species analyses | source; inlet and outlet mass or volume; measured same-fluid density and state; circuit stock; return; blowdown; evaporation; solute and species analysis; heat inlet/outlet temperatures and enthalpy; supplier scope | Meter each real fresh/return/waste/evaporative leg separately; recirculation cancels. Keep heat and water ledgers consistent without assuming steam or a boiler. | kg | each metered interval and discharge | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_service | cohort_service | Actual postrelease cohort services | service meters freight tickets receipt and return records | original cohort Q_c; actual H; activity date; raw kWh; actual kg and km; service type; provider coverage; gross dispatch; receiver receipt; delivery reversal; returned physical state; historical vector; incremental rework | Collect each raw service event without output division and reconcile it to its original cohort and actual receiving gate. No new production from repeat handling. | row-specific | each actual event | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |
| cp_components | component_pool | Each named component and real direction | atomic physical receipt movement and stock records | component identity and material; form and type; exact direction P N_ext ER grossS EO or W; event id; gross tare and measured net kg; ownership; supplier included scope; first external receipt or prior external dispatch id; raw WIP FG reusable opening and closing location; original cohort; per-exchange vector; incremental rental return cleaning | Weigh and identify every actual component event using its specific receipt or movement interface. Distinguish true purchase from all first nonpurchase external receipts and genuine returns; internally issued quantity is paired and cancels. Close each material at one gate; no guessed item kg. | kg | each event and complete stocktake | full declared period including failures and Q0 | all included operations and stores at the actual sites | per 1 kg reference flow | calibration; raw logs; analyses; custody; supplier scope; independently checked balances |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_conversion | raw extensive quantities | Convert each raw g to kg with 0.001 and electrical kWh to MJ with 3.6 once. Integrate actual rates only; volume-to-mass uses independently measured same-fluid density/state. Freight tonne-km = transported gross kg * actual km / 1000. Never infer item mass or density from a secondary native factor. | raw quantity; original unit; measured state; actual km | converted raw extensive V_i_c in the actual row unit | `jrc-ilcd-2010` |
| calc_assign | each burden exchange and cohort | A_i_c = eligible dedicated and actually allocated raw exchange + inherited opening-WIP vector - inherited closing-WIP vector; use the allocation hierarchy exchange by exchange and keep original provider ownership once. Record postrelease service A_i_c separately for its original cohort; physical-only companion movements retain gross V_i_c without burden allocation. Accepted closing FG is already in Q_c and is not another WIP deduction. Sum assigned vectors across co-functions back to original extensive burdens. | converted raw exchange; actual causal assignment; inherited vectors; original cohort | undivided A_i_c; independent gross V_i_c | `jrc-ilcd-2010` |
| calc_normalize | all inventory rows | x_i_c = A_i_c / Q_c once for an attributed burden result; for a physical-only companion result use its independently retained gross V_i_c as numerator and label it separately. Q_c is the original positive first-release kg of that cohort. This is the sole output division; cards and protocol aggregation reuse the result. released_riser = Q_c / Q_c = 1 kg. When Q_c = 0 retain loads and do not calculate a unit result; H never replaces Q_c. | A_i_c; V_i_c; Q_c | x_i_c per 1 kg reference flow; separately labelled physical companion result | `jrc-ilcd-2010` |
| calc_component_closure | each physical component pool | opening_k + P_k + N_ext_k + ER_k = closing_k + grossS_k + EO_k + W_k; P is true purchase; N_ext is all first nonpurchase external physical receipts; ER has prior external dispatch; classify events mutually exclusively. Include all empty/raw/WIP/FG/reusable stocks once. Internal issues cancel and original manufacture is charged once independently of receipt classification. | event-specific material form type direction and measured kg; same-gate stocks; history | raw component balance and signed unresolved difference | `jrc-ilcd-2010` |
| calc_physical | production FG and combined gate | Apply sb_physical to raw gross V; independently close total mass, actual element masses and actual species/phase/water subledgers at identical gates. Measure each unknown independently; no invented balancing flow or allocation of a physical residual. Apply no second Q normalization here. | full raw V legs; raw/WIP/FG stocks; assays; actual chemical species; real heat states | documented raw physical element species and energy residuals | `mrc-chromium-casting-2000`; `jrc-ilcd-2010` |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and original feed | Demonstrate one real chromium casting-riser source and actual recycler feed acceptance; no alloy/oxide/mixture substitution. The patent is route evidence, not a contemporary quantity or grade certificate. | heat trace; photos; assays; cut-off route; receiver agreement |
| dq_native | every bound and unbound row | Check complete formal names in both languages, all synonyms/comments, CAS, type, grade, route, form, geography, all properties and exact reference-property/unit-group/reference-unit chain. A broad flow requires independent real state evidence and the full restrictions in its description; a hard contradiction cannot be waived by a generic name. Ordinary provider/auxiliary UUID matching is not a missing casting method. | complete direct native originals and support chain; source identity evidence |
| dq_period | all raw records | Cover full campaign including wash/failure/Q0/start/stop/idle/cleanup/rework and all opening/closing stocks and inherited vectors. Quantitative incompleteness remains explicit; unknown is not zero. | calibrations; operating logs; period and uncertainty; signed reconciliations |
| dq_receipts | every real packaging/container/attachment event | Require actual atomic material/form/type/direction and measured receipt at the same gate. Missing a specific first nonpurchase interface or quantity leaves the concrete data package incomplete; never relabel it purchase or return to close a table. | P/N_ext/ER disjoint event ledger; all stock legs; original dispatch and provider ownership |
| dq_scope | actual receiver-gate result | Separate first-release production and actual original-cohort services; disclose unfinished FG/services, ordinary unbound rows and any real method/terminal contradiction separately. No science, translation, mapping or publication approval follows from engineering checks. | cohort ledger; receiver receipts; provider coverage and allocation evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_scope | identity and terminal | Require all reference qualifiers and one real solid chromium casting-riser source plus actual agreed recycler acceptance. Reject mixed Sb/Cr, plated steel, ferroalloy, chemical sludge, oxide/ash/slag or a finished-target proxy. No current lot can be certified from a classification label or patent example alone. | `un-cpc3-2025`; `mrc-chromium-casting-2000`; `exotech-chromium-feed`; `exotech-solid-reception` |
| vr_route | complete method | Verify original whole feed manufacture/inherited provider and real casting/conditioning/cooling/cut-off before segregation/release; keep the common billet gate and every genuine input/output including failures and Q0. A purchase-only scrap model, unmeasured missing actual exchange or full-batch double inheritance fails quantitative completion. | `mrc-chromium-casting-2000`; `jrc-ilcd-2010` |
| vr_normalization | release stocks and services | Check unique first Q_c, no closing-FG double output, all inherited WIP vectors, raw conversion and actual allocation before the sole A/Q division. Cards and protocols reuse one result. Retain all actual original-cohort services and return reversals without new Q; H is not a denominator. Q0 retains raw loads and no unit result. | `jrc-ilcd-2010` |
| vr_components | every physical component | Recalculate opening + P + N_ext + ER = closing + grossS + EO + W for each concrete material/form/type at one gate. P is purchase only; N_ext includes supplier-included and first entrusted/borrowed/leased receipts; ER requires original external dispatch. Events are disjoint. Opening does not replace current receipts; internal raw/WIP/FG issues/reuse cancel. Require actual specific receipt interface and measured kg for every event; missing interface makes that data package incomplete. Audit ownership/original cohort/inherited vector/provider-included manufacture and incremental rental/return service separately with one burden owner; no zero burden/new Q/credit inference. | `jrc-ilcd-2010` |
| vr_physical | production FG and consolidated gates | Apply the identical raw V gates in sb_physical and calc_physical. Independently verify total mass, each relevant element, actual phases/species and all water/heat legs; PM/COD/total-metal indicators are not specific chemical mass. Do not solve multiple unknowns with one residual. Whole outlets and disjoint source partitions are not additive; no allocation factor can close a missing physical leg. Only identical OTHER duplicates on the same side may be removed as X. | `jrc-ilcd-2010` |
| vr_allocation | joint-process burdens | Check physical/virtual subdivision then exchange-specific determining physical causality; only justified residual burdens may use actual contemporaneous same-state common-gate values. Confirm vector conservation across billet/riser and real services. No blanket mass/economic choice, assumed positive scrap value, original burden erasure, second provider or recovery credit. | `jrc-ilcd-2010` |
| vr_atoms_native | every exchange and support chain | Every actual input/article/whole formulation/energy/water/package/waste/species has one concrete row and condition. Check each adopted flow against its full native restrictions and exact property-to-unit chain and official Chinese display; do not infer physical identity from category alone or use ordinary unbound auxiliary rows to claim a missing core method. Actual unsupported core identity/terminal/method is a separate real hold. Schema and finite measurement checks do not certify scientific or translation approval. | `jrc-ilcd-2010` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | One qualified chromium-riser feed and its disclosed actual original-cohort receiving services |
| allowed_use | Only matching source metal matrix and cast-riser form/route with actual receiver acceptance and fully collected burdens |
| excluded_use | Leaf-wide averages; Sb/Cr mixing; plated steel or ferroalloy; oxide/chemical residue; spent/sintered targets; powder/metal recovery credit; incomplete receiver-gate claim |
| required_metadata | single chromium casting heat and original feed origin; chromium metal matrix with independently measured oxygen and oxide inclusions; complete elemental assay including Sb Fe Pb and relevant contaminants; cooled cut-off riser form with recorded shrinkage pipe and porosity distinct from scale ash powder sludge and alloy scrap; actual cut-off method and tool and any fluid; mother billet gate before scalping and extrusion; source-specific flake briquette and chromium oxide supply forms; vacuum induction casting and crucible conditioning history; actual segregation and preparation; specified chromium recycler acceptance and contamination limits; unique first-release lot and net whole-riser kg Q_c; opening and closing raw WIP FG and component stocks with per-exchange inherited vectors; gross movements and genuine return history; actual site period utilities and emission media; allocation relation and common-gate state and prices if needed; original cohort and actual postrelease service horizon H; all purchase and nonpurchase first physical component receipts; supplier-included burden scope and container ownership; individual waste destinations and actual species |
| required_quality_disclosure | Raw physical and assigned burden coverage; unbound identities/provider gaps; actual scope and all stock vectors; native restrictions; methods and uncertainty; service completion and real holds; no inferred approval |
| update_trigger | Change of source/form/route/grade/cut-off method/receiver gate or specification; provider ownership; utilities; phase/species; stock convention; allocation relation; component ingress; geography or period |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | United Nations Statistics Division. CPC Version 3.0 Structure and Explanatory Notes. 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf . Complete notes pp.203–205 and 215; structure https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification context and neighbouring exclusions; the notes give no manufacturing recipe. |
| `mrc-chromium-casting-2000` | literature | Materials Research Corporation. Melting and casting of high purity chromium with controlled oxygen content. US6039788A. 21 March 2000. https://patents.google.com/patent/US6039788A/en . Complete issued patent PDF pp.6–9 (columns 1–8); especially Melting Operation and Target Fabrication and Tables 3–4. | Positive casting and cooled-riser cut-off route; flake and briquette feed plus separate oxide addition; argon and whole crucible; mother billet continuation; failed and wash melts. Qualitative technical synthesis only; no recipe or operating value is adopted. |
| `exotech-chromium-feed` | literature | Exotech. Manufacturing Chromium Powder for Sputter Targets. Undated complete publisher page. https://www.exotech.com/blog/manufacturing-chromium-powder . What You Get as the Final Result and adjacent process alternatives; snapshot acquired 26 October 2026. | Real use of recycled chromium feed by a chromium-powder producer. Its powder grades and electrolytic/hydrogen/milling descriptions are downstream context and never a riser specification or foreground operation. |
| `exotech-solid-reception` | literature | Exotech. Metals we buy. Undated complete publisher page. https://www.exotech.com/metals-we-buy . Introductory accepted forms and linked reception context; snapshot acquired 26 October 2026. | Solid scrap reception as a real commercial interface. Actual riser chemistry size and contamination acceptance still require agreement with the selected receiver; this is not evidence of a particular order. |
| `jrc-ilcd-2010` | official_guidance | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf . Sections 7.9.2–7.9.3 and associated provisions; printed pp.255–268; annex 14.4 requires separate applicable waste-transfer modelling. | Attributional subdivision and exchange-specific determining physical causality before residual common-gate market-value allocation; inventory conservation and service attribution. No industrial yield or automatic recycling credit. |
