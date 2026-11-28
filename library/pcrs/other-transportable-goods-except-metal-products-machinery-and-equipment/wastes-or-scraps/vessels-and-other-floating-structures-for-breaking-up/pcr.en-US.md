---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.vessels-and-other-floating-structures-for-breaking-up
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Retired steel container vessel preparation and whole-vessel supply for breaking up

## 1. Scope and Applicability

This method covers one identified retired steel-hulled commercial container vessel from evidenced withdrawal from commercial service, condition and hazardous-material inventory, actual necessary preparation and securing, through its first qualified whole-vessel acceptance at a named ship-recycling facility before structural cutting. Keep the IMO/hull identity and one actual configuration throughout. The supplied object remains a whole vessel intended for breaking up. It is not loose steel scrap, a recovered component, a new ship or a transport-service reference. The relation to CPC3.0 39370 is narrower.

The evidence is a transparent qualitative technical synthesis. The owner documents the May2016 delivery of Maersk Wyoming and Maersk Georgia to Shree Ram plot78 and later dismantling; Basel separates decommissioning/preparation from dismantling/sorting; IMO specifies ship-specific preparation and receiver review. The steel-hull restriction follows the steel-ship technical context and requires actual vessel construction records; the owner reportage does not establish an alloy grade or measured BOM. These sources do not describe one contemporary measured preparation order. No fixed size, lightship weight, engine count, preparation recipe, hazard-removal fraction, fuel grade, energy factor, yield, permit or recycling credit is provided.

Exclude tankers and their special cargo-tank conditions, passenger/ro-ro/general-cargo/fishing/naval ships, offshore platforms and other floating structures, sunk wreck salvage, cutting into blocks before the reference gate, downstream demolition, sorting, steel remelting/refining and sale of recovered equipment. An actual different principal vessel type or cutting route needs its own applicability evidence. Removing measured loose stores or necessary liquids does not authorize hidden hull cutting. Commercial freight service before withdrawal and downstream recycling are separate stages with explicit interfaces.

Sources: un-cpc3-2025; imo-srp-2011; basel-ships-2002; maersk-container-recycling-2016.

The frozen June 2025 notes identify 39370 on PDF page 204; the official October 2026 explanatory workbook confirms HS 2022 heading 8908. Adjacent separated ferrous scrap (39340), remelting ingots (39350), individual nonferrous scraps (39361–39368) and spent batteries (39380) are distinct outputs, not this whole-vessel reference. Operational ships remain outside this retirement state. This classification fact alone establishes no Product-versus-Waste legal status. This method models a documented whole-vessel supply transaction; a treatment-service study or waste-reception reference requires separate interpretation and cannot be relabelled to fit this Product output.

The Hong Kong Convention entered into force on 26 June 2025. Apply requirements only to the actual ship, facility, jurisdiction and study date; do not retrospectively assign binding Convention approval to the 2016 examples. BIMCO's October 2026 adoption of RECYCLECON 2026 supports a contract boundary based on actual delivery condition and location, but does not prove use of that form, positive price, quantity or date for any named vessel. First release here requires actual signed whole-vessel reception, not resale, custody transfer or completion of dismantling. Sources: un-cpc3-2026; imo-hkc-current; bimco-recyclecon-2026.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.vessels-and-other-floating-structures-for-breaking-up |
| classification_refs | CPC:3.0:39370, accepted narrower association under docs/adr/2026-11-21-accept-cpc-39370-intact-retired-steel-container-vessel.md |
| covered_products | This method covers one identified retired steel-hulled commercial container vessel from evidenced withdrawal from commercial service, condition and hazardous-material inventory, actual necessary preparation and securing, through its first qualified whole-vessel acceptance at a named ship-recycling facility before structural cutting. Keep the IMO/hull identity and one actual configuration throughout. The supplied object remains a whole vessel intended for breaking up. It is not loose steel scrap, a recovered component, a new ship or a transport-service reference. The relation to CPC3.0 39370 is narrower. |
| excluded_products | Exclude tankers and their special cargo-tank conditions, passenger/ro-ro/general-cargo/fishing/naval ships, offshore platforms and other floating structures, sunk wreck salvage, cutting into blocks before the reference gate, downstream demolition, sorting, steel remelting/refining and sale of recovered equipment. An actual different principal vessel type or cutting route needs its own applicability evidence. Removing measured loose stores or necessary liquids does not authorize hidden hull cutting. Commercial freight service before withdrawal and downstream recycling are separate stages with explicit interfaces. |
| representative_product | One original retired steel commercial container vessel at its declared first whole-ship recycling reception before cutting |
| production_route | Service withdrawal and original-state inventory; actual ship-specific preparation/securing; necessary liquid/loose-store removal; actual final movement/tow and qualified reception |
| market_state | Whole retired hull and remaining fixed outfit for breaking up; retained hazards and technical fluids declared; mobile contents separately inventoried |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the identified retired steel container vessel whole to a qualified recycling reception gate |
| How much | 1 kg accepted net whole-vessel mass, derived from measured M kg of the same one accepted complete unit |
| How well | Actual vessel-specific acceptance of configuration, residual hazards and receiver capability/restrictions before cutting; no universal steel grade or performance promise |
| How long or cycle | One evidenced retirement/preparation/whole-vessel supply cycle; no new service life or commercial transport function |
| reference_flow_link | whole_vessel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retired steel container vessel accepted whole for breaking up |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | IMO number and hull identity; steel hull construction and retained equipment configuration; service-withdrawal decision and time; owner and custody chain without presumed purchase; original construction and service burden boundary and exchange-specific inherited vector; actual starting vessel and tank inventory with provenance; IHM version parts and changes plus residual locations and uncertainties; actual work orders sites preparation/removal and supplier-included scope; first qualified receiver gate and release event; receiver identity capability restrictions and actual applicable approvals; accepted dry net vessel mass, declared liquid exclusions and current survey corrections; gross delivered onboard liquids ballast and consumables distinct from net mass; actual voyage/tow provider boundaries endpoints and times; component-specific first physical receipts and real dispatch-return history; period opening/closing WIP and FG with original cohorts and burdens; each waste stream and elementary species actual fate medium and measurement |

Every qualifier must be declared in the concrete data package metadata, reference comment or equivalent field. A blank identity is not permission to substitute an incompatible native flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| raw_units | all inventory rows | Actual row numerator property | Declared row unit | Preserve native numerator units. Convert kWh to MJ using1kWh=3.6MJ; a metric tonne t is1000kg, while long-ton displacement records require their own verified unit conversion. No assumed density, vessel weight, grade or per-item mass. A future Number of items reference must retain Item(s)/item with factor1 and independently measured mass for any kg bridge. |
| first_gate | whole_vessel | Mass | kg | Q is newly first-qualified net whole-vessel mass at the recycling reception gate: for the one declared vessel Q equals its measured accepted net mass if the unique event occurs, otherwise Q=0. Prior release, a second inspection, redelivery or custody change does not create new Q. Closing FG already includes any first-released vessel still held and is not added to Q again. Storage, care, mooring, handling, gross shipment and genuine incremental return/rework services retain the original cohort Qc. H records such service activity only and is not a production denominator. |

Here one complete unit means the one original retired container vessel, not a newly manufactured machine. cp_mass uses controlled mass-acceptance records derived from a current qualified lightweight/draught survey: actual hull hydrostatic tables and reference positions, calibrated draught/freeboard and water-density instruments, actual trim/heel and tank soundings, actual contents densities and traceable configuration additions/removals. Reconcile original lightship scope to the declared retained equipment and every liquid exclusion in the following rule. Determine gate displacement D_gate from the actual corrected survey and all evidenced net changes between survey and reception; M = D_gate - X_gate, where X_gate is the independently measured sum of all excluded onboard contents at that same gate. Neither an unknown tank quantity nor an unknown configuration correction may be set to zero to force M. An old design lightship value alone is insufficient; no whole-ship platform scale or universal threshold is assumed. Survey technical principles are used without extending Norwegian flag-approval requirements to another flag.

At acceptance, M is the declared dry net mass of the remaining hull, fixed outfit, coatings and retained permanent equipment. Exclude cargo, people and effects, every separately inventoried liquid including tank oils and retained technical operating fluids, ballast, bunker fuel, free bilge water, consumable stores, detached spares and temporary containers/rigging. This is this method's explicit measurement convention, not an assertion of statutory or contractual LDT. A reported lightweight or LDT is usable only after proving its actual definition and reconciling every inclusion/exclusion to this dry configuration; disclose the bridge and measurement uncertainty. Their actual physical quantities still enter the independent gross-vessel/tank ledger and the relevant departure, retention or waste interface. Use a current vessel-specific survey and a complete change ledger from its reference configuration, with measured additions/removals and actual tank corrections; do not use gross tonnage, deadweight or a generic ship density as net mass.

Protocols collect undivided raw records. First convert actual meter differences or integrate a genuine rate over its recorded time; already integrated gas/liquid volume is never multiplied by time again. A volume-to-mass bridge requires the actual substance or mixture density at measured temperature/pressure/composition, never water density for oil or a catalogue ship weight. Resolve supplier boundaries and allocate the raw numerator by the hierarchy in Section7 before normalization. For one accepted configured vessel, q_item is that attributable raw exchange total, including failures, startup, shutdown, idle, cleanup and rework; normalize_mass divides by its actual net mass once. Cards and aggregations reference that single operation and do not divide again. With Q=0 keep all raw burdens and physical stocks but issue no unit result.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The identified original steel container vessel at actual withdrawal, with actual hull/outfit/tank condition and an explicit inherited construction/service/maintenance vector. Preparation is performed rather than merely buying a finished prepared ship. |
| starting_condition_role | foreground_retirement_and_supply_module |
| product_classification_scope | This method covers one identified retired steel-hulled commercial container vessel from evidenced withdrawal from commercial service, condition and hazardous-material inventory, actual necessary preparation and securing, through its first qualified whole-vessel acceptance at a named ship-recycling facility before structural cutting. Keep the IMO/hull identity and one actual configuration throughout. The supplied object remains a whole vessel intended for breaking up. It is not loose steel scrap, a recovered component, a new ship or a transport-service reference. The relation to CPC3.0 39370 is narrower. |
| recursive_input_rule | Same-category prepared vessel cannot recursively represent the original hull and its preparation a second time. Keep one source-state vessel interface; internal phase transfers cancel and only actual incremental work remains. |
| upstream_dataset_requirement | Compatible original vessel history and explicit transfer method plus actual utilities/materials/tow/treatment providers, geography, period, versions and contained boundaries; without them report only evidenced module scope. |
| disclosure | IMO number and hull identity; steel hull construction and retained equipment configuration; service-withdrawal decision and time; owner and custody chain without presumed purchase; original construction and service burden boundary and exchange-specific inherited vector; actual starting vessel and tank inventory with provenance; IHM version parts and changes plus residual locations and uncertainties; actual work orders sites preparation/removal and supplier-included scope; first qualified receiver gate and release event; receiver identity capability restrictions and actual applicable approvals; accepted dry net vessel mass, declared liquid exclusions and current survey corrections; gross delivered onboard liquids ballast and consumables distinct from net mass; actual voyage/tow provider boundaries endpoints and times; component-specific first physical receipts and real dispatch-return history; period opening/closing WIP and FG with original cohorts and burdens; each waste stream and elementary species actual fate medium and measurement |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_whole | whole_vessel | Keep the selected retired steel container vessel whole until first qualified recycling-yard receipt. Downstream cutting, sorting, scrap conditioning and recovery products are outside this output. Actual pre-delivery preparation locations and scope follow the ship-specific agreement and receiver capability; no universally complete pre-cleaning is assumed. | un-cpc3-2025; imo-srp-2011; basel-ships-2002 |
| boundary_historical | withdrawal | Record original construction, maintenance and commercial-service history, actual withdrawal and custody/ownership interfaces, and an exchange-specific inherited burden vector under the declared consistent study method. Physical possession or positive/negative sale price establishes no historical burden fraction. Do not automatically transfer all construction/service burdens here or set them to zero. If history is unavailable, disclose the specific unresolved vector and restrict results to evidenced foreground additions. | ilcd-allocation-2010 |
| boundary_receiver | handover | Verify the actual named receiver against the specific ship and residual hazards, its current applicable permissions, capacity and restrictions, the agreed ship recycling plan and arrival walk-through. IHM identifies type/quantity/location and updates, not a claim that all substances are absent. Apply only actually applicable legal/permit conditions; the tanker-specific safe-entry/hot-work arrival example is not imposed on this container vessel. The 2016 owner case and certificates do not establish current authorization. | imo-srp-2011; maersk-container-recycling-2016 |
| boundary_real_operations | all_processes | Include all actual decommissioning inspections, sampling, ventilation/securing, pumping, necessary cleaning/removal, waiting, care, spill response, transfer/voyage/tow, rejected acceptance and corrective work through the selected gate. No bulk removal, cutting, repainting, boiler or steam system is invented. Every additional real input/output requires its own specific card or explicit measured interface before completeness is claimed. | imo-srp-2011; basel-ships-2002 |
| boundary_receipts | drum_p; drum_next; drum_er | For each actual packaging type, container and attached auxiliary component, record opening empty stock, attached WIP/FG and reusable stock separately. P means genuine purchased first external physical receipts; N_ext means all nonpurchase first external physical receipts, including supplier accompanying items and first entrusted, borrowed or rented items. ER is only a true return of a prior outward dispatch proved by its event history. P, N_ext and ER are mutually exclusive. Record every first physical receipt whether or not the supplier inventory covers its embodied burden; absent supplier data remains a disclosed collection gap, never zero. At the same component and physical gate close opening+P+N_ext+ER=closing+grossS+EO+W. grossS is every actual outward shipment with its attached component, EO is a distinct external return-out and W is actual waste. Internal warehouse/WIP/FG issues, internal reuse and transfers cancel; opening stock cannot replace current receipts. Ownership, original cohort, each inherited exchange vector, supplier-included scope and genuine incremental rental/return services are independent ledgers. A component receives its embodied burden once; custody and reuse do not imply zero burden, new Q or credit. |  |
| boundary_interfaces | all_processes | Each actual event requires an atomic receipt row or explicit interface with specific material/form/type/direction and measured quantity. The HDPE drum interfaces below retain purchase and true-return meanings and add the distinct nonpurchase interface. They are conditional examples, not an assertion that the vessel needs drums. For a real additional mooring rope, steel cylinder, seal, pallet or other component, add that actual concrete component and its relevant P/N_ext/ER and outward/waste interfaces. Missing real interfaces make that particular data package incomplete; symbols alone, a purchase UUID reused for nonpurchase identity, fabricated purchases/returns or copied batch quantities cannot fill it. Historical hull and outfit are within the original vessel, not repurchased components. |  |
| boundary_provider | support; handover | Keep one actual provider for a supplied whole formulation or service; component assay is a nonadditive subledger. A tug/contract-preparation provider module replaces only its documented contained fuel, electricity, water, chemicals and emissions, while actual owner-supplied matter remains visible. Independently measure genuine incremental rental/return services. No duplicate provider module and foreground utility purchase for the same work. Original hull/outfit/tank contents and their separately displayed internal draws are nonadditive source partitions; cancel matching phase transfers in combined mass and inherited-vector accounts. They are never bought again as new steel, components or fuel. | ilcd-allocation-2010 |
| boundary_stocks | all_processes | Track original cohort and exchange vectors in opening/closing WIP and FG, rejected ships, residues, fluids and genuine external returns. Internal stage transfers cancel in a combined system. First release Q is distinct from gross physical movement and from service H; preserve all Q=0 work and do not make a redelivery into a newly prepared ship. |  |
| boundary_physical | all_processes | Close physical mass independently of burden attribution: opening vessel/WIP/FG and tank stocks plus real incoming matter equal closing stocks plus whole outward vessel, separately removed streams and measured releases within declared uncertainty. Gross whole-vessel movement and its source partitions are nonadditive views; the partition sum equals the whole and one provider boundary supplies each exchange. Keep each relevant elemental balance (especially carbon, sulfur, refrigerant and water) independent of total mass. Measure free water, actual combustion/evaporation water and retained system liquids separately. COD, TOC and VOC metrics are not masses of an invented chemical. Dry-air/stack and carrier-gas ledgers reconcile measured gas exchange without inventing oxygen or nitrogen from a residual; one residual cannot fit two unknowns. | basel-ships-2002 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| withdrawal | Withdraw and identify the original retired vessel | required | Establish the original hull, cessation of service, actual configuration/tank inventory and burdened transfer or stock interface; never buy a complete new ship for this route. | foreground | Internal original-vessel cohort; cancel combined transfers |
| prepare | Ship-specific inspection, necessary preparation and containment | required | Perform actual surveys and necessary securing, liquid/loose-store removal and containment before the agreed gate, retaining all residual hazards and actual rejected/failed work. Each optional material applies only if used. Cutting is excluded. | foreground | Internal original-vessel cohort; cancel combined transfers |
| support | Measured utilities, care, owned movement and direct releases | required | Bound cross-cutting actual preparation/care/own-vessel final-movement operations, with metered supplies, original tank draws and actual direct emissions. Allocate by actual suboperation/cohort. Exclude supplier-contained work already in contracted services. | foreground | Internal original-vessel cohort; cancel combined transfers |
| handover | Transfer and first qualified whole-vessel reception | required | Actual self-movement and/or separately contracted tow, safe placement, arrival walk-through and documented qualified acceptance before cutting. Self-movement fuel/emissions are in support once. Failed arrival and redelivery remain original cohort services. | foreground | whole_vessel |

### Process: Withdraw and identify the original retired vessel (`withdrawal`)

Establish the original hull, cessation of service, actual configuration/tank inventory and burdened transfer or stock interface; never buy a complete new ship for this route.

#### Inputs

##### Product flows

###### Original vessel at withdrawal (`retired_ship`)

One original identified steel hull with actual retained outfit and tank contents at the withdrawal interface. Record whole physical entry and nonadditive tank/component subledgers. This is an inherited asset or actual custody/ownership transfer, not a fabricated new-ship or component purchase. Separate true external first receipt, starting stock and internal phase transfer. Preserve the source burden vector once.

- Selected flow: Retired steel container vessel in recorded withdrawal configuration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_origin.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_origin`
- Sources: `imo-srp-2011`; `basel-ships-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Ship-specific inspection, necessary preparation and containment (`prepare`)

Perform actual surveys and necessary securing, liquid/loose-store removal and containment before the agreed gate, retaining all residual hazards and actual rejected/failed work. Each optional material applies only if used. Cutting is excluded.

#### Inputs

##### Product flows

###### Supplied liquid cleaning water (`cleaning_water`)

Conditional actual supplied tap-water receipt for necessary pre-delivery cleaning; meter each provider and tank. Water already in the original ship is a starting-stock subledger, not a second purchase. Direct seawater withdrawal is separate. The source does not specify universal cleaning water use.

- Selected flow: Liquid tap water supplied for cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_liquids.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquids`
- Sources: `basel-ships-2002`

###### New polypropylene oil-absorbent pad (`pp_absorbent`)

Conditional actual single supplied nonwoven pad with its declared backing and additives; collect whole supplied pad mass once, including supplier-accompanying nonpurchase first receipts. Polymer granulate, fibre or a farm twine UUID is not the finished pad. Used wet contaminated pads leave as their own waste stream.

- Selected flow: Polypropylene oil-absorbent pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `basel-ships-2002`

###### Supplied gaseous nitrogen (`purge_nitrogen`)

Include only actual nitrogen used by an approved ship-specific preparation procedure; never prescribe inerting for occupied entry. Collect actual purity, pressure/temperature, delivered integrated volume and independently supported density or mass. Supplier cylinder is its separate actual component, not nitrogen mass. Ventilation air is not purchased nitrogen.

- Selected flow: Gaseous nitrogen for documented purging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `imo-srp-2011`

###### Purchased HDPE closed-head drum first receipt (`drum_p`)

Only if this concrete drum type is actually used; never assume a whole vessel is packaged in drums. P only: actual purchased first physical receipt of one declared HDPE closed-head liquid-collection drum type. Collect empty tare and closures included in that exact article; distinct closure articles need separate cards. Never use this purchase receipt for N_ext or ER.

- Selected flow: HDPE closed-head liquid-collection drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `basel-ships-2002`

###### Nonpurchase HDPE closed-head drum first receipt (`drum_next`)

Only if this concrete drum type is actually used; never assume a whole vessel is packaged in drums. N_ext only: actual first supplier-accompanying, entrusted, borrowed or rented receipt of this exact empty drum type, with measured tare and event/custody record. No earlier outward dispatch is required, so this is not ER. Record original embodied burden, owner and incremental rental services independently.

- Selected flow: HDPE closed-head liquid-collection drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `basel-ships-2002`

###### True externally returned HDPE closed-head drum (`drum_er`)

Only if this concrete drum type is actually used; never assume a whole vessel is packaged in drums. ER only: measured receipt of a previously dispatched drum of this exact type, matched to its original outward event and cohort. First receipt from a lender or supplier is N_ext instead. Carry remaining original burden and charge only actual new return/cleaning work.

- Selected flow: HDPE closed-head liquid-collection drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `basel-ships-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### HDPE drum leaving with gross consignment (`drum_s`)

grossS for the actual whole drum accompanying a separately measured liquid/residue consignment; contents and drum masses are distinct. Its shipment follows its actual service cohort, never increases net vessel Q and never becomes a material-recovery coproduct by default.

- Selected flow: HDPE closed-head liquid-collection drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `basel-ships-2002`

###### HDPE drum external return-out (`drum_eo`)

EO only for a separate actual outward return of the measured drum to its owner/provider. Do not duplicate the same physical dispatch in grossS and EO. Retain history for a later genuine ER.

- Selected flow: HDPE closed-head liquid-collection drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `basel-ships-2002`

###### Actually usable recovered diesel transfer (`recovered_usable_diesel`)

Only if actual quality and a named recipient establish usable recovered diesel from the original ship tank. Record actual transferred quantity and inherited burden with no new diesel purchase and no automatic substitution credit. Unusable diesel is the separate waste_diesel stream; one physical litre cannot be both.

- Selected flow: Usable recovered diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`

##### Waste flows

###### HDPE drum discarded as waste (`drum_w`)

W is measured actual discarded drum mass with its residue state and actual treatment receiver. A contaminated drum is not automatically clean recyclable HDPE. Empty/attached/WIP/FG/reusable closing stocks remain on the component ledger.

- Selected flow: Discarded HDPE closed-head drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `basel-ships-2002`

###### Removed used engine lubricating oil (`used_lube`)

Actual separately collected petroleum-based or synthetic oil contaminated through use, Waste at its point of generation; treatment route unspecified. Measure generated wet waste and actual oil/water composition separately. This identity is not fresh oil, bilge water, fuel sludge or a provider treatment process; it prescribes neither regeneration nor combustion/disposal. One actual external receiver/module supplies treatment only once.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

###### Unusable drained diesel fuel (`waste_diesel`)

Conditional actual unusable drained diesel, separate from recoverable usable fuel and from wet oily sludge. No assumption that all remaining bunker fuel is waste. Weigh whole supplied waste mixture and record assay/receiver.

- Selected flow: Drained unusable diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

###### Wet residual-fuel tank sludge (`fuel_sludge`)

One actual tank-specific wet petroleum residue containing the measured fuel/oil/water/solids composition; record each distinct sludge origin separately where incompatible. Not dry steel scrap, fresh fuel or a treatment credit.

- Selected flow: Wet residual-fuel tank sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

###### Oily bilge water removed to shore (`bilge_water`)

Actual complete removed aqueous bilge stream, with measured oil, sediment and pollutants as nonadditive composition records. Record tank/transfer and licensed actual receiver where applicable. It is neither pure water emission nor waste lubricating oil. Retained bilge water remains in the physical onboard ledger outside net vessel mass.

- Selected flow: Oily bilge water sent for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

###### Contained aqueous cleaning effluent (`cleaning_effluent`)

Conditional actual contained cleaning water with its measured contamination, distinct from pre-existing bilge water. Collect whole wet stream once; oil/solids assays are subledger values, not extra outputs. A whole external treatment module contains its treatment discharges; foreground claims only actual measured direct emissions.

- Selected flow: Aqueous pre-delivery cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

###### Spent oily polypropylene absorbent pad (`spent_pad`)

Conditional used actual pad including retained oil/water; measure wet waste mass and dry pad/oil/water partitions, which sum to that whole. No duplicate fresh absorbent or default recovery credit.

- Selected flow: Oil-contaminated polypropylene absorbent pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

###### Removed bonded asbestos-containing insulation (`bonded_asbestos`)

Only actual separately removed bonded insulation before gate under its documented procedure. Identify actual matrix and asbestos form/concentration and actual enclosed receiver route; loose fibres are a different material. Removal before gate is not universal and retained identified locations stay with the whole-vessel IHM.

- Selected flow: Bonded asbestos-containing insulation waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

###### Removed spent lead-acid starting battery (`lead_battery`)

Conditional actually removed battery whole, including electrolyte retained in the article and its actual condition. If electrolyte is drained, split measured acid solution from the changed battery without double counting. Do not repurchase the original ship battery; retained batteries are within vessel configuration.

- Selected flow: Spent lead-acid starting battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

###### Recovered HFC-134a in an external recovery transfer (`recovered_hfc`)

Only if the actual identified ship system contains HFC-134a and this species is recovered before gate. Weigh actual cylinders before/after with separate tare ledger and identity evidence. Other refrigerants/mixtures need separate species and mixture accounting; no universal charge or recovery fraction. This transferred waste is not a fugitive air emission.

- Selected flow: Recovered HFC-134a refrigerant for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `basel-ships-2002`; `imo-srp-2011`

##### Elementary flows

### Process: Measured utilities, care, owned movement and direct releases (`support`)

Bound cross-cutting actual preparation/care/own-vessel final-movement operations, with metered supplies, original tank draws and actual direct emissions. Allocate by actual suboperation/cohort. Exclude supplier-contained work already in contracted services.

#### Inputs

##### Product flows

###### Diesel actually supplied for foreground operations (`diesel`)

Mass-based Product identity only: fuel grade/formulation, density, heating value, refinery route, geography and provider are unspecified. Collect actual compatible diesel whole formulation and real first receipts, including nonpurchase receipts, with purchase versus inherited-burden split. Separately reconcile consumed, retained and removed original tank diesel. Use measured density for any litre bridge and actual carbon/sulfur data; no generic EF or provider. Covered tug/contractor fuel is not duplicated. This flow cannot stand for residual fuel oil. Original tank draws are internal source partitions of retired_ship, not additional external material receipts: cancel the matching transfer in the combined physical and per-exchange burden ledger. Only genuine new external supply creates a separate provider demand; consumption, retained stock and removed fuel remain distinct.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `basel-ships-2002`

###### Actual residual marine fuel oil (`residual_fuel`)

Conditional actual whole supplied or inherited residual fuel oil for own-vessel final movement/care, separately measured by tank and actual blend/grade/sulfur/density. It is not diesel and is not purchased again when already carried by the withdrawn vessel. Any other actual fuel requires its own concrete card. Original tank draws are internal source partitions of retired_ship, not additional external material receipts: cancel the matching transfer in the combined physical and per-exchange burden ledger. Only genuine new external supply creates a separate provider demand; consumption, retained stock and removed fuel remain distinct.

- Selected flow: Residual marine fuel oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `basel-ships-2002`

###### Actual low-voltage shore electricity (`power`)

Conditional actual shore supply for ventilation, pumps, monitoring and care, recorded as meter differences. Record actual voltage, geography, period and provider; a CN-only grid record cannot be silently bound to an Indian case. Own-generated electricity is an internal conversion of separately measured fuel, not a second grid purchase. The metered quantity uses technical Energy and Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, with MJ as reference and kWh factor 3.6. This measurement support does not bind a supplier flow or establish its native property: verify that separately, and never infer net calorific value merely from a shared energy unit group.

- Selected flow: Low-voltage alternating current at the declared site
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `imo-srp-2011`

###### Actual added mineral engine lubricant (`fresh_lube`)

Conditional one actual supplied finished lubricant formulation, not base-oil/additive purchases in parallel. Record supply specification and real makeup mass only; original retained oil is inherited stock. Do not replace with an all-synthetic PAO record or assume all measured oil is consumed.

- Selected flow: Mineral engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `basel-ships-2002`

##### Waste flows

##### Elementary flows

###### Actual direct seawater intake (`seawater_in`)

Conditional actual direct intake for necessary cooling or stability/ballast. Record source, salinity, temperature, location and integrated volume; not tap-water purchase. Original retained ballast is opening stock. Actual mass uses independently measured seawater density and net liquid ledger, not another times duration.

- Selected flow: Seawater withdrawn from the coastal sea
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `basel-ships-2002`

###### Net atmospheric oxygen uptake (`oxygen_uptake`)

Conditional measured or independently established net molecular O2 uptake for actual foreground combustion, CAS7782-44-7. Derive from measured air/stack quantities and oxygen fractions under documented conditions, not from a mass residual. Preserve a nonadditive carrier-air ledger and actual unburned carbon/water pathways. No assumption of complete combustion. Native scope is molecular O2 resource from air, not purchased gaseous/liquid oxygen or an emission. Broad synonyms do not authorize other chemicals, isotopes or phases.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to air (`co2_air`)

Elementary molecular CO2, CAS124-38-9, emissions to air unspecified; Mass/kg. Bind only actual fossil carbon reaching air within owned foreground work; do not use for biogenic CO2, fuel input, treatment-service output or a generic carbon metric. Measure or calculate from actual carbon evidence and separately account CO, CH4, retained carbon, residues and other measured species. Actual stack/ambient context must be disclosed and a more specific compartment requires rematching.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Carbon monoxide to air (`co_air`)

Actual molecular CO, CAS630-08-0, within the recorded emitting engine/operation. A CO2 figure cannot substitute for CO. Integrate actual concentration and dry/wet gas flow on matching bases; supplier-contained emissions are not duplicated. Native scope is this named molecular species emitted to unspecified air on Mass/kg, with the stated CAS. Broad or chemically ambiguous synonyms do not expand identity to other species, isotopes or supplied liquid/solid forms. Record actual location and rematch any more specific compartment; this is not a generic flue-gas factor. Fossil carbon only; biological carbon is separate.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Nitric oxide to air (`no_air`)

Actual molecular NO, CAS10102-43-9, separate from NO2. A total NOx-as-NO2 measurement stays an indicator until measured speciation or an evidenced independent conversion supports actual species mass. No invented partition. Native scope is this named molecular species emitted to unspecified air on Mass/kg, with the stated CAS. Broad or chemically ambiguous synonyms do not expand identity to other species, isotopes or supplied liquid/solid forms. Record actual location and rematch any more specific compartment; this is not a generic flue-gas factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Nitrogen dioxide to air (`no2_air`)

Actual molecular NO2, CAS10102-44-0; preserve actual speciation and compartment. Never write the entire NOx indicator into both NO and NO2 cards.

- Selected flow: Nitrogen dioxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Sulfur dioxide to air (`so2_air`)

Actual molecular SO2, CAS7446-09-5, not all sulfur oxides or elemental sulfur. Use measured speciation or actual fuel sulfur with documented retention and other sulfur destinations; do not assume complete conversion of every sulfur input to SO2. Native scope is this named molecular species emitted to unspecified air on Mass/kg, with the stated CAS. Broad or chemically ambiguous synonyms do not expand identity to other species, isotopes or supplied liquid/solid forms. Record actual location and rematch any more specific compartment; this is not a generic flue-gas factor.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Particulate matter below2.5 micrometres to air (`pm25_air`)

Actual size-defined exhaust particle mass measured with its sampling method, not total dust or a specific metal species. Size fractions must not overlap; chemically resolved particle constituents are nonadditive subledgers unless the measurement model explicitly separates them. Native Elementary flow is PM2.5 to unspecified air on Mass/kg, with no CAS or species formula. Record actual location and rematch more specific compartments. It is not total dust, soot of unspecified size, PM2.5-PM10 or a named metal.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Fossil methane to air (`ch4_air`)

Conditional actual molecular fossil CH4, CAS74-82-8. Total VOC/THC is not methane mass. Include only evidenced speciation and the actual emitting operation.

- Selected flow: Fossil methane emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Actual water vapour to air (`water_vapour`)

CAS7732-18-5; separately establish combustion-generated water, evaporated free cleaning/cooling water and carried humidity without fitting them to one residual. Retained technical water and liquid discharges are separate. No assumed reaction-water source for nonreacting retirement inspections. Native scope is this named molecular species emitted to unspecified air on Mass/kg, with the stated CAS. Broad or chemically ambiguous synonyms do not expand identity to other species, isotopes or supplied liquid/solid forms. Record actual location and rematch any more specific compartment; this is not a generic flue-gas factor.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Actual purge nitrogen released to air (`nitrogen_air`)

Conditional actual N2 from the separately recorded purge supply and verified retention/vent path. CAS7727-37-9. Do not treat NOx or ammonia as this species and do not invent an air carrier imbalance; carrier air through ventilation is a nonadditive physical ledger. Native scope is this named molecular species emitted to unspecified air on Mass/kg, with the stated CAS. Broad or chemically ambiguous synonyms do not expand identity to other species, isotopes or supplied liquid/solid forms. Record actual location and rematch any more specific compartment; this is not a generic flue-gas factor.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Actual HFC-134a fugitive release (`hfc_air`)

Conditional actual molecular HFC-134a, CAS811-97-2, from the identified system during this boundary. Opening charge plus real additions equals closing charge plus measured recovery and actual leaks; a missing recovery record is not proof of 100% air release. No generic fluorocarbon-family binding.

- Selected flow: HFC-134a emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `basel-ships-2002`

###### Actual seawater returned to sea (`seawater_out`)

Conditional measured liquid return, with actual salinity, temperature/thermal state, treatment and receiving medium, from cooling/ballast movements. Separately specify real dissolved pollutants or retained/removed sediment by actual species and nonadditive stream partitions. Compliance is not inferred from a water identity. Do not claim this return if actual liquid went to an external wastewater receiver.

- Selected flow: Seawater returned to the declared coastal sea
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `basel-ships-2002`

### Process: Transfer and first qualified whole-vessel reception (`handover`)

Actual self-movement and/or separately contracted tow, safe placement, arrival walk-through and documented qualified acceptance before cutting. Self-movement fuel/emissions are in support once. Failed arrival and redelivery remain original cohort services.

#### Inputs

##### Product flows

###### Actually contracted sea towing service (`tow_service`)

Conditional actual contracted trip for the specified vessel, origin/destination and safe placement. Collect actual service hours H and completed trip; provider fuel/utilities/emissions scope stays explicit. A ship is not cargo tonne-km and towing is not the vessel reference. Retain Item(s) if a future verified provider uses trip count; any kg bridge uses measured vessel mass without assumed tonne-hour equivalence. Never relabel a toxicity property as hours or count.

- Selected flow: Sea towing of the identified retired container vessel
- Flow property / unit: Time / h
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `imo-srp-2011`; `basel-ships-2002`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First qualified whole vessel supplied for breaking up (`whole_vessel`)

One original identified retired hull at its unique qualified reception event, before structural cutting; this is the physical reference output. Net vessel configuration and excluded mobile liquids/stores follow Section4. Do not substitute a newly manufactured vessel, plate, scrap bale, Waste identity or preparation/tow service. A compatible native Product identity must independently preserve whole retired state, gate, property and unit; no name-only match is authorized.

- Selected flow: Retired steel container vessel accepted whole for breaking up
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `un-cpc3-2025`; `imo-srp-2011`; `maersk-container-recycling-2016`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_exclusive | all_processes | Use measured dedicated operations and actual or virtual subdivision first, including the retirement vessel, each removed physical stream and each service cohort. Assign an embodied input only to its actual destination. Do not allocate all flows using a single blanket mass or revenue share. | ilcd-allocation-2010 |
| allocation_causal | remaining_shared_exchanges | For each remaining shared exchange demonstrate the determining physical causal relationship and measure its driver for all served outputs/services. Mooring occupation, pump work and delivery support can have different drivers; duration alone, mass alone or hull value alone is not automatically causal. Reconcile assigned quantities to each raw parent total. | ilcd-allocation-2010 |
| allocation_residual | irreducible_common_process | Only the genuinely irreducible remainder uses actual contemporaneous market values of actual functions in their actual condition at one common process gate, after all dedicated/causal assignments. Retain amounts, values, currency/time, receiver conditions and signs; missing or ill-defined values require method review. This is not arbitrary physical-versus-economic choice and provides no fixed ratio. | ilcd-allocation-2010 |
| allocation_history | withdrawal; handover | The general allocation hierarchy is not an end-of-life cutoff rule. Declare the governing original construction/service-to-retirement transfer method and inherited exchange vector once, separately from incremental preparation burdens. A removed fuel, used oil or equipment output does not automatically earn avoided-primary production credit. Unresolved historical scope is explicit and cannot be called a complete life cycle result. | ilcd-allocation-2010 |
| allocation_components | drum_p; drum_next; drum_er | Apply the complete component physical-receipt ledger and separate ownership/cohort/burden/service accounts in boundary_receipts. First entrusted/borrowed/rented receipt is N_ext, never fabricated purchase or ER. Preserve original component burden once and charge only real incremental preparation/rental/return work under the same allocation hierarchy; no automatic free component, coproduct, new Q or credit. | ilcd-allocation-2010 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect undivided raw records. First convert actual meter differences or integrate a genuine rate over its recorded time; already integrated gas/liquid volume is never multiplied by time again. A volume-to-mass bridge requires the actual substance or mixture density at measured temperature/pressure/composition, never water density for oil or a catalogue ship weight. Resolve supplier boundaries and allocate the raw numerator by the hierarchy in Section7 before normalization. For one accepted configured vessel, q_item is that attributable raw exchange total, including failures, startup, shutdown, idle, cleanup and rework; normalize_mass divides by its actual net mass once. Cards and aggregations reference that single operation and do not divide again. With Q=0 keep all raw burdens and physical stocks but issue no unit result.

Q is newly first-qualified net whole-vessel mass at the recycling reception gate: for the one declared vessel Q equals its measured accepted net mass if the unique event occurs, otherwise Q=0. Prior release, a second inspection, redelivery or custody change does not create new Q. Closing FG already includes any first-released vessel still held and is not added to Q again. Storage, care, mooring, handling, gross shipment and genuine incremental return/rework services retain the original cohort Qc. H records such service activity only and is not a production denominator.

For each actual packaging type, container and attached auxiliary component, record opening empty stock, attached WIP/FG and reusable stock separately. P means genuine purchased first external physical receipts; N_ext means all nonpurchase first external physical receipts, including supplier accompanying items and first entrusted, borrowed or rented items. ER is only a true return of a prior outward dispatch proved by its event history. P, N_ext and ER are mutually exclusive. Record every first physical receipt whether or not the supplier inventory covers its embodied burden; absent supplier data remains a disclosed collection gap, never zero. At the same component and physical gate close opening+P+N_ext+ER=closing+grossS+EO+W. grossS is every actual outward shipment with its attached component, EO is a distinct external return-out and W is actual waste. Internal warehouse/WIP/FG issues, internal reuse and transfers cancel; opening stock cannot replace current receipts. Ownership, original cohort, each inherited exchange vector, supplier-included scope and genuine incremental rental/return services are independent ledgers. A component receives its embodied burden once; custody and reuse do not imply zero burden, new Q or credit.

Each actual event requires an atomic receipt row or explicit interface with specific material/form/type/direction and measured quantity. The HDPE drum interfaces below retain purchase and true-return meanings and add the distinct nonpurchase interface. They are conditional examples, not an assertion that the vessel needs drums. For a real additional mooring rope, steel cylinder, seal, pallet or other component, add that actual concrete component and its relevant P/N_ext/ER and outward/waste interfaces. Missing real interfaces make that particular data package incomplete; symbols alone, a purchase UUID reused for nonpurchase identity, fabricated purchases/returns or copied batch quantities cannot fill it. Historical hull and outfit are within the original vessel, not repurchased components.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | handover | Actual accepted net vessel mass | Measured original event and stock records | IMO number; hull identity; configuration; accepted net mass M; current survey reference; draught/freeboard observations; seawater density and temperature; hydrostatics revision; tank soundings; contents density; changes since survey; exclusions; calibration; uncertainty | Use traceable acceptance records for the accepted complete unit of the same configuration. | kg | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | accepted net mass per unit | Vessel-specific controlled survey and signed corrected mass acceptance; calibrated instruments; complete tank/configuration change records; nma-lightship-2020 |
| cp_origin | withdrawal | Original burdened whole vessel and history | Measured original event and stock records | IMO identity; original hull/configuration; steel construction record; service-withdrawal time; owner/custodian; opening physical stock; actual first purchased receipts; actual nonpurchase first receipts; prior dispatch matched returns; tank/component inventories; upstream boundary; source provider; inherited exchange vector; unresolved history | Reconcile original service/maintenance documents, actual withdrawal survey and custody/ownership records with physical stocks and transfer events. Keep purchasing and asset-stage transfer separate. | kg | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Signed withdrawal and transfer/stock ledger; original configuration history; explicit study method and burden provenance |
| cp_release | handover | Unique first qualified whole-vessel release | Measured original event and stock records | IMO identity; receiver legal identity; vessel-specific recycling plan; IHM parts/version/change; receiver capability and actual applicable authorizations; arrival/placement; inspection findings; unique first qualified release time; accepted mass; original Qc; opening/closing FG; actual refusal/redelivery | Match arrival walk-through and resolved acceptance conditions to this original hull, current IHM and receiver evidence; identify the one first release and preserve prior release history. | kg | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Signed ship-specific reception, actual permits/restrictions where applicable and mass record; a contract/certificate alone is insufficient |
| cp_liquids | prepare | Supplied cleaning liquid and tank stocks | Measured original event and stock records | Actual water provider; meter opening/closing; actual receipt event; purchased/nonpurchase first receipt split; tank identity; supplied state; volume or mass; substance-specific density; temperature; retained/removed/evaporated quantities; actual cleaning activity | Meter actual transfers and independently reconcile tank soundings and actual losses; use actual density for a mass bridge. No assumed washing demand. | kg | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Calibrated meter/tank table; actual density/temperature test and transfer tickets |
| cp_materials | prepare | Actual supplied pads and purge gas | Measured original event and stock records | Individual exact material/form/grade; whole supplied formulation; provider; actual purchase and nonpurchase first receipts; stock; actual use; cylinder tare separately; gas species purity; pressure/temperature; integrated volume or true rate/time; density; actual loss and fate | Weigh exact supplied articles and meter gas under documented state; reconcile real use and loss. Split each actual additional material and all real cylinder/component interfaces before claiming completeness. | kg | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Supply documents; specification; scale/gas-meter calibration; actual procedure and custody events |
| cp_components | prepare | Exact HDPE drum and all actual component event ledgers | Measured original event and stock records | Exact material/form/type; component ID and actual tare; event ID/time/direction; owner; original cohort; opening empty/attached WIP/FG/reusable stock; P actual purchased first receipt; N_ext actual nonpurchase first receipt including accompanying/entrusted/borrowed/rented; ER and original prior outward dispatch; closing stock; grossS; EO; W; internal issues/reuse; inherited exchange vector; supplier-included scope; genuine incremental rental/return service; measurement uncertainty | Weigh each actual component type/event and audit mutually exclusive P, N_ext and genuine ER with outward history. Close opening+P+N_ext+ER=closing+grossS+EO+W at the same physical gate; cancel internal stock issues and do not substitute opening stock for current receipts. | kg | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Atomic measured receipts and dispatches; actual tare; custody and original-cohort proof; no missing real interface |
| cp_residues | prepare | Each actual removed stream and receiver | Measured original event and stock records | Stream ID; material/species/physical state; source tank/location; original vessel and history; actual gross/tare/net; oil/water/solids or relevant assay; recovered versus unusable status; retained onboard quantity; receiver; transport; treatment provider boundary; actual component events; actual releases | Measure each distinct complete wet stream at transfer; verify representative assay and actual fate. Stream partitions sum to the whole without additive duplication. Keep IHM location and post-removal update matched to the same ship. | kg | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Scale/calibration; transfer and receiver tickets; actual composition and tank/IHM change records |
| cp_utilities | support | Each actual fuel, lubricant and electricity supply/use | Measured original event and stock records | Meter/tank ID; exact fuel or complete lubricant; geography and voltage; provider/version/contained scope; actual purchased/nonpurchase first receipts; original inherited tank stock; opening/closing stock; retained/removal amounts; raw mass or energy; integrated volume or true rate/time; measured density/state; actual carbon/sulfur; operations; failed/idle/start/stop/cleanup/rework work; allocation driver | Collect raw fuel draws/makeup and meter differences by suboperation; convert actual units before allocation. Preserve inherited tank vectors and subtract only documented stock changes or provider-contained duplicate scope. | kg; MJ | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Calibrated meters/tank tables; actual formulation/density; invoices and nonpurchase receipt evidence; raw totals and causal allocation audit |
| cp_species | support | Each molecular release and oxygen uptake | Measured original event and stock records | Actual species and CAS; emitting operation; medium/location; sampling method; gas temperature/pressure/moisture; measured concentration; actual integrated gas volume or rate/time; background/inlet concentrations; actual fuel assay; independent water/element balances; retained and transferred quantities; provider-contained emissions; detection limits; uncertainty | Integrate measured species concentration with compatible gas flow, or use independently evidenced substance balance without fitting unknowns. Preserve raw indicator text and unsupported speciation as unresolved; do not turn nondetection into proven zero. | kg | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Original lab/stack/engine records and calibration; independent mass and elemental closure; explicit species and compartment limits |
| cp_water | support | Actual sea intake and return | Measured original event and stock records | Inlet/outlet location and time; source/receiving medium; meter; integrated volume or true rate/time; salinity; density; temperature/thermal state; retained ballast/tank changes; actual contaminants and treatment; original source cohort | Meter intake/return and reconcile separate original ballast, retained water, evaporation and transfer to external treatment; measure actual density only when mass is needed. | m3 | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Calibrated liquid-flow meter; actual salinity/density and thermal-state evidence; relevant actual discharge conditions |
| cp_handover | handover | Actual transfer/tow and original-cohort services | Measured original event and stock records | Original IMO identity and Qc; mode; tug/provider; actual route endpoints; departure/arrival/placement; completed trip; actual hours H; provider fuel/utility/emission boundary; owner supplies; waiting/refusal/redelivery; service allocation driver; actual component receipt/dispatch events | Match actual navigation/tow logs and service receipt to the specific original ship and receiver; separate self-movement raw utilities from complete contracted services. Do not convert a trip into cargo transport or create new Q from H. | h | Each event and opening/closing period | Withdrawal through acceptance; retain all failures and later original-cohort services | Named actual vessel, preparation sites, route and receiver gate | per one accepted finished unit | Signed trip/tow records; provider-contained scope; actual reception; original cohort and incremental service evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref | nma-lightship-2020 |
| raw_conversion | all_processes | Convert raw measurements to the declared numerator unit before attribution:1kWh=3.6MJ; actual tonnes=1000kg. Integrate only genuine rates; measured integrated volume is already a total. Mass from liquid/gas volume requires independently measured substance-specific density at matching conditions. Preserve original raw values and all conversion evidence. | raw_meter; raw_volume; raw_rate; elapsed_time; measured_density; state | raw_numerator |  |
| raw_attribution | all_processes | Reconcile exclusive and virtually subdivided quantities, then each exchange-specific determining physical driver, then any true common-process remainder at actual-state contemporaneous market value. Assigned amounts across all actual functions equal the raw parent total. Add the explicitly transferred inherited exchange vector once; no second supplier burden. | raw_parent; dedicated_records; causal_driver; residual_values; inherited_vector | attributable_raw_total | ilcd-allocation-2010 |
| first_release | whole_vessel | Identify the unique first qualified reception event and its measured net vessel mass. Keep original Qc for storage/handling/redelivery; service H has no production denominator. Closing FG already contains first-released held output. With no qualified event retain raw burdens/stocks but no unit result. | unique_release_event; accepted_net_mass; original_cohort; fg_stocks | first_qualified_output | imo-srp-2011 |
| component_closure | drum_p; drum_next; drum_er; drum_s; drum_eo; drum_w | For each exact component/physical gate use mutually exclusive real P, N_ext and prior-dispatch ER. Reconcile opening+P+N_ext+ER=closing+grossS+EO+W; sum empty/attached WIP/FG/reusable stocks consistently and cancel internal issues/reuse. Keep measured event interfaces, ownership, original cohort, inherited vector, supplier containment and incremental rental/return service independently; never fill a missing real receipt with a symbol. | opening_component; P; N_ext; ER; closing_component; grossS; EO; W; event_history | component_reconciliation |  |
| physical_closure | all_processes | Close physical mass independently of burden attribution: opening vessel/WIP/FG and tank stocks plus real incoming matter equal closing stocks plus whole outward vessel, separately removed streams and measured releases within declared uncertainty. Gross whole-vessel movement and its source partitions are nonadditive views; the partition sum equals the whole and one provider boundary supplies each exchange. Keep each relevant elemental balance (especially carbon, sulfur, refrigerant and water) independent of total mass. Measure free water, actual combustion/evaporation water and retained system liquids separately. COD, TOC and VOC metrics are not masses of an invented chemical. Dry-air/stack and carrier-gas ledgers reconcile measured gas exchange without inventing oxygen or nitrogen from a residual; one residual cannot fit two unknowns. | opening_physical_stocks; actual_receipts; closing_physical_stocks; gross_outward_vessel; removed_streams; actual_species; uncertainty | independent_mass_and_element_reconciliation | basel-ships-2002 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | whole_vessel | Prove the same original steel container hull and retained configuration from withdrawal to first reception; no name/classification-only reference binding. A native Product record must fit retired whole shape, actual gate, all comments/properties and compatible unit chain. | Construction/configuration records; withdrawal survey; direct flow/property/unit evidence; actual reception |
| dq_mass | cp_mass | At acceptance, M is the declared dry net mass of the remaining hull, fixed outfit, coatings and retained permanent equipment. Exclude cargo, people and effects, every separately inventoried liquid including tank oils and retained technical operating fluids, ballast, bunker fuel, free bilge water, consumable stores, detached spares and temporary containers/rigging. This is this method's explicit measurement convention, not an assertion of statutory or contractual LDT. A reported lightweight or LDT is usable only after proving its actual definition and reconciling every inclusion/exclusion to this dry configuration; disclose the bridge and measurement uncertainty. Their actual physical quantities still enter the independent gross-vessel/tank ledger and the relevant departure, retention or waste interface. Use a current vessel-specific survey and a complete change ledger from its reference configuration, with measured additions/removals and actual tank corrections; do not use gross tonnage, deadweight or a generic ship density as net mass. | Current survey, calibrated draught/density instruments, hydrostatics, measured tank contents and signed change ledger; nma-lightship-2020 |
| dq_hazards | prepare; handover | Preserve each actual hazard species/material, location, retained/removed state and uncertainty. IHM is not an emission factor or proof of zero residual hazard. Different regulator/flag/site permissions require actual applicability checks without importing historical numerical thresholds. | Actual IHM and changes; receiver capability and applicable permits; ship-specific survey, work plan and reception; imo-srp-2011 |
| dq_raw | all_processes | Protocols collect undivided raw records. First convert actual meter differences or integrate a genuine rate over its recorded time; already integrated gas/liquid volume is never multiplied by time again. A volume-to-mass bridge requires the actual substance or mixture density at measured temperature/pressure/composition, never water density for oil or a catalogue ship weight. Resolve supplier boundaries and allocate the raw numerator by the hierarchy in Section7 before normalization. For one accepted configured vessel, q_item is that attributable raw exchange total, including failures, startup, shutdown, idle, cleanup and rework; normalize_mass divides by its actual net mass once. Cards and aggregations reference that single operation and do not divide again. With Q=0 keep all raw burdens and physical stocks but issue no unit result. | Original measurements, conversion records, independent raw allocation and denominator audit |
| dq_components | cp_components | Each actual event requires an atomic receipt row or explicit interface with specific material/form/type/direction and measured quantity. The HDPE drum interfaces below retain purchase and true-return meanings and add the distinct nonpurchase interface. They are conditional examples, not an assertion that the vessel needs drums. For a real additional mooring rope, steel cylinder, seal, pallet or other component, add that actual concrete component and its relevant P/N_ext/ER and outward/waste interfaces. Missing real interfaces make that particular data package incomplete; symbols alone, a purchase UUID reused for nonpurchase identity, fabricated purchases/returns or copied batch quantities cannot fill it. Historical hull and outfit are within the original vessel, not repurchased components. | All actual atomic event rows with measured tare/quantity and actual owner/cohort/dispatch history; component_closure |
| dq_burdens | all_processes | Retain every inherited vector, stock age/configuration and supplier-contained boundary. Technical examples supply qualitative route evidence only; missing factory/provider quantities remain concrete package gaps, never fabricated ranges or a historical zero-burden assumption. | Original provider/asset records; explicit study transfer method; raw parent reconciliation; unresolved scope disclosure |
| dq_evidence | all_processes | The 2002 guidance and 2016 owner reportage do not establish current legal status, universal safe preparation or receiver approval. Preserve adjacent contrary cases and actual report limitations; each concrete package must verify its own present receiver and actual preparation work. | Complete primary source context; actual ship/receiver documents; maersk-container-recycling-2016; imo-srp-2011 |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | whole_vessel | Require the original whole retired steel container hull and first qualified pre-cut reception. Verify functional-unit link, net mass, actual configuration and complete compatible Product flow/property/unit identity before a native data package is considered complete; new-vessel/Waste/CTUe/plate/scrap/service substitutions fail. | un-cpc3-2025; imo-srp-2011 |
| validate_receiver | handover | Missing ship-specific acceptance, actual residual inventory, receiver identity/capability or actually applicable permission evidence is unresolved, not an automatic pass from IHM/certification or a historic case. Preserve actual refusal and corrective work. | imo-srp-2011; maersk-container-recycling-2016 |
| validate_once | all_processes | Audit raw units and genuine rate integration, raw attribution and inherited vectors before normalize_mass. Each raw numerator is divided once only; protocol collection and aggregation remain undivided. Retain all failures, startup/stop/idle/cleanup/rework and Q=0 burdens. No new Q from redelivery, service H or closing FG. |  |
| validate_physical | all_processes | Close physical mass independently of burden attribution: opening vessel/WIP/FG and tank stocks plus real incoming matter equal closing stocks plus whole outward vessel, separately removed streams and measured releases within declared uncertainty. Gross whole-vessel movement and its source partitions are nonadditive views; the partition sum equals the whole and one provider boundary supplies each exchange. Keep each relevant elemental balance (especially carbon, sulfur, refrigerant and water) independent of total mass. Measure free water, actual combustion/evaporation water and retained system liquids separately. COD, TOC and VOC metrics are not masses of an invented chemical. Dry-air/stack and carrier-gas ledgers reconcile measured gas exchange without inventing oxygen or nitrogen from a residual; one residual cannot fit two unknowns. | basel-ships-2002 |
| validate_components | cp_components | For each actual packaging type, container and attached auxiliary component, record opening empty stock, attached WIP/FG and reusable stock separately. P means genuine purchased first external physical receipts; N_ext means all nonpurchase first external physical receipts, including supplier accompanying items and first entrusted, borrowed or rented items. ER is only a true return of a prior outward dispatch proved by its event history. P, N_ext and ER are mutually exclusive. Record every first physical receipt whether or not the supplier inventory covers its embodied burden; absent supplier data remains a disclosed collection gap, never zero. At the same component and physical gate close opening+P+N_ext+ER=closing+grossS+EO+W. grossS is every actual outward shipment with its attached component, EO is a distinct external return-out and W is actual waste. Internal warehouse/WIP/FG issues, internal reuse and transfers cancel; opening stock cannot replace current receipts. Ownership, original cohort, each inherited exchange vector, supplier-included scope and genuine incremental rental/return services are independent ledgers. A component receives its embodied burden once; custody and reuse do not imply zero burden, new Q or credit. |  |
| validate_interfaces | all_processes | Each actual event requires an atomic receipt row or explicit interface with specific material/form/type/direction and measured quantity. The HDPE drum interfaces below retain purchase and true-return meanings and add the distinct nonpurchase interface. They are conditional examples, not an assertion that the vessel needs drums. For a real additional mooring rope, steel cylinder, seal, pallet or other component, add that actual concrete component and its relevant P/N_ext/ER and outward/waste interfaces. Missing real interfaces make that particular data package incomplete; symbols alone, a purchase UUID reused for nonpurchase identity, fabricated purchases/returns or copied batch quantities cannot fill it. Historical hull and outfit are within the original vessel, not repurchased components. |  |
| validate_supplier | support; handover | Verify each actual provider boundary and exact whole formulation; remove only proven duplicate contained scope. Keep nonpurchase first physical receipts, original ownership/cohort/burden and incremental rental/return services separate. No orphan service total or missing real material can be covered by a generic family binding. | ilcd-allocation-2010 |
| validate_allocation | all_processes | Require exclusive/virtual subdivision then exchange-specific determining physical causality before any true residual common-process market-value allocation. Reconcile all actual functions to each parent; no fixed shares, automatic historical cutoff or avoided-production credit. Missing history or allocation evidence stays explicit and limits the result. | ilcd-allocation-2010 |
| validate_stocks | all_processes | Reconcile opening/closing WIP and FG by original hull/cohort and per-exchange inherited vector. Internal stage and warehouse issues cancel. A genuine external return requires its prior outward record; first borrowed/entrusted/rented physical entry is never a return. Keep gross physical vessel movement separate from net Q and attributed burden A. |  |
| validate_species | support; prepare | Do not invent gas species from NOx/VOC/COD/TOC indicators, assume full fuel-to-CO2/SO2 conversion, infer a leak from missing recovery, or force two unknowns from one mass residual. Compare measured stream totals and nonadditive assays, actual heat/water states, retained fluids and all actual external destinations. Unmeasured is not zero. | basel-ships-2002 |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after completed compatible package and review |
| downstream_use | Input to explicitly bounded ship-recycling receiving and dismantling models for this original whole retired steel container vessel |
| allowed_use | Disclosed incremental preparation/supply module; expansion only with compatible historical transfer and actual utility/tow/treatment providers |
| excluded_use | New ship manufacture; freight tonne-km; loose scrap or recovered steel production; complete cradle-to-grave claims from foreground-only additions; current legal/permit or safety certification; automatic recycling credit |
| required_metadata | All Section3 qualifiers; actual source versions and inherited vectors; each provider boundary; Qc and gross physical records; original units and actual mass corrections; all specific unresolved rows |
| required_quality_disclosure | Ship/configuration, time and geography; receiver applicability; original history limits; measured/estimated/missing quantities; species/compartment and provider gaps; allocation and stock uncertainty; a measurement check does not approve methodology or identity |
| update_trigger | Changed vessel state or gate, retained equipment/tanks/hazards, receiver permission/capability, actual preparation or fuel/transport route, provider scope, transfer/allocation method or native identity restrictions |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.203-205; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; accessed 2026-11-21 | Whole vessels for breaking up distinguished from separated metal scrap; classification only, no preparation recipe. |
| imo-srp-2011 | official_guidance | IMO Resolution MEPC.196(62), adopted 15 July 2011, Annex §§3-5 and Appendix, PDF pp.4-8; https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MEPCDocuments/MEPC.196%2862%29.pdf; accessed 2026-11-21 | Ship-specific information, IHM changes, receiver capabilities, preparatory-work scope, arrival inspection and conditional authorization evidence; guidance edition is not a current legal determination. |
| basel-ships-2002 | official_guidance | Basel Convention, Technical guidelines for the environmentally sound management of the full and partial dismantling of ships, COP.6 December 2002, Figure1, §4.1 Table6, §§4.2.2-4.2.3; https://www.basel.int/Portals/4/download.aspx?d=UNEP-CHW-WAST-GUID-ShipDismantling.English.pdf; accessed 2026-11-21 | Retirement/preparation distinct from cutting and sorting; actual liquid removal, containment, bilge/ballast and residual hazards. Historical legal and numerical statements are not adopted as present requirements or defaults. |
| maersk-container-recycling-2016 | literature | A.P. Moller-Maersk, Maersk Post November2016, pp.32-37, reportage on Maersk Wyoming and Maersk Georgia at Shree Ram plot78; https://www.maersk.com.cn/~/media_sc9/maersk/corporate/press/publications/files/2016-november-maersk-post-full-issue.pdf; accessed 2026-11-21 | Owner primary historical container-vessel supply/recycling case and adjacent contrary sale/charter cases; no inference of current receiver permission, complete hazard removal, actual ship mass or universal energy factor. |
| nma-lightship-2020 | official_guidance | Norwegian Maritime Authority KS-0179-1E, Rev.07.01.2020, §§1-3.4, pp.3-7; https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf; accessed 2026-11-21 | Traceable survey, configuration, actual tank contents/density, draught/hydrostatics and correction discipline used as technical mass-measurement guidance; Norwegian approval rules are not applied to other flags. |
| ilcd-allocation-2010 | handbook | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printed pp.255-264; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; accessed 2026-11-21 | Attributional exclusive/virtual subdivision, exchange-specific determining physical causality, then remaining common-process allocation at actual-state contemporaneous market value. This section does not establish a recycling cutoff or historical ship-burden fraction. |
| un-cpc3-2026 | official_guidance | UNSD CPC Version 3.0, explanatory workbook dated 23 October 2026, CPC3!A1931:D1931; https://unstats.un.org/unsd/econstats/classifications/cpc; accessed 2026-11-21 | 39370 is defined through HS 2022 heading 8908; classification context only, no change to the frozen June 2025 coordinate. |
| imo-hkc-current | official_guidance | IMO, Recycling of ships and the Hong Kong Convention; https://www.imo.org/en/mediacentre/hottopics/pages/recycling-of-ships-and-hong-kong-convention.aspx; accessed 2026-11-21 | Entry into force and ship/facility-specific documentary interfaces; no retrospective approval or measured inventory. |
| bimco-recyclecon-2026 | official_guidance | BIMCO, We have updated RECYCLECON, 21 October 2026; https://www.bimco.org/news-insights/bimco-news/2026/10/21-recyclecon-2026/; accessed 2026-11-21 | Delivery condition/location and model-contract timing only; does not establish any actual owner contract or light-displacement quantity. |
