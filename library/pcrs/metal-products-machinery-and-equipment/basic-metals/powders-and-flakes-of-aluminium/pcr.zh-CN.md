---
pcr_id: "pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-aluminium"
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铝粉及片状粉末

## 1. 范围与适用性

本 PCR 适用于制造厂门交付的干态金属铝粉和干态片状铝粉前景数据包。包括通过雾化生产的非合金及铝合金粉末，以及以雾化铝粉或清洁铝箔废料为原料、经干法研磨生产的片状粉末。数据包必须说明实际路线和产品规格；本 PCR 不定义通用市场混合。

铝浆、配制颜料或烟火混合物、铝化合物、粗颗粒，以及压制、涂覆、增材制造或使用等下游过程不在范围内。上游铝生产和场外处理使用独立数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-aluminium |
| classification_refs | CPC 3.0：41531，铝粉及片状粉末 |
| covered_products | 干态金属铝及铝合金粉末；干态铝及铝合金片状粉末 |
| excluded_products | 铝浆；铝化合物；粗颗粒；配制混合物；压制或进一步加工的产品 |
| representative_product | 满足所声明成分、粒度、形貌、表面状态和含水率规格的一种干态铝粉或片状粉末牌号 |
| production_route | 以压缩空气、氮气或氩气进行气体雾化；或对雾化铝粉或清洁铝箔废料进行干法研磨，随后分级和包装 |
| market_state | 在制造厂门以所声明包装交付的干态粉末或片状粉末 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造厂门交付、符合所声明可售产品规格的干态金属铝粉或干态片状铝粉 |
| How much | 净重 1 kg，不含包装质量 |
| How well | 符合所声明牌号/成分、粒度分布、形貌、表面处理或润滑剂含量、含水率和污染物限值 |
| How long or cycle | 数据集参考期内一个具有代表性的生产批次 |
| reference_flow_link | `powder_flake_manufacture` 的 `reference_product` 输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净干产品 |
| 参考产品流 | 铝粉及片状粉末 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 粉末或片状粉末；铝或合金牌号与成分；粒度分布；形貌；表面涂层、钝化或润滑剂含量；含水率；生产路线和雾化气体；原料来源和再生含量；包装；地理范围；参考期 |

所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和归一化交换 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所声明含水基准确定合格产品质量，排除包装，并将交换归一化至 1 kg 净干产品。 |
| `material_mass` | 固体原料、添加剂、包装和废物 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准秤记录，保持干基或收到态基准一致，并披露水分修正。 |
| `gas_reference_volume` | 氮气、氩气、压缩空气和天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告参考压力和温度，并在批次内采用同一有记录的换算基准。 |
| `electricity_energy` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 采用声明的精确单位关系将电表原始读数换算为 MJ；披露电压、网区及场址电表前损耗边界。 |
| `cooling_makeup_mass` | 工艺水输入 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅记录跨边界的补水或直流水，不记录循环流量；记录体积转质量方法。 |

## 5. 系统边界

前景边界必须执行以下规则：

1. 包括场内原料接收与准备、适用时的熔化和雾化、适用时的干法研磨、分级或筛分、均化、内部回用和除尘、冷却补水及包装，直至厂门可售产品。
2. 将压缩空气、氮气和氩气作为各自独立的路线条件输入，不得合并为一种“雾化气体选择”。
3. 将制片用外购铝粉保留为同类别输入，在场址接收处停止递归追溯，并链接已披露的上游数据集。
4. 内部回用料、筛上料或收集粉尘仍在批次边界内时，不得作为废物输出；其影响通过毛原料、能源、收率和外运废物记录体现。
5. 前景过程不包括上游铝及其他投入品生产、资本设备、员工出行、下游运输、使用和寿命终结；链接的数据集应单独披露。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 铝原料、外购铝粉或清洁铝箔废料接收进入场址 |
| starting_condition_role | 上游生产由独立数据集表示的前景起始输入 |
| product_classification_scope | CPC 3.0 代码 41531 下的干态金属产品 |
| recursive_input_rule | 制片用外购粉末保留为显式 `aluminium_powder_feed`；在接收处停止追溯并披露上游数据集 |
| upstream_dataset_requirement | 每一种外购材料、能源、气体、水和包装都链接符合地理、技术和供应状态的数据集 |
| disclosure | 声明路线、合金和牌号、原料来源、内部回用约定、雾化气体、包装、地理、时期和排除项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `powder_flake_manufacture` | 铝粉或片状粉末制造 | required | 始终纳入；按路线选择条件性行，不重复共同交换 | reference_process | 1 kg 净干合格产品 |

### 过程：铝粉或片状粉末制造（`powder_flake_manufacture`）

#### 输入

##### 产品流

###### 雾化用铝原料（`aluminium_feed`）

仅对熔化和雾化路线记录跨场址边界的铝或铝合金原料，并说明牌号和再生含量。

- 选定流：铝材 `269bf9df-c7d0-4621-ac7b-71ce409cfb9a`
- 流属性/单位：质量 / kg
- 数量规则：计量投入批次的合格原料，扣除库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_mass_records`
- 来源：`gopienko-aluminium-powders-2009`

###### 干法制片用外购铝粉原料（`aluminium_powder_feed`）

仅在以外购或独立生产的粉末制片时记录一种明确铝粉原料，并在接收处停止同类别递归追溯。

- 选定流：铝粉原料
- 流属性/单位：质量 / kg
- 数量规则：计量发往研磨批次的粉末，扣除库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干合格片状粉末
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_mass_records`
- 来源：`gopienko-aluminium-powders-2009`

###### 外购电力（`electricity`）

记录所有纳入操作的场址计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：电表计量或依据设备功率与批次工时核算，并按第 7 节分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`ehmsen-gas-atomization-2025`

###### 氮气（`nitrogen_gas`）

仅在雾化、惰化或闭路干法研磨中使用时记录气态氮气，并披露纯度和供应状态。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：体积 / m3
- 数量规则：按声明参考条件计量供应量，扣除库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：氮气路线每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`gopienko-aluminium-powders-2009`；`ehmsen-gas-atomization-2025`

###### 氩气（`argon_gas`）

仅在所声明雾化或惰化路线使用时记录气态氩气，并披露纯度和供应状态。

- 选定流：氩气
- 流属性/单位：体积 / m3
- 数量规则：按声明参考条件计量供应量，扣除库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：氩气路线每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`ehmsen-gas-atomization-2025`

###### 压缩空气（`compressed_air`）

仅对空气雾化或直接计量的工艺服务记录压缩空气，并避免与压缩机电力重复计算。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：按声明条件计量供气；无体积表时记录压缩机电力，二者不得重复
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：空气路线每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`gopienko-aluminium-powders-2009`

###### 天然气（`natural_gas`）

仅在场内燃烧时记录气态天然气，例如中间包预热。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：按声明参考条件计量并分配至生产批次的场内用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：采用直接燃气时每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`ehmsen-gas-atomization-2025`

###### 工艺补水（`process_water`）

记录跨边界的冷却补水或直流水，不记录循环系统流量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量补水或直流水，扣除单独计量的非工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ehmsen-gas-atomization-2025`

###### 硬脂酸研磨添加剂（`stearic_acid`）

仅在干法制片研磨中作为过程控制剂直接添加时记录硬脂酸；其他助剂必须另设原子交换。

- 选定流：硬脂酸
- 流属性/单位：质量 / kg
- 数量规则：称量发往批次的数量，并扣除退回库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：使用时每 1 kg 净干合格片状粉末
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_mass_records`
- 来源：`gopienko-aluminium-powders-2009`

###### 聚乙烯产品袋（`polyethylene_bag`）

记录随产品转移的聚乙烯袋；其他包装组件必须作为独立交换添加。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 / kg
- 数量规则：单袋质量乘以交付袋数，不含未转移的可复用包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：袋装产品每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_mass_records`
- 来源：`ehmsen-gas-atomization-2025`

##### 废物流

###### 清洁铝箔废料原料（`aluminium_foil_scrap`）

仅在清洁铝箔废料跨场址边界并用于干法制片时记录，并披露成分和污染情况。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：质量 / kg
- 数量规则：称量投入批次的合格废料，扣除拒收量和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：废料路线每 1 kg 净干合格片状粉末
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_mass_records`
- 来源：`gopienko-aluminium-powders-2009`

##### 基本流

本 PCR 不预设基本流输入。实际跨越边界的场址特定基本流应作为独立原子交换添加。

#### 输出

##### 产品流

###### 参考干态铝粉或片状粉末（`reference_product`）

这是符合所声明规格的净可售干产品；类别层级 UUID 尚未解决。

- 选定流：铝粉及片状粉末
- 流属性/单位：质量 / kg
- 数量规则：归一化后恰为 1 kg 净干合格产品；不含包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流恒等式
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`mass-balance-identity`

##### 废物流

###### 外运不合格铝粉（`offspec_aluminium_powder_waste`）

仅在不合格粉末离开场址进行处理或处置时记录；内部回用不是输出。

- 选定流：不合格铝粉废物
- 流属性/单位：质量 / kg
- 数量规则：称量外运质量并与转移记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：发生外运时每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_mass_records`
- 来源：`mass-balance-identity`

###### 外运废耐火材料（`spent_refractory_waste`）

仅在耐火材料从纳入设备拆除并运出场址时记录。

- 选定流：耐火材料 `7eb01b83-1b1d-43e4-a5bc-258755063c11`
- 流属性/单位：质量 / kg
- 数量规则：称量外运质量，并依据有记录的寿命或运行时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：适用时每 1 kg 净干合格雾化产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_mass_records`
- 来源：`ehmsen-gas-atomization-2025`

##### 基本流

###### 直接排入空气的化石源二氧化碳（`fossil_carbon_dioxide_air`）

记录场内天然气燃烧产生的直接化石源二氧化碳，不含上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：烟道测量或经核实的场址排放记录分配至批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：燃烧化石燃料时每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：

###### 排入环境空气的铝颗粒物（`aluminium_particulate_air`）

记录控制设施后排入环境空气的含铝颗粒物，不包括收集并回用的粉尘。

- 选定流：排入环境空气的铝颗粒物
- 流属性/单位：质量 / kg
- 数量规则：依据烟道测试、连续监测或控制系统质量平衡确定控制后的净排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | 路线分开的批次和独立计量操作 | 在分配共同负荷之前，优先按路线、批次或设备细分记录。 | `mass-balance-identity` |
| `internal_recycle` | 内部返回粉末、筛上料和收集铝粉 | 将内部返回料留在边界内，不给予共产品抵扣，并核对毛原料、产品、外运废物、损失和库存变化。 | `mass-balance-identity` |
| `shared_grade_allocation` | 一个不可分批次生产多个可售牌号 | 先直接归属牌号特定操作，再按净干质量分配共同负荷；价格差异显著时进行经济分配敏感性分析。 | `mass-balance-identity` |
| `exported_material` | 离开场址的含铝材料 | 根据实际合同去向分类为共产品、可回收材料或废物，并披露负荷或抵扣约定。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_solid_mass_records` | `powder_flake_manufacture` | 固体输入与输出 | 秤、库存、生产和外运记录 | 时间；材料；牌号；批号；毛重；皮重；含水基准；期初库存；期末库存；去向；仪器 | 按批次核对接收、领用、库存变化、产品和外运 | kg | 每次交易及批次结束 | 连续代表性批次 | 所声明生产线和仓储 | 按材料与批次汇总净质量后归一化 | 校准；库存核对；批号和转移记录 |
| `cp_energy_and_gas_records` | `powder_flake_manufacture` | 电力和各供应气体 | 仪表、发票、储罐和设备记录 | 时间；仪表；期初；期末；原单位；气体压力；气体温度；设备；工时；分配键 | 优先专表；核对共用总量并使用有记录的因果分配 | 原单位；MJ；m3 | 连续或每班，按月核对 | 与产品相同批次 | 生产线及披露的共用公用工程 | 扣除非生产用量，分配至批次后归一化 | 校准；发票；历史数据库；分配表 |
| `cp_water_records` | `powder_flake_manufacture` | 工艺补水 | 补水或直流水表 | 时间；仪表；期初；期末；单位；密度基准；排放去向；工时 | 计量跨边界用水并排除循环流量 | kg | 连续或每班，按月核对 | 与产品相同批次 | 服务于生产线的水连接 | 扣除非工艺用水并归一化 | 校准；水平衡；发票 |
| `cp_direct_emission_records` | `powder_flake_manufacture` | 直接二氧化碳和铝颗粒物 | 烟道、核实排放或控制系统平衡 | 时间；污染物；浓度；烟气流量；时长；检出限；控制状态；方法；不确定性 | 将控制后的净排放匹配至运行批次 | kg | 依据监测方案及重大变化 | 数据集期间代表性运行 | 所有直接排放点 | 积分批次排放后归一化 | 实验室；校准；烟道测试；核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | 所有非参考交换 | 批次交换量除以同批次净干合格产品质量 | 交换量；产品质量；水分修正 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `reconcile_material_mass` | 含铝输入与输出 | 同一水分基准下，原料等于产品、外运含铝废物、实测损失及期末减期初在制库存之和 | 原料；产品；废物；颗粒物；库存变化 | 质量平衡差和闭合度 | `mass-balance-identity` |
| `assign_shared_utility` | 共用公用工程和排放 | 先分配专表量，再按有记录的工时或其他因果驱动分配剩余共用量，并与场址总量核对。 | 专表；共用总量；因果驱动；产量 | 批次分配量 | `mass-balance-identity` |
| `convert_gas_volume` | 供应气体 | 将原始数量换算为同一声明压力和温度下的 m3，并保留原始读数和换算输入。 | 原始数量；压力；温度；约定 | 声明条件下 m3 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | 所有记录 | 覆盖连续代表性批次；当维护或换型影响显著时覆盖一个正常周期。 | 批次和维护日志 |
| `dq_technology` | 路线和设备 | 说明实际雾化器或磨机、雾化气体、熔化、分级、除尘和包装。 | 设备清单、工艺流程图、规程 |
| `dq_geography` | 场址和上游链接 | 说明场址地理，并使用符合供应地理和状态的上游数据集。 | 场址元数据、供应商记录、链接审查 |
| `dq_product` | 参考产品 | 报告牌号、成分、粉末或片状、粒度、形貌、含水率、表面处理或润滑剂及包装。 | 产品规格和分析证书 |
| `dq_completeness` | 清单 | 将规定行标记为存在、有证据的零值或有路线原因的不适用；其他重大交换须原子化添加。 | 签字清单和平衡表 |
| `dq_uncertainty` | 计量和分配量 | 记录分辨率、校准、抽样不确定性、分配份额和缺失数据处理。 | 校准、实验室和计算记录 |

## 9. 校验规则

前景数据包仅在满足以下条件时符合本 PCR：

- 归一化后参考输出恰为 1 kg 净干合格产品，且不含包装质量；
- 声明全部必需产品限定信息以及实际雾化或干法研磨路线；
- 每个规定清单行只有一个原子交换，并标为存在、有证据的零值或有路线理由的不适用；
- 铝输入、产品、外运废物、颗粒物和库存变化通过已披露质量平衡检查，否则调查残差；
- 气体体积采用同一声明压力和温度条件，且电力换算为 MJ 可从原始读数复现；
- 压缩空气、氮气和氩气不得聚合或无依据地同时计入，除非记录证明用途不同；
- 直接化石源二氧化碳不含上游排放，铝颗粒物是控制后排入环境空气的净量；
- 内部回用不作为外部废物或共产品，且所有场外废物均有去向记录；
- 分配遵循第 7 节、与共用总量核对，并完成规定的牌号敏感性分析；
- 来源标识、采集协议、计算输入、UUID 流标识、未解决 UUID 和质量证据可供审查。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 发布制造过程，并链接使用干态铝粉或片状粉末产品的生命周期模型 |
| allowed_use | 所声明牌号、路线、地理、技术、包装和时期，或明确限制的合理近似情形 |
| excluded_use | 铝浆、铝化合物、粗颗粒、粉末下游使用或未披露的市场平均路线 |
| required_metadata | PCR id；限定信息；地理；时期；路线；设备；原料来源；再生含量；雾化气体；包装；分配；边界；上游链接 |
| required_quality_disclosure | 代表性；计量和抽样质量；质量平衡闭合；适用性；缺失数据；分配；UUID 和范围证据缺口 |
| update_trigger | 牌号、路线、气体、设备、能源、原料、控制、包装或分配发生重大变化，或数据集超过三年 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `src_unsd_cpc_3_0_2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，核验于 2026-09-04 | CPC 41531 官方产品分类标识 |
| `china-nbs-statistical-products-2010` | official_guidance | 中国国家统计局，统计用产品分类目录 3336，https://www.stats.gov.cn/sj/tjbz/tjypflml/2010/33/3336.html，核验于 2026-09-04 | 专业中文产品名称“铝粉及片状粉末”佐证 |
| `gopienko-aluminium-powders-2009` | literature | V. G. Gopienko，Production of Aluminum and Aluminum Alloy Powders，Handbook of Non-Ferrous Metal Powders，Elsevier，2009，第 267–283 页；图书 DOI 10.1016/B978-1-85617-422-0.X0001-8 | 铝粉产品形态、雾化、干法制片研磨、保护气体、分级和包装 |
| `ehmsen-gas-atomization-2025` | literature | S. Ehmsen、J. Conrads、M. Klar、J. C. Aurich，Environmental Impact of Powder Production for Additive Manufacturing: Carbon Footprint and Cumulative Energy Demand of Gas Atomization，2025，DOI 10.21203/rs.3.rs-6202700/v1 | 可迁移的雾化操作与候选交换；未将不锈钢数量用于铝产品范围 |
| `mass-balance-identity` | method_factor | 所声明生产批次边界内的质量守恒和参考流归一化恒等式 | 归一化、内部回用、干质量分配、计算和校验 |
