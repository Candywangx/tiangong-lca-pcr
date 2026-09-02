---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-sheep-fresh-chilled-or-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 羊可食用内脏，鲜、冷藏或冷冻

## 1. 范围与适用性

本 PCR 是 CPC 3.0 类 21155 下有意收窄且不作平均的方法实施，仅适用于以冷藏状态在加工厂大门交付的可食用羊肝。固定路线在一体化屠宰场接收活羊，完成屠宰与去内脏、红内脏组合分离、羊肝修整与饮用水清洗，以集中式氨（R717）制冷系统强制风冷，采用 LDPE 薄膜和瓦楞纸板箱包装，并将废水送至场外处理。

鲜羊肝或冻羊肝、以肾/心/舌/肺为参考产品的产品、混合内脏包、山羊内脏、炼制品、熟制品、零售储存、配送及消费者烹调均不在本 PCR 范围内。锁定路线中实际产生的羊心、羊肺和气管是独立共产品，绝不替代羊肝参考产品，也不与其平均。

本 PCR 不规定公用工程、材料、产率、制冷剂损失、废物或污染物的默认量。合规首个数据集必须使用设施记录或下述计算规则。官方资料与文献只支撑过程纳入、卫生、温控、废水表征和分配方法，不能替代前景测量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-sheep-fresh-chilled-or-frozen |
| classification_refs | CPC 3.0:21155，方法范围较该分类叶节点更窄 |
| covered_products | 经宰后检验可食用、强制风冷至 0–3 °C 并在加工厂大门包装交付的羊肝 |
| excluded_products | 其他羊组织；混合内脏；山羊内脏；鲜羊肝；冻羊肝；熟制、腌制或其他加工羊肝；零售或消费阶段产品 |
| representative_product | 包装冷藏羊肝 |
| production_route | 一体化羊屠宰；红内脏分离；羊肝修整；饮用水清洗；R717 强制风冷与冷藏暂存；LDPE 初级包膜；瓦楞纸板次级包装；废水场外处理 |
| market_state | 冷藏、从未冷冻、已包装、加工厂大门交货 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 锁定屠宰及强制风冷路线生产的包装可食用羊肝 |
| How much | 1,000 kg 产品净质量，不含包装 |
| How well | 经宰后检验判定可食；仅羊肝组织；大门交付时核心温度 0–3 °C；包装完整；未冷冻 |
| How long or cycle | 覆盖屠宰、分离、清洗、冷却、包装和清洁消毒完整记录的一个报告期；通常为连续 12 个月 |
| reference_flow_link | `packaged_chilled_sheep_liver` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 包装冷藏羊肝净质量 |
| 参考产品流 | 新鲜、冷藏或冷冻的羊食用内脏 `1f8ad4d0-18e1-4ee6-8006-0d578c5e07eb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species=Ovis aries; tissue=liver; temperature_state=chilled; gate_core_temperature=0–3 °C; freezing_history=never_frozen; slaughter_route=integrated_slaughterhouse; chilling_route=forced_air_R717; wastewater_route=off_site_treatment; packaging=LDPE_film_and_corrugated_fibreboard; net_mass_excludes_packaging=true |

构建前景数据包时，每项必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。天工宽口径流身份不授权跨器官或跨温度状态平均。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | `packaged_chilled_sheep_liver` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 扣除包装皮重后计量羊肝净质量；全部清单归一化至 1,000 kg 产品净质量。 |
| `live_weight_basis` | `live_sheep_input` | Mass | kg live weight | 记录屠宰场接收时经核实的活重，不得以胴体重替代。 |
| `intermediate_mass_consistency` | all liver intermediate rows | Mass | kg | 修整、清洗、冷却和包装各阶段使用同一校准秤基准及批次身份。 |
| `water_volume_conversion` | potable-water and wastewater carrier rows | Volume | m3 | 保留水表读数 m3；若记录质量，则用实测水密度或披露的公认换算关系转换。 |
| `electricity_metering` | grid-electricity rows | Energy | kWh | 使用专用分表的输入有功电量，或有文件依据的设施总表分配量；不得与热能合并。 |
| `purchased_hot_water_metering` | purchased-hot-water rows | Energy | MJ | 记录交付热能；仅计量体积和温度时，以 `calc_hot_water_energy` 计算。 |
| `chemical_solution_mass` | detergent and disinfectant rows | Mass | kg solution | 记录配方溶液质量并另存供应商浓度；不得将活性成分质量当作配方溶液质量报告。 |
| `temperature_compliance` | chilled liver | Temperature | °C | 使用校准核心温度读数；全部放行批次必须处于 0–3 °C 且从未冷冻。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化屠宰场接收大门验收的活羊；上游养殖和入厂运输由可追溯上游数据集提供 |
| starting_condition_role | 承载上游羊生产和入厂运输负担的前景屠宰投入 |
| product_classification_scope | CPC 3.0:21155 背景；本方法限定为冷藏羊肝 |
| recursive_input_rule | 若投入已经是另一设施生产的可食用羊肝，不得重新从活羊路线起算；应关联上游羊肝数据集并披露转移的起始条件，但该路线不属于本锁定 PCR |
| upstream_dataset_requirement | 在物种、生产系统、地理、期间及运输方面具有代表性的活羊供应数据集；不得使用通用羊内脏代理 |
| disclosure | 声明屠宰场、报告期、活羊来源、屠宰与检验制度、器官身份、温度日志、制冷技术、废水去向、包装规格及分配价格基准 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_route_lock` | foreground system | 仅纳入第 1 节声明的一体化冷藏羊肝路线；不得平均不同组织、鲜/冷藏/冷冻状态或互斥的废水与制冷路线。 | `fao-small-ruminant-slaughter-manual`; `eu-ec-853-2004-meat-hygiene` |
| `sb_upstream_scope` | upstream supply | 通过关联至 `live_sheep_input` 的可追溯上游数据集纳入羊养殖与入厂运输；这些上游过程不属于前景测量。 | `fao-who-cxc-58-2005-meat-hygiene` |
| `sb_foreground_scope` | slaughterhouse foreground | 纳入屠宰/去内脏、红内脏分离、羊肝修整、饮用水清洗、强制风冷与冷藏暂存、包装、清洁消毒、废物处理及废水场外转移。 | `fao-who-cxc-58-2005-meat-hygiene`; `fao-slaughter-meat-processing-guidelines`; `fao-small-ruminant-slaughter-manual` |
| `sb_temperature_gate` | product release | 仅放行实测核心温度为 0–3 °C 的羊肝；维持冷链并排除任何冷冻批次。 | `eu-ec-853-2004-meat-hygiene` |
| `sb_wastewater_route` | wastewater | 对锁定的场外处理路线建模：在设施污水管网边界分别记录载体体积和每项污染物负荷；不得同时建立直接基本流排放。 | `ifc-2007-meat-processing-ehs` |
| `sb_exclusions` | downstream stages | 排除工厂大门后的配送、零售、烹调、消费、包装报废及转移边界外的场外废水处理。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `slaughter_evisceration` | 羊屠宰与去内脏 | `required` | 锁定一体化路线始终纳入 | 前景联合生产过程 | 接收活羊 kg 及完整屠宰输出 |
| `liver_separation_trimming` | 红内脏分离与羊肝修整 | `required` | 锁定羊肝路线始终纳入 | 前景器官分离 | 处理红内脏组合 kg |
| `liver_washing` | 饮用水清洗羊肝 | `required` | 锁定路线始终纳入 | 前景清洗 | 修整羊肝投入 kg |
| `air_chilling_cold_holding` | 强制风冷与冷藏暂存 | `required` | 始终纳入；集中式 R717 系统 | 前景温度控制 | 进入冷却的清洗后羊肝 kg 及暂存小时 |
| `primary_packaging` | LDPE 包膜与瓦楞纸板装箱 | `required` | 锁定包装大门产品始终纳入 | 前景包装 | 包装冷藏羊肝净质量 kg |
| `equipment_sanitation` | 路线设备与房间清洁消毒 | `required` | 始终纳入；先用氢氧化钠清洁剂，再用次氯酸钠消毒 | 前景卫生支持 | 清洁消毒事件及 1,000 kg 参考产品 |

### 过程：羊屠宰与去内脏（`slaughter_evisceration`）

#### 输入

##### 产品流

###### 待宰活羊投入（`live_sheep_input`）

跨越屠宰场大门的活羊按经核实的羊种特定活重记录，并关联上游养殖与入厂运输数据集。

- 选定流： Live sheep
- 流属性/单位： Mass / kg live weight
- 数量规则： verified receiving-scale live weight for sheep slaughtered in the reporting period
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_mass_outputs`
- 来源： `fao-who-cxc-58-2005-meat-hygiene`

###### 屠宰与去内脏使用的饮用水（`slaughter_potable_water`）

仅记录屠宰与去内脏作业使用的饮用水；清洁消毒用水归入 `equipment_sanitation`。

- 选定流： 饮用水
- 流属性/单位： Volume / m3
- 数量规则： dedicated meter or documented meter allocation for slaughter and evisceration
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_utilities`
- 来源： `eu-ec-852-2004-food-hygiene`

###### 屠宰与去内脏使用的电网电力（`slaughter_grid_electricity`）

记录屠宰区、去内脏线及其直接相关设备的输入有功电量。

- 选定流： 电网电力
- 流属性/单位： Energy / kWh
- 数量规则： sub-metered electricity or documented allocation from the facility import meter
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_utilities`

###### 屠宰作业使用的外购热水（`slaughter_purchased_hot_water`）

本路线使用集中供应的外购热水提供热服务，不使用现场燃烧。

- 选定流： 外购热水
- 流属性/单位： Energy / MJ
- 数量规则： delivered thermal-energy meter or `calc_hot_water_energy` from foreground records
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_utilities`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整修羊胴体共产品（`dressed_sheep_carcass`）

将可销售整修胴体质量与所有内脏和副产物输出分开记录。

- 选定流： 整修羊胴体
- 流属性/单位： Mass / kg
- 数量规则： calibrated hot- or cold-carcass weight with the weighing state disclosed
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个屠宰报告期及每 1,000 kg 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_mass_outputs`

###### 送往器官分离的红内脏组合（`red_offal_pluck`）

在此转移点，羊肝、羊心、羊肺和气管仍是物理上一体处理的红内脏组合；下一过程再分离各组织。

- 选定流： Sheep red-offal pluck
- 流属性/单位： Mass / kg
- 数量规则： measured pluck mass transferred to `liver_separation_trimming`
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_mass_outputs`
- 来源： `fao-small-ruminant-slaughter-manual`

###### 羊皮共产品（`sheepskin_coproduct`）

单独记录可销售羊皮的质量与去向。

- 选定流： 羊皮
- 流属性/单位： Mass / kg
- 数量规则： measured dispatched sheepskin mass
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个屠宰报告期及每 1,000 kg 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_mass_outputs`

###### 回收羊血共产品（`recovered_sheep_blood`）

仅记录在封闭系统中收集并作为共产品出售或转移的羊血；进入废水的血液由污染物测量反映。

- 选定流： Recovered sheep blood
- 流属性/单位： Mass / kg
- 数量规则： measured collected blood dispatched as co-product
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个屠宰报告期及每 1,000 kg 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_mass_outputs`
- 来源： `fao-small-ruminant-slaughter-manual`

##### 废物流

###### 送往废物管理的胃肠内容物（`paunch_contents_waste`）

按湿质量与实际去向记录移除的胃肠内容物。

- 选定流： Sheep paunch contents waste
- 流属性/单位： Mass / kg
- 数量规则： measured container mass net of tare
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_wastes`
- 来源： `fao-small-ruminant-slaughter-manual`

###### 送往废物管理的不可食屠宰修整物（`inedible_slaughter_trim_waste`）

将屠宰产生的判废或不可食固体组织与胃肠内容物及器官线修整物分开记录。

- 选定流： Inedible sheep slaughter trim waste
- 流属性/单位： Mass / kg
- 数量规则： measured waste-container mass net of tare
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_wastes`

###### 送往场外处理的屠宰废水载体（`slaughter_wastewater_carrier`）

记录场外污水管网转移边界处的液体体积；下列污染物负荷是该载体的组分，不是额外载体质量。

- 选定流： Slaughter wastewater to off-site treatment
- 流属性/单位： Volume / m3
- 数量规则： effluent meter volume assigned to slaughter and evisceration
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slaughter_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 屠宰废水中的 COD（`slaughter_wastewater_cod`）

将化学需氧量作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Chemical oxygen demand in slaughter wastewater
- 流属性/单位： Mass / kg COD
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and COD concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_slaughter_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 屠宰废水中的总氮（`slaughter_wastewater_total_nitrogen`）

将总氮作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total nitrogen in slaughter wastewater
- 流属性/单位： Mass / kg N
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and total-nitrogen concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_slaughter_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 屠宰废水中的总磷（`slaughter_wastewater_total_phosphorus`）

将总磷作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total phosphorus in slaughter wastewater
- 流属性/单位： Mass / kg P
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and total-phosphorus concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_slaughter_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 屠宰废水中的总悬浮固体（`slaughter_wastewater_tss`）

将总悬浮固体作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total suspended solids in slaughter wastewater
- 流属性/单位： Mass / kg TSS
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and TSS concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_slaughter_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 屠宰废水中的油脂（`slaughter_wastewater_oil_grease`）

将油脂作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Oil and grease in slaughter wastewater
- 流属性/单位： Mass / kg
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and oil-and-grease concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_slaughter_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

##### 基本流

### 过程：红内脏分离与羊肝修整（`liver_separation_trimming`）

#### 输入

##### 产品流

###### 从屠宰过程接收的红内脏组合（`red_offal_pluck_input`）

使用 `red_offal_pluck` 报告的同一批次关联组合质量，不重复加入上游负担。

- 选定流： Sheep red-offal pluck
- 流属性/单位： Mass / kg
- 数量规则： batch-linked measured transfer mass equal to `red_offal_pluck`
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_separation_outputs`
- 来源： `fao-small-ruminant-slaughter-manual`

###### 分离与修整使用的电网电力（`separation_grid_electricity`）

记录分配给该生产线的输送机、作业照明与动力修整设备用电。

- 选定流： 电网电力
- 流属性/单位： Energy / kWh
- 数量规则： sub-metered electricity or documented allocation from the facility import meter
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_separation_outputs`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 修整后生羊肝（`trimmed_raw_sheep_liver`）

记录经兽医处置、组织分离和可见缺陷修整后接收的羊肝。

- 选定流： 修整后生羊肝
- 流属性/单位： Mass / kg
- 数量规则： calibrated scale mass after trimming and before washing
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_separation_outputs`
- 来源： `fao-slaughter-meat-processing-guidelines`

###### 羊心共产品（`sheep_heart_coproduct`）

单独记录羊心输出，严禁与羊肝平均。

- 选定流： 可食用羊心
- 流属性/单位： Mass / kg
- 数量规则： measured accepted heart mass and destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每个屠宰报告期及每 1,000 kg 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_separation_outputs`
- 来源： `fao-small-ruminant-slaughter-manual`

###### 羊肺共产品（`sheep_lungs_coproduct`）

单独记录羊肺及其实际食品、饲料或炼制去向。

- 选定流： 羊肺
- 流属性/单位： Mass / kg
- 数量规则： measured lungs mass and destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每个屠宰报告期及每 1,000 kg 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_separation_outputs`
- 来源： `fao-small-ruminant-slaughter-manual`

###### 羊气管共产品（`sheep_trachea_coproduct`）

单独记录气管及其实际去向。

- 选定流： 羊气管
- 流属性/单位： Mass / kg
- 数量规则： measured trachea mass and destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每个屠宰报告期及每 1,000 kg 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_separation_outputs`

##### 废物流

###### 不可食羊肝修整物（`inedible_liver_trim`）

将移除的血管、结缔组织及其他不可销售羊肝修整物与整肝拒收分开记录。

- 选定流： Inedible sheep liver trim waste
- 流属性/单位： Mass / kg
- 数量规则： measured trim-container mass net of tare
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_separation_outputs`

###### 拒收羊肝（`rejected_sheep_liver`）

将宰后处置后整只或部分拒收的羊肝与常规修整物分开记录。

- 选定流： Rejected sheep liver waste
- 流属性/单位： Mass / kg
- 数量规则： measured rejected-liver mass and recorded disposition reason
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_separation_outputs`
- 来源： `fao-who-cxc-58-2005-meat-hygiene`

##### 基本流

### 过程：饮用水清洗羊肝（`liver_washing`）

#### 输入

##### 产品流

###### 进入清洗的修整羊肝（`trimmed_liver_washing_input`）

使用与 `trimmed_raw_sheep_liver` 相同的批次关联质量。

- 选定流： 修整后生羊肝
- 流属性/单位： Mass / kg
- 数量规则： batch-linked measured transfer mass equal to `trimmed_raw_sheep_liver`
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_washing_mass_water`

###### 清洗用饮用水（`washing_potable_water`）

只使用饮用水，并记录服务于羊肝清洗线的水表。

- 选定流： 饮用水
- 流属性/单位： Volume / m3
- 数量规则： dedicated washing-line meter volume
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_washing_mass_water`
- 来源： `eu-ec-852-2004-food-hygiene`; `fao-small-ruminant-slaughter-manual`

###### 羊肝清洗使用的电网电力（`washing_grid_electricity`）

记录专用清洗泵和生产线设备用电。

- 选定流： 电网电力
- 流属性/单位： Energy / kWh
- 数量规则： sub-metered electricity or documented allocation from the facility import meter
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_washing_mass_water`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洗后羊肝（`washed_sheep_liver`）

记录饮用水清洗后、冷却前，按声明沥水时间得到的羊肝质量。

- 选定流： 清洗后生羊肝
- 流属性/单位： Mass / kg
- 数量规则： calibrated drained-product mass after the declared drip time
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_washing_mass_water`

##### 废物流

###### 送往场外处理的清洗废水载体（`washing_wastewater_carrier`）

记录污水转移边界处的清洗废水体积；各组分负荷在独立卡片中报告。

- 选定流： Liver-washing wastewater to off-site treatment
- 流属性/单位： Volume / m3
- 数量规则： dedicated effluent meter or validated water-balance volume
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_washing_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洗废水中的 COD（`washing_wastewater_cod`）

将化学需氧量作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Chemical oxygen demand in liver-washing wastewater
- 流属性/单位： Mass / kg COD
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and COD concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_washing_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洗废水中的总氮（`washing_wastewater_total_nitrogen`）

将总氮作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total nitrogen in liver-washing wastewater
- 流属性/单位： Mass / kg N
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and total-nitrogen concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_washing_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洗废水中的总磷（`washing_wastewater_total_phosphorus`）

将总磷作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total phosphorus in liver-washing wastewater
- 流属性/单位： Mass / kg P
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and total-phosphorus concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_washing_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洗废水中的总悬浮固体（`washing_wastewater_tss`）

将总悬浮固体作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total suspended solids in liver-washing wastewater
- 流属性/单位： Mass / kg TSS
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and TSS concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_washing_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洗废水中的油脂（`washing_wastewater_oil_grease`）

将油脂作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Oil and grease in liver-washing wastewater
- 流属性/单位： Mass / kg
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and oil-and-grease concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_washing_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

##### 基本流

### 过程：强制风冷与冷藏暂存（`air_chilling_cold_holding`）

#### 输入

##### 产品流

###### 进入冷却的清洗后羊肝（`washed_liver_chilling_input`）

使用与 `washed_sheep_liver` 相同的批次关联质量。

- 选定流： 清洗后生羊肝
- 流属性/单位： Mass / kg
- 数量规则： batch-linked measured transfer mass equal to `washed_sheep_liver`
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_energy_temperature`

###### 冷却与冷藏暂存使用的电网电力（`chilling_grid_electricity`）

记录压缩机、风机、泵及分配的冷藏暂存用电，不包括其他设施制冷负荷。

- 选定流： 电网电力
- 流属性/单位： Energy / kWh
- 数量规则： refrigeration sub-meter energy allocated by measured liver chamber load and holding time
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_energy_temperature`

###### 氨制冷剂补充量（`ammonia_refrigerant_replenishment`）

锁定的集中制冷系统使用无水氨（R717）；依据年度制冷剂平衡记录归属于本产品路线的补充量。

- 选定流： Anhydrous ammonia refrigerant (R717)
- 流属性/单位： Mass / kg
- 数量规则： `calc_refrigerant_loss` allocated by metered refrigeration electricity share
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_inventory`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏羊肝（`chilled_sheep_liver`）

记录强制风冷后、包装前的批次质量和核心温度读数。

- 选定流： 冷藏羊肝
- 流属性/单位： Mass / kg
- 数量规则： calibrated mass of lots meeting 0–3 °C core-temperature and never-frozen criteria
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_energy_temperature`
- 来源： `eu-ec-853-2004-meat-hygiene`; `fao-meat-cold-store-manual`

##### 废物流

##### 基本流

###### 排放至空气的氨制冷剂（`ammonia_refrigerant_to_air`）

按补充投入相同的封闭制冷剂库存计算 R717 损失；不得使用集合式制冷剂卡。

- 选定流： Ammonia to air from R717 refrigeration leakage
- 流属性/单位： Mass / kg NH3
- 数量规则： `calc_refrigerant_loss` allocated by metered refrigeration electricity share
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_inventory`

### 过程：LDPE 包膜与瓦楞纸板装箱（`primary_packaging`）

#### 输入

##### 产品流

###### 进入包装的冷藏羊肝（`chilled_liver_packaging_input`）

使用与 `chilled_sheep_liver` 相同的合格批次质量。

- 选定流： 冷藏羊肝
- 流属性/单位： Mass / kg
- 数量规则： batch-linked measured transfer mass equal to `chilled_sheep_liver`
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_materials`

###### LDPE 初级包装薄膜（`ldpe_film_input`）

记录扣除退回未用库存后的低密度聚乙烯薄膜，不得与纸板合并。

- 选定流： 低密度聚乙烯薄膜
- 流属性/单位： Mass / kg
- 数量规则： opening inventory plus receipts minus closing inventory minus separately measured trim waste
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_materials`
- 来源： `eu-ec-852-2004-food-hygiene`

###### 瓦楞纸板次级包装箱（`corrugated_fibreboard_input`）

将瓦楞纸板包装箱质量与 LDPE 薄膜分开记录。

- 选定流： 瓦楞纸板
- 流属性/单位： Mass / kg
- 数量规则： opening inventory plus receipts minus closing inventory minus separately measured trim waste
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_materials`
- 来源： `eu-ec-852-2004-food-hygiene`

###### 包装使用的电网电力（`packaging_grid_electricity`）

记录封口、贴标和纸箱搬运用电。

- 选定流： 电网电力
- 流属性/单位： Energy / kWh
- 数量规则： packaging-line sub-meter or documented equipment-runtime calculation
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装冷藏羊肝（`packaged_chilled_sheep_liver`）

这是唯一参考产品行；1,000 kg 为不含 LDPE 与纸板皮重的羊肝净质量。

- 选定流：新鲜、冷藏或冷冻的羊食用内脏 `1f8ad4d0-18e1-4ee6-8006-0d578c5e07eb`
- 流属性/单位： Mass / kg
- 数量规则： 1,000 kg net packaged chilled sheep liver
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 1,000 kg 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 身份参考 (`identity_reference`)

##### 废物流

###### LDPE 包装修边废物（`ldpe_trim_waste`）

将 LDPE 薄膜修边和拒收薄膜与纸板废物分开记录。

- 选定流： Low-density polyethylene packaging trim waste
- 流属性/单位： Mass / kg
- 数量规则： measured waste-bin mass net of tare
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_waste`

###### 瓦楞纸板修边废物（`corrugated_fibreboard_trim_waste`）

将破损纸箱和纸板修边与 LDPE 废物分开记录。

- 选定流： Corrugated-fibreboard packaging waste
- 流属性/单位： Mass / kg
- 数量规则： measured waste-bin mass net of tare
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_waste`

##### 基本流

### 过程：路线设备与房间清洁消毒（`equipment_sanitation`）

#### 输入

##### 产品流

###### 清洁消毒用饮用水（`sanitation_potable_water`）

记录整个前景路线清洗和最终漂洗使用的冷饮用水。

- 选定流： 饮用水
- 流属性/单位： Volume / m3
- 数量规则： sanitation meter volume or event-level measured volume
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sanitation_inputs`
- 来源： `eu-ec-852-2004-food-hygiene`

###### 清洁消毒用外购热水（`sanitation_purchased_hot_water`）

将外购热水热能与冷水、电力分开记录。

- 选定流： 外购热水
- 流属性/单位： Energy / MJ
- 数量规则： delivered thermal-energy meter or `calc_hot_water_energy` from event records
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sanitation_inputs`
- 来源： `fao-slaughter-meat-processing-guidelines`

###### 清洁消毒使用的电网电力（`sanitation_grid_electricity`）

记录清洁消毒泵、泡沫设备及相关设备用电。

- 选定流： 电网电力
- 流属性/单位： Energy / kWh
- 数量规则： sanitation sub-meter or documented equipment-runtime calculation
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sanitation_inputs`

###### 氢氧化钠碱性清洁剂（`sodium_hydroxide_detergent`）

锁定路线使用一种氢氧化钠配方碱性清洁剂；分别记录溶液质量与浓度。

- 选定流： Sodium-hydroxide-based alkaline detergent solution
- 流属性/单位： Mass / kg solution
- 数量规则： purchase and issue records reconciled to sanitation events
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sanitation_inputs`
- 来源： `eu-ec-852-2004-food-hygiene`

###### 次氯酸钠消毒剂（`sodium_hypochlorite_disinfectant`）

锁定路线在清洗后使用一种次氯酸钠配方溶液；分别记录溶液质量与有效氯浓度。

- 选定流： Sodium hypochlorite disinfectant solution
- 流属性/单位： Mass / kg solution
- 数量规则： purchase and issue records reconciled to sanitation events
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sanitation_inputs`
- 来源： `eu-ec-852-2004-food-hygiene`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往场外处理的清洁消毒废水载体（`sanitation_wastewater_carrier`）

记录污水转移边界处的清洁消毒废水体积；各污染物负荷为独立卡片。

- 选定流： Sanitation wastewater to off-site treatment
- 流属性/单位： Volume / m3
- 数量规则： dedicated effluent meter or validated water-balance volume
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sanitation_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洁消毒废水中的 COD（`sanitation_wastewater_cod`）

将化学需氧量作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Chemical oxygen demand in sanitation wastewater
- 流属性/单位： Mass / kg COD
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and COD concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_sanitation_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洁消毒废水中的总氮（`sanitation_wastewater_total_nitrogen`）

将总氮作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total nitrogen in sanitation wastewater
- 流属性/单位： Mass / kg N
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and total-nitrogen concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_sanitation_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洁消毒废水中的总磷（`sanitation_wastewater_total_phosphorus`）

将总磷作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total phosphorus in sanitation wastewater
- 流属性/单位： Mass / kg P
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and total-phosphorus concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_sanitation_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洁消毒废水中的总悬浮固体（`sanitation_wastewater_tss`）

将总悬浮固体作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Total suspended solids in sanitation wastewater
- 流属性/单位： Mass / kg TSS
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and TSS concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_sanitation_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洁消毒废水中的油脂（`sanitation_wastewater_oil_grease`）

将油脂作为转移至场外废水中的独立污染物负荷记录。

- 选定流： Oil and grease in sanitation wastewater
- 流属性/单位： Mass / kg
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and oil-and-grease concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_sanitation_wastewater`
- 来源： `ifc-2007-meat-processing-ehs`

###### 清洁消毒废水中的总余氯（`sanitation_wastewater_residual_chlorine`）

因锁定路线使用次氯酸钠，故单独记录总余氯负荷。

- 选定流： Total residual chlorine in sanitation wastewater
- 流属性/单位： Mass / kg as Cl2
- 数量规则： `calc_wastewater_pollutant_load` using matched volume and total-residual-chlorine concentration records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 包装冷藏羊肝
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_sanitation_wastewater`
- 来源： `us-epa-2004-meat-effluent-development`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_direct_operations` | `liver_washing`; `air_chilling_cold_holding`; `primary_packaging` | 将可计量的分离后羊肝作业直接归属于羊肝，不得将其负担摊薄至胴体、羊皮或其他器官。 | `bamber-et-al-2026-allocation-review` |
| `alloc_joint_block_definition` | `slaughter_evisceration`; `liver_separation_trimming` | 共享投入无法细分时，将屠宰至器官分离完成视为一个联合生产块；分别保留胴体、羊肝、羊心、羊肺、气管、羊皮和回收羊血的实测质量与去向。 | `le-feon-2020-meat-coproduct-allocation` |
| `alloc_primary_economic` | joint-production block | 使用共同分离大门处每项可销售输出同期的出厂净收入执行 `calc_economic_allocation`。废物及依法判废材料不分得共产品份额，其处理负担留在联合块内。 | `eu-pef-2013-allocation-hierarchy`; `le-feon-2020-meat-coproduct-allocation` |
| `alloc_price_evidence` | co-product price ledger | 对同一报告期、币种和大门使用发票净价及可销售质量；披露零价格、内部转移和缺失价格的处理。不得以其他器官价格推断羊肝价格。 | `eu-pef-2013-allocation-hierarchy` |
| `alloc_economic_sensitivity` | liver allocation result | 以报告期内每个实测月度净价重算羊肝份额，并报告最小值、最大值和质量加权基准结果；不足 12 个月时报告全部观测月份及证据缺口，不得编造价格。 | `le-feon-2020-meat-coproduct-allocation`; `bamber-et-al-2026-allocation-review` |
| `alloc_method_sensitivity` | liver allocation result | 另报告可销售输出间的质量分配；仅当组织生长数据充分时报告生物物理分配。两者均为敏感性情景，不得与主要经济分配结果合并。 | `le-feon-2020-meat-coproduct-allocation`; `bamber-et-al-2026-allocation-review` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_slaughter_mass_outputs` | `slaughter_evisceration` | live sheep and joint-product masses | receiving, scale and dispatch records | batch_id; slaughter_date; live_weight_kg; carcass_mass_kg; pluck_mass_kg; sheepskin_mass_kg; recovered_blood_mass_kg; scale_id; weighing_state | calibrated scales linked by slaughter batch | kg | every slaughter batch | 完整报告期 | target slaughterhouse | sum each atomic output by row_id; preserve batch links | calibration certificates; receiving tickets; dispatch records; reconciliation sign-off |
| `cp_slaughter_utilities` | `slaughter_evisceration` | water, electricity and purchased hot water | meter records | timestamp; meter_id; potable_water_m3; grid_electricity_kWh; hot_water_energy_MJ; hot_water_volume_m3; supply_temperature_C; return_temperature_C; allocation_driver | dedicated meters; documented meter allocation only when no sub-meter exists | m3; kWh; MJ; °C | 每日或更高频 | 完整报告期 | slaughter and evisceration line | sum readings by utility; subtract verified non-route loads | meter calibration; invoices; allocation worksheet |
| `cp_slaughter_wastes` | `slaughter_evisceration` | paunch contents and inedible trim | waste container and consignment records | date; batch_id; waste_row_id; gross_mass_kg; tare_mass_kg; destination; manifest_id | calibrated container scale and waste consignment record | kg | every consignment | 完整报告期 | slaughter floor | sum net mass separately by row_id and destination | scale checks; waste manifests; contractor receipts |
| `cp_slaughter_wastewater` | `slaughter_evisceration` | wastewater carrier and pollutant loads | flow meter and laboratory records | sample_id; start_time; end_time; wastewater_volume_m3; COD_mg_L; TN_mg_L; TP_mg_L; TSS_mg_L; oil_grease_mg_L; laboratory_method; sewer_destination | flow-proportional composite sampling matched to effluent volume | m3; mg/L | representative composite per production day or permit frequency, whichever is stricter | 完整报告期 | slaughter wastewater substream before sewer mixing | calculate each pollutant with `calc_wastewater_pollutant_load`; volume-weight across samples | accredited laboratory reports; meter calibration; chain of custody |
| `cp_separation_outputs` | `liver_separation_trimming` | pluck input, tissue outputs, trim, rejection and electricity | batch scale, disposition and meter records | batch_id; pluck_input_kg; trimmed_liver_kg; heart_kg; lungs_kg; trachea_kg; inedible_trim_kg; rejected_liver_kg; rejection_reason; destination; electricity_kWh | calibrated scales, veterinary disposition records and sub-meter | kg; kWh | 每批次; electricity 每日或更高频 | 完整报告期 | red-offal separation line | sum each atomic row_id; reconcile tissue outputs and wastes to pluck input | scale calibration; inspection record; signed mass-balance review |
| `cp_washing_mass_water` | `liver_washing` | liver mass, potable water and electricity | batch scale and meter records | batch_id; trimmed_liver_input_kg; washed_liver_drained_kg; drip_time_min; potable_water_m3; electricity_kWh; meter_id | calibrated scales and dedicated meters | kg; min; m3; kWh | 每批次; meters 每日或更高频 | 完整报告期 | liver washing line | sum by row_id; preserve batch transfer equality | calibration records; potable-water compliance record; batch sheet |
| `cp_washing_wastewater` | `liver_washing` | washing wastewater and pollutant loads | flow meter and laboratory records | sample_id; start_time; end_time; wastewater_volume_m3; COD_mg_L; TN_mg_L; TP_mg_L; TSS_mg_L; oil_grease_mg_L; laboratory_method; sewer_destination | flow-proportional composite sampling matched to washing volume | m3; mg/L | representative composite per production day or permit frequency, whichever is stricter | 完整报告期 | liver washing substream before sewer mixing | calculate each pollutant with `calc_wastewater_pollutant_load`; volume-weight across samples | accredited laboratory reports; meter calibration; chain of custody |
| `cp_chilling_energy_temperature` | `air_chilling_cold_holding` | liver mass, electricity, temperature and holding time | batch, sub-meter and temperature logger records | lot_id; washed_liver_input_kg; chilled_liver_output_kg; chamber_id; entry_time; release_time; holding_hours; core_temperature_C; air_temperature_C; electricity_kWh; freezing_deviation | calibrated core probes, continuous air logger and refrigeration sub-meter | kg; h; °C; kWh | 每批产品; continuous temperature | 完整报告期 | R717 liver chilling chamber | accept only lots with all release core readings 0–3 °C and no freezing; sum route electricity | probe calibration; logger audit trail; sub-meter calibration; deviation log |
| `cp_refrigerant_inventory` | `air_chilling_cold_holding` | R717 replenishment and air loss | refrigerant inventory and service records | period_start; opening_charge_kg; purchases_kg; transfers_in_kg; closing_charge_kg; recovered_kg; returned_kg; transfers_out_kg; service_event; total_refrigeration_kWh; liver_route_refrigeration_kWh | closed annual refrigerant mass balance reconciled to service invoices | kg; kWh | 每次维保事件及年度结算 | 与产品数据集相同的报告期 | central R717 system and liver-route allocation | calculate total loss with `calc_refrigerant_loss`; allocate by metered refrigeration electricity share | technician records; purchase invoices; recovery receipts; signed balance |
| `cp_packaging_materials` | `primary_packaging` | chilled liver, LDPE and fibreboard | batch and material inventory records | lot_id; chilled_liver_input_kg; packaged_net_liver_kg; material_row_id; opening_stock_kg; receipts_kg; closing_stock_kg; returned_stock_kg; trim_waste_kg | calibrated product scale and material inventory reconciliation | kg | 每批产品; material inventory monthly | 完整报告期 | liver packaging line | calculate consumption separately by material row_id; exclude packaging tare from reference mass | scale calibration; purchase invoices; stock count; reconciliation worksheet |
| `cp_packaging_energy` | `primary_packaging` | packaging electricity | meter or equipment-runtime records | date; meter_id; electricity_kWh; equipment_id; rated_power_kW; runtime_h; allocation_driver | line sub-meter; runtime calculation only if sub-meter unavailable | kWh; kW; h | 每日或更高频 | 完整报告期 | liver packaging line | sum sub-meter; otherwise sum rated_power_kW * runtime_h with disclosed load factor from measured evidence | meter check; equipment log; calculation review |
| `cp_packaging_waste` | `primary_packaging` | LDPE and fibreboard waste | waste-bin and consignment records | date; waste_row_id; gross_mass_kg; tare_mass_kg; destination; manifest_id | dedicated labelled bins and calibrated scale | kg | every waste removal | 完整报告期 | liver packaging line | sum net mass separately by material row_id | scale check; waste manifest; bin labelling audit |
| `cp_sanitation_inputs` | `equipment_sanitation` | water, hot water, electricity, detergent and disinfectant | sanitation event, meter and chemical issue records | event_id; start_time; end_time; potable_water_m3; hot_water_energy_MJ; hot_water_volume_m3; supply_temperature_C; return_temperature_C; electricity_kWh; detergent_solution_kg; detergent_NaOH_mass_fraction; hypochlorite_solution_kg; available_chlorine_mass_fraction; covered_area | event-level meters and reconciled chemical issue records | m3; MJ; °C; kWh; kg solution; mass fraction | 每次清洁消毒事件 | 完整报告期 | all route equipment and rooms | sum each atomic input; retain concentration and covered-area evidence | sanitation log; meter calibration; supplier certificate; stock reconciliation |
| `cp_sanitation_wastewater` | `equipment_sanitation` | sanitation wastewater and pollutant loads | flow meter and laboratory records | sample_id; start_time; end_time; wastewater_volume_m3; COD_mg_L; TN_mg_L; TP_mg_L; TSS_mg_L; oil_grease_mg_L; residual_chlorine_mg_L; laboratory_method; sewer_destination | flow-proportional composite sampling matched to sanitation volume; grab sample for residual chlorine when method requires | m3; mg/L | representative sample per sanitation regime and permit frequency, whichever is stricter | 完整报告期 | sanitation substream before sewer mixing | calculate each pollutant with `calc_wastewater_pollutant_load`; volume-weight across samples | accredited laboratory reports; meter calibration; chain of custody |
| `cp_coproduct_prices` | `slaughter_evisceration` | economic allocation evidence | sales invoice and internal transfer ledger | month; product_row_id; saleable_mass_kg; gross_revenue; rebates; transport_after_gate; net_exworks_revenue; currency; exchange_rate; invoice_id; zero_price_reason | invoice reconciliation at common separation gate; no cross-organ price proxy | kg; currency | 每笔销售; 每月结账 | same reporting period, normally 12 consecutive months | all marketable outputs of the joint-production block | mass-weighted net price by product_row_id; preserve every observed monthly price for sensitivity | invoices; audited ledger; exchange-rate source; signed zero-price review |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory rows | normalized_amount = period_amount / packaged_net_liver_kg * 1000 | period_amount; packaged_net_liver_kg | amount per 1,000 kg 参考产品 |  |
| `calc_hot_water_energy` | purchased hot water | hot_water_energy_MJ = water_mass_kg * specific_heat_MJ_per_kgK * (supply_temperature_C - return_temperature_C) | hot_water_volume_m3; measured density; supply_temperature_C; return_temperature_C; accepted specific heat | MJ delivered thermal energy |  |
| `calc_wastewater_pollutant_load` | each wastewater pollutant row | pollutant_load_kg = wastewater_volume_m3 * concentration_mg_L / 1000 | matched wastewater_volume_m3; pollutant-specific concentration_mg_L | kg pollutant transferred to off-site treatment | `ifc-2007-meat-processing-ehs` |
| `calc_refrigerant_loss` | R717 input and air output | refrigerant_loss_kg = opening_charge_kg + purchases_kg + transfers_in_kg - closing_charge_kg - recovered_kg - returned_kg - transfers_out_kg; liver_route_loss_kg = refrigerant_loss_kg * liver_route_refrigeration_kWh / total_refrigeration_kWh | closed refrigerant inventory; liver-route and total refrigeration electricity | kg R717 replenishment and kg NH3 to air assigned to liver route |  |
| `calc_joint_mass_balance` | slaughter and separation joint block | mass_balance_gap_kg = live_weight_kg - sum(all measured product and waste output masses) - measured_evaporation_or_untracked_liquid_kg | every atomic mass output; live_weight_kg; disclosed untracked liquid or evaporation term | kg and percent mass-balance gap |  |
| `calc_liver_yield` | liver route | liver_yield = packaged_net_liver_kg / live_weight_kg | packaged_net_liver_kg; live_weight_kg | kg packaged chilled liver per kg live sheep |  |
| `calc_economic_allocation` | joint-production block | AF_i = max(net_exworks_revenue_i, 0) / sum_j(max(net_exworks_revenue_j, 0)); net_exworks_revenue_i = saleable_mass_i * net_exworks_price_i | saleable mass and contemporaneous net ex-works price for each marketable product_row_id | allocation fraction for each marketable output | `eu-pef-2013-allocation-hierarchy`; `le-feon-2020-meat-coproduct-allocation` |
| `calc_liver_joint_burden` | chilled sheep liver | liver_joint_burden = AF_liver * total_joint_block_burden; add direct post-separation liver burdens without allocation | AF_liver; joint block inventory and impacts; direct liver operations | allocated upstream and slaughter burden plus direct liver burden | `le-feon-2020-meat-coproduct-allocation` |
| `calc_economic_sensitivity` | liver allocation | recompute AF_liver for each observed monthly price vector; report base mass-weighted AF_liver, minimum AF_liver and maximum AF_liver with the associated month and price vector | monthly `cp_coproduct_prices` records | reproducible economic-allocation sensitivity interval | `le-feon-2020-meat-coproduct-allocation`; `bamber-et-al-2026-allocation-review` |
| `calc_mass_allocation_sensitivity` | joint-production block | mass_AF_i = saleable_mass_i / sum_j(saleable_mass_j) for the same marketable-output set | saleable mass by product_row_id | mass-allocation sensitivity result | `le-feon-2020-meat-coproduct-allocation` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | full dataset | 数据集元数据必须声明羊肝、冷藏 0–3 °C、从未冷冻、R717 强制风冷、LDPE 加纸板包装及废水场外处理。 | 批次规格；过程图；签署的路线声明 |
| `dq_temporal_match` | all records | 产品、公用工程、废物、废水、制冷剂库存及价格证据必须覆盖同一报告期；披露任何有正当理由的缺口。 | 日期范围核对 |
| `dq_mass_traceability` | slaughter through packaging | 所有羊肝中间行均须保留批次或批号关联，并按原子 row_id 核对全部联合输出。 | 批次台账；`calc_joint_mass_balance` 复核 |
| `dq_meter_quality` | utilities and wastewater | 使用校准计量表；仅在指定计量表不可用时披露估算，并保留分配工作表。 | 校准证书；计量表登记；工作表 |
| `dq_temperature_quality` | chilled liver | 使用校准核心探针和连续库温日志，保留每次偏差及处置。 | 记录仪文件；探针证书；放行记录 |
| `dq_water_hygiene` | washing and sanitation | 饮用水状态及清洗/消毒记录必须在报告期内有效。 | 饮用水证明；清洁消毒验证 |
| `dq_pollutant_sampling` | wastewater | 浓度样品须与体积和运行工况匹配；不得把许可限值当作实测浓度。 | 样品交接链；认可实验室报告；采样计划 |
| `dq_price_audit` | allocation | 价格必须器官特定、同期、出厂净值且与发票核对；保留敏感性分析所用全部月份。 | 发票台账；月度价格向量；审计签署 |
| `dq_no_default_amounts` | all non-reference rows | 缺失数量继续作为明确证据缺口，不得以通用 PCR 默认值填补。 | 以 row_id 为键的完整性登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | 要求精确天工 UUID、Mass 属性 UUID、1,000 kg 净数量及全部必需限定信息。 |  |
| `val_single_tissue_state` | product identity | 拒绝器官平均、混合内脏参考产品、鲜羊肝、冻羊肝或任何有冷冻历史的批次。 |  |
| `val_process_completion` | process map | 要求按声明顺序具备全部六个过程，且每个 process_id 均有详细章节。 |  |
| `val_atomic_rows` | process inventory | 每种实际材料、公用工程、化学品、制冷剂、包装材料、共产品、废物、废水污染物和空气排放均须一流一卡；拒绝 energy、materials、chemicals、packaging、wastes 或 emissions 等集合卡。 |  |
| `val_uuid_policy` | flow identity | Permit a flow UUID only on `packaged_chilled_sheep_liver`; require every other atomic flow UUID to remain blank pending separate reviewed identity selection. |  |
| `val_transfer_equality` | intermediate liver and pluck rows | 每个相邻过程转移点的批次关联输出/投入必须相等；差异必须表现为具名产品或废物流，不得作为隐含损失。 |  |
| `val_mass_balance` | joint-production block | 计算并披露质量平衡差及每个纳入项；存在无法解释的差异时，完整性判为不确定。 |  |
| `val_temperature` | product release | 拒绝无校准核心读数或任何放行读数低于 0 °C、超过 3 °C 的批次；保留产品从未冷冻的证据。 | `eu-ec-853-2004-meat-hygiene` |
| `val_refrigerant_balance` | R717 system | 要求封闭库存；分配的 R717 补充投入与氨至空气损失必须相等，除非有文件记录的回收、退回或转移项解释差异。 |  |
| `val_wastewater_no_double_count` | wastewater | 载体体积和每项污染物负荷必须分行；因废水送往场外，拒绝对同一负荷同时建立直接入水基本流。 | `ifc-2007-meat-processing-ehs` |
| `val_allocation_ledger` | joint-production block | 要求胴体、羊肝、羊心、羊肺、气管、羊皮和回收羊血的质量、去向和价格记录，并明确处理零价格与废物输出。 | `le-feon-2020-meat-coproduct-allocation` |
| `val_allocation_sensitivity` | liver burden | 要求可复算的月度经济敏感性和质量分配敏感性；不接受无文件依据的单一经济份额。 | `le-feon-2020-meat-coproduct-allocation`; `bamber-et-al-2026-allocation-review` |
| `val_foreground_amounts` | non-reference amounts | 要求 `foreground_record` 或 `calculated_value`、对应采集协议及报告期证据；拒绝无来源的通用默认值。 |  |
| `val_bilingual_structure` | PCR source | en-US 与 zh-CN 中 process_id、row_id、受控 token、公式、数值、UUID、URL、source_id 和 collection-protocol 字段序列必须同序同值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`; eligible as `background_dataset` only after independent methodology and data-quality review |
| downstream_use | Foreground data packages and downstream `process` or `lifecyclemodel` projections for packaged chilled sheep liver at the processing-facility gate |
| allowed_use | 物种、组织、冷藏状态、一体化屠宰路线、制冷、包装、废水边界、地理和期间经证明具有代表性的研究 |
| excluded_use | 其他器官；混合内脏；鲜或冻羊肝；山羊内脏；熟制品；零售或消费阶段；未经适配而采用实质不同制冷或废水路线的设施 |
| required_metadata | 全部必需限定信息；场址与期间；活羊来源；过程图；计量覆盖；检验制度；温度证据；包装规格；废水去向；R717 平衡；分配台账及敏感性 |
| required_quality_disclosure | 按 row_id 的数据覆盖；质量平衡差；估算计量份额；采样代表性；温度偏差；制冷剂平衡；缺价月份；分配敏感性结果 |
| update_trigger | 器官或温度范围、屠宰路线、制冷技术、废水去向、包装材料、卫生化学品、法规、天工参考身份或重要共产品价格结构发生变化 |

## 11. 数据源

| Source id | Type | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-who-cxc-58-2005-meat-hygiene` | `official_guidance` | Codex Alimentarius, CXC 58-2005, Code of Hygienic Practice for Meat. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf (retrieved 2026-08-13) | slaughter hygiene, inspection, cross-contamination control, temperature records and traceability |
| `eu-ec-853-2004-meat-hygiene` | `standard` | Regulation (EC) No 853/2004, specific hygiene rules for food of animal origin. https://eur-lex.europa.eu/eli/reg/2004/853/oj/eng (retrieved 2026-08-13) | offal chilling to no more than 3 °C, cold-chain and packaging/storage controls |
| `eu-ec-852-2004-food-hygiene` | `standard` | Regulation (EC) No 852/2004, hygiene of foodstuffs. https://eur-lex.europa.eu/eli/reg/2004/852/oj/eng (retrieved 2026-08-13) | potable water, equipment cleaning/disinfection, waste handling and packaging hygiene |
| `fao-small-ruminant-slaughter-manual` | `handbook` | FAO, Manual for the slaughter of small ruminants in developing countries, Chapters 7–8. https://www.fao.org/4/x6552e/X6552E07.htm and https://www.fao.org/4/x6552e/X6552E08.htm (retrieved 2026-08-13) | liver as red offal, separate offal cleaning, organ separation, waste and chilling route decomposition |
| `fao-slaughter-meat-processing-guidelines` | `handbook` | FAO, Guidelines for slaughtering, meat cutting and further processing. https://www.fao.org/4/t0279e/T0279E04.htm (retrieved 2026-08-13) | inspection, trimming, minimum clean-water washing and immediate refrigeration |
| `fao-meat-cold-store-manual` | `handbook` | FAO, Manual on meat cold store operation and management. https://www.fao.org/4/T0098E/T0098E02.htm (retrieved 2026-08-13) | primary chilling endpoint and separate control of edible offal |
| `ifc-2007-meat-processing-ehs` | `official_guidance` | IFC / World Bank Group, Environmental, Health, and Safety Guidelines for Meat Processing, 2007. https://www.ifc.org/content/dam/ifc/doc/2000/2007-meat-processing-ehs-guidelines-en.pdf (retrieved 2026-08-13) | separate water, energy, waste and wastewater pollutant records; COD, TN, TP, TSS and oil-and-grease parameters |
| `us-epa-2004-meat-effluent-development` | `official_guidance` | US EPA, Technical Development Document for the Final Effluent Limitations Guidelines and Standards for the Meat and Poultry Products Point Source Category, 2004. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100Q1U2.TXT (retrieved 2026-08-13) | total residual chlorine as a distinct meat-processing wastewater parameter |
| `eu-pef-2013-allocation-hierarchy` | `official_guidance` | European Commission Recommendation 2013/179/EU on Product Environmental Footprint methods. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013H0179 (retrieved 2026-08-13) | subdivision priority, physical relationship and documented economic-allocation fallback |
| `le-feon-2020-meat-coproduct-allocation` | `literature` | Le Féon, S. et al. (2020), Allocation factors for meat coproducts: Dataset to perform life cycle assessment at slaughterhouse. Data in Brief 33:106558. https://doi.org/10.1016/j.dib.2020.106558 | lamb slaughter co-product mass, economic and biophysical allocation and sensitivity evidence |
| `bamber-et-al-2026-allocation-review` | `literature` | Bamber, N., Kroebel, R. and Pelletier, N. (2026), Allocation in field crop and livestock life cycle assessment. International Journal of Life Cycle Assessment. https://doi.org/10.1007/s11367-026-02618-z | allocation hierarchy, causal alternatives and price-volatility sensitivity |
