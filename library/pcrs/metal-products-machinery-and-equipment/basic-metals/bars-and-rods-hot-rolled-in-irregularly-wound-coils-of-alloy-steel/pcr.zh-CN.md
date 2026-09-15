---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-hot-rolled-in-irregularly-wound-coils-of-alloy-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 不规则盘卷的合金钢热轧条材和棒材

## 1. 范围与适用性

本 PCR 适用于在轧钢厂内获得最终热轧长材形态、并以不规则盘卷状态在生产厂门交付的合金钢条材和棒材。前景边界始于接收的合金钢方坯、矩形坯或等效半成品长材原料，止于生产厂门处经检验、捆扎并可销售的盘卷产品。

本 PCR 包括实施时的表面修整，以及加热、除鳞、热轧、控冷、不规则成卷、检验、切头尾和捆扎。其不包括半成品钢料生产、冷轧、冷拔、拉丝、独立的轧后酸洗、独立退火或铅淬火、镀锌、其他涂覆、机械加工、下游制造、分销、使用和寿命终结。若数据集纳入上述排除的加工，应将其作为单独识别的过程报告，且不得仅将其输出描述为本 PCR 的参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-hot-rolled-in-irregularly-wound-coils-of-alloy-steel |
| classification_refs | CPC 3.0：41243，精确分类语境 |
| covered_products | 以不规则盘卷状态供应的不锈钢及其他合金钢热轧条材和棒材，包括处于该市场状态的特定牌号盘条 |
| excluded_products | 铁或非合金钢盘条；直条或直棒；冷成形、冷精整或拉拔钢丝；另行退火、酸洗、镀锌或涂覆的下游产品；半成品钢坯和矩形坯 |
| representative_product | 轧钢厂门处可销售的合金钢热轧盘条卷 |
| production_route | 合金钢半成品原料；可选表面修整；加热；除鳞；热轧；控冷；不规则成卷；检验、切头尾和捆扎 |
| market_state | 热轧、不规则盘卷；声明合金牌号、尺寸规范、表面状态、热处理状态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产厂门供应处于热轧、不规则盘卷状态的合金钢条材和棒材 |
| How much | 1,000 kg 净可销售产品，不含运输包装质量 |
| How well | 符合所声明的合金牌号、直径或截面、尺寸公差、表面状态以及适用的客户或产品规范 |
| How long or cycle | 按所声明的钢坯至盘卷热轧路线完成的一个生产批次；不赋予使用期限功能 |
| reference_flow_link | `alloy_steel_hot_rolled_coil_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净可销售合金钢热轧盘卷条材和棒材 |
| 参考产品流 | 不规则盘卷的合金钢热轧条材和棒材；Tiangong UUID 未解决 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号和标准；不锈钢、高速钢、硅锰钢或其他合金钢族；钢坯或矩形坯原料状态；公称直径或截面；尺寸公差；表面状态；热处理状态；盘卷质量范围；生产路线；轧机技术；生产场址和地理范围；生产期；再生含量核算方法；净产品质量；包装纳入或排除；厂门交付边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及所有含铁物料平衡行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按轧钢厂声明的称量条件报告干态净金属质量。参考产品质量不含钢带及其他运输包装，并将这些包装记录为单独投入。 |
| `energy_conversion` | 交流电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 在前景数据包中保留电表单位和换算系数；将 kWh 换算为 MJ 时采用 1 kWh = 3.6 MJ，不得将一次能源因子与交付电力混用。 |
| `gas_volume_conditions` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明气体体积的温度、绝对压力、干湿基准和电表修正；不得合并处于不同参考条件的体积。 |
| `water_net_makeup` | 工艺用水 | Volume | m3 | 报告跨越场址边界的净补充水。轧钢厂内部循环水属于内部流，不得作为新增投入重复计数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在热轧厂边界接收的合金钢方坯、矩形坯或等效半成品长材原料，并声明牌号、质量、铸造路线、温度状态和供应商地理范围 |
| starting_condition_role | 上游炼钢和铸造由选定的合金钢半成品投入数据集表示，不在本前景 PCR 内重建 |
| product_classification_scope | 以不规则盘卷状态供应的合金钢热轧条材和棒材；CPC 3.0 代码 41243 仅为分类语境，不能取代语义产品限定信息 |
| recursive_input_rule | 购入或转入且已符合本 PCR 参考产品状态的产品，应作为上游产品投入记录，不得再次经过钢坯至盘卷前景过程；披露转入质量并避免重复计入此前热轧负荷 |
| upstream_dataset_requirement | 使用在地理、技术和牌号方面具有代表性的合金钢半成品数据集，并披露炼钢路线、再生含量核算方法和铸态 |
| disclosure | 声明纳入的单元操作、直接燃烧燃料、电力供应、水循环边界、表面修整、成材率与内部返回、废物去向、排放监测基础、包装、场址、地理范围和生产期 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_start` | foreground_start | 前景系统始于接收合金钢方坯、矩形坯或等效半成品长材原料；上游炼钢和铸造通过投入数据集连接。 | `ec-jrc-fmp-bref-2022` |
| `boundary_rule_operations` | foreground_operations | 纳入适用时的全部可归属场内表面修整、加热、除鳞、热轧、冷却、不规则成卷、检验、切头尾、捆扎、直接能源、用水、废物和直接排放。 | `ec-jrc-fmp-bref-2022` |
| `boundary_rule_downstream` | excluded_downstream_processing | 将拉丝、冷轧、独立酸洗、独立退火或铅淬火、镀锌、涂覆和下游制造排除在参考产品过程之外；如纳入任何下游加工，应单独建模。 | `ec-jrc-fmp-bref-2022` |
| `boundary_rule_internal_returns` | internal_recycling | 若氧化铁皮、切头尾、不合格盘条、水或润滑剂在同一声明前景系统内全部返回并消耗，则不得将其报告为外部输出；应保留内部返回记录供物料平衡审查。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hot_rolling_and_coiling` | 钢坯准备、加热、除鳞、热轧、冷却、不规则成卷与精整 | required | 仅在实施火焰清理或磨削时纳入表面修整交换；可销售热轧盘卷产品应纳入其余全部核心阶段 | 从合金钢半成品原料到厂门盘卷的前景生产 | 1,000 kg 净可销售热轧盘卷条材和棒材 |

### 过程：钢坯准备、热轧与成卷（`hot_rolling_and_coiling`）

本过程将相连的轧钢厂阶段汇总，以免将机架之间的热钢坯和盘条作为外部产品交换重复计数。若有单元操作电表和记录，仍应保留。

#### 输入

##### 产品流

###### 合金钢半成品原料（`alloy_steel_billet_input`）

记录跨越轧钢厂边界的合金钢方坯、矩形坯或等效半成品长材原料。牌号和原料状态应与产出盘卷相匹配。

- 选定流：合金钢方坯或矩形坯；Tiangong UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：计量投入生产批次的净质量，并按期初与期末在制品库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

###### 交付的交流电（`hot_rolling_electricity_input`）

记录交付至前景过程内钢坯准备、轧机传动、泵、风机、冷却、成卷和精整环节的计量交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至所声明生产批次的计量交付电力，并采用记录的电表单位换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_metering`
- 来源：`ec-jrc-fmp-bref-2022`

###### 加热用天然气（`reheating_natural_gas_input`）

记录交付至前景过程内加热炉或保温炉燃烧器的气态天然气。必须声明供应地理范围、燃烧器技术和体积参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：可归属于所声明生产批次的修正后电表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas_metering`
- 来源：`us-epa-ap42-steel-minimills-2009`

###### 工艺净补充水（`process_water_input`）

记录从场址边界供应给除鳞、轧辊冷却、产品冷却及其他直接轧钢用途的工艺净用水。不得将内部循环水作为重复投入。体积表记录应采用在声明参考条件下有记录的实测密度或供应商密度换算为质量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于所声明生产批次的进场补充水质量减去返回同一供应系统的计量外送水质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_metering`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制润滑剂（`rolling_lubricant_input`）

当热轧油因所声明轧机技术跨越前景边界时记录。生产和仓储记录证实未供应热轧油时，将本行标记为不适用；化学组成不同的润滑剂应作为单独数据集交换添加。

- 选定流：热轧油 `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- 流属性/单位：Mass / kg
- 数量规则：所声明生产批次消耗的采购或领用润滑剂质量，并按库存变化和返回使用的回收润滑剂修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lubricant_records`
- 来源：

###### 盘卷捆扎钢带（`steel_strapping_input`）

将随盘卷发运的钢带与参考产品净质量分开记录。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass / kg
- 数量规则：所声明生产批次内附着于已发运盘卷的钢带领用或采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

所声明的钢坯至盘卷过程不预期有废物投入。如使用外部产生的废物，应将其定义为单独且化学和物理性质明确的交换，并说明其处理作用。

##### 基本流

不规定基本流投入。由公用事业供应或按产品流约定取用的水记录在产品流水行；直接从环境取水时，应改用数据集所采用的精确基本流表示。

#### 输出

##### 产品流

###### 可销售合金钢热轧盘卷条材和棒材（`alloy_steel_hot_rolled_coil_output`）

仅记录通过所声明牌号、尺寸、表面和盘卷验收标准的产品。包装质量不计入。

- 选定流：不规则盘卷的合金钢热轧条材和棒材；Tiangong UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：计量净可销售产品质量；将前景清单归一化至 1,000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 送出前景系统的氧化铁皮（`mill_scale_output`）

仅当除鳞和轧制期间去除的氧化铁皮离开所声明前景系统接受处理、回收或处置时记录。

- 选定流：轧制氧化铁皮 `763bdad1-b443-428a-89b6-371a6807fc6c`
- 流属性/单位：Mass / kg
- 数量规则：计量外送质量加期末储存库存减期初储存库存，并归属于所声明生产批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 磨削或火焰清理屑（`grinding_swarf_output`）

以磨削或火焰清理方式实施表面修整时，记录离开前景系统的合金钢屑或尘。仅当生产记录表明未实施该操作时，方可将本行标记为不适用。

- 选定流：钢切屑 `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- 流属性/单位：Mass / kg
- 数量规则：计量经过表面修整的生产批次所产生的收集质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用路线下每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`ec-jrc-fmp-bref-2022`

###### 废轧制润滑剂（`spent_rolling_lubricant_output`）

仅当废热轧油离开前景系统进行外部再生、处理或处置时记录。未供应热轧油或无废油跨越边界时，将本行标记为不适用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：计量外送质量，并按场内废物期初和期末储存量调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass_records`
- 来源：

###### 送出前景系统的不合格合金钢盘条（`rejected_alloy_steel_rod_output`）

仅当切头尾和不合格热轧盘条离开所声明前景系统时记录。在同一声明系统内全部返回上游炼钢过程的材料作为内部流跟踪，不作为外部废物输出报告。

- 选定流：不合格合金钢热轧盘条；Tiangong UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：计量外送质量，并按不合格品期初和期末库存调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 冷却水排污水（`cooling_water_blowdown_output`）

记录跨越前景边界、送至外部废水处理或排放的冷却水排污水。不得与生活污水或无关场址废水合并。

- 选定流：热轧冷却水排污水；Tiangong UUID 未解决
- 流属性/单位：Volume / m3
- 数量规则：归属于所声明生产批次的计量排污体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_metering`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 场内燃料燃烧产生的化石二氧化碳（`reheating_fossil_co2_air`）

记录前景边界内加热炉或保温炉天然气燃烧向空气排放的化石二氧化碳。本直接基本流不包括上游天然气供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：归属于所声明生产批次的场址实测或设施核证直接化石二氧化碳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售热轧盘卷条材和棒材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_records`
- 来源：`us-epa-ap42-steel-minimills-2009`

本候选 PCR 不规定外部定量范围。在验证至少两个相互独立、原文可核验，且钢坯至盘卷边界、功能单位、产品状态、地理和技术相容的来源前，重要流范围保持未解决；前景采集仍为强制要求。

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_subdivide` | shared_mill_operations | 应先对加热、轧制、冷却、成卷和精整采用过程细分或直接按批次、电表和质量记录归属，再进行分配。 |  |
| `allocation_rule_internal_returns` | internal_returns | 将在所声明前景系统内返回的氧化铁皮、切头尾、不合格盘条、水和润滑剂作为内部交换；不得给予替代产品抵扣，也不得再次报告为外部输出。 |  |
| `allocation_rule_residuals` | saleable_residual_outputs | 若可销售剩余物离开前景系统且共享负荷不能细分，在先分别归属过程特定负荷后，按有记录的物理质量分配剩余共享负荷；披露输出质量、市场状态、分配比例及对经济分配替代方案的敏感性。 |  |
| `allocation_rule_no_recycled_content_double_count` | semi_finished_steel_input | 保持上游合金钢半成品数据集的再生含量或寿命终结核算方法，不得在轧制前景中再次增加废钢抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `hot_rolling_and_coiling` | `alloy_steel_billet_input`; `alloy_steel_hot_rolled_coil_output`; `rejected_alloy_steel_rod_output` | 经认证的地磅、秤、生产和库存记录 | 炉次或批次 id；牌号；原料质量；可销售盘卷质量；不合格品质量；切头尾质量；期初和期末在制品；秤 id；校准状态 | 将称量投入和输出关联至炉次或生产批次标识，并核对库存变化 | kg | 每炉或每批；按月汇总 | 至少连续 12 个有代表性月份，生产周期较短时采用完整生产期 | 数据集所代表的全部产线和批次 | 汇总核实后的批次记录，按库存变化调整，再按核实的净可销售产品质量归一化 | 秤校准证书；生产核对；牌号证书；库存签核 |
| `cp_electricity_metering` | `hot_rolling_and_coiling` | `hot_rolling_electricity_input` | 结算电表、分表或经核实的能源管理记录 | 电表 id；起止读数；电表单位；产线或设备范围；停机；生产批次或期间；供应商；电压；地理范围；校准 | 优先采用产线分表；否则在扣除非前景用途后，按有记录的运行时间或设备负荷分配场址总表电量 | kWh 或 MJ | 连续或按班读数；按月汇总 | 与产品输出相同的代表期间 | 所有纳入的轧钢设备及可归属辅助设备 | 汇总可归属交付电力，并换算为 MJ，不应用一次能源因子 | 电表校准；发票；分表图；场址总量核对 |
| `cp_natural_gas_metering` | `hot_rolling_and_coiling` | `reheating_natural_gas_input` | 修正后燃气表和供应商记录 | 电表 id；体积；温度；压力；干湿基准；修正系数；燃烧器和炉 id；生产期间；供应地理范围 | 读取炉或产线电表；将修正体积与供应商发票和生产运行期间核对 | m3 | 连续或按班读数；按月汇总 | 与产品输出相同的代表期间 | 数据集纳入的每座加热炉或保温炉 | 在统一声明参考条件下汇总体积，仅按有记录的共用炉服务分配 | 电表校准；供应商发票；修正证书；炉运行日志 |
| `cp_water_metering` | `hot_rolling_and_coiling` | `process_water_input`; `cooling_water_blowdown_output` | 取水、补充水、回水和排污水电表记录 | 电表 id；取水；采购补充水；外送回水；排污水；产线范围；日期；水源；水密度和参考条件；处理去向 | 核对水循环电表，将内部循环与跨边界补充水和排污水区分 | 原始读数 m3；工艺用水投入报告单位 kg | 每日或按班读数；按月汇总 | 与产品输出相同的代表期间 | 可归属于产品的轧制、除鳞和冷却水系统 | 计算跨边界净体积，采用有记录的密度将工艺用水投入换算为质量；共用系统按有记录的产量或运行时间分配 | 电表校准；密度记录；水平衡；公用事业发票；排放或处理记录 |
| `cp_lubricant_records` | `hot_rolling_and_coiling` | `rolling_lubricant_input`; `spent_rolling_lubricant_output` | 采购、领用、回收和废物外送记录 | 产品标识；领用质量；采购质量；回收质量；期初和期末库存；废物质量；去向；生产期间 | 按化学性质明确的润滑剂和产线核对仓储及废物记录 | kg | 每次领用和外送；按月汇总 | 与产品输出相同的代表期间 | 所有纳入的轧制设备 | 消耗量等于领用量或采购量加期初库存减期末库存和经核实的返回使用量 | 安全数据表；采购发票；仓储台账；废物转移联单 |
| `cp_packaging_records` | `hot_rolling_and_coiling` | `steel_strapping_input` | 包装物料清单和领用记录 | 钢带规格；每根质量或领用质量；钢带根数；盘卷 id；期初和期末库存 | 将钢带领用量或物料清单数量关联至已发运盘卷，并核实计数至质量换算 | kg | 每个已发运盘卷；按月汇总 | 与产品输出相同的代表期间 | 代表场址发运的全部参考产品盘卷 | 汇总核实后的附着钢带质量；从净参考产品质量中排除 | 包装规范；校准后的样品质量；领用记录；发运记录 |
| `cp_waste_mass_records` | `hot_rolling_and_coiling` | `mill_scale_output`; `grinding_swarf_output`; `spent_rolling_lubricant_output` | 废物秤、储存和转移记录 | 废物标识；来源操作；计量质量；期初和期末储存量；内部返回；去向；日期；批次或期间 | 对每项分流废物称量，并核对外送量、储存变化和内部返回 | kg | 每次外送；按月汇总 | 与产品输出相同的代表期间 | 所有纳入的过程区域和废物储存区 | 外部输出等于外送量加期末储存量减期初储存量；排除有记录的内部返回 | 秤校准；废物转移联单；储存盘点；去向证据 |
| `cp_direct_emissions_records` | `hot_rolling_and_coiling` | `reheating_fossil_co2_air` | 连续监测、烟道测试或设施核证直接排放清单 | 排放源 id；化石燃料数量和组成；监测或计算 CO2；方法；采样期间；生产期间；控制状态；不确定性 | 采用与纳入炉体关联的场址监测或设施核证清单；保留方法和排放源特定边界 | kg | 连续、测试周期或经核证报告期间；汇总至数据集期间 | 与产品输出相同的代表期间 | 前景边界内全部直接燃料燃烧源 | 汇总排放源特定化石 CO2，并以直接记录或有记录的炉体服务归属于代表产品批次 | 监测 QA/QC；校准；实验室或核证报告；排放源至炉体映射 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 期间内可归属交换量 / 期间内净可销售参考产品质量 × 1,000 kg | 经核实交换量；经核实净可销售盘卷质量 | 每 1,000 kg 参考产品的交换量 |  |
| `calc_material_balance` | 含铁物料行 | 未解释质量差 = 调整后的半成品原料质量 - 可销售产品质量 - 外送含铁或氧化物输出 - 内部含铁库存期末增加量；报告全部项及符号约定 | 原料、产品、氧化铁皮、屑、不合格品及库存变化记录 | 有记录的轧钢厂物料平衡核对 |  |
| `calc_net_process_water` | 工艺用水 | 净补充水质量 =（跨边界取水或采购补充水体积 - 返回同一供应系统的外送水体积）× 声明参考条件下有记录的水密度；有直接质量记录时采用该记录，并排除内部循环 | 取水、补充水、外送和循环记录；水密度和参考条件 | 以 kg 表示的工艺净补充水投入 |  |
| `calc_gas_reference_volume` | 天然气 | 采用电表或供应商修正，将每项燃气记录换算至统一声明的温度、绝对压力和干湿条件；不得合并未修正体积 | 计量体积；参考和观测条件；修正系数 | m3 表示的修正天然气体积 |  |
| `calc_packaging_mass` | 捆扎钢带 | 钢带质量 = 经核实钢带根数 × 实测或规定每根质量；直接称量总领用质量时除外 | 钢带根数；每根质量；直接领用质量 | 捆扎钢带投入质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和半成品原料 | 保留牌号证书、产品规范、炉次或批次可追溯性、直径或截面、表面与热处理状态，以及输出以不规则盘卷热轧状态供应的证据。 | 化学成分证书；生产订单；检验和发运记录 |
| `dq_temporal_representativeness` | 全部前景交换 | 采用统一的代表生产期间，通常至少连续 12 个月；记录停产、生产周期、异常事件及采用较短期间的理由。 | 有日期的原始记录；生产日历；代表性声明 |
| `dq_meter_and_scale_quality` | 质量、能源、燃气和用水 | 使用经校准仪表，或有与发票和场址总量核对的记录；保留仪表范围、单位、修正和不确定性信息。 | 校准证书；仪表图；发票核对；QA/QC 记录 |
| `dq_completeness` | 过程清单 | 将所有列出的行核对为已计量、已计算、有证据的零值、在所述条件下不适用或未解决；不得因 UUID 未解决而遗漏已知交换。 | 签核的完整性清单；物料、能源和水平衡；未解决流登记表 |
| `dq_upstream_steel` | 合金钢半成品投入 | 记录炼钢路线、铸造路线、牌号族、供应商地理范围、再生含量核算方法，以及原料数据集是否包括热送或此前加热。 | 供应商数据集和证书；采购规范；监管链记录 |
| `dq_waste_destination` | 外部废物输出 | 区分内部返回与外部回收、处理和处置，并保留接收去向和质量证据。 | 废物转移联单；接收方记录；库存核对 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_identity` | reference_product | 确认 CPC 分类语境和每项必需产品限定信息；输出为直条、拉拔钢丝、涂覆产品或其他下游状态的数据集应予拒绝。 | `unsd-cpc-3-0-structure-2025`; `unsd-cpc-1-1-chinese` |
| `validation_rule_reference_amount` | reference_flow | 确认全部交换准确归一化至 1,000 kg 净可销售产品，且捆扎钢带或其他包装不计入该质量。 |  |
| `validation_rule_boundary` | system_boundary | 确认上游炼钢和铸造仅通过半成品原料数据集表示，并覆盖全部纳入的热轧阶段、直接能源、用水、外部废物和直接排放。 | `ec-jrc-fmp-bref-2022` |
| `validation_rule_mass_balance` | ferrous_material_balance | 核对半成品原料、可销售产品、氧化铁皮、屑、不合格品、内部返回和在制品变化；调查并披露任何显著的未解释差额。 |  |
| `validation_rule_energy` | electricity_and_fuel | 将电力和修正后天然气记录核对至同一生产期间和轧钢厂范围；确认上游供应负荷未作为直接排放重复计入。 | `us-epa-ap42-steel-minimills-2009` |
| `validation_rule_uuid_status` | tiangong_references | 在激活或发布前，对任何新采用的 Tiangong UUID 直接读取并确认其公开 state_code 为 100，且基本名称、流类型、分类、属性、单位组、状态、地理、技术和备注匹配；此前应明确保留未解决行。 |  |
| `validation_rule_ranges` | quantitative_ranges | 除非至少两个相互独立的原始来源具有相容的系统边界、参考基准和产品状态，且综合说明地理和技术差异，否则不得添加外部推断范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后适合作为 `secondary_dataset` 或 `background_dataset` 发布的前景生产数据集 |
| downstream_use | 需要轧钢厂门合金钢热轧盘条卷投入的产品碳足迹、过程 LCA 和 lifecyclemodel 研究 |
| allowed_use | 当合金族、牌号、产品状态、轧钢路线、地理范围、生产期、上游钢路线、再生含量核算方法和参考质量与研究相容时使用 |
| excluded_use | 不得作为非合金钢盘条、直棒、冷拔钢丝、另行热处理或酸洗盘条、涂覆产品、半成品钢料的替代数据；未连接上游原料数据集时，不得表示钢材从摇篮到工厂门 |
| required_metadata | PCR id 和版本；产品和牌号限定信息；参考流 UUID 状态；场址和地理范围；期间；技术；纳入阶段；半成品原料数据集；炼钢路线和再生含量核算方法；能源供应商；水边界；分配；包装；废物去向；直接排放方法；未解决标识 |
| required_quality_disclosure | 原始记录覆盖；仪表和秤质量；时间与技术代表性；物料、能源和水平衡核对；分配敏感性；数据缺口；UUID 和范围证据状态；不确定性与核证状态 |
| update_trigger | 合金族、产品状态、炉或轧机技术、上游炼钢路线、电力或燃料供应、水系统、成材率、分配、包装、场址、代表期间、Tiangong 参考标识或适用产品规范发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《产品总分类 3.0 版结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03） | CPC 3.0 代码 41243 的正式标识、英文名称和层级语境 |
| `unsd-cpc-1-1-chinese` | official_guidance | 联合国统计司，《产品总分类版本 1.1》中文版。https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期：2026-09-03） | 核验代码 41243 中“不规则盘绕、经热轧的不锈钢或其他合金钢条材和棒材”的中文专业术语 |
| `ec-jrc-fmp-bref-2022` | official_guidance | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术（BAT）参考文件》，JRC131649，EUR 31321 EN，2022，DOI 10.2760/196475。https://publications.jrc.ec.europa.eu/repository/handle/JRC131649（检索日期：2026-09-03） | 半成品钢下游边界；热轧工序顺序；与冷轧、拉丝、酸洗、退火和涂覆路线的区分 |
| `us-epa-ap42-steel-minimills-2009` | official_guidance | 美国环境保护署，《AP-42 第 12.5.1 节排放因子文件：钢铁生产——小型钢厂》，2009 年 4 月。https://www.epa.gov/sites/production/files/2020-11/documents/b12s0501.pdf（检索日期：2026-09-03） | 半成品钢天然气加热、直接排放范围和数据质量要求 |
