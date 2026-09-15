---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.steam-or-other-vapour-generating-boilers-other-than-central-heating-hot-water-boilers-c-e8d99167
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 蒸汽锅炉（能产生低压蒸汽的集中供暖用的热水锅炉除外）；过热水锅炉

## 1. 范围与适用性

本 PCR 适用于成品锅炉从摇篮到制造商工厂门口的生产；此类锅炉的主要产品功能是产生水蒸气或其他蒸气，或者供应温度高于其大气压沸点的承压热水。范围涵盖火管式、水管式、混合式及其他锅炉设计；当经济器或空气预热器作为销售产品的组成部分时，也计入产品范围。

范围不包括只能兼产低压蒸汽的集中供暖用热水锅炉、单独供应的锅炉辅助设备、单独供应的冷凝器、备件、用户现场安装、蒸汽输配、销售锅炉以外的给水处理、运行、维护和报废。前景数据包应说明申报产品是蒸汽/其他蒸气锅炉，还是温度高于 110 °C 的承压热水锅炉；尽管蒸汽锅炉研究未把后者作为独立技术建模，正式分类仍明确将其纳入本类别。

本 PCR 采用质量归一化的工厂门口边界，用于比较制造清单。对于效率、压力、容量或寿命不同的锅炉，不得据此比较其全寿命蒸汽或热力服务。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.steam-or-other-vapour-generating-boilers-other-than-central-heating-hot-water-boilers-c-e8d99167 |
| classification_refs | CPC 3.0: 42320（准确的分类语境；映射接受决定另行治理） |
| covered_products | 火管式、水管式、混合式或其他蒸汽/其他蒸气发生锅炉成品；工作温度高于 110 °C 的承压热水锅炉成品；作为销售产品组成部分的一体化节能部件 |
| excluded_products | 集中供暖用热水或低压蒸汽锅炉；单独供应的辅助设备、冷凝器和零件；完整蒸汽发生服务或所供应的蒸汽/热力 |
| representative_product | 经压力试验和质量检验后可供发运的工厂完整工业蒸汽锅炉 |
| production_route | 外购材料接收；切割和成形；焊接和装配；按设计要求安装保温或耐火材料；按设计要求涂装；工厂检验和水压试验；发运准备 |
| market_state | 制造商工厂门口的锅炉成品，以干态发运质量和申报配置识别 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造商工厂门口生产蒸汽/其他蒸气发生锅炉或承压过热水锅炉成品 |
| How much | 1 kg 干态可销售发运锅炉，不含临时试验用水 |
| How well | 符合所申报的锅炉型式、额定热输出、工作压力、出口介质与温度、燃料或热源、一体化部件范围和工厂验收要求 |
| How long or cycle | 工厂门口的一个生产批次；不按运行寿命或全寿命热输出归一化 |
| reference_flow_link | 将 `boiler_reference_product` 输出的实测干态可销售质量归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 蒸汽/其他蒸气发生锅炉或过热水锅炉（UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 出口介质；火管式/水管式/混合式/其他设计；额定热输出；额定蒸汽或热水容量；最高允许工作压力；额定出口温度；燃料或热源；一体化经济器/空气预热器/燃烧器/控制装置范围；干态发运质量；工厂地域；生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过受控物料清单和发运记录称量或计算干态可销售产品质量；排除临时水压试验用水、可回收运输工装和单独销售的辅助设备。 |
| `mass_normalization` | 所有质量交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用报告期内交换质量除以同一期间生产的干态可销售锅炉质量；保留未舍入的源数量和换算因子。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 1 kWh = 3.6 MJ 将计量电力换算为 MJ，不得把外购电力与燃料或外购热力合并。 |
| `gas_reference_conditions` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按申报的参考温度和压力报告燃气计量体积；披露标准体积换算及仪表计量基础。 |
| `water_mass_conversion` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测质量，或采用有文件依据的密度和温度把实测体积换算为质量；只有在循环使用量经计量并单独披露时才报告净投入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购板材、保温材料、耐火材料、焊接耗材、涂料、能源和水凭供应商及产品状态记录跨越工厂边界；前景过程始于锅炉制造商接收这些投入。 |
| starting_condition_role | 前景制造和装配的工厂门口投入状态；上游生产继续由所链接的供应商数据集或次级数据集表示。 |
| product_classification_scope | 属于上述语义边界的锅炉成品设备；产品分类不包括单独供应的辅助设备、锅炉零件或所供应的蒸汽/热力。 |
| recursive_input_rule | 如果某一外购投入本身属于本类别的锅炉成品，应将其作为一个已披露的供应商产品投入并链接其上游数据集，不得在本前景过程中递归重建其制造过程。 |
| upstream_dataset_requirement | 每个外购原子产品投入均应链接地域和技术具有代表性的上游数据集；对于最低清单未列出的配置特定部件，应新增单独的原子流行。 |
| disclosure | 披露部件范围、外购与自制划分、锅炉设计和压力等级、输出介质、燃料/热源、试验路线、涂装路线、工厂地域、报告期及全部排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景产品系统 | 纳入从材料接收直至切割、成形、焊接、装配、适用的保温/耐火施工/涂装、工厂试验和发运准备；排除用户现场安装、分销、运行、维护和报废。 | eu-steam-boilers-ecodesign-2014 |
| `boundary_integral_components` | 产品配置 | 只有经济器、空气预热器、燃烧器、控制装置及其他项目作为销售锅炉的组成部分时才纳入；单独供应的辅助设备不属于本 PCR 产品识别，应另行建模。 | eu-steam-boilers-ecodesign-2014; un-cpc-3-0-structure-2025 |
| `boundary_complete_bom` | 外购和自制部件 | 将完整产品物料清单与干态发运质量核对；对遗漏的每种配置特定材料或部件新增一个原子交换，并披露其上游数据集。 | eu-steam-boilers-ecodesign-2014; eu-pef-method-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `boiler_manufacture` | 锅炉一体化制造、装配、表面处理和工厂试验 | required | 锅炉成品始终纳入；有条件的流卡仅在其所述路线存在时适用 | 前景生产 | 制造商工厂门口 1 kg 干态可销售锅炉 |

### 过程：锅炉一体化制造、装配、表面处理和工厂试验（`boiler_manufacture`）

#### 输入

##### 产品流

###### 锅炉承压部件用碳钢板（`carbon_steel_pressure_plate`）

记录进入承压壳体、锅筒、集箱、管板或其他申报锅炉部件制造的碳钢板。前景记录应保留准确的压力容器钢牌号和外购产品状态。

- 选定流：锅炉承压部件用碳钢板（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去有文件记录的未开封退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_records`
- 来源：eu-steam-boilers-ecodesign-2014

###### 岩棉保温材料（`rock_wool_insulation`）

记录安装在销售锅炉边界内的岩棉。仅当申报设计采用岩棉保温时适用；其他保温材料应另设原子流行。

- 选定流：岩棉 `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去送往另行记录废物路线的边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_records`
- 来源：eu-steam-boilers-ecodesign-2014

###### 耐火砖衬里（`refractory_brick_lining`）

记录安装在销售锅炉内的耐火砖。仅当耐火砖属于申报配置时适用；浇注料或耐火纤维应另设原子流行。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：Mass / kg
- 数量规则：实测归属于可销售锅炉的耐火砖领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_records`
- 来源：eu-steam-boilers-ecodesign-2014

###### 药芯焊丝（`flux_cored_wire`）

记录承压部件或结构焊接所消耗的药芯焊丝。仅适用于药芯焊丝电弧焊；其他焊条、焊丝、焊剂和保护气体应另设原子流行。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：仓库领用减去未用退库，并与焊接作业记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_records`
- 来源：us-epa-ap42-electric-arc-welding

###### 工业维护涂料（`industrial_maintenance_coating`）

记录施涂于锅炉表面的配制保护涂料。仅当使用液态工业维护涂料时适用；粉末、水性或其他涂料产品应各自另设原子流行。

- 选定流：工业维护涂料 `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- 流属性/单位：Mass / kg
- 数量规则：发往涂装的涂料质量，包括在前景边界内实测的过喷和施工损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_records`
- 来源：eu-steam-boilers-ecodesign-2014; us-epa-ap42-other-metal-coating

###### 热切割用工业氧气（`industrial_oxygen_cutting`）

记录氧燃料切割或气刨所用的外购氧气。仅在采用该制造路线时适用，并在前景记录中保留纯度、压力和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：计量或供应商开票且归属于锅炉制造的氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：us-epa-ap42-electric-arc-welding

###### 水压试验工艺用水（`hydrostatic_test_water`）

记录工厂水压试验引入的工艺用水。应分别计量循环使用量和回流量，不得仅按容器容积推算投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越工厂过程边界的实测新鲜试验用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrostatic_test_water_records`
- 来源：

###### 制造用电（`manufacturing_electricity`）

记录前景边界内切割、成形、焊接、搬运、装配、涂装通风或固化、检验和试验所用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或采用可审计方法把工厂总表电力分配给纳入范围的锅炉生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：

###### 工厂天然气（`factory_natural_gas`）

记录纳入范围的热态试验、直接燃烧固化或其他有文件记录的工厂作业中燃烧的气态天然气。仅当燃气在前景边界内消耗时适用；锅炉全寿命燃料使用不在范围内。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在申报参考条件下计量并归属于纳入范围工厂作业的燃气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 锅炉成品参考产品（`boiler_reference_product`）

记录经工厂验收、发运前的干态可销售锅炉质量。临时试验用水和单独销售的辅助设备不属于此输出。

- 选定流：蒸汽/其他蒸气发生锅炉或过热水锅炉（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：经实测或物料清单核对的验收合格可销售锅炉干态质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归一化为 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_mass_records`
- 来源：un-cpc-3-0-structure-2025; eu-steam-boilers-ecodesign-2014

##### 废物流

###### 钢材制造废料（`steel_scrap_output`）

记录作为废钢离开前景的分类收集板材、管材和型材边角料。当成分影响接收路线时，不锈钢或其他合金废料应另设流行。

- 选定流：废钢 `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- 流属性/单位：Mass / kg
- 数量规则：纳入锅炉生产外运的实测废钢质量，扣除有文件记录的厂内再利用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch_records`
- 来源：

###### 水压试验废水（`hydrostatic_test_wastewater`）

记录离开前景并进入排水、处理或处置路线的试验用水。仅适用于排放水；厂内循环使用或留存的水不作为输出。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：按去向计量排放的水压试验废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrostatic_test_water_records`
- 来源：

##### 基本流

###### 排入空气的焊接颗粒物（`welding_particulate_air`）

记录纳入范围焊接经捕集和控制后排入空气的总颗粒物。适用于产生并释放颗粒物的焊接路线；不得用单一金属物种代替总颗粒物。

- 选定流：排入空气的焊接颗粒物（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测出口及无组织颗粒物，或根据焊接耗材用量和控制性能进行有文件依据的工艺特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`
- 来源：us-epa-ap42-electric-arc-welding

###### 排入空气的涂装挥发性有机物（`coating_voc_air`）

记录液态涂料施工、闪蒸和固化过程中经捕集和控制后排入空气的挥发性有机物。仅当申报涂料含有 VOC 时适用。

- 选定流：排入空气的挥发性有机物（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据所采集涂料质量、供应商 VOC 比例、回收溶剂和实测控制装置破坏或去除量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`
- 来源：us-epa-ap42-other-metal-coating

###### 工厂天然气产生的化石二氧化碳（`factory_fossil_co2_air`）

记录纳入范围工厂作业燃烧天然气直接释放的化石二氧化碳。仅当存在 `factory_natural_gas` 时适用；排除上游电力排放和锅炉使用阶段排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址烟气测量，或针对归属于锅炉生产的工厂计量燃气采用有文件依据的燃料碳平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干态可销售锅炉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用工厂作业 | 在实际可行时，先通过分表、工单和材料领用记录把共用作业细分到锅炉过程，再考虑分配。 | eu-pef-method-2021 |
| `allocation_physical_second` | 无法细分的共用作业 | 如无法细分，应采用有文件依据的因果物理关系分配，例如设备时间、能源需求或加工质量；应说明该关系为何能代表共用作业。 | eu-pef-method-2021 |
| `allocation_other_last` | 剩余多功能过程 | 只有在记录无法细分且不存在因果物理关系的原因后，才使用其他关系（包括经济分配）；披露因子、期间和敏感性。 | eu-pef-method-2021 |
| `scrap_no_unreported_credit` | 废钢输出 | 分别报告废钢质量和接收路线。除非明确申报并一致采用下游建模方法，否则不得在前景清单内扣除避免原生钢生产的抵扣。 | eu-pef-method-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass_records` | `boiler_manufacture` | 材料投入和可销售锅炉输出 | 受控物料清单、仓库领退料、工单和成品质量记录 | product_id; material_grade; flow_identity; supplier; issued_mass; returned_mass; installed_mass; scrap_link; dry_product_mass; unit | 核对 ERP/物料清单数量、工单记录和可用的校准称量记录 | kg | 每个生产订单；按报告期汇总 | 完整报告期 | 申报工厂内所有纳入的生产线 | 按产品配置汇总原子材料净领用量和验收干态产出，再按干态可销售产出质量归一化 | 批准的物料清单版本；仓库台账；衡器校准；工单结算；质量核对 |
| `cp_energy_and_gas_records` | `boiler_manufacture` | 电力、天然气和工业氧气 | 分表、总表、发票和生产分配动因记录 | meter_id; start_reading; end_reading; fuel_or_gas_identity; reference_temperature; reference_pressure; allocation_driver; product_id; unit | 优先采用过程分表；否则采用因果且有文件依据的动因分配经核对的工厂总表数据 | MJ; m3 | 每月及每次适用的试验活动 | 完整报告期 | 纳入的制造、涂装和试验区域 | 扣除经核实的非生产用量，分配共用量，并按干态可销售锅炉质量归一化 | 仪表校准；发票核对；分配工作表；参考条件记录 |
| `cp_hydrostatic_test_water_records` | `boiler_manufacture` | 试验用水投入和废水输出 | 试验单、水表和排放记录 | product_id; test_id; input_volume_or_mass; reused_quantity; retained_quantity; discharged_quantity; destination; density; unit | 计量每次注水和排水，或核对专用水箱平衡 | kg; m3 | 每次水压试验 | 完整报告期 | 所有纳入的试验工位 | 必要时换算为质量，明确循环使用量，分别汇总新鲜水投入和排放输出，再按干态可销售产出质量归一化 | 校准仪表；签字试验报告；水箱平衡；排放联单 |
| `cp_waste_dispatch_records` | `boiler_manufacture` | 废钢 | 分类废料箱称量和外运记录 | waste_identity; alloy_family; gross_weight; tare; internal_reuse; destination; date; unit | 称量每次外运量并与生产区域废料箱核对 | kg | 每次外运；每月核对 | 完整报告期 | 所有纳入的制造区域 | 汇总归属于锅炉生产且对外发运的废钢净量，并按干态可销售产出质量归一化 | 地磅单；废物联单；料箱核对 |
| `cp_air_emission_records` | `boiler_manufacture` | 焊接颗粒物、涂装 VOC 和化石二氧化碳 | 烟道试验、CEMS、涂料领用、供应商组成、耗材、燃料和控制装置记录 | source_id; pollutant_identity; measured_concentration; gas_flow; operating_time; consumable_mass; VOC_fraction; recovered_mass; control_efficiency; gas_volume; carbon_content; unit | 有条件时采用合规测量；否则采用与所采集活动及控制数据关联的透明污染源特定质量平衡 | kg; m3 | 每次试验活动或每月活动平衡 | 代表报告期和所有适用路线的活动 | 所有纳入的排放点及有文件记录的无组织排放 | 按路线计算产生量和控制后排放量，避免重复计算，按原子流汇总并按干态可销售产出质量归一化 | 实验室报告；仪器校准；供应商 SDS；控制日志；活动核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 归一化数量 = 报告期交换数量 / 报告期干态可销售锅炉质量 | 采集的原子交换数量；干态可销售锅炉质量 | 每 1 kg 参考产品的数量 |  |
| `calc_electricity_conversion` | 外购电力 | electricity_MJ = electricity_kWh × 3.6 | 以 kWh 表示的校准电表读数 | 以 MJ 表示的电力 |  |
| `calc_coating_voc` | 排入空气的涂装 VOC | VOC 排放 = 涂料消耗量 × 供应商 VOC 质量分数 − 回收溶剂 − 实测控制装置破坏或去除的 VOC；不得把该规则用于未申报 VOC 的粉末涂料 | 涂料质量；供应商 VOC 分数；回收溶剂；实测控制装置去除或破坏量 | 排放的 VOC，kg | us-epa-ap42-other-metal-coating |
| `calc_welding_particulate` | 排入空气的焊接颗粒物 | 有实测值时采用总颗粒物实测值；否则用耗材量乘以有文件依据的工艺/焊材特定烟尘因子，再应用实测捕集和控制性能 | 耗材质量；焊接工艺；焊材识别；烟尘因子；捕集和控制数据 | 排放的颗粒物，kg | us-epa-ap42-electric-arc-welding |
| `calc_mass_reconciliation` | 产品和材料质量 | 比较干态可销售产品与另行计量的废钢和废物之和与材料净领用量；对于排放、库存变化或测量不确定性造成的差异应调查，不得强制配平 | 材料净领用；干态产品；废钢；废物；相关排放；库存变化 | 有文件记录的质量平衡差异 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留必需限定信息和批准的产品配置，避免把不同锅炉设计静默合并。 | 产品数据表；铭牌规范；批准图纸；试验证书 |
| `dq_temporal_coverage` | 所有前景交换 | 覆盖一个有代表性的连续 12 个月；如期间较短，应说明季节性、停产情况和缩短原因。 | 带日期的仪表、ERP、发票、试验和外运记录 |
| `dq_meter_reconciliation` | 能源、气体和水 | 将分表与场址总量核对，并披露分配方法和参考条件换算。 | 校准证书；发票；核对工作表 |
| `dq_bom_completeness` | 材料投入和输出 | 将完整物料清单及配置特定外购部件与干态发运质量核对；不得把遗漏材料隐藏在组合流中。 | 受控物料清单；仓库台账；发运质量；质量平衡 |
| `dq_emission_specificity` | 直接空气排放 | 保留污染物识别、排放点、测量或因子来源、控制状态和运行路线；不得把某一物种的结果报告为总颗粒物或总 VOC。 | 烟道报告；实验室结果；SDS；因子引用；控制日志 |
| `dq_upstream_representativeness` | 外购产品投入 | 采用与产品牌号/状态、供应商地域和技术一致的上游数据集，并披露代理。 | 供应商声明；数据集元数据；代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | 数据集识别 | 确认规范 PCR id、锅炉成品边界、全部必需限定信息、干态质量参考数量及参考产品 UUID 的未解决状态。 | un-cpc-3-0-structure-2025; eu-steam-boilers-ecodesign-2014 |
| `validate_process_presence` | 过程清单 | 要求包含 `boiler_manufacture` 及所有适用的原子投入、废物和基本流卡；有条件流行应存在，或凭证据明确标示为不适用。 | eu-steam-boilers-ecodesign-2014; us-epa-ap42-electric-arc-welding; us-epa-ap42-other-metal-coating |
| `validate_no_use_phase` | 系统边界 | 禁止在工厂门口前景清单中计入锅炉全寿命燃料、所产蒸汽或热水服务、用户现场给水处理和输配。 | eu-steam-boilers-ecodesign-2014 |
| `validate_bom_mass` | 质量核对 | 检查材料净领用量与干态产品、废钢、废物、排放及库存变化的核对结果；调查材料差异，不得用未指明流进行配平。 | eu-pef-method-2021 |
| `validate_energy_separation` | 能源清单 | 确认电力和天然气保持为分开的原子交换，并确认天然气与直接化石二氧化碳同时适用，或解释两者差异。 |  |
| `validate_water_balance` | 水压试验 | 确认新鲜试验用水投入、实测循环/留存和废水排放未重复计算，且临时用水未计入干态产品质量。 |  |
| `validate_allocation_disclosure` | 共用作业 | 确认先尝试细分，并披露每个剩余分配动因、因子、期间和敏感性。 | eu-pef-method-2021 |
| `validate_uuid_gaps` | 未解决识别 | 在确认准确的公开 state-100 身份前，碳钢板、参考锅炉、焊接颗粒物和涂装 VOC 流行保持 UUID 为空；不得用代理代替。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 锅炉成品制造从摇篮到制造商工厂门口的前景数据包及其 process 或 lifecyclemodel 投影 |
| allowed_use | 在设计、压力、容量、配置、地域和时间匹配后开展制造比较；分析锅炉材料和工厂作业贡献；在代表性有文件依据时作为背景数据使用 |
| excluded_use | 未补充下游建模时，不得比较全寿命蒸汽或热力服务、运行效率、燃料性能、已安装蒸汽系统、集中供暖锅炉或单独供应的辅助设备 |
| required_metadata | 规范 PCR id；出口介质；设计；额定输出和容量；工作压力；出口温度；燃料/热源；一体化部件范围；干态发运质量；外购与自制划分；工厂地域；报告期；分配；未解决 UUID；排除项 |
| required_quality_disclosure | 初级数据覆盖；物料清单和质量核对；仪表覆盖和分配；上游数据集代表性；排放测量/因子依据；水循环使用；废钢去向；条件路线适用性；代理使用；不确定性和未解决范围证据 |
| update_trigger | 产品设计、压力或容量等级、物料清单、供应商地域、焊接/涂装/试验路线、工厂能源结构、分配方法、排放控制、参考产品身份或独立范围证据可用性发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | 正式类别识别及集中供暖用热水锅炉排除项 |
| `cn-mofcom-gazette-2011-53` | official_guidance | 《中国对外经济贸易文告》2011 年第 53 期（总第 690 期），中华人民共和国商务部主管，印刷页第 36 页品目 8402，https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web2757/site/picture/zcom/upload/20111130/U201111301322643543135.pdf（检索于 2026-09-05） | 专业中文产品标题术语及集中供暖用热水锅炉排除项 |
| `eu-steam-boilers-ecodesign-2014` | official_guidance | PwC、ICCS 与 Fraunhofer ISI，《蒸汽锅炉生态设计准备研究最终报告》，2014，https://www.energimyndigheten.se/4a9642/globalassets/energieffektivisering_/jag-ar-saljare-eller-tillverkare/dokument/produkter-med-krav/angpannor/20141217-steam-boilers-ecodesign-final-report.pdf（检索于 2026-09-05） | 产品和严格系统范围、火管式/水管式差异、一体化选件、制造 BOM 类别及配置限定信息 |
| `us-epa-ap42-electric-arc-welding` | official_guidance | 美国环保署，《AP-42 电弧焊第 12.19 节最终背景文件》，https://www.epa.gov/sites/default/files/2020-11/documents/c12s19_0.pdf（检索于 2026-09-05） | 焊接过程分解、耗材识别及颗粒物采集/计算要求 |
| `us-epa-ap42-other-metal-coating` | official_guidance | 美国环保署，《AP-42 第 4.2.2.4 节：其他金属涂装》，https://19january2021snapshot.epa.gov/sites/static/files/2020-10/documents/c4s02_2d.pdf（检索于 2026-09-05） | 金属涂装过程、涂料/VOC 质量平衡及控制状态要求 |
| `eu-pef-method-2021` | official_guidance | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-09-05） | 分配层级、实质性、数据质量和透明建模要求 |
