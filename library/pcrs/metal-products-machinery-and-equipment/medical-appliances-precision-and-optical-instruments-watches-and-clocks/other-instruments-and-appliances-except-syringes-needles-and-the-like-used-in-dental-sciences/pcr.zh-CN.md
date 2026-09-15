---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-instruments-and-appliances-except-syringes-needles-and-the-like-used-in-dental-sciences
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牙科用其他仪器及器具（注射器、针及类似品除外）

## 1. 范围与适用性

本 PCR 适用于产品身份属于上述牙科用途类别的实体仪器及器具的制造商出厂生产。只要产品身份属于该边界，单次使用或可重复使用、有动力或无动力产品均可适用。前景数据包必须明确具体产品型号和制造路线。

注射器、针及类似注射用品不在范围内。牙科服务、使用他人所有材料开展的制造服务、牙科家具、灭菌器、诊断成像设备、牙科材料和制剂以及临床使用活动不在本 PCR 范围内，除非研究将其纳入另行披露的系统边界。代表性路线为可重复使用的不锈钢牙科手用器械，因为不锈钢常用于牙科器械；该代表性路线并不表示所有涵盖产品均由不锈钢制成。物料清单或动力架构存在实质差异的产品必须声明该差异，并纳入其实际原子交换。

默认边界始于进入制造场址的外购材料、组件、包装和能源载体，止于制造商出厂的合格包装产品。上游生产由链接的背景数据集表示；分销、临床使用、用户再处理和生命末期不在默认前景边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-instruments-and-appliances-except-syringes-needles-and-the-like-used-in-dental-sciences |
| classification_refs | CPC 3.0: 48130 |
| covered_products | CPC 3.0 代码 48130 范围内供牙科用途的成品仪器及器具；符合所声明类别边界的单次使用或可重复使用、有动力或无动力产品 |
| excluded_products | 注射器、针及类似注射用品；归类为牙科家具、灭菌器、诊断成像设备、牙科材料或制剂的产品；牙科服务和制造服务 |
| representative_product | 制造商出厂供应的可重复使用不锈钢牙科手用器械 |
| production_route | 外购不锈钢；成形或机加工；有条件的水基清洗或表面处理；最终装配或检验；包装 |
| market_state | 采用所声明销售包装的合格成品，并声明无菌状态以及可重复使用或单次使用状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可履行制造商所声明牙科功能的成品牙科仪器或器具 |
| How much | 1 kg 合格成品净质量（不含包装），并同时报告件数 |
| How well | 符合所声明型号、材料、性能、表面光洁度、清洁度和无菌规范 |
| How long or cycle | 制造商出厂；声明可重复使用寿命或单次使用状态，但参考数量不包含使用周期 |
| reference_flow_link | 1 kg 合格输出行 `finished_dental_instrument` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | 牙科用仪器或器具；Tiangong UUID 未解决 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型和型号；预期牙科功能；有动力或无动力；单次使用或可重复使用；物料清单及适用时的不锈钢牌号；净质量和件数；制造路线；表面处理；清洁度和无菌状态；包装配置；制造地理区域；参考年份 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺少必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及所有按质量归一化的行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按最终检验后 1 kg 合格产品净质量归一化；分母不含包装质量和不合格品，并另报件数。 |
| `electricity_energy` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表记录的 kWh，并按 1 kWh = 3.6 MJ 换算；不得将上游发电排放计作直接前景排放。 |
| `water_mass` | 工艺用水和废水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用质量测量；仅测量体积时，使用有记录且适合相应温度的密度，并保留原始体积记录。 |
| `gas_volume` | 天然气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量参考温度、压力以及干基或湿基，并始终采用一致的体积基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至制造场址门口的外购原材料、组件、包装和能源载体 |
| starting_condition_role | 前景制造投入边界 |
| product_classification_scope | 属于经审查语义边界的牙科仪器及器具；CPC 3.0 代码 48130 是映射语境而非规范身份 |
| recursive_input_rule | 外购的同类别仪器或器具作为一个产品投入记录，披露其供应商阶段完成状态和数量；不得在此前景数据包内递归重建其制造清单。 |
| upstream_dataset_requirement | 每项外购材料、组件、能源载体和包装投入均链接至地理、技术和产品状态适当的上游数据集。 |
| disclosure | 声明哪些制造、表面处理、清洗、装配、检验、灭菌和包装作业在场内进行；识别外包作业和截断。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造数据包 | 纳入截至合格产品在制造商出厂放行之前的场内制造、实际进行的水基清洗或表面处理、装配、检验、包装、直接公用工程、废物和直接排放。 | `un-cpc-3-0-structure-2025`, `ec-jrc-stm-bref-2006` |
| `boundary_conditional_routes` | 路线特定作业 | 仅在某作业属于所声明产品路线时纳入；外包处理或灭菌作为外购服务或上游过程识别，不得无说明遗漏。 | `ec-jrc-stm-bref-2006` |
| `boundary_direct_emissions` | 前景基本流 | 仅报告从前景场址直接进入环境的排放；上游排放保留在链接的产品或能源数据集中。 | `ec-jrc-stm-bref-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_fabrication` | 材料成形与机加工 | conditional | 当报告场址对原材料实施成形、切割、磨削或机加工时纳入；否则披露外购成品组件。 | 前景制造 | 合格产品质量和材料平衡 |
| `surface_treatment_cleaning` | 水基清洗与表面处理 | conditional | 当报告场址实施水基清洗、钝化、电化学处理、涂层、漂洗或加热干燥时纳入。 | 前景精整 | 经处理产品质量或处理面积，并与合格产品核对 |
| `final_inspection_packaging` | 最终检验与包装 | required | 始终纳入制造商出厂前的最终合格判定和销售包装。 | 前景放行 | 1 kg 合格成品净质量 |

### 过程：材料成形与机加工（`material_fabrication`）

#### 输入

##### 产品流

###### 不锈钢坯料（`stainless_steel_input`）

记录代表性路线制造产品时进入场址的不锈钢。声明牌号、坯料形态、供应商、已知再生含量和交付质量。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：Mass / kg
- 数量规则：合格品和不合格品生产所消耗的外购不锈钢质量，扣除有凭证且未经改变的供应商退货
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：`us-fda-iso-21850-1-recognition-2026`

###### 制造用电（`fabrication_electricity`）

记录成形、机加工、磨削、抽排以及直接支持制造的设备所使用的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：制造用电表读数，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：

###### 制造工艺用水（`fabrication_process_water`）

制造阶段使用机加工冷却液补充水或过程内清洗水时，记录其直接工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量的制造工艺用水投入，不含生活用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类收集的钢制造废料（`post_industrial_steel_scrap`）

将离开制造过程的钢边角料、切屑和不合格钢件记录为一个分类收集的工业后废料流。声明合金牌号、污染、内部回用和去向。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开前景制造过程的钢废料称量质量，不含在同一计量平衡内内部返回的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：

##### 基本流

### 过程：水基清洗与表面处理（`surface_treatment_cleaning`）

#### 输入

##### 产品流

###### 碱性清洗用氢氧化钠（`surface_sodium_hydroxide`）

仅当所声明产品路线使用氢氧化钠进行碱性清洗或处理时，记录该化学品消耗。声明供应浓度和活性物质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：添加到前景槽液中的供应态氢氧化钠产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`ec-jrc-stm-bref-2006`

###### 表面处理工艺用水（`surface_process_water`）

记录场内清洗或表面处理路线中的槽液配制水和漂洗水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量的槽液配制和漂洗水投入，不含生活用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`ec-jrc-stm-bref-2006`

###### 表面处理用电（`surface_electricity`）

记录槽液循环、电化学处理、泵、抽排、干燥以及直接支持表面处理设备所使用的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：表面处理用电表读数，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`ec-jrc-stm-bref-2006`

###### 槽液加热或干燥用天然气（`surface_natural_gas`）

仅当气态天然气直接用于处理液加热或经处理产品干燥时，记录场内消耗。声明计量参考条件，并从直接排放中排除上游天然气供应排放。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于槽液加热或干燥的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`ec-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 表面处理废水（`surface_wastewater`）

记录送往场内排放控制或场外处理的单一水性废物流。声明 pH、实测金属或其他相关污染物、处理状态和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：离开表面处理过程边界的实测废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`ec-jrc-stm-bref-2006`

##### 基本流

###### 天然气燃烧直接排放的化石源二氧化碳（`surface_fossil_co2`）

仅记录场内燃烧 `surface_natural_gas` 直接释放的化石源二氧化碳。不得加入电力部门或上游燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接测量排放，或天然气用量乘以有记录的场址特定化石碳排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_co2`
- 来源：

### 过程：最终检验与包装（`final_inspection_packaging`）

#### 输入

##### 产品流

###### 最终检验与包装用电（`packaging_electricity`）

记录最终检验、清洁验证、适用时的装配、标签和包装设备所使用的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：最终检验与包装的计量用电，或以可辩护方式从分表分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 瓦楞外箱（`corrugated_board_boxes`）

记录作为纸质外包装组件供应的瓦楞纸箱。其他包装组件必须作为独立原子行添加，不得汇总到本行。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：纳入销售包装输出的外购瓦楞箱质量，包括可归属的破损箱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格牙科用仪器或器具成品（`finished_dental_instrument`）

记录制造商出厂放行的合格成品净质量和件数。Tiangong 产品流 UUID 仍未解决；不得用金属、废料或通用医疗器械代理流替代。

- 选定流：牙科用仪器或器具；Tiangong UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：合格产品净质量，精确归一化为 1 kg；件数作为必需伴随数量报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用制造作业 | 通过分别计量路线特定作业来避免分配，并将材料、能源、水、废物和排放归属于造成这些交换的产品系列或批次。 | |
| `allocation_shared_loads` | 未分表的共用负荷 | 无法直接计量时，使用设备时间、处理面积、槽液吞吐量或合格产品质量等实测因果驱动量分配共用负荷；披露驱动量，并在其对结果有实质影响时进行敏感性检验。 | `ec-jrc-stm-bref-2006` |
| `allocation_scrap` | 钢废料和回收处理材料 | 明确报告废料和回收材料的数量与去向。除非所选下游系统模型要求替代且披露方法，否则不得在前景清单内计入避免原生生产的抵扣。 | `ec-jrc-stm-bref-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_records` | `material_fabrication` | `stainless_steel_input`; `fabrication_electricity`; `fabrication_process_water`; `post_industrial_steel_scrap` | 采购、计量、生产和废物记录 | 材料 UUID 或牌号、接收质量、退货、电力 kWh、水质量或体积、废料质量、合格产品质量、批次和日期 | 将发票和库存移动与同一生产期间经校准的计量表或秤核对 | kg; kWh; m3 | 每批或每月，并年度核对 | 至少连续 12 个月，较短生产采用完整生产周期 | 报告场址和所声明产品系列 | 汇总可归属数量，扣除有凭证且未经改变的退货，再以合格产品净质量归一化 | 采购记录、计量表编号、校准状态、批记录和质量平衡核对 |
| `cp_surface_records` | `surface_treatment_cleaning` | `surface_sodium_hydroxide`; `surface_process_water`; `surface_electricity`; `surface_natural_gas`; `surface_wastewater` | 槽液、计量、化学品和排放记录 | 化学品质量和浓度、进水、电力 kWh、天然气体积和参考条件、废水质量或体积、污染物结果、处理质量或面积 | 可用时读取专用计量表；将槽液补充和排放日志与所声明路线核对 | kg; kWh; m3; m2 | 每批或每班，按月汇总 | 至少连续 12 个月或完整生产周期 | 服务于所声明产品的场内处理线 | 按直接批记录归属；否则使用处理面积或质量并披露驱动量 | 计量表校准、槽液日志、实验室结果、废物转移联单和路线记录 |
| `cp_combustion_co2` | `surface_treatment_cleaning` | `surface_fossil_co2` | 燃料和排放因子记录 | 天然气体积、参考条件、化石碳含量或批准因子、氧化基准、可用时的实测 CO2 | 优先直接测量；否则将归一化的采集燃料乘以有记录的场址特定或管辖区批准因子 | kg CO2; m3 gas | 与天然气消耗同期 | 与 `cp_surface_records` 同期 | 服务于所声明路线的场内燃烧 | 汇总直接化石源 CO2，并以合格产品净质量归一化 | 燃料证书、因子来源、计算表和计量表校准 |
| `cp_packaging_records` | `final_inspection_packaging` | `packaging_electricity`; `corrugated_board_boxes`; `finished_dental_instrument` | 包装采购、计量和放行记录 | 电力 kWh、纸箱质量、破损纸箱、合格产品净质量、件数、不合格品、型号、包装和无菌状态 | 将包装规范和领用记录与放行生产批次及最终检验记录核对 | kg; count; kWh | 每个放行批次，按月汇总 | 至少连续 12 个月或完整生产周期 | 最终检验与包装区域 | 汇总可归属投入，并以合格产品净质量归一化；件数作为伴随数据保留 | 放行记录、包装规范、秤校准、计量分配和不合格品日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 可归属期间数量 / 同期合格产品净质量 | 可归属流数量；合格产品净质量 | 每 1 kg 合格成品净质量的流数量 | |
| `calc_electricity_mj` | 电力行 | electricity_MJ = metered_kWh × 3.6 | 电表 kWh | 电力 MJ | |
| `calc_water_mass` | 按体积计量的水和废水行 | mass_kg = measured_volume × documented density at the declared temperature | 体积；密度；温度 | 水或废水 kg | |
| `calc_direct_fossil_co2` | `surface_fossil_co2` | direct fossil CO2 = normalized gas quantity × documented fossil-carbon emission factor, or normalized direct measurement | 采集的天然气用量和经验证因子，或直接 CO2 测量 | 每 kg 合格产品的化石源二氧化碳 kg | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留型号、预期牙科功能、动力状态、单次使用或可重复使用状态、材料规范、净质量、件数、表面状态、无菌状态和包装配置。 | 产品规范、物料清单和批次放行记录 |
| `dq_route_completeness` | 过程图 | 将所声明场址路线与三个过程图阶段核对，并说明每个条件阶段为何纳入或缺失；披露外包处理和灭菌。 | 工艺流程图、流转卡或路线记录 |
| `dq_mass_balance` | 不锈钢、合格产品和钢废料 | 对同一期间接收和退回的不锈钢、合格产品、不合格品、废料和在制品中留存材料进行核对；解释材料差额。 | 库存台账、批记录、秤记录和核对表 |
| `dq_temporal` | 所有前景行 | 连续生产使用至少连续 12 个月的一致期间，或使用所声明完整生产周期；披露异常停机和返工。 | 有日期边界的源记录和生产日志 |
| `dq_measurement` | 计量和称量行 | 记录计量表或秤的身份、校准状态、分配方法和缺失数据处理；换算前保留原始单位。 | 校准证书、原始读数和计算工作簿 |
| `dq_surface_effluent` | 表面处理废水 | 保留处理状态、去向及路线相关污染物测量；没有排放边界时，不得从废水组成推断直接环境排放。 | 实验室结果、排放许可记录或废物转移联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别和参考流 | 确认产品属于所声明边界内的牙科仪器或器具且不是注射器、针或类似注射用品；验证所有必需限定信息均已提供。 | `un-cpc-3-0-structure-2025`, `us-fda-iso-21850-1-recognition-2026` |
| `validate_reference_amount` | 参考产品 | 确认归一化后的输出精确为 1 kg 合格产品净质量、排除包装质量且报告件数。 | |
| `validate_atomic_inventory` | 清单行 | 确认每行是一个原子交换、每个条件行与所声明路线一致，并且未以通用材料、能源、包装、废物或排放集合替代具体行。 | |
| `validate_uuid_semantics` | 带 UUID 的行 | 确认选定流名称、流类型、属性、单位组和产品状态与当前公开 Tiangong state-100 身份一致；未解决的参考产品必须保持无代理 UUID。 | |
| `validate_balance_and_boundary` | 材料、能源、废物和排放 | 检查期间一致性、不锈钢质量平衡、能源换算、废水去向，并确认上游电力和燃料排放未重复计为直接前景排放。 | `ec-jrc-stm-bref-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布的前景制造数据集 |
| downstream_use | 所声明牙科仪器或器具的产品碳足迹、生命周期清单和生命周期模型构建 |
| allowed_use | 在所声明产品类型、材料路线、制造地理区域、技术、时期、无菌状态和包装边界内开展比较或建模 |
| excluded_use | 临床服务影响、用户再处理、分销、使用阶段能源或耗材及生命末期（除非另行建模）；代理无关医疗器械或牙科材料 |
| required_metadata | PCR id 和版本；产品型号和功能；净质量和件数；动力和使用周期状态；物料清单；路线和外包作业；地理区域；技术；参考期间；无菌和包装状态；分配和截断选择 |
| required_quality_disclosure | 源数据覆盖；实测与分配比例；计量表和秤的质量；缺失数据处理；材料平衡差额；表面处理和废水路线；未解决的参考产品 UUID |
| update_trigger | 产品设计、物料清单、制造路线、表面化学、能源组合、场址、供应商边界、无菌或包装配置、分配驱动量发生实质变化，或出现新的精确 Tiangong 参考产品身份 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，代码 48130，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-06） | 正式分类身份以及明确排除注射器、针及类似用品 |
| `us-fda-iso-21850-1-recognition-2026` | official_guidance | 美国 FDA 认可共识标准记录 4-395，ISO 21850-1:2020《牙科学—牙科器械材料—第1部分：不锈钢》，https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfstandards/detail.cfm?standard__identification_no=46977（检索于 2026-09-06） | 不锈钢代表性路线，以及单次使用、可重复使用、有动力和无动力牙科器械的适用性 |
| `ec-jrc-stm-bref-2006` | official_guidance | 欧盟委员会联合研究中心，《Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics》，2006 年 8 月，执行摘要第 i–v 页，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索于 2026-09-06） | 条件性表面处理过程分解；电力、燃料、水、酸或碱、废水、废物和直接排放的数据采集 |
