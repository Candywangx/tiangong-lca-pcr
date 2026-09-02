---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-of-olive-residues
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 橄榄渣油

## 1. 范围与适用性

本 PCR 覆盖以非卤代溶剂或其他物理处理从橄榄果渣取得的油，包括粗制橄榄渣油、精炼橄榄渣油，以及由精炼橄榄渣油与初榨橄榄油组成的橄榄渣油。数据集必须声明商品等级、萃取路线、精炼状态、调和状态、包装状态、地理范围和系统边界终点。代表性路线为湿橄榄果渣干燥、工业己烷萃取与溶剂回收、化学精炼，以及在生产工厂散装交付。

本 PCR 不包括直接由橄榄果实生产的初榨橄榄油和精炼橄榄油、橄榄果渣原料本身、外售或燃烧的脱油橄榄果渣、再酯化工艺所得油、除允许等级中初榨橄榄油以外的其他油类混合物、化学改性油，以及下游食品制备或使用。产品名称和等级声明不得把橄榄渣油称为“橄榄油”。`unsd-cpc-3-0-2025`、`fao-who-cxs-33-1981-2024` 和 `ioc-trade-standard-2026` 界定该类别与产品区别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-of-olive-residues |
| classification_refs | CPC 3.0：21673，Oil of olive residues |
| covered_products | 粗制橄榄渣油；精炼橄榄渣油；由精炼橄榄渣油与初榨橄榄油组成的橄榄渣油 |
| excluded_products | 初榨橄榄油；直接由橄榄生产的精炼橄榄油；作为原料的橄榄果渣；脱油橄榄果渣；再酯化油；与其他种类油的混合物；化学改性油 |
| representative_product | 由干燥橄榄果渣经可回收工业己烷萃取得到的精炼橄榄渣油 |
| production_route | 橄榄果渣接收；干燥；溶剂萃取；溶剂蒸馏回收；适用时化学精炼；声明时调和；散装储存或有条件的消费包装 |
| market_state | 在生产工厂门口交付的已声明粗制、精炼或调和等级，散装或采用已声明包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 从橄榄果渣取得、用于进一步精炼、技术用途、食品制造，或在声明等级允许时直接消费的油 |
| How much | 1 kg |
| How well | 符合所声明的粗制、精炼或调和橄榄渣油等级及其适用的组成、质量、残留溶剂、水分、杂质和包装要求 |
| How long or cycle | 在所声明工厂门口交付的一个生产批次；不赋予使用寿命 |
| reference_flow_link | 下表中的参考数量与 Tiangong 产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 橄榄渣油 `a398f8c0-8c39-4924-ae53-bb901e1eac90` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 商品等级；粗制或精炼状态；溶剂或其他物理萃取路线；精炼方法；适用时调和组成；食用或技术用途；水分基准；包装状态；地理范围；生产期间；声明门口 |

构建前景数据包时，`必需限定信息` 中每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失任一限定信息时，该数据包的参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以声明门口的净油质量报告参考流；容器和托盘质量作为单独交换。 |
| `oil_grade_basis` | 产品身份与符合性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明该质量属于粗制橄榄渣油、精炼橄榄渣油或允许的调和油；没有按质量加权的调和记录时，不得在一个参考流中合并等级。 |
| `solution_mass_basis` | 氢氧化钠溶液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录配制溶液的质量和浓度；仅在单独报告的计算字段中转换为活性氢氧化钠。 |
| `moisture_basis_consistency` | 橄榄果渣与脱油橄榄果渣 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每批记录湿质量与含水率或干物质分数，使果渣投入、燃料使用、残渣和出油率可比较。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_pomace_to_gate` | 前景生产 | 从萃取厂门口接收的橄榄果渣开始，纳入干燥、萃取、溶剂回收、声明等级所需的精炼、适用时的调和、储存、装载，以及声明门口包含包装时的包装。 | `alonso-farinas-olive-pomace-oil-lca-2020`; `fao-who-cxc-36-1987-2024` |
| `boundary_upstream_links` | 外购投入 | 将橄榄果渣、电力、每种燃料、水、每种化学品、每个包装组件和每项外送废物处理链接到地理和时间上有代表性的上游数据集；不得把它们隐藏在组合公用工程或组合包装交换中。 | `eu-environmental-footprint-2021-2279` |
| `boundary_direct_emissions` | 前景排放 | 分别纳入实测或计算的工业己烷损失，以及跨越环境边界的每种燃烧排放。 | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `boundary_capital_goods` | 基础设施 | 仅在研究声明该排除且证明其对预期用途不重大时排除建设和退役；否则应一致纳入。 | `alonso-farinas-olive-pomace-oil-lca-2020`; `eu-environmental-footprint-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | received_olive_pomace_at_extractor_gate |
| starting_condition_role | 已披露的产品投入，其上游生产与运输由链接数据集提供 |
| product_classification_scope | CPC 3.0 子类 21673，Oil of olive residues |
| recursive_input_rule | 已属于 CPC 21673 的投入，例如进入调和的精炼橄榄渣油或进入储存、包装的成品油，仍作为显式产品投入并链接到其前序前景数据集；不得在消费过程中再次展开该前序生产。 |
| upstream_dataset_requirement | 分别链接橄榄果渣生产和入厂运输，并披露来源油厂、已知时的两相或三相来源、接收质量、水分和运输距离。 |
| disclosure | 声明产品等级、起始果渣状态、溶剂或物理萃取路线、干燥燃料、精炼和调和状态、分配选择、包装状态、地理范围、参考期和所有排除阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| integrated_pomace_oil_production | 橄榄果渣干燥、油萃取、溶剂回收与等级特定精炼一体化生产 | required |  | 前景生产 | 1 kg 已声明橄榄渣油输出 |
| grade_specific_blending | 精炼橄榄渣油与初榨橄榄油调和 | conditional | 仅在声明橄榄渣油调和等级时纳入。 | 前景配方 | 1 kg 调和橄榄渣油 |
| bulk_storage_and_loading | 散装储存与装载 | required |  | 前景储存与发运 | 在所声明散装或包装门口交付的 1 kg 油 |
| consumer_packaging | 消费包装 | conditional | 当声明门口为包装产品而非散装油时纳入。 | 前景包装 | 1 kg 净包装油 |

### 过程：橄榄果渣干燥、油萃取、溶剂回收与等级特定精炼一体化生产（`integrated_pomace_oil_production`）

本过程包括转筒干燥、工业己烷萃取、溶剂蒸馏与回收，以及声明等级需要时的化学精炼。`alonso-farinas-olive-pomace-oil-lca-2020` 按每公吨湿橄榄油厂固体残渣报告一个门到门案例。该单一案例仅支持过程背景和需采集的前景字段，属于非约束性证据，不得用于填充数量范围。

#### 输入

##### 产品流

###### 接收的橄榄果渣原料（`integrated_received_olive_pomace`）

记录跨越萃取厂门口的湿橄榄果渣，并包括水分和来源状态。

- 选定流：橄榄果渣，橄榄油厂固体残渣 `95c56835-2417-4ffa-8375-d0df138fd887`
- 流属性/单位：Mass / kg
- 数量规则：实测接收湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 外购电力（`integrated_grid_electricity`）

记录进入一体化生产过程的计量电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：外购计量电量减去单独计量的外送电量；不得以燃料与电力净额相抵
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 作为干燥燃料的天然气（`integrated_natural_gas`）

仅当天然气为实际干燥燃料时记录；脱油橄榄果渣燃料路线使用单独卡片。

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：该批次使用的天然气计量或发票体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：天然气干燥路线每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 作为干燥燃料的脱油橄榄果渣（`integrated_extracted_pomace_fuel`）

当生物质替代天然气时，记录现场燃烧的脱油橄榄果渣实测质量。

- 选定流：脱油橄榄果渣
- 流属性/单位：Mass / kg
- 数量规则：投入干燥器燃烧单元的实测脱油果渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：脱油果渣干燥路线每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 用于萃取供热的柴油（`integrated_diesel`）

仅当安装的萃取路线以柴油供给过程热时记录。

- 选定流：柴油
- 流属性/单位：Mass / kg
- 数量规则：归属于该批次的柴油实测或发票质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 过程水（`integrated_process_water`）

记录进入萃取与化学精炼的过程水；储存阶段的储罐冲洗水另行记录。

- 选定流：工艺用水
- 流属性/单位：Mass / kg
- 数量规则：归属于该批次的计量过程水或质量等价值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 工业己烷补充量（`integrated_technical_hexane`）

记录跨越边界的新鲜工业己烷；过程内循环的回收溶剂不得重复计数。

- 选定流：工业己烷
- 流属性/单位：Mass / kg
- 数量规则：分配给该批次的外购补充己烷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`fao-who-cxs-33-1981-2024`; `alonso-farinas-olive-pomace-oil-lca-2020`

###### 化学精炼用氢氧化钠溶液（`integrated_sodium_hydroxide_solution`）

仅在进行化学中和时记录配制的烧碱溶液，并披露浓度。

- 选定流：氢氧化钠溶液
- 流属性/单位：Mass / kg
- 数量规则：投入中和的溶液实测质量与浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 精炼橄榄渣油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已声明橄榄渣油输出（`integrated_oil_output`）

记录离开一体化生产的已声明粗制或精炼等级净质量。

- 选定流：橄榄渣油 `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- 流属性/单位：Mass / kg
- 数量规则：过程门口实测净产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026`

###### 外送脱油橄榄果渣（`integrated_exhausted_pomace_output`）

仅记录扣除现场燃烧实测质量后离开前景系统的脱油橄榄果渣。

- 选定流：脱油橄榄果渣
- 流属性/单位：Mass / kg
- 数量规则：扣除内部燃料使用后的实测外送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

##### 废物流

###### 送往处理的皂脚（`integrated_soap_stock_waste`）

除非经审查证据支持其为单独销售的共产品，否则把化学中和产生的皂脚记录为废物输出。

- 选定流：橄榄渣油精炼皂脚
- 流属性/单位：Mass / kg
- 数量规则：送往声明处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 精炼橄榄渣油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 送往处理的精炼废水（`integrated_wastewater`）

把废水记录为一个水性废物流；不得与皂脚或固体果渣合并。

- 选定流：橄榄渣油精炼废水
- 流属性/单位：Volume / m3
- 数量规则：送往声明处理路线的计量排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 生物质燃烧灰（`integrated_biomass_ash`）

仅在脱油果渣燃料路线记录灰，并链接其实际处理或有益利用数据集。

- 选定流：脱油橄榄果渣燃烧灰渣
- 流属性/单位：Mass / kg
- 数量规则：离开燃烧单元的实测灰质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：脱油果渣燃料路线每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

##### 基本流

###### 排入空气的工业己烷（`integrated_hexane_air`）

在回收溶剂循环后，记录排入空气的无组织和有组织工业己烷损失。

- 选定流：排放至空气的己烷
- 流属性/单位：Mass / kg
- 数量规则：实测排放或有文件依据的溶剂质量平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 排入空气的化石二氧化碳（`integrated_fossil_co2_air`）

把实际燃料路线的化石二氧化碳与生物成因二氧化碳分开记录。

- 选定流：排放至空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：根据实测燃料消耗和有文件依据的燃烧因子计算，或使用经核验的烟气测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 排入空气的甲烷（`integrated_methane_air`）

把前景燃料燃烧产生的甲烷记录为单独基本排放。

- 选定流：排放至空气的甲烷
- 流属性/单位：Mass / kg
- 数量规则：根据实测燃料消耗和有文件依据的燃烧因子计算，或使用经核验的烟气测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

###### 排入空气的一氧化二氮（`integrated_n2o_air`）

把前景燃料燃烧产生的一氧化二氮记录为单独基本排放。

- 选定流：排放至空气的一氧化二氮
- 流属性/单位：Mass / kg
- 数量规则：根据实测燃料消耗和有文件依据的燃烧因子计算，或使用经核验的烟气测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已声明油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_integrated_batch_inventory`
- 来源：`alonso-farinas-olive-pomace-oil-lca-2020`

### 过程：精炼橄榄渣油与初榨橄榄油调和（`grade_specific_blending`）

#### 输入

##### 产品流

###### 进入调和的精炼橄榄渣油（`blend_refined_pomace_oil`）

记录从前序过程数据集转入的精炼橄榄渣油质量。

- 选定流：橄榄渣油 `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量，等级声明为精炼橄榄渣油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调和橄榄渣油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_batch_inventory`
- 来源：`fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026`

###### 进入调和的初榨橄榄油（`blend_virgin_olive_oil`）

把初榨橄榄油作为单独产品投入，并保留其等级与供应商数据集。

- 选定流：初榨橄榄油
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调和橄榄渣油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_batch_inventory`
- 来源：`fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026`

###### 调和用电力（`blend_electricity`）

记录泵送、混合和控制所用计量电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量调和电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 调和橄榄渣油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_batch_inventory`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调和橄榄渣油（`blend_oil_output`）

记录已声明橄榄渣油调和油的净质量。

- 选定流：橄榄渣油 `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- 流属性/单位：Mass / kg
- 数量规则：实测调和产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 调和橄榄渣油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_batch_inventory`
- 来源：`fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026`

##### 废物流

###### 不合格调和油（`blend_offspec_oil`）

记录送往声明返工或处理路线的被拒调和油。

- 选定流：不合格橄榄渣油
- 流属性/单位：Mass / kg
- 数量规则：离开调和过程的实测被拒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格调和油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_batch_inventory`
- 来源：

##### 基本流

### 过程：散装储存与装载（`bulk_storage_and_loading`）

#### 输入

##### 产品流

###### 进入散装储存的成品油（`storage_finished_oil_input`）

记录从一体化生产或调和接收的成品油。

- 选定流：橄榄渣油 `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 从储存交付的油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_storage_loading_inventory`
- 来源：`fao-who-cxc-36-1987-2024`

###### 储存与装载用电力（`storage_electricity`）

记录泵、仪表和任何电伴热所用电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量储存与装载电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 从储存交付的油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_storage_loading_inventory`
- 来源：`fao-who-cxc-36-1987-2024`

###### 储罐加热用热水（`storage_hot_water`）

仅在使用热水盘管时记录交付热水热量；蒸汽使用单独的替代卡片。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：热水交付的计量热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 从储存交付的油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_storage_loading_inventory`
- 来源：`fao-who-cxc-36-1987-2024`

###### 储罐加热用低压蒸汽（`storage_steam`）

仅在使用蒸汽盘管或伴热时记录交付蒸汽热量；热水使用单独的替代卡片。

- 选定流：低压蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：蒸汽交付的计量热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 从储存交付的油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_storage_loading_inventory`
- 来源：`fao-who-cxc-36-1987-2024`

###### 储罐冲洗用淡水（`storage_rinse_water`）

把淡水冲洗与生产过程水分开记录。

- 选定流：新鲜水
- 流属性/单位：Mass / kg
- 数量规则：分配给储存批次的计量冲洗水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 从储存交付的油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_storage_loading_inventory`
- 来源：`fao-who-cxc-36-1987-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 在散装或包装门口交付的油（`storage_oil_output`）

记录发往散装交付或包装过程的净油质量。

- 选定流：橄榄渣油 `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- 流属性/单位：Mass / kg
- 数量规则：实测发运净油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 从储存交付的油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_storage_loading_inventory`
- 来源：`fao-who-cxc-36-1987-2024`

##### 废物流

###### 储罐冲洗废水（`storage_rinse_wastewater`）

记录送往声明处理路线的水性冲洗流。

- 选定流：食用油罐冲洗废水
- 流属性/单位：Volume / m3
- 数量规则：实测排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 从储存交付的油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_storage_loading_inventory`
- 来源：`fao-who-cxc-36-1987-2024`

##### 基本流

### 过程：消费包装（`consumer_packaging`）

以下每个包装组件都是单独交换。仅应用与声明包装物料清单匹配的卡片。对于在欧盟面向最终消费者的橄榄渣油，`eu-olive-oil-marketing-2022-2104` 要求包装容量不超过五升，并配备首次开启后不能重新密封的开启系统。

#### 输入

##### 产品流

###### 进入包装的散装油（`packaging_bulk_oil_input`）

记录从散装储存转入的净油质量。

- 选定流：橄榄渣油 `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- 流属性/单位：Mass / kg
- 数量规则：进入灌装线的实测净油投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 包装用电力（`packaging_electricity`）

记录灌装、封盖、贴标、输送和托盘缠绕所用电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量包装线电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 玻璃瓶（`packaging_glass_bottle`）

仅对玻璃瓶包装形式记录玻璃瓶质量。

- 选定流：玻璃瓶
- 流属性/单位：Mass / kg
- 数量规则：外购瓶质量减去单独记录的未使用可退库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：`eu-olive-oil-marketing-2022-2104`

###### 聚对苯二甲酸乙二醇酯瓶（`packaging_pet_bottle`）

仅对 PET 瓶包装形式记录 PET 瓶质量。

- 选定流：聚对苯二甲酸乙二醇酯（PET）瓶
- 流属性/单位：Mass / kg
- 数量规则：外购瓶质量减去单独记录的未使用可退库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：`eu-olive-oil-marketing-2022-2104`

###### 聚丙烯防拆封盖（`packaging_pp_closure`）

把封盖质量与瓶体分开记录。

- 选定流：聚丙烯防拆封盖
- 流属性/单位：Mass / kg
- 数量规则：合格和被拒包装消耗的外购封盖质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：`eu-olive-oil-marketing-2022-2104`

###### 纸标签（`packaging_paper_label`）

把纸标签质量与容器和封盖分开记录。

- 选定流：纸标签
- 流属性/单位：Mass / kg
- 数量规则：合格和被拒包装消耗的领用标签质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：`eu-olive-oil-marketing-2022-2104`

###### 瓦楞纸板箱（`packaging_corrugated_carton`）

把瓦楞纸箱质量与初级包装分开记录。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：合格和被拒纸箱消耗的领用纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 木托盘（`packaging_wood_pallet`）

记录非返还木托盘的分配质量；可重复使用托盘应披露复用次数。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：托盘质量除以经核验复用次数，并分配给发运包装油
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 低密度聚乙烯缠绕膜（`packaging_ldpe_stretch_film`）

把托盘缠绕膜质量与纸箱和初级包装分开记录。

- 选定流：低密度聚乙烯（LDPE）拉伸膜
- 流属性/单位：Mass / kg
- 数量规则：发运托盘消耗的领用膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装橄榄渣油（`packaging_oil_output`）

仅记录净油质量；包装质量保留在单独的投入卡片中。

- 选定流：橄榄渣油 `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- 流属性/单位：Mass / kg
- 数量规则：实测合格净灌装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：`eu-olive-oil-marketing-2022-2104`

##### 废物流

###### 瓶破损产生的废玻璃（`packaging_waste_glass`）

把被拒或破损玻璃与其他每种包装废物分开记录。

- 选定流：废玻璃
- 流属性/单位：Mass / kg
- 数量规则：离开包装线的实测玻璃废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 废聚对苯二甲酸乙二醇酯（`packaging_waste_pet`）

把被拒 PET 瓶材料与其他每种包装废物分开记录。

- 选定流：废聚对苯二甲酸乙二醇酯（PET）
- 流属性/单位：Mass / kg
- 数量规则：离开包装线的实测 PET 废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 废聚丙烯（`packaging_waste_pp`）

把被拒封盖材料与其他每种包装废物分开记录。

- 选定流：废聚丙烯
- 流属性/单位：Mass / kg
- 数量规则：离开包装线的实测聚丙烯废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 废纸标签（`packaging_waste_paper`）

把被拒纸标签与其他每种包装废物分开记录。

- 选定流：废纸
- 流属性/单位：Mass / kg
- 数量规则：离开包装线的实测纸标签废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 废瓦楞纸板（`packaging_waste_paperboard`）

把被拒瓦楞纸箱材料与其他每种包装废物分开记录。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass / kg
- 数量规则：离开包装线的实测瓦楞纸板废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 废低密度聚乙烯（`packaging_waste_ldpe`）

把缠绕膜废物与其他每种包装废物分开记录。

- 选定流：废低密度聚乙烯（LDPE）
- 流属性/单位：Mass / kg
- 数量规则：离开包装线的实测 LDPE 膜废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

###### 不合格包装油（`packaging_offspec_oil`）

记录从不合格包装中排出的被拒油及其声明返工或处理路线。

- 选定流：不合格橄榄渣油
- 流属性/单位：Mass / kg
- 数量规则：离开包装过程的实测被拒油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_run_inventory`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 单独计量的过程与批次 | 只要直接计量或批次记录允许，应通过细分干燥、萃取、精炼、调和、储存和包装记录避免分配。 | `eu-environmental-footprint-2021-2279` |
| `allocation_internal_pomace_fuel` | 现场燃烧的脱油橄榄果渣 | 把干燥器中燃烧的实测脱油果渣作为内部产品投入，并从外送脱油果渣输出中扣除；不得再次按外送燃料给予信用。 | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `allocation_exported_co_products` | 外送脱油橄榄果渣及其他可销售输出 | 若细分不能隔离负荷，应使用反映过程功能且有文件依据的物理关系；仅在说明为何细分、系统扩展和物理分配不可行后，才使用其他关系。 | `eu-environmental-footprint-2021-2279` |
| `allocation_soap_stock` | 皂脚 | 除非经审查证据证明其为可销售产品且前景记录支持共产品处理，否则把皂脚作为废物。 | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `allocation_disclosure` | 所有多功能过程 | 报告输出质量、内部使用、外送数量、所选分配方法、因子、价格或物理参数、参考期和敏感性结果。 | `eu-environmental-footprint-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_integrated_batch_inventory` | integrated_pomace_oil_production | 一体化生产的所有交换 | 批次生产记录和仪表台账 | 批次 id；投入与输出质量；果渣水分；电力；每种燃料；水；己烷采购和回收；氢氧化钠溶液质量与浓度；废水；每项废物；每种直接排放；产品等级 | 经校准秤和仪表、发票、溶剂质量平衡、实验室记录与经核验排放计算 | 各行单位 | 每批并按月核对 | 至少 12 个代表性月份或完整较短生产季 | 所有前景干燥、萃取、回收和精炼设备 | 汇总交换记录，核对质量与溶剂平衡，并除以合格油质量 | 校准记录；发票；实验室结果；仪表核对；有文件依据的排放因子 |
| `cp_blending_batch_inventory` | grade_specific_blending | 调和过程的所有交换 | 调和批次表 | 批次 id；精炼橄榄渣油质量；初榨橄榄油质量与等级；电力；合格输出；被拒油 | 经校准批次秤、储罐液位计和电表 | 各行单位 | 每个调和批次 | 至少 12 个代表性月份或完整较短生产季 | 所有前景调和设备 | 汇总批次交换并除以合格调和油质量 | 秤校准；供应商证书；调和配方；质量平衡闭合 |
| `cp_bulk_storage_loading_inventory` | bulk_storage_and_loading | 储存与装载的所有交换 | 储罐与发运日志 | 储罐 id；产品等级；期初和期末质量；电力；热水能量；蒸汽能量；冲洗水；发运质量；冲洗废水；清洁检查 | 经校准储罐液位计或地磅、公用工程仪表和清洁日志 | 各行单位 | 每个储罐批次和发运 | 至少 12 个代表性月份或完整较短生产季 | 所有前景储罐、泵、加热和装载设备 | 核对期初库存加接收量减期末库存和损失，再按发运油质量分配公用工程 | 校准；温度日志；清洁检查；适用时前载货物声明 |
| `cp_packaging_run_inventory` | consumer_packaging | 包装过程的所有交换 | 包装物料清单和批次核对 | 批次 id；净油投入与输出；电力；每种容器、封盖、标签、纸箱、托盘和膜的质量；各材料特定边角料；被拒油；托盘复用次数 | 采购与领用记录、组件规格、产线仪表、拒品日志和净灌装检查 | 各行单位 | 每个包装批次并按月核对 | 至少 12 个代表性月份或完整较短生产季 | 所有前景灌装、封盖、贴标、装箱和码垛设备 | 单独核对每个组件并除以合格净包装油质量 | 供应商规格；计数转质量；仪表校准；拒品日志；净灌装核验 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_exchange_to_reference_flow` | 每项清单交换 | 归一化数量 = 归属于产品的交换数量 / 合格已声明油质量 | 各行交换记录；合格油质量 | 每 1 kg 参考流的各行数量 | `eu-environmental-footprint-2021-2279` |
| `pomace_dry_matter` | 接收和脱油橄榄果渣 | 干物质 = 湿质量 ×（1 − 水分质量分数） | 湿质量；水分质量分数 | kg 干物质 | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `solvent_loss_to_air` | 工业己烷 | 己烷损失 = 期初溶剂库存 + 采购 − 期末库存 − 产品和废物中有文件依据的溶剂；单独核对实测尾气捕集 | 溶剂库存；采购；回收；产品和废物测试 | kg 工业己烷空气损失 | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `exported_pomace_balance` | 脱油橄榄果渣 | 外送脱油果渣 = 脱油果渣总产量 − 现场燃烧质量 − 其他实测内部使用 | 脱油果渣总输出；内部燃料质量；其他内部使用 | kg 外送脱油橄榄果渣 | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `blend_mass_balance` | 橄榄渣油调和 | 合格调和输出 + 被拒油 + 实测损失 = 精炼橄榄渣油投入 + 初榨橄榄油投入 | 两种油投入；合格输出；被拒输出；实测损失 | 批次质量平衡闭合与组分质量分数 | `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026` |
| `packaging_component_mass` | 每个包装组件 | 每 kg 油的组件质量 = 领用组件数量 × 经核验单件质量 / 合格净包装油质量；可复用托盘质量除以经核验复用次数 | 领用数量；单件质量；净油质量；适用时复用次数 | kg 特定组件/kg 净油 | `eu-environmental-footprint-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留等级特定实验室证书和声明，证明 CPC 21673 身份，并区分粗制、精炼和调和橄榄渣油与橄榄油、再酯化油或其他油混合物。 | 产品规格；实验室结果；`fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026` |
| `dq_temporal_coverage` | 前景清单 | 除非生产季更短，使用至少 12 个代表性月份；披露生产季日期、季节性、停机和缺失数据处理。 | 生产日历；仪表覆盖；核对报告；`eu-environmental-footprint-2021-2279` |
| `dq_mass_balance` | 果渣、油、溶剂和废物记录 | 闭合湿、干果渣平衡、油等级平衡、溶剂平衡与包装组件核对；调查重大残差而非强制闭合。 | 签署平衡表；水分测试；储罐和秤校准 |
| `dq_atomic_exchanges` | 所有清单行 | 实际使用的每项电力、热水、蒸汽、天然气、柴油、化学品、包装组件、废物流和基本排放必须各自表示为一个原子交换。任何额外清洗化学品或包装组件在符合性判断前必须新增为另一行。 | row_id 审计；采购台账；物料清单；废物联单 |
| `dq_storage_integrity` | 散装储存与装载 | 保留储罐清洁、干燥、材料相容性、温度、前载货物和装载检查记录，并尽量减少空气接触和过热。 | 检查报告；温度日志；前载货物声明；`fao-who-cxc-36-1987-2024` |
| `dq_background_links` | 上游与处理数据集 | 匹配地理、技术、参考期、产品等级、燃料路线、包装材料和废物处理路线；披露代理及其敏感性。 | 数据集元数据与数据质量评估；`eu-environmental-footprint-2021-2279` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID、Mass 属性 UUID、Units of mass UUID、kg 单位、CPC 21673 坐标、声明产品等级和完整产品语义必须全部匹配。 | `unsd-cpc-3-0-2025`; `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026` |
| `validate_grade_and_route` | 产品数据集 | 若数据集缺少粗制/精炼/调和等级、溶剂或物理萃取路线、精炼状态、适用时调和组成、预期用途或门口，则拒绝该数据集。 | `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026` |
| `validate_mass_and_moisture` | 生产清单 | 要求实测油输出、湿果渣质量、果渣水分或干物质、脱油果渣输出、内部燃料使用和经调查的质量平衡残差。 | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `validate_solvent` | 溶剂萃取路线 | 要求工业己烷采购、回收、库存和损失记录；符合要求的食用产品不得使用卤代溶剂，并应执行适用残留溶剂质量检查。 | `fao-who-cxs-33-1981-2024`; `alonso-farinas-olive-pomace-oil-lca-2020` |
| `validate_atomic_inventory` | 所有过程清单 | 拒绝任何属于复数集合、组合能源载体、组合包装标签、组合废物标签或未解决选择指令的选定流；每项实际交换必须为单独行。 |  |
| `validate_allocation` | 多功能过程 | 要求细分证据或有文件依据的分配层级、因子、共产品输出数量、内部使用和敏感性结果；拒绝对作为现场燃料的脱油果渣重复给予信用。 | `eu-environmental-footprint-2021-2279`; `alonso-farinas-olive-pomace-oil-lca-2020` |
| `validate_storage_and_packaging` | 声明的散装或包装门口 | 要求储存检查与温度记录；对包装产品要求组件级物料清单和适用司法辖区的包装、标签符合性。 | `fao-who-cxc-36-1987-2024`; `eu-olive-oil-marketing-2022-2104` |
| `validate_single_case_evidence` | 文献案例证据 | Alonso-Fariñas 案例仅作为非约束性的过程与计算背景。不得从单篇出版物、单一设施案例或该案例内部的两个情景推导数量范围；前景数量必须来自采集记录或独立计算证据。 | `alonso-farinas-olive-pomace-oil-lca-2020` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 对等级、路线、地理、时期、分配、包装状态和门口相匹配的粗制、精炼或调和橄榄渣油进行前景或背景建模 |
| excluded_use | 直接由橄榄生产的初榨或精炼橄榄油；橄榄果渣原料；脱油橄榄果渣；再酯化或化学改性油；未声明混合物；不匹配的萃取或精炼路线 |
| required_metadata | 参考流 UUID；CPC 坐标；产品等级；预期用途；萃取溶剂或物理处理；干燥燃料；精炼和调和状态；调和分数；果渣来源与水分；分配方法；包装状态；地理；参考期；门口 |
| required_quality_disclosure | 前景覆盖；校准；质量、干物质、溶剂和调和平衡；实际公用工程与包装行；直接排放方法；废物处理；非约束性文献案例的处理方式；代理数据集；数据质量评估；未解决 UUID |
| update_trigger | 产品标准、分类范围、萃取溶剂或技术、干燥燃料、精炼或调和路线、分配方法、包装形式、物料产率、排放控制、地理或代表性前景证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | 数据集（`dataset`） | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 21673 名称与层级 |
| `fao-who-cxs-33-1981-2024` | 标准（`standard`） | Codex Alimentarius Commission, CXS 33-1981, Standard for Olive Oils and Olive-Pomace Oils, revised 2024 and reformatted 2026, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+33-1981%2FCXS_033e.pdf | 产品定义、等级身份、质量、污染物、命名和分析要求 |
| `ioc-trade-standard-2026` | 标准（`standard`） | International Olive Council, COI/T.15/NC No. 3/Rev. 22, Trade Standard Applying to Olive Oils and Olive Pomace Oils, June 2026, https://www.internationaloliveoil.org/wp-content/uploads/2026/07/COI-T.15NC-No.-3Rev.-22-_TRADE-STANDARD-REV-22_EN.pdf | 当前国际贸易名称、粗制/精炼/调和区分和质量准则 |
| `alonso-farinas-olive-pomace-oil-lca-2020` | 文献（`literature`） | Alonso-Fariñas et al., Environmental Assessment of Olive Mill Solid Waste Valorization via Anaerobic Digestion Versus Olive Pomace Oil Extraction, Processes 8(5), 626, 2020, https://doi.org/10.3390/pr8050626 | 干燥、溶剂萃取与回收、化学精炼、清单流识别、路线特定燃料案例、废水和直接排放背景；这是单一非约束性案例，不是数量范围来源 |
| `eu-environmental-footprint-2021-2279` | 官方指南（`official_guidance`） | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Official Journal L 471, 30 December 2021, http://data.europa.eu/eli/reco/2021/2279/oj | 系统边界、原始数据质量、分配层级、包装清单和代理披露 |
| `fao-who-cxc-36-1987-2024` | 标准（`standard`） | Codex Alimentarius Commission, CXC 36-1987, Code of Practice for the Storage and Transport of Edible Fats and Oils in Bulk, revised 2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+36-1987%2FCXC_036e.pdf | 储存边界、储罐状态、清洁、加热、装载、温度和前载货物记录 |
| `eu-olive-oil-marketing-2022-2104` | 官方指南（`official_guidance`） | Commission Delegated Regulation (EU) 2022/2104 on marketing standards for olive oil, consolidated 10 June 2024, http://data.europa.eu/eli/reg_del/2022/2104/2024-06-10 | 欧盟等级特征、最终消费者包装容量与首次开启系统、法定名称和储存标签 |
