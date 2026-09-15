---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-goat-fresh-chilled-or-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 山羊可食用内脏，鲜、冷藏或冷冻

## 1. 范围与适用性

本 PCR 为一个有意收窄的代表产品生产前景数据包：整只山羊肝，去除胆囊，并修除可见污染、病变、不合格组织和非肝附着物；使用饮用水清洗；由 R717 氨制冷系统提供的强制气流冷却；装入 PA/PE 真空袋密封，再装入瓦楞纸箱，并在 0–3 °C 下从屠宰场冷库交付。本 PCR 不表示肝、肾、心、肺、舌、胃、肠或其他组织的平均，也不平均鲜、冷藏和冷冻状态。

前景边界从屠宰场接收的活山羊开始，纳入屠宰放血、卫生取脏及组织身份保持、肝脏分离修整、饮用水清洗、强制气流冷却、真空包装、冷藏暂存及可归属的清洗消毒。山羊养殖和活畜进场运输作为上游关联数据集。声明的屠宰场交付门之后的配送、零售、烹饪、消费和包装生命末期属于下游。

排除未经主动冷却而交付的鲜肝和任何冻肝路线。这两种状态均须另行声明路线并编制清单，不得与本冷藏肝路线混合。还排除调制、熟制、盐渍、干制、熏制、绞碎、提取或配方化的内脏产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-goat-fresh-chilled-or-frozen |
| classification_refs | CPC:3.0:21156 (`exact`) |
| covered_products | CPC 02123 山羊的食品级整肝，经过修整、饮用水清洗、强制气流冷却和真空包装，并在 0–3 °C 下发运。 |
| excluded_products | 绵羊或其他物种的肝；肾、心、肺、舌、胃、肠或混合内脏；未经冷却的鲜肝；冻肝；调制、保藏、熟制、盐渍、干制、熏制、绞碎、提取或配方化内脏；不合格组织。 |
| representative_product | 冷藏整只山羊肝，已去胆囊、表面可见清洁并完成修整，装入 PA/PE 真空袋密封并置于瓦楞纸箱，净产品温度 0–3 °C。 |
| production_route | 接收活山羊 → 屠宰放血 → 卫生取脏 → 肝脏分离、检验与修整 → 饮用水清洗 → R717 制冷强制气流冷却 → PA/PE 真空包装和瓦楞纸箱装箱 → 冷藏暂存与发运。 |
| market_state | 屠宰场发运门处的食品级冷藏整只山羊肝，全产品 0–3 °C，已声明包装配置和批次。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明的修整、卫生、包装和温度规格的冷藏整只山羊肝。 |
| How much | 1,000 kg 冷藏山羊肝净重，不含任何包装。 |
| How well | 物种为山羊；组织仅为肝；已去胆囊；检验处置为适合人类食用；已去除可见污染和不合格组织；饮用水清洗；强制气流冷却；真空包装完好；发运时产品温度 0–3 °C。 |
| How long or cycle | 屠宰场发运门处一个已完成的屠宰和肝加工生产批次；不赋予使用期。 |
| reference_flow_link | `rf_chilled_goat_liver` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净产品 |
| 参考产品流 | 新鲜、冷藏或冷冻的山羊食用内脏 `378f6bb6-a27a-41ef-890a-2243f652a9fc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species = goat; tissue = liver; product_state = chilled; gallbladder_removed = true; trimming_specification; washing_route = potable_water; chilling_route = forced_air_R717; dispatch_temperature_min_degC = 0; dispatch_temperature_max_degC = 3; package_configuration = PA_PE_vacuum_pouch_in_corrugated_case; inspection_disposition; slaughter_lot; facility; geography; temporal_coverage; allocation_method |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有交换归一化到发运时 1,000 kg 冷藏山羊肝净重；包装不计入产品净重。 |
| `lot_mass_balance` | 屠宰、分离、修整、清洗、冷却和包装 | Mass | kg | 在一致湿重基准上使用经校准的批次质量。除非作为单独披露的活动驱动量，否则不得用头数代替质量。 |
| `temperature_gate` | 清洗后肝、冷藏肝、冷藏暂存和发运 | Temperature | °C | 记录经校准的产品温度和时间戳。发运时参考产品全体必须为 0–3 °C；内脏 3 °C 法规上限是接收门禁，不是平均值或默认实测温度。 |
| `net_pack_mass` | 包装肝 | Mass | kg | 分别记录肝净重和每种包装组件；参考数量不得包含袋、标签、纸箱或缠绕膜质量。 |
| `electricity_conversion` | 计量电力 | Energy | kWh | 保留计量 kWh。若记录使用 MJ，则采用 `kWh = MJ / 3.6`，并保留原始读数和换算。 |
| `refrigerant_loss` | R717 制冷 | Mass | kg | 依据经核验的充注和回收记录，使用 `R717_loss = opening_charge + additions - closing_charge - recovered` 计算所选设备和期间的 R717 损失。 |
| `state_exclusivity` | 产品状态 | Mass | kg | 本 PCR 仅接收冷藏路线。未经冷却的鲜品和冻品输出必须建立独立数据集，不得平均进本参考流。 |
| `tissue_exclusivity` | 产品身份 | Mass | kg | 本 PCR 仅接收山羊肝。不得跨肝、肾、心、舌、肺、胃、肠或混合内脏篮子汇总数量、价格、得率或负荷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 屠宰场接收的活山羊，已识别至屠宰批次并关联上游农场生产和进场运输数据集。 |
| starting_condition_role | 前景门投入；养殖和活畜运输仍为关联上游系统。 |
| product_classification_scope | CPC 3.0 代码 21156，并针对数据集生产收窄为声明路线和规格下的冷藏整只山羊肝。 |
| recursive_input_rule | 已属于 CPC 21156 的外购或调拨山羊肝作为单独产品投入记录，并带有其状态、组织和上游数据集；不得递归重跑活山羊屠宰，也不得重新标为活山羊。 |
| upstream_dataset_requirement | 关联活山羊生产与运输、电力、饮用水、R717 补充、PA/PE 袋、纸标签、瓦楞纸箱、LLDPE 膜、氢氧化钠、过氧乙酸及实际使用的任何处理服务的上游数据集。 |
| disclosure | 声明组织、状态、修整和清洗规格、屠宰和加工批次、检验处置、冷却设备、制冷剂、时间—温度记录、包装配置、清洗消毒归属、废水路线、副产品去向、分配方法和敏感性情景、排除项、数据缺口及全部条件路线决策。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_live_goat_to_dispatch` | 覆盖路线 | 从接收活山羊到冷藏肝发运，纳入屠宰、放血、取脏、肝分离修整、清洗、冷却、包装、冷藏暂存和可归属清洗消毒。 | `fao-small-ruminant-slaughter`; `fao-who-cxc-58-2005` |
| `boundary_identity_and_inspection` | 屠宰产品 | 每只动物的肝在宰后处置完成前必须可与其胴体对应；不合格物不得进入食用产品，并须单独记录。 | `eu-reg-853-2004`; `fao-small-ruminant-slaughter` |
| `boundary_temperature` | 冷藏路线 | 宰后处理后立即沿连续降温路径冷却，内脏保持不高于 3 °C；本 PCR 进一步将发运温度锁定为 0–3 °C。 | `eu-reg-853-2004`; `fao-who-cxc-58-2005` |
| `boundary_atomic_inputs` | 全部前景过程 | 将每种实际使用的材料、水、电力、化学品、包装组件、制冷剂和燃料作为单独的化学或物理特定交换记录；不得使用集合流。 | `fao-who-cxc-58-2005` |
| `boundary_atomic_outputs` | 全部前景过程 | 分别记录每种副产品、废物、废水流、制冷剂排放和直接排放污染物。对同一数量，废水送处理与污染物直排水体路线互斥。 | `fao-small-ruminant-sanitation` |
| `boundary_state_route` | 产品状态 | 仅纳入冷藏路线。未经冷却的鲜品或冻品路线需要单独的 PCR 合规数据集，且不得与本路线平均。 | `unsd-cpc3-21156`; `eu-reg-853-2004` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `slaughter_bleeding` | 屠宰与放血 | `required` | 每个覆盖批次。 | 将接收活山羊转化为放血山羊体，并分别收集食品级血或送处理的血。 | kg 放血山羊体 |
| `evisceration_separation` | 卫生取脏与组织分离 | `required` | 每个覆盖批次。 | 分离肝及每种其他共产品或废物，并在检验期间保持胴体身份。 | kg 带胆囊肝 |
| `liver_trimming` | 肝检验、去胆囊与修整 | `required` | 宰后处置后的每个覆盖肝批次。 | 只生产符合修整规格的适食整只山羊肝。 | kg 修整山羊肝 |
| `liver_washing` | 饮用水清洗肝 | `required` | 每个覆盖修整肝批次；仅干式清洁路线不属于本代表路线。 | 去除残余表面污染且不混合组织或批次。 | kg 清洗山羊肝 |
| `forced_air_chilling` | R717 制冷强制气流冷却 | `required` | 每个覆盖清洗肝批次。 | 将产品温度连续降至 0–3 °C，并量化电力和 R717 损失。 | kg 冷藏山羊肝 |
| `vacuum_packaging` | PA/PE 真空包装与瓦楞纸箱装箱 | `required` | 每个覆盖冷藏肝批次。 | 保护所选产品并建立声明的包装净重。 | kg 真空包装山羊肝 |
| `cold_holding_dispatch` | 冷藏暂存与发运 | `required` | 每个覆盖包装批次直至屠宰场发运。 | 保持 0–3 °C 并交付参考产品。 | 1,000 kg 冷藏山羊肝净重 |
| `lot_sanitation` | 批次可归属清洗消毒与废水处理 | `required` | 每个覆盖批次都需要直接批次记录或披露的共享清洗消毒分配。 | 清洗消毒设备和表面；在不隐藏直接排放的情况下路由废水和固体。 | 可归属 1,000 kg 净产品的清洗消毒 |

### 过程：屠宰与放血（`slaughter_bleeding`）

#### 输入

##### 产品流

###### 验收进入屠宰的活山羊（`live_goat_input`）

活山羊经身份与接收检查后进入前景系统；养殖和进场运输仍作为相链接的上游系统。

- 选定流： Live goat at slaughter weight
- 流属性/单位： Mass / kg
- 数量规则： measured accepted live mass for goats assigned to the production lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_live_goat_and_slaughter`
- 来源： `fao-small-ruminant-slaughter`

###### 屠宰过程使用的饮用水（`slaughter_potable_water`）

屠宰区作业所用饮用水跨越本过程边界，并与后续肝清洗水和清洗消毒水分别计量。

- 选定流：饮用水
- 流属性/单位： Volume / m3
- 数量规则： metered or tank-change water attributable to slaughter and bleeding for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg bled goat body
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_slaughter_utilities`
- 来源： `fao-who-cxc-58-2005`

###### 屠宰过程使用的电力（`slaughter_electricity`）

提升机、输送机、归属于本过程的照明及屠宰设备用电，作为一项过程特定电力交换记录。

- 选定流：低压电力
- 流属性/单位： Energy / kWh
- 数量规则： submetered electricity or documented equipment-time calculation for slaughter and bleeding
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg bled goat body
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_slaughter_utilities`
- 来源： `fao-small-ruminant-slaughter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 供卫生整理的放血山羊体（`bled_goat_body`）

放血山羊体是转入取脏过程的内部产品输出，须称量以支持批次质量平衡。

- 选定流： Bled goat body
- 流属性/单位： Mass / kg
- 数量规则： measured bled-body mass transferred to evisceration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_live_goat_and_slaughter`
- 来源： `fao-small-ruminant-slaughter`

###### 食品级收集的山羊血（`food_grade_goat_blood`）

仅当血液以卫生方式收集且有记录证明其食品或制药去向时，才将其记为共产品；对同一质量，该路线与 `blood_for_treatment` 互斥。

- 选定流： Goat blood, food-grade
- 流属性/单位： Mass / kg
- 数量规则： measured blood mass accepted to the declared food-grade destination; otherwise zero and gate to `blood_for_treatment`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `fao-small-ruminant-slaughter`

##### 废物流

###### 送处理的山羊血（`blood_for_treatment`）

不满足所声明共产品去向的血液作为单独废物流记录，不得隐含于废水中；对同一质量，该路线与 `food_grade_goat_blood` 互斥。

- 选定流： Goat blood for treatment
- 流属性/单位： Mass / kg
- 数量规则： measured blood mass sent to the documented treatment route
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `fao-small-ruminant-sanitation`

###### 送处理的屠宰废水（`slaughter_wastewater`）

屠宰和放血废水须与血液分开记录，也须与肝清洗废水或清洗消毒废水分开记录。

- 选定流： Slaughter wastewater for treatment
- 流属性/单位： Volume / m3
- 数量规则： metered or water-balance wastewater volume sent to the declared treatment route
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg bled goat body
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

##### 基本流

### 过程：卫生取脏与组织分离（`evisceration_separation`）

#### 输入

##### 产品流

###### 进入取脏过程的放血山羊体（`bled_goat_body_input`）

带有批次身份的放血山羊体进入取脏过程，并维持检验所需的胴体—组织关联。

- 选定流： Bled goat body
- 流属性/单位： Mass / kg
- 数量规则： measured mass transferred from `slaughter_bleeding`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg liver with gallbladder separated
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_evisceration_liver`
- 来源： `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

###### 取脏过程使用的饮用水（`evisceration_potable_water`）

取脏过程直接使用的饮用水须与肝清洗水和清洗消毒水独立记录。

- 选定流：饮用水
- 流属性/单位： Volume / m3
- 数量规则： metered water attributable to evisceration for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg liver with gallbladder separated
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_evisceration_liver`
- 来源： `fao-who-cxc-58-2005`

###### 取脏过程使用的电力（`evisceration_electricity`）

轨道、输送机、归属照明和取脏设备用电仅针对本过程计量或计算。

- 选定流：低压电力
- 流属性/单位： Energy / kWh
- 数量规则： submetered electricity or documented equipment-time calculation for evisceration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg liver with gallbladder separated
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_evisceration_liver`
- 来源： `fao-small-ruminant-slaughter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保留胆囊待检的山羊肝（`goat_liver_with_gallbladder`）

分离的山羊肝在检验处置确定前始终与其胴体保持身份关联，之后转入肝修整过程。

- 选定流： Goat liver with gallbladder
- 流属性/单位： Mass / kg
- 数量规则： measured liver-with-gallbladder mass released as fit for further food handling
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_evisceration_liver`
- 来源： `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

###### 整理后的山羊胴体（`dressed_goat_carcass`）

整理后的胴体作为独立共产品记录，并采集实测湿重、去向及价格证据用于分配敏感性分析。

- 选定流： Dressed goat carcass
- 流属性/单位： Mass / kg
- 数量规则： measured dressed carcass mass released from the same slaughter lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `lefeon-2020-slaughter-allocation`

###### 山羊皮（`goat_hide`）

剥离的山羊皮在有记录证明共产品去向时单独记录，不得与其他动物部位合并。

- 选定流： Goat hide
- 流属性/单位： Mass / kg
- 数量规则： measured hide mass sent to the declared coproduct destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `fao-small-ruminant-slaughter`

###### 山羊头和蹄（`goat_head_and_feet`）

仅当头和蹄作为一个组合商品且有同一去向记录时才记为一项独立共产品，否则数据集必须进一步拆分。

- 选定流： Goat head and feet
- 流属性/单位： Mass / kg
- 数量规则： measured mass sent to the declared destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `fao-small-ruminant-slaughter`

###### 山羊心（`goat_heart`）

山羊心是独立的可食用内脏共产品，不得平均并入肝参考产品。

- 选定流： Goat heart
- 流属性/单位： Mass / kg
- 数量规则： measured fit-for-food heart mass and declared destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `fao-small-ruminant-slaughter`

###### 山羊肺（`goat_lungs`）

山羊肺的食用状态和去向因市场而异，须连同检验处置和去向单独记录。

- 选定流： Goat lungs
- 流属性/单位： Mass / kg
- 数量规则： measured lung mass released to the declared destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `fao-small-ruminant-slaughter`

###### 山羊肾（`goat_kidneys`）

山羊肾是独立的可食用内脏共产品，排除在肝参考产品和肝得率之外。

- 选定流： Goat kidneys
- 流属性/单位： Mass / kg
- 数量规则： measured fit-for-food kidney mass and declared destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `eu-reg-853-2004`

###### 山羊舌（`goat_tongue`）

山羊舌须连同适食处置单独记录，不得与肝或头的质量合并。

- 选定流： Goat tongue
- 流属性/单位： Mass / kg
- 数量规则： measured fit-for-food tongue mass and declared destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `fao-small-ruminant-slaughter`

###### 山羊胃（`goat_stomachs`）

可清洗的山羊胃须按实际去向作为独立共产品记录，不得与肠或胃内容物混合。

- 选定流： Goat stomachs
- 流属性/单位： Mass / kg
- 数量规则： measured stomach mass sent to the declared destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

###### 山羊肠（`goat_intestines`）

可清洗的山羊肠须与胃及其内容物分开记录，并声明实际去向。

- 选定流： Goat intestines
- 流属性/单位： Mass / kg
- 数量规则： measured intestine mass sent to the declared destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

###### 未炼制山羊脂肪（`goat_fat_unrendered`）

回收的分离未炼制山羊脂肪作为独立共产品记录，不得与皮、胴体或判废组织合并。

- 选定流： Goat fat, unrendered
- 流属性/单位： Mass / kg
- 数量规则： measured unrendered fat mass sent to the declared destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `lefeon-2020-slaughter-allocation`

##### 废物流

###### 从山羊胃中清出的胃内容物（`paunch_contents`）

胃内容物是一项特定有机废物，须与胃组织、废水、血液和判废器官分开记录。

- 选定流： Goat paunch contents
- 流属性/单位： Mass / kg
- 数量规则： measured or container-difference mass sent to the documented management route
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `fao-small-ruminant-sanitation`

###### 宰后检验判废的山羊组织（`condemned_goat_tissue`）

判定不适合人类食用的组织须与可食用输出分开，并按其实际合规处理去向记录。

- 选定流： Condemned goat tissue
- 流属性/单位： Mass / kg
- 数量规则： measured condemned tissue mass by disposition record
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per accepted slaughter lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_coproduct_mass_destination`
- 来源： `eu-reg-853-2004`

##### 基本流

### 过程：肝检验、去胆囊与修整（`liver_trimming`）

#### 输入

##### 产品流

###### 进入修整的带胆囊山羊肝（`liver_with_gallbladder_input`）

只有经宰后检验放行且具有批次身份的山羊肝才可进入修整过程。

- 选定流： Goat liver with gallbladder
- 流属性/单位： Mass / kg
- 数量规则： measured mass transferred from `evisceration_separation`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg trimmed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_trimming_liver`
- 来源： `fao-small-ruminant-slaughter`

###### 肝修整使用的电力（`trimming_electricity`）

修整线设备和可归属照明用电须与取脏和冷却用电分开记录。

- 选定流：低压电力
- 流属性/单位： Energy / kWh
- 数量规则： submetered electricity or documented equipment-time calculation for liver trimming
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg trimmed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_trimming_liver`
- 来源： `fao-small-ruminant-slaughter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 修整后的整只山羊肝（`trimmed_goat_liver`）

整肝输出已去除胆囊、可见污染、病灶、判废组织和非肝附着物，同时保持肝组织身份。

- 选定流： Trimmed whole goat liver
- 流属性/单位： Mass / kg
- 数量规则： measured fit trimmed-liver mass transferred to washing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per trimming lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_trimming_liver`
- 来源： `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

##### 废物流

###### 去除的山羊胆囊和胆汁（`removed_gallbladder_and_bile`）

去除的胆囊及其中胆汁作为一个物理定义明确的器官—内容物废物流记录，不得进入产品或废水。

- 选定流： Goat gallbladder and bile
- 流属性/单位： Mass / kg
- 数量规则： measured container-difference mass sent to the documented treatment route
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg trimmed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_trimming_liver`
- 来源： `fao-small-ruminant-slaughter`

###### 判废山羊肝组织（`condemned_liver_tissue`）

修整时判废的病灶、污染部分或其他肝组织须单独称量，并送往有记录的处理路线。

- 选定流： Condemned goat liver tissue
- 流属性/单位： Mass / kg
- 数量规则： measured condemned liver-tissue mass by disposition record
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg trimmed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_trimming_liver`
- 来源： `eu-reg-853-2004`

##### 基本流

### 过程：饮用水清洗肝（`liver_washing`）

#### 输入

##### 产品流

###### 进入清洗的修整山羊肝（`trimmed_liver_input`）

修整后的整只山羊肝进入专用红内脏清洗线，不得与其他器官或批次混合。

- 选定流： Trimmed whole goat liver
- 流属性/单位： Mass / kg
- 数量规则： measured mass transferred from `liver_trimming`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg washed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_liver_washing`
- 来源： `fao-small-ruminant-slaughter`

###### 肝清洗用饮用水（`liver_washing_potable_water`）

此处仅记录直接施用于肝的饮用水；清洗消毒水和取脏用水仍使用各自独立卡片。

- 选定流：饮用水
- 流属性/单位： Volume / m3
- 数量规则： metered wash-water volume for the liver lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg washed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_liver_washing`
- 来源： `fao-who-cxc-58-2005`; `fao-small-ruminant-slaughter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洗后的整只山羊肝（`washed_goat_liver`）

清洗后的整只山羊肝经沥水和称量后，不延误地转入强制气流冷却。

- 选定流： Washed whole goat liver
- 流属性/单位： Mass / kg
- 数量规则： measured drained liver mass transferred to chilling
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per washing lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_liver_washing`
- 来源： `fao-who-cxc-58-2005`

##### 废物流

###### 送处理的肝清洗废水（`liver_washing_wastewater`）

直接清洗肝产生的废水须单独计量或平衡并送往声明的处理路线；直接排放污染物仅在互斥的清洗消毒—废水门禁下报告。

- 选定流： Liver-washing wastewater for treatment
- 流属性/单位： Volume / m3
- 数量规则： measured wash-water discharge or `wash_water_input - retained_water - documented_loss`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg washed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

##### 基本流

### 过程：R717 制冷强制气流冷却（`forced_air_chilling`）

#### 输入

##### 产品流

###### 进入强制气流冷却的清洗山羊肝（`washed_liver_input`）

清洗后的整肝作为独立批次进入强制气流冷却器，不得与未经冷却的鲜品或冻品路线混合。

- 选定流： Washed whole goat liver
- 流属性/单位： Mass / kg
- 数量规则： measured mass transferred from `liver_washing`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg chilled goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_chilling`
- 来源： `fao-who-cxc-58-2005`; `eu-reg-853-2004`

###### 强制气流冷却用电（`chilling_electricity`）

针对所选冷却设备和批次，记录制冷压缩机、蒸发器风机、控制系统及可归属辅助设备的计量电力。

- 选定流：低压电力
- 流属性/单位： Energy / kWh
- 数量规则： submetered chiller electricity allocated by documented meter interval and lot occupancy
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： per kg chilled goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_chilling`
- 来源： `fao-who-cxc-58-2005`

###### 强制气流冷却补充的 R717 氨（`chilling_r717_makeup`）

加入制冷回路的 R717 氨作为化学物质特定投入记录，不得使用通用制冷剂集合卡。

- 选定流： Ammonia, anhydrous, R717
- 流属性/单位： Mass / kg
- 数量规则： verified R717 additions attributable to the chilling equipment and reporting period
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： per kg chilled goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_refrigerant`
- 来源： `fao-who-cxc-58-2005`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 0–3 °C 冷藏整只山羊肝（`chilled_goat_liver`）

只有产品温度记录证明整批均达到 0–3 °C 后，整只山羊肝才可离开强制气流冷却器。

- 选定流： Chilled whole goat liver
- 流属性/单位： Mass / kg
- 数量规则： measured chilled liver mass accepted by the time-temperature gate
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per chilling lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_chilling`
- 来源： `eu-reg-853-2004`; `fao-who-cxc-58-2005`

##### 废物流

##### 基本流

###### 冷却期间排放到空气的 R717 氨（`chilling_r717_to_air`）

所选冷却系统计算的 R717 损失作为氨排放到空气的基本流报告，并须与制冷剂维护记录闭合。

- 选定流：氨，排入空气
- 流属性/单位： Mass / kg
- 数量规则： `R717_loss = opening_charge + additions - closing_charge - recovered`, allocated to forced-air chilling by equipment and time
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： per kg chilled goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant`
- 来源： `fao-who-cxc-58-2005`

### 过程：PA/PE 真空包装与瓦楞纸箱装箱（`vacuum_packaging`）

#### 输入

##### 产品流

###### 进入包装的冷藏山羊肝（`chilled_liver_input`）

只有通过 0–3 °C 门禁的冷藏整只山羊肝才可进入所声明的真空包装路线。

- 选定流： Chilled whole goat liver
- 流属性/单位： Mass / kg
- 数量规则： measured mass transferred from `forced_air_chilling`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

###### PA/PE 真空袋（`pa_pe_vacuum_pouch`）

食品接触用 PA/PE 袋作为特定初级包装组件称量，并排除在产品净重之外。

- 选定流： Polyamide/polyethylene vacuum pouch
- 流属性/单位： Mass / kg
- 数量规则： issued pouch mass minus returned unused pouch mass for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

###### 纸质产品标签（`paper_label`）

用于包装袋或纸箱的纸质标签须与袋和瓦楞纸箱分开记录。

- 选定流：纸质标签
- 流属性/单位： Mass / kg
- 数量规则： issued label mass minus returned unused label mass for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

###### 瓦楞纸板箱（`corrugated_case`）

瓦楞二级包装箱须独立称量，不得与标签、袋膜或缠绕膜合并。

- 选定流： Corrugated fibreboard case
- 流属性/单位： Mass / kg
- 数量规则： issued corrugated-case mass minus returned unused case mass for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

###### LLDPE 托盘缠绕膜（`lldpe_stretch_film`）

用于稳固托盘的 LLDPE 缠绕膜是独立的三级包装投入，不得与 PA/PE 袋合并。

- 选定流： Linear low-density polyethylene stretch film
- 流属性/单位： Mass / kg
- 数量规则： roll-weight difference attributable to the dispatched lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

###### 真空包装用电（`vacuum_packaging_electricity`）

本包装路线须记录真空泵、热封机、贴标机、纸箱搬运和可归属辅助设备的电力。

- 选定流：低压电力
- 流属性/单位： Energy / kWh
- 数量规则： submetered electricity or documented equipment-time calculation for packaging
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 真空包装冷藏山羊肝（`vacuum_packed_goat_liver`）

内部包装产品输出保持肝净重与各包装组件质量分开，并转入冷藏暂存。

- 选定流： Vacuum-packed chilled goat liver
- 流属性/单位： Mass / kg
- 数量规则： measured net chilled-liver mass; packaging masses excluded and recorded on their own cards
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per packaging lot
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

##### 废物流

###### PA/PE 袋边角料和废袋（`pa_pe_pouch_offcuts`）

PA/PE 边角料和废袋作为一项材料特定废物流称量，不得与纸或瓦楞纸板废物合并。

- 选定流： Waste polyamide/polyethylene packaging film
- 流属性/单位： Mass / kg
- 数量规则： measured PA/PE offcut and rejected-pouch mass for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

###### 废纸标签（`paper_label_waste`）

作为废物处置的废弃或未用纸标签须与所有塑料和纸板废物流分开记录。

- 选定流： Waste paper labels
- 流属性/单位： Mass / kg
- 数量规则： measured rejected-label mass for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

###### 废瓦楞纸板（`corrugated_board_waste`）

破损瓦楞纸箱和纸板边角料作为一项材料特定废物流称量。

- 选定流： Waste corrugated fibreboard
- 流属性/单位： Mass / kg
- 数量规则： measured corrugated-board waste mass for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

###### 废 LLDPE 缠绕膜（`lldpe_film_waste`）

废弃 LLDPE 缠绕膜须与 PA/PE 袋废物及其他包装废物分开记录。

- 选定流： Waste linear low-density polyethylene film
- 流属性/单位： Mass / kg
- 数量规则： measured discarded LLDPE film mass for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg vacuum-packed goat liver
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_packaging`
- 来源： `fao-who-cxc-58-2005`

##### 基本流

### 过程：冷藏暂存与发运（`cold_holding_dispatch`）

#### 输入

##### 产品流

###### 进入冷藏暂存的包装冷藏山羊肝（`packaged_liver_input`）

真空包装冷藏肝在保留批次身份和净重的情况下进入所选冷库。

- 选定流： Vacuum-packed chilled goat liver
- 流属性/单位： Mass / kg
- 数量规则： measured net liver mass transferred from `vacuum_packaging`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_holding`
- 来源： `eu-reg-853-2004`; `fao-who-cxc-58-2005`

###### 冷藏暂存用电（`cold_holding_electricity`）

针对产品占用期间记录冷库压缩机、风机、除霜、控制系统和可归属辅助设备用电。

- 选定流：低压电力
- 流属性/单位： Energy / kWh
- 数量规则： metered cold-room electricity allocated by documented product occupancy and time
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_holding`
- 来源： `fao-who-cxc-58-2005`

###### 冷藏暂存补充的 R717 氨（`cold_holding_r717_makeup`）

归属于冷藏暂存制冷设备的 R717 补充量须与冷却系统补充量分开记录。

- 选定流： Ammonia, anhydrous, R717
- 流属性/单位： Mass / kg
- 数量规则： verified R717 additions attributable to cold holding by equipment and reporting period
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_refrigerant`
- 来源： `fao-who-cxc-58-2005`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏整只山羊肝参考产品（`chilled_goat_liver_reference_product`）

这是唯一参考产品输出：经检验、修整、饮用水清洗的整只山羊肝，采用强制气流冷却、真空包装，并在 0–3 °C 发运。

- 选定流：新鲜、冷藏或冷冻的山羊食用内脏 `378f6bb6-a27a-41ef-890a-2243f652a9fc`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： fixed reference amount of 1,000 kg net chilled goat liver meeting all required qualifiers
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议： `cp_cold_holding`
- 来源： `unsd-cpc3-21156`; `eu-reg-853-2004`

##### 废物流

##### 基本流

###### 冷藏暂存期间排放到空气的 R717 氨（`cold_holding_r717_to_air`）

冷藏暂存设备计算的 R717 损失作为独立的氨排放到空气基本流报告。

- 选定流：氨，排入空气
- 流属性/单位： Mass / kg
- 数量规则： `R717_loss = opening_charge + additions - closing_charge - recovered`, allocated to cold holding by equipment and time
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant`
- 来源： `fao-who-cxc-58-2005`

### 过程：批次可归属清洗消毒与废水处理（`lot_sanitation`）

#### 输入

##### 产品流

###### 设备和表面清洗消毒用饮用水（`sanitation_potable_water`）

可归属于批次的清洗消毒饮用水须与屠宰、取脏和肝清洗用水分开记录。

- 选定流：饮用水
- 流属性/单位： Volume / m3
- 数量规则： metered sanitation water or documented shared-sanitation allocation for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_sanitation`
- 来源： `fao-who-cxc-58-2005`; `fao-small-ruminant-sanitation`

###### 清洗消毒水加热及清洁设备用电（`sanitation_electricity`）

代表性清洗消毒路线以电力驱动水加热、泵和清洁设备，不假设任何未记录的热燃料。

- 选定流：低压电力
- 流属性/单位： Energy / kWh
- 数量规则： submetered sanitation electricity or documented equipment-time calculation for the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_sanitation`
- 来源： `fao-small-ruminant-sanitation`

###### 氢氧化钠清洁剂（`sodium_hydroxide_detergent`）

所声明清洗配方使用的氢氧化钠按活性成分质量作为化学物质特定投入记录。

- 选定流：氢氧化钠
- 流属性/单位： Mass / kg
- 数量规则： issued solution mass multiplied by verified active concentration, less returned unused solution
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_sanitation`
- 来源： `fao-small-ruminant-sanitation`

###### 过氧乙酸消毒剂（`peracetic_acid_sanitizer`）

清洗后使用的过氧乙酸按活性成分质量记录，并与氢氧化钠分开。

- 选定流：过氧乙酸
- 流属性/单位： Mass / kg
- 数量规则： issued sanitizer solution mass multiplied by verified peracetic-acid concentration, less returned unused solution
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_sanitation`
- 来源： `fao-who-cxc-58-2005`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送处理的清洗消毒废水（`sanitation_wastewater_to_treatment`）

清洗消毒废水是送往场内或场外处理的独立废物流；采用该路线时，同一未处理污染物质量不得再作为直接基本流排放报告。

- 选定流： Sanitation wastewater for treatment
- 流属性/单位： Volume / m3
- 数量规则： measured discharge or water balance for the sanitation event attributable to the lot
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

###### 清洗消毒废水筛出的动物组织固体（`screened_animal_tissue_solids`）

筛网截留的肉、脂肪、血块和其他动物组织固体作为特定有机固体废物称量，不计入废水体积。

- 选定流： Screened animal-tissue solids
- 流属性/单位： Mass / kg
- 数量规则： measured wet mass removed from screens and traps for the attributable sanitation event
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

##### 基本流

###### 直接排入水体的化学需氧量（`cod_to_water`）

COD 仅针对实测并直接排入环境的最终出水报告；废水作为送处理服务的废物流离开时不得重复报告。

- 选定流：化学需氧量，排入水体
- 流属性/单位： Mass / kg
- 数量规则： `COD_mass = final_effluent_volume * measured_COD_concentration`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

###### 直接排入水体的五日生化需氧量（`bod5_to_water`）

BOD5 仅在直接排放路线下依据最终出水实测值计算，并与 COD 分开。

- 选定流： Biochemical oxygen demand, 5-day, to water
- 流属性/单位： Mass / kg
- 数量规则： `BOD5_mass = final_effluent_volume * measured_BOD5_concentration`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

###### 直接排入水体的总氮（`total_nitrogen_to_water`）

总氮是直接排放路线下独立的最终出水基本流，不得由 COD 或 BOD5 推断。

- 选定流：总氮，排入水体
- 流属性/单位： Mass / kg
- 数量规则： `TN_mass = final_effluent_volume * measured_TN_concentration`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

###### 直接排入水体的总磷（`total_phosphorus_to_water`）

总磷在直接排放路线下作为独立的最终出水基本流报告。

- 选定流：总磷，排入水体
- 流属性/单位： Mass / kg
- 数量规则： `TP_mass = final_effluent_volume * measured_TP_concentration`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

###### 直接排入水体的总悬浮固体（`total_suspended_solids_to_water`）

筛出固体已单独移除并称量后，TSS 依据实测最终出水浓度计算。

- 选定流：总悬浮固体，排入水体
- 流属性/单位： Mass / kg
- 数量规则： `TSS_mass = final_effluent_volume * measured_TSS_concentration`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准： per 1,000 kg net chilled goat liver at dispatch
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_effluent`
- 来源： `fao-small-ruminant-sanitation`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_possible` | 可分离的宰后操作 | 通过细分将肝特定清洗、冷却、包装、冷藏暂存和直接计量的修整负荷归给肝；不得在胴体和无关组织之间分配这些负荷。 | `lefeon-2020-slaughter-allocation` |
| `allocation_joint_slaughter_base` | 活山羊上游、屠宰、放血和联合取脏负荷 | 使用一种声明的主分配方法及批次特定共产品质量和去向。主结果不得在质量、经济或生物物理分配之间静默切换。 | `lefeon-2020-slaughter-allocation` |
| `allocation_mass_sensitivity` | 联合屠宰输出 | 对联合系统中的全部可销售共产品输出，使用 `AF_liver_mass = M_liver / sum(M_i)` 计算湿重敏感性；排除的废物不获共产品份额，但其处理仍留在系统内。 | `lefeon-2020-slaughter-allocation` |
| `allocation_economic_sensitivity` | 联合屠宰输出 | 使用同期批次或期间特定价格、共同币种和价格基准，按 `AF_liver_economic = (M_liver * P_liver) / sum(M_i * P_i)` 计算经济敏感性；披露零价值和废物去向。 | `lefeon-2020-slaughter-allocation` |
| `allocation_no_lamb_default` | 山羊特定模型 | 羔羊分配因子可用于展示敏感性，但不是山羊默认值。若无山羊特定生物物理数据，应披露证据缺口，不得移植羔羊因子。 | `lefeon-2020-slaughter-allocation` |
| `allocation_sanitation` | 共享清洗消毒和冷库操作 | 优先使用分表计量和事件记录；否则使用设备时间、清洁面积或质量—时间占用等披露的因果驱动量分配共享电力、水、化学品、废水和冷库负荷，并在重要时测试驱动量。 | `fao-who-cxc-58-2005` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_goat_and_slaughter` | `slaughter_bleeding` | live goat, bled body, lot identity | scale_and_slaughter_log | `lot_id; animal_ids; accepted_live_mass_kg; bled_body_mass_kg; slaughter_time; scale_id` | Calibrated scales and linked slaughter log. | kg; timestamp | Every lot | All covered lots in reporting period | Slaughterhouse | Sum accepted masses by lot; preserve animal-to-lot link. | Scale calibration, acceptance records, slaughter log reconciliation. |
| `cp_slaughter_utilities` | `slaughter_bleeding` | slaughter water and electricity | meter_and_equipment_log | `lot_id; water_meter_open_m3; water_meter_close_m3; electricity_meter_open_kWh; electricity_meter_close_kWh; equipment_id; runtime_h` | Dedicated meters or documented equipment-time calculation. | m3; kWh; h | Every lot or meter interval | Representative operation including cleaning boundaries | Slaughter area | Difference meters; allocate only shared intervals with disclosed driver. | Meter IDs, calibration, interval completeness, equipment ratings. |
| `cp_evisceration_liver` | `evisceration_separation` | organ identity, liver and utility records | inspection_scale_and_meter_log | `lot_id; animal_id; carcass_id; inspection_disposition; liver_with_gallbladder_kg; evisceration_water_m3; evisceration_electricity_kWh; transfer_time` | Carcass-organ identity tags, inspection records, calibrated scales and meters. | kg; m3; kWh; timestamp | Every animal and lot | All covered lots | Evisceration and inspection line | Sum only fit goat liver assigned to the selected lot; keep other organ masses separate. | Inspection signature, identity-chain audit, scale and meter checks. |
| `cp_coproduct_mass_destination` | `slaughter_bleeding; evisceration_separation` | individual coproduct and waste destinations | scale_destination_and_price_log | `lot_id; row_id; wet_mass_kg; disposition; destination; invoice_id; price_currency_per_kg; price_basis; price_date` | Calibrated mass records linked to disposition, destination, and invoice or zero-value evidence. | kg; currency/kg; date | Every lot; price by transaction | All covered lots and a representative price period | Slaughterhouse | Aggregate by exact row_id and destination; never combine organs for allocation. | Scale calibration, dispatch notes, invoices, waste manifests. |
| `cp_trimming_liver` | `liver_trimming` | liver input, trimmed liver, gallbladder, condemned liver | scale_and_disposition_log | `lot_id; liver_input_kg; trimmed_liver_kg; gallbladder_bile_kg; condemned_liver_kg; electricity_kWh; disposition; operator; time` | Calibrated before/after scales, disposition records, and electricity meter or equipment-time log. | kg; kWh; timestamp | Every lot | All covered lots | Liver trimming line | Maintain `liver_input_kg = trimmed_liver_kg + gallbladder_bile_kg + condemned_liver_kg + documented_mass_difference_kg`. | Scale calibration, inspection disposition, balance reconciliation. |
| `cp_liver_washing` | `liver_washing` | liver and direct wash-water records | scale_meter_and_temperature_log | `lot_id; trimmed_liver_kg; washed_drained_liver_kg; wash_water_input_m3; wash_water_discharge_m3; water_potability_record; wash_start; wash_end` | Calibrated scales, dedicated water meter, and potability records. | kg; m3; timestamp | Every lot | All covered lots | Dedicated liver-washing line | Sum by lot; keep sanitation water outside the wash-water field. | Potability certificate, meter and scale calibration, lot reconciliation. |
| `cp_chilling` | `forced_air_chilling` | liver mass, electricity, time-temperature path | scale_meter_and_temperature_log | `lot_id; liver_input_kg; liver_output_kg; chiller_id; electricity_kWh; product_temp_start_degC; product_temp_end_degC; temp_points; start_time; end_time; fan_runtime_h` | Calibrated product probes, continuous logger, scales, and chiller submeter. | kg; kWh; °C; timestamp; h | Every lot; continuous temperature | All covered lots and seasonal operating conditions | Selected forced-air chiller | Accept only lots with continuous decrease and all dispatch-bound product at 0–3 °C; sum electricity by meter interval. | Probe calibration, logger completeness, alarm and corrective-action records. |
| `cp_packaging` | `vacuum_packaging` | product and individual packaging components | scale_issue_and_waste_log | `lot_id; net_liver_kg; pa_pe_issued_kg; pa_pe_returned_kg; label_issued_kg; label_returned_kg; corrugated_issued_kg; corrugated_returned_kg; lldpe_roll_open_kg; lldpe_roll_close_kg; each_waste_kg; electricity_kWh; seal_test_result` | Calibrated product scales, material issue/return weights, waste weights, electricity meter, and seal test. | kg; kWh | Every packaging lot | All covered lots | Packaging line | Calculate each material use and waste separately; never include packaging in net liver mass. | Scale calibration, bill of materials, issue/return records, seal integrity tests. |
| `cp_cold_holding` | `cold_holding_dispatch` | product mass, occupancy, electricity, temperature | dispatch_meter_and_logger | `lot_id; net_liver_kg; cold_room_id; entry_time; dispatch_time; mass_time_kg_h; electricity_kWh; product_temp_points_degC; room_temp_points_degC; dispatch_temp_degC` | Dispatch scales, continuous temperature logger, occupancy record, and submeter. | kg; kg*h; kWh; °C; timestamp | Every lot; continuous temperature | Full holding period | Selected cold room | Allocate shared electricity by measured mass-time occupancy unless a better causal submeter exists. | Probe and scale calibration, logger completeness, dispatch record. |
| `cp_refrigerant` | `forced_air_chilling; cold_holding_dispatch` | R717 charge and loss | refrigerant_service_log | `equipment_id; period_start; period_end; opening_charge_kg; additions_kg; closing_charge_kg; recovered_kg; service_event; leak_location; allocation_driver` | Technician-verified inventory and service-cylinder mass records by equipment. | kg; date | Each service event and reporting period | Period covering all reported lots | Selected R717 systems | Apply `R717_loss = opening_charge + additions - closing_charge - recovered`; allocate by equipment and documented causal time. | Service tickets, cylinder weights, inventory reconciliation, leak repair records. |
| `cp_sanitation` | `lot_sanitation` | water, electricity, NaOH and peracetic acid | meter_issue_and_concentration_log | `event_id; lot_ids; cleaned_area_m2; equipment_time_h; water_m3; electricity_kWh; naoh_solution_kg; naoh_fraction; paa_solution_kg; paa_fraction; unused_return_kg` | Event meters, chemical issue/return weights, concentration certificates, and sanitation schedule. | m2; h; m3; kWh; kg; mass fraction | Every sanitation event | Events attributable to covered lots | Slaughter, offal, chilling, packaging and cold-room areas | Attribute event inputs by direct lot record or disclosed cleaned-area/equipment-time driver. | Meter checks, chemical certificate, sanitation completion and verification records. |
| `cp_effluent` | `slaughter_bleeding; liver_washing; lot_sanitation` | wastewater, screened solids, and direct-discharge pollutants | flow_composite_sample_and_waste_log | `stream_id; route; volume_m3; sample_start; sample_end; COD_kg_per_m3; BOD5_kg_per_m3; TN_kg_per_m3; TP_kg_per_m3; TSS_kg_per_m3; screened_solids_kg; treatment_manifest` | Calibrated flow measurement, time- or flow-proportional composite sample, accredited analysis, and waste manifest. | m3; kg/m3; kg; timestamp | Each discharge event or representative composite interval | Full production and sanitation coverage | Final discharge point and each segregated waste stream | Calculate each pollutant mass separately. If route = treatment_service, do not also report untreated direct emissions. | Sampler and flow-meter calibration, laboratory report, chain of custody, manifest reconciliation. |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | All inventory rows | `normalized_amount = attributable_amount / net_chilled_liver_kg * 1000` | `attributable_amount; net_chilled_liver_kg` | amount per 1,000 kg net chilled goat liver |  |
| `calc_trimming_balance` | `liver_trimming` | `documented_mass_difference_kg = liver_input_kg - trimmed_liver_kg - gallbladder_bile_kg - condemned_liver_kg` | `liver_input_kg; trimmed_liver_kg; gallbladder_bile_kg; condemned_liver_kg` | documented mass difference | `fao-small-ruminant-slaughter` |
| `calc_washing_wastewater` | `liver_washing` | `wash_wastewater_m3 = wash_water_input_m3 - retained_water_m3 - documented_loss_m3` | `wash_water_input_m3; retained_water_m3; documented_loss_m3` | liver-washing wastewater volume | `fao-small-ruminant-sanitation` |
| `calc_refrigerant_loss` | R717 systems | `R717_loss = opening_charge + additions - closing_charge - recovered` | `opening_charge_kg; additions_kg; closing_charge_kg; recovered_kg` | R717 emitted to air before equipment/time allocation |  |
| `calc_pollutant_mass` | Direct final effluent | `pollutant_mass = final_effluent_volume * measured_pollutant_concentration` | `final_effluent_volume; measured_pollutant_concentration` | separate COD, BOD5, TN, TP, or TSS mass | `fao-small-ruminant-sanitation` |
| `calc_mass_allocation` | Joint slaughter burdens | `AF_liver_mass = M_liver / sum(M_i)` | wet masses of all marketable coproduct outputs in the joint system | liver wet-mass allocation factor | `lefeon-2020-slaughter-allocation` |
| `calc_economic_allocation` | Joint slaughter burdens | `AF_liver_economic = (M_liver * P_liver) / sum(M_i * P_i)` | coproduct wet masses and contemporaneous prices on one basis | liver economic allocation factor | `lefeon-2020-slaughter-allocation` |
| `calc_cold_room_share` | Shared cold-room electricity | `lot_electricity = interval_electricity * lot_mass_time / sum(all_mass_time)` | `interval_electricity_kWh; lot_mass_time_kg_h; all_mass_time_kg_h` | cold-holding electricity attributable to the lot |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和全部内部肝转移 | 保留山羊物种、肝组织、冷藏状态、屠宰批次、检验期间胴体—组织关联和包装批次。 | 身份标签、检验记录、转移和发运日志。 |
| `dq_mass_balance` | 屠宰和肝加工链 | 闭合活重、放血山羊体、分别计量的共产品和废物、肝投入/输出、不含包装的净产品和记录的质量差。 | 校准秤记录和签署的平衡复核。 |
| `dq_temperature` | 冷却和暂存 | 连续记录必须显示降温路径以及包装转移和发运时 0–3 °C 产品；保留报警和纠正措施。 | 探针校准证书、记录仪原始导出和放行记录。 |
| `dq_temporal` | 公用工程、制冷剂、价格和废水 | 仪表期间、制冷剂期间、价格期间和采样期间必须与生产期间重叠，并披露任何外推。 | 仪表时间戳、维修记录、发票和采样器时间戳。 |
| `dq_completeness` | 原子清单 | 确认每种实际使用的公用工程、材料、化学品、包装组件、制冷剂、共产品、废物、废水流和直接排放均有一张特定卡片或记录为零/不适用的门禁。 | 采购/领用闭合、过程走查、废物和排放联单。 |
| `dq_allocation` | 联合屠宰和共享操作 | 保留复现主分配和敏感性分配结果所需的全部质量、去向、价格、分母和因果驱动量。 | 关联原始质量和价格证据的分配工作簿。 |
| `dq_no_default_quantities` | 全部定量清单 | 不得为山羊肝得率、公用工程需求、包装、制冷剂损失或废水污染物负荷插入未经核验的默认值。缺失前景证据须明确记为证据缺口。 | 数据缺口登记和复核人签署。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 若物种不是山羊、组织不是肝、状态不是冷藏、缺少去胆囊或修整规格、未经单独复核而包装路线不同，或参考产品 UUID 不为 `378f6bb6-a27a-41ef-890a-2243f652a9fc`，则失败。 | `unsd-cpc3-21156` |
| `validate_temperature` | 冷却和发运 | 若最终产品任一记录温度高于 3 °C、发运温度低于 0 °C，或时间—温度记录不完整，则失败。 | `eu-reg-853-2004`; `fao-who-cxc-58-2005` |
| `validate_route_exclusivity` | 产品路线 | 若未经冷却的鲜品、冻品或另一组织路线与本冷藏整肝路线平均，则失败。 | `unsd-cpc3-21156` |
| `validate_inspection_chain` | 取脏和修整 | 若肝在宰后处置期间不能与其胴体关联，或不合格组织进入食用输出，则失败。 | `eu-reg-853-2004`; `fao-small-ruminant-slaughter` |
| `validate_atomic_flows` | 过程清单 | 若实际投入或输出使用 energy、materials、chemicals、fuels、refrigerants、packaging、wastes 或 emissions 等集合卡表示，而非每张卡一个特定交换，则失败。 | `fao-who-cxc-58-2005` |
| `validate_mass_balance` | 肝加工链 | 若无法解释的质量差超过场址记录的秤不确定度且没有纠正记录闭合差异，则失败。 | `fao-small-ruminant-slaughter` |
| `validate_effluent_gate` | 废水清单 | 若同一废水或未处理污染物质量既作为送处理废物流又作为直接基本流排放计数，则失败。 | `fao-small-ruminant-sanitation` |
| `validate_refrigerant` | R717 系统 | 若记录 R717 补充量但没有设备级平衡，或计算损失未计入空气排放，则失败。 | `fao-who-cxc-58-2005` |
| `validate_allocation_sensitivity` | 联合屠宰负荷 | 若联合负荷没有一种声明的主分配以及批次特定湿重和经济敏感性结果，或把羔羊因子作为未披露的山羊默认值，则失败。 | `lefeon-2020-slaughter-allocation` |
| `validate_source_closure` | 证据引用 | 若行或规则使用的 source id 不在第 11 节，或列出的 source id 未使用，则失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 屠宰场发运门处冷藏整只山羊肝的前景生产数据集。 |
| downstream_use | `secondary_dataset`；复核和发布后可作 `background_dataset`。 |
| allowed_use | 用于物种、组织、修整、清洗、冷却、包装、温度、地理、技术和分配背景匹配的冷藏整只山羊肝产品 LCA。 |
| excluded_use | 混合内脏；另一山羊组织；绵羊或其他物种；未经冷却的鲜肝或冻肝；调制或保藏肝；缺少屠宰共产品分配的路线；不在 0–3 °C 发运门内的产品。 |
| required_metadata | PCR id 和版本；CPC 21156；参考 UUID；物种；组织；状态；修整和清洗规格；场址和地理；屠宰和加工期间；冷却设备和制冷剂；时间—温度证据；包装清单；清洗消毒和废水路线；分配方法和敏感性因子；数据缺口。 |
| required_quality_disclosure | 原始记录与计算记录；秤、仪表、记录仪和实验室覆盖；缺失数据和外推；质量平衡闭合；制冷剂闭合；废水路线；共产品去向和价格；分配敏感性；包装从净重中排除。 |
| update_trigger | 组织或状态、屠宰边界、修整或清洗规格、冷却技术或制冷剂、发运温度规格、包装配置、清洗消毒化学品、废水路线、共产品去向或价格结构、分配方法、法规要求或参考流身份发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-21156` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 21156, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | CPC 范围和山羊内脏产品身份。 |
| `fao-who-cxc-58-2005` | `official_guidance` | Codex Alimentarius, CXC 58-2005, Code of Hygienic Practice for Meat, https://www.fao.org/input/download/standards/10196/CXP_058e.pdf (retrieved 2026-08-13) | 卫生过程控制、饮用水、冷却、温度监控、包装、冷链和清洗消毒要求。 |
| `eu-reg-853-2004` | `official_guidance` | Regulation (EC) No 853/2004, consolidated text 2026-01-27, Annex III Section I, https://eur-lex.europa.eu/eli/reg/2004/853/2026-01-27/eng (retrieved 2026-08-13) | 检验期间胴体—组织身份、不适食材料排除、卫生内脏处理和内脏 3 °C 温度上限。 |
| `fao-small-ruminant-slaughter` | `handbook` | FAO, Manual for the slaughter of small ruminants in developing countries, Chapters 6 and 8, https://www.fao.org/4/X6552E/X6552E06.htm and https://www.fao.org/4/X6552E/X6552E08.htm (retrieved 2026-08-13) | 山羊屠宰取脏顺序、肝/胆囊处理、检验身份、红内脏分开清洗和各副产品处理。 |
| `fao-small-ruminant-sanitation` | `handbook` | FAO, Manual for the slaughter of small ruminants in developing countries, Chapter 9, https://www.fao.org/4/X6552E/X6552E09.htm (retrieved 2026-08-13) | 饮用热/冷水、清洗剂、固体和血分离、废水路由、筛分、沉降和除油。 |
| `lefeon-2020-slaughter-allocation` | `literature` | Le Féon, S. et al. (2020), Allocation factors for meat coproducts: Dataset to perform life cycle assessment at slaughterhouse, Data in Brief 33:106558, https://doi.org/10.1016/j.dib.2020.106558; open full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC7718151/; PMID 33304956 (full text verified 2026-08-20) | 明确共产品分配以及湿重、经济和生物物理分配比较的必要性；反对将羔羊因子移作山羊默认值的证据缺口。 |

总调度已用三组山羊肝/小反刍动物路线检索式和一组论文精确标题检索完成 OpenAlex 发现，共筛查 15 条结果记录。路线检索没有获得山羊肝加工清单来源；精确标题检索确认了 `lefeon-2020-slaughter-allocation`，该文只因其 PMC 原文已独立核验而保留。宽泛的屠宰废物、零售资源、绵羊、牛及仅元数据结果均被拒绝，任何摘要或搜索摘要都未用于支撑规则或数值。
