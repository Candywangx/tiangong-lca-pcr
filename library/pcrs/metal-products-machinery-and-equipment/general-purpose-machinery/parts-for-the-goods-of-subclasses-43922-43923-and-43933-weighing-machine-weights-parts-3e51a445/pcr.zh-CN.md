---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43922-43923-and-43933-weighing-machine-weights-parts-3e51a445
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类43922、43923和43933所列货物的零件；衡器用砝码；农业或园艺用液体或粉末喷射、散布或喷雾机械器具的零件

## 1. 范围与适用性

本 PCR 规定下述机械零件和衡器用砝码从外购投入进入制造场址到成品出厂大门的前景数据生产规则。数据应代表一个明确零件号的生产批次；仅当各成员的材料组成、制造路线、质量规范、市场状态、生产场址和报告期相同时，才可按质量汇总为产品族。本 PCR 适用于由外购材料经备料、成形、机加工、连接、热处理、清洗、表面精整、检验和包装制成的金属或聚合物零件；只有实际发生的活动才纳入。

完整衡器、完整灭火器或喷射器具、完整压延机或其他滚压机、完整农业或园艺喷射器具、金属轧机零件、无关机械零件、维修服务、资本设备、配送、使用和报废阶段不在范围内。CPC 正式身份仅界定产品类别，不规定材料或制造路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43922-43923-and-43933-weighing-machine-weights-parts-3e51a445 |
| classification_refs | CPC 3.0：43943（精确分类语境；映射接受仍单独治理） |
| covered_products | CPC 43922 衡器零件；CPC 43923 灭火器、喷枪、喷砂或喷汽设备及类似喷射机械零件；CPC 43933 压延机或其他滚压机零件（金属或玻璃用机械除外）；衡器用砝码；农业或园艺用液体或粉末喷射、散布或喷雾机械器具的零件 |
| excluded_products | 完整机械或器具；灵敏度为5厘克或更高（分度值5厘克或更小）的天平；金属或玻璃滚压机零件；无法证明属于本边界的一般非电气机械零件；维修服务；工装和资本设备 |
| representative_product | 一个符合图样、物料清单和验收规范的已声明可销售机械零件或衡器用砝码 |
| production_route | 以已声明外购金属或聚合物原料进行路线特定制造，仅纳入实际实施的成形、机加工、连接、热处理、清洗、涂覆、检验和包装工序 |
| market_state | 制造场址大门处已完工、已检验、可销售的零件；仅在随产品供应时纳入包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供属于覆盖边界并符合已声明图样和验收规范的成品零件或衡器用砝码 |
| How much | 1,000 kg 合格可销售零件净质量，不含包装质量 |
| How well | 符合已声明零件号、材料牌号或配方、尺寸公差、表面状态、涂层规范、检验计划以及适用法规或客户要求 |
| How long or cycle | 已声明报告期内完成的一个制造批次；不声明使用寿命性能 |
| reference_flow_link | `component_manufacture` 的合格净输出；包装、废品和生产废料为独立交换 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 43922、43923及43933次级所列制品的零件，衡器的砝码，液体或粉末投射、弥散或喷射用农业或园艺机械设备的零件 `2e29c602-77c9-4507-a7de-ccac1ff525b8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 覆盖的产品亚型；零件号或产品族规则；母机应用；材料牌号或聚合物配方；产品净质量；图样版本；制造路线；热处理；表面处理或涂层；质量规范和检验状态；纳入的包装；生产场址和地理范围；技术；报告期；再生含量声明依据 |

构建前景数据包时，`必需限定信息` 中的内容必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明；缺失即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终检验后、包装前确定合格产品净质量；不计包装、废品、留样、在制品和可重复使用运输器具。 |
| `batch_normalization` | 所有清单行 | 各行规定的属性 | 各行参考单位/1,000 kg | 仅使用同一场址、路线、产品族和报告期的记录；将交换量乘以1,000，再除以合格产品净质量（kg）。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量能源基准；按1 kWh = 3.6 MJ换算，并披露电网、电压、地理范围、损耗和现场发电。 |
| `gas_volume_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量参考温度和压力并统一条件；无记录换算时不得混用标准、正常和实际立方米。 |
| `mass_balance` | 材料输入和输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将外购材料与合格产品、共产品、废料、废物、排放、库存变化和有记录的计量损失进行核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购原料、化学品、气体、能源、水和包装已到达制造场址大门，并声明供应商产品状态和上游数据集 |
| starting_condition_role | 供应商生产与前景零件制造之间的上游截断点 |
| product_classification_scope | 前景输出必须可证明属于覆盖的语义边界；CPC 43943 是分类语境而非规范身份 |
| recursive_input_rule | 属于本 PCR 的外购组件作为一个上游产品输入并链接供应商数据集；不得在同一前景过程中递归复现其制造 |
| upstream_dataset_requirement | 每项外购输入均链接地理和技术上具有代表性的上游数据集，并披露代理 |
| disclosure | 声明场址、路线、产品亚型、产品族规则、材料和再生含量、纳入与排除工序、表面处理、包装边界、分配、报告期和上游代理 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景系统 | 纳入外购投入的接收和内部搬运、制造合格零件所需的现场工序、现场公用工程和处理、直接排放、生产废物、检验和随产品供应的包装，直至制造场址出厂大门。 | `eu-pef-method-2021` |
| `boundary_route_disclosure` | 路线特定工序 | 成形、机加工、连接、热处理、水性或溶剂清洗、涂覆和精整仅在实际实施时纳入；外协加工记录为上游产品或服务数据集。 | `eu-jrc-sf-bref-2024`、`eu-jrc-stm-bref-2006`、`eu-jrc-sts-bref-2020` |
| `boundary_exclusions` | 排除的生命周期阶段 | 除非研究明确扩展并单独报告，否则排除资本品、员工通勤、下游配送、安装、维护、使用和报废阶段。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture` | 路线特定的零件制造、精整、检验和包装 | required | 始终纳入；披露实际工序，并为其他实际交换各增设一个原子行 | 前景生产 | 1,000 kg 合格可销售零件净输出 |

### 过程：路线特定的零件制造、精整、检验和包装（`component_manufacture`）

#### 输入

##### 产品流

###### 非合金钢棒材投入（`non_alloy_steel_bars`）

仅当物料清单包含这一准确材料状态时记录；其他钢牌号或形态另设行。

- 选定流：非合金钢棒材 `b904bee3-489f-4ee7-88b9-2a9a06d62113`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：该批次消耗量等于供应商收货量加期初库存减期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_packaging_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 初级铝合金板材投入（`primary_aluminium_alloy_sheet`）

仅当使用这一准确外购状态时记录；不得与带材、锭、再生合金或其他铝形态合并。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：该批次消耗量等于供应商收货量加期初库存减期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_packaging_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 铸铁投入（`cast_iron_feedstock`）

仅在外购铸铁的路线中记录；同名候选的分类存在冲突，因此 UUID 未解决。

- 选定流：铸铁投入
- 流属性/单位：Mass / kg
- 数量规则：该批次消耗量等于供应商收货量加期初库存减期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_packaging_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 聚丙烯粒料（`polypropylene_granulate`）

仅在聚丙烯成型路线中记录；其他聚合物和再生配方另设原子行。

- 选定流：聚丙烯粒料（PP）`4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：该批次消耗量等于供应商收货量加期初库存减期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_packaging_records`
- 来源：

###### 电力（`electricity`）

纳入生产设备、通风、压缩空气、过程冷却、清洗、涂覆、检验和包装所用的全部外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：专用电表读数，或从已核对场址总表按因果驱动因素分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_gas_records`
- 来源：

###### 气态天然气（`natural_gas`）

仅在现场燃烧天然气用于熔化、加热、热处理、涂层固化或其他已声明工序时纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：在已声明参考条件下归属于该批次的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_gas_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 工业氧气（`industrial_oxygen`）

仅在热切割、熔化或其他已声明工序消耗外购氧气时纳入。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：归属于该批次的供应商或流量计体积，并披露压力、纯度、温度和供应边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_gas_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅在焊接中消耗外购二氧化碳时纳入；不得用于记录燃烧排放。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于该批次的气瓶库存平衡或质量流量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_gas_records`
- 来源：

###### 工艺用水（`process_water`）

仅纳入机加工、冷却、水性清洗、漂洗或表面处理消耗或带走的水，并单独披露循环使用。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：补充水计量或罐体平衡，不计内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 氢氧化钠（`sodium_hydroxide`）

仅在水性清洗或表面处理中消耗时纳入，并报告供应溶液质量和浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于该批次的供应品领用记录，并保留浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 切削液（`cutting_fluid`）

纳入机加工系统补加的新鲜切削液，并披露配方、稀释水、循环和库存变化。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于该批次的新鲜浓缩液领用量加期初库存减期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 粉末涂层（`powder_coating`）

仅在零件实施粉末涂装时纳入；记录扣除回收入库量后的新鲜粉末投入。

- 选定流：粉末涂层 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：新粉领用量加期初库存减期末库存和回收入库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-sts-bref-2020`

###### 瓦楞纸板包装（`corrugated_cardboard`）

仅纳入随可销售产品供应的瓦楞纸板；重复使用包装仅记录其已分配损耗。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：供应件数乘以经核实的单件质量，或直接采用包装领用质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_packaging_records`
- 来源：

###### 聚乙烯包装薄膜（`polyethylene_packaging_film`）

仅纳入随产品供应的聚乙烯薄膜。同名候选分类冲突，因此 UUID 未解决。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：供应件数或长度乘以经核实的单位质量，或直接采用领用质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格可销售参考产品（`reference_product_output`）

仅记录边界内经检验可销售的零件；不计废品和返工在制品。

- 选定流：43922、43923及43933次级所列制品的零件，衡器的砝码，液体或粉末投射、弥散或喷射用农业或园艺机械设备的零件 `2e29c602-77c9-4507-a7de-ccac1ff525b8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由实测合格批次净质量归一化后设为1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_output_waste_emission_records`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

纳入离开边界的钢制边角料、切屑和报废钢件；其他金属和聚合物废物另设行。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于该批次的外运废钢称量加期末废料库存减期初库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_emission_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 清洗废水（`cleaning_wastewater`）

仅纳入水性清洗或表面处理排放或送往处理的废水，并披露组成、处理和去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归属于该批次的排放计量、罐车转运质量或经核实的体积-质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_emission_records`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

###### 排放到空气的化石源二氧化碳（`fossil_co2_air_emission`）

纳入现场燃料燃烧的直接化石源二氧化碳；不计电力上游排放和外购保护气投入。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接测量，或根据计量化石燃料和有记录的含碳量方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_output_waste_emission_records`
- 来源：

###### 排放到空气的PM10（`pm10_air_emission`）

仅在实际存在时纳入磨削、喷砂、热切割或涂覆产生的实测或许可 PM10；须核实场址排放隔室后再确定 UUID。

- 选定流：颗粒物（PM10），排放到空气
- 流属性/单位：Mass / kg
- 数量规则：场址特定测量，或根据控制设施记录和经核实排放方法计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg合格可销售零件净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_emission_records`
- 来源：`eu-jrc-sf-bref-2024`、`eu-jrc-sts-bref-2020`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用工序和公用工程 | 优先采集产品线或批次特定记录，并在技术可行时细分共用工序以避免分配。 | `eu-pef-method-2021` |
| `allocation_physical` | 无法避免的共用投入、废物和排放 | 无法细分时，采用有记录的因果物理驱动因素，如机器小时、计量能源、加工质量、槽液负荷或涂覆面积；证明代表性并在报告期内保持一致。 | `eu-pef-method-2021` |
| `allocation_other` | 无可辩护物理关系的情况 | 只有在说明细分和物理分配不可行后，方可采用其他关系（包括经济分配）；报告因子、期间、产品、敏感性和份额。废料或回收不得在无单独声明方法时计入信用。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_packaging_records` | `component_manufacture` | 按row_id区分的材料和随附包装 | 发票、收货、领用、盘点、物料清单、单件质量试验 | 身份、牌号或配方、供应商、数量、单位、批次、期初与期末库存、生产批次、包装件数、单件质量 | 核对收货、领用、退回和库存；按件数换算质量时称量代表性包装 | kg | 每批；每月核对 | 输出报告期 | 场址内全部纳入生产线 | 按原子流汇总批次归属消耗量并归一化 | 校准称、供应商规范、库存核对、物料清单版本 |
| `cp_energy_gas_records` | `component_manufacture` | 按row_id区分的电力和各气体 | 仪表、发票、气瓶平衡、运行时间 | 仪表读数、发票数量、单位、参考条件、纯度、气瓶库存、生产线、批次、分配驱动因素 | 优先使用专用表；否则用因果物理驱动因素分配已核对场址总量 | 各行规定的MJ、m3或kg | 仪表周期或每次换瓶；每月汇总 | 输出报告期 | 纳入的设备和公用工程 | 汇总净购入量，调整库存或外送，分配并归一化 | 校准、发票核对、参考条件记录、分配表 |
| `cp_water_chemical_records` | `component_manufacture` | 按row_id区分的工艺水和各化学品 | 仪表、罐体平衡、领用、盘点、配方 | 新鲜投入、浓度、稀释水、回收量、期初与期末库存、批次、生产线 | 记录跨越边界的新鲜物料，并单列内部循环和回收入库 | kg | 每批；每月核对 | 输出报告期 | 纳入的湿法、机加工和涂覆工序 | 净新鲜投入等于收货或领用加期初库存减期末库存和退回；归一化 | 校准、浓度证书、槽液日志、库存核对 |
| `cp_output_waste_emission_records` | `component_manufacture` | 按row_id区分的产品、各废物和各直接排放 | 生产质量、检验、废物联单、仪表、烟道试验、燃料记录 | 输出与废品质量、废物质量、库存变化、排放量、污染物、处理、燃料含碳数据、PM10结果、排放隔室 | 称量输出和废物，计量排放；可行时采用直接排放测量 | kg | 每批、每次排放或规定试验 | 输出报告期 | 所有纳入排放点和去向 | 核对库存，必要时按采集投入计算排放，并归一化 | 校准、检验放行、废物联单、实验室或烟道报告、计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每项清单数量 | 归一化量 = 批次归属交换量 × 1,000 / 合格产品净质量 | 采集交换量；合格产品净质量 | 每1,000 kg参考产品的行数量 | |
| `calc_electricity_conversion` | 以kWh记录的电力 | 电力MJ = 外购kWh × 3.6 | 外购kWh | 外购MJ | |
| `calc_packaging_mass` | 按件数或长度记录的包装 | 包装质量 = 经核实单件质量 × 件数，或经核实线质量 × 长度 | 件数或长度；质量因子 | 随附包装kg | |
| `calc_fossil_co2` | 未直接测量CO2的化石燃料燃烧 | 使用采集燃料量、经核实含碳量或获准燃料因子、氧化基准和有记录单位换算；在数据集中标识方法和因子来源 | 燃料量；含碳量或因子；氧化基准 | 化石源CO2 kg | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和每项交换 | 保留产品族规则、图样版本、母机应用、材料或配方、供应商或去向、已解决Tiangong身份和代理理由。 | 放行记录、物料清单、供应商规范、联单、UUID审计 |
| `dq_route` | 边界和过程图 | 标识每项实际工序、外协工序以及本表未预列的每项原子交换。 | 路线卡、过程流程、作业指导、供应商服务记录 |
| `dq_measurement` | 数量 | 可行时使用经校准仪表和称；记录估算、换算、分配、参考条件、浓度、库存变化和不确定性。 | 校准、仪表日志、实验室结果、计算表 |
| `dq_temporal` | 报告期 | 使用连续且具代表性的期间，并披露停产、启动批次、异常废品、返工和产能利用率。 | 有日期的生产、仪表、库存、检验和废物记录 |
| `dq_completeness` | 清单 | 核对材料和输出质量并解释差异；每项实际材料、能源、化学品、气体、废物、废水和基本流排放均另设原子行。 | 质量平衡表和完整性清单 |
| `dq_ranges` | 重要流 | 在两个独立且边界兼容的原始来源支持外部范围前，仅使用前景采集，不设数值默认范围，并将用于比较的结果标记审查。 | 未解决范围证据登记和前景记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 输出不属于覆盖边界、参考UUID不同，或缺少产品、材料、路线、质量、地理、技术或期间限定信息时失败。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | 参考流 | 归一化后必须恰为1,000 kg合格产品净质量；不得计入包装、废品、废料和在制品。 | |
| `validate_inventory_atomicity` | 过程清单 | 合并流或伞形“选定流”失败；每项交换只允许一个方向、流类型、属性、单位、数量方法和适用条件。 | |
| `validate_uuid_semantics` | 含UUID的行 | UUID、英文名、Tiangong正式中文名、流类型、分类、属性、单位组和产品状态必须匹配；未解决行保持UUID为空并记录原因。 | |
| `validate_energy_gas` | 电力和气体 | 必须记录电力换算以及气体参考条件、纯度或组成、供应边界、地理范围和分配。 | |
| `validate_mass_balance` | 材料和输出记录 | 必须提供质量平衡，并解释计量损失、库存变化、废料、废物、排放和未核对差异。 | |
| `validate_allocation` | 共用过程 | 必须记录分配层级、驱动因素、因子、期间、产品和敏感性；拒绝无记录分配或废料双重信用。 | `eu-pef-method-2021` |
| `validate_ranges` | 数值外部范围 | 若推断范围没有至少两个独立原始来源、兼容边界/功能单位/产品状态，且综合未解释地理和技术差异，则拒绝。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查和发布后作为`secondary_dataset`或`background_dataset` |
| downstream_use | 对已声明覆盖零件或衡器用砝码进行前景过程建模，并聚合到边界兼容的生命周期模型 |
| allowed_use | 已声明产品亚型、材料、路线、质量、地理、技术、包装边界和期间，或由兼容记录形成且有说明的代表性平均值 |
| excluded_use | 完整机械、无关零件、未经调整的不同材料或路线、使用、维护、配送、报废，或实质不同的地理或技术 |
| required_metadata | PCR id及发布版本；参考UUID；亚型；产品族规则；母机应用；材料和再生含量；净质量；图样和规范；路线；场址；地理；技术；期间；工序；包装；上游数据集和代理；分配 |
| required_quality_disclosure | 一手数据占比；仪表和称覆盖；代表性；质量平衡；分配份额；缺失或估算交换；未解决UUID；排放方法；上游代理；不确定性和审查状态 |
| update_trigger | 产品族、材料、再生含量、供应商、路线、热处理或表面处理、包装、场址、能源、排放控制、分配、上游数据集变化，或成品率、废料、水、能源、排放发生实质变化 |

## 11. 数据源

| 来源id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC 3.0版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于2026-09-06） | 正式类别身份、母类、覆盖与排除 |
| `eu-jrc-sf-bref-2024` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，Smitheries and Foundries Industry BREF正式页面，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry（检索于2026-09-06） | 条件性成形、机加工、精整、热处理、铸造和材料管理过程分解 |
| `eu-jrc-stm-bref-2006` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，Surface Treatment of Metals and Plastics BREF正式页面，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索于2026-09-06） | 条件性水相电解或化学表面处理 |
| `eu-jrc-sts-bref-2020` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，Surface Treatment Using Organic Solvents BREF正式页面，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation（检索于2026-09-06） | 条件性涂覆、涂装、清洗和脱脂 |
| `eu-pef-method-2021` | 标准（`standard`） | 欧盟委员会建议(EU) 2021/2279，《产品环境足迹方法》，2021-12-30合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230（检索于2026-09-06） | 功能单位、边界、公司特定数据、质量和多功能过程层级 |
