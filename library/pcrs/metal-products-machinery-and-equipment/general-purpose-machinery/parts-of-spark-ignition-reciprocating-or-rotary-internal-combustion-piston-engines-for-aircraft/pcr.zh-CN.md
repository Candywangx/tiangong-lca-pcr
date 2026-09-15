---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-spark-ignition-reciprocating-or-rotary-internal-combustion-piston-engines-for-aircraft
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 飞机用火花点火往复式或旋转式活塞内燃机零件

## 1. 范围与适用性

本 PCR 适用于专门为飞机用火花点火往复式或旋转式活塞内燃机制造的全新成品零件。所声明产品必须是单独识别、制造完整、符合适用的批准设计或控制规范，且无需进一步制造即可安装的零件。

从摇篮到制造商大门的前景边界始于报告组织门口接收的外购材料、铸件、锻件或供应商完工子件，包括生产者控制的制造、特殊工艺、检验、不合格品控制、防护和放行活动。供应商控制的制造和特殊工艺通过上游数据集保留在产品系统内。飞机发动机装配、完整发动机、压燃式发动机零件、涡轮喷气和涡轮螺旋桨发动机零件、维修制造或再制造零件、飞机运行、维修及报废阶段均不在本 PCR 范围内。

由于零件号、合金、几何形状和特殊工艺路线存在实质差异，只有在声明全部必需限定信息且采用相同制造商大门边界时，结果才可比较。本 PCR 不主张不同零件号的每千克产品具有功能等价性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-spark-ignition-reciprocating-or-rotary-internal-combustion-piston-engines-for-aircraft |
| classification_refs | CPC 3.0：43152（精确分类语境） |
| covered_products | 以零件而非完整发动机状态供应，且专门用于飞机火花点火往复式或旋转式活塞内燃机的全新成品适航零件，包括气缸、活塞、连杆、曲轴、曲轴箱、配气机构、轴承座以及其他单独识别的零件。 |
| excluded_products | 完整发动机；未限定为飞机火花点火活塞发动机的通用发动机零件；压燃式发动机零件；涡轮喷气、涡轮螺旋桨及其他反作用式发动机零件；螺旋桨；另行分类的电气点火设备；维修制造、修理、翻修或再制造零件；不具备安装资格的原材料和未完成坯料。 |
| representative_product | 已放行且单独识别的飞机火花点火活塞发动机零件，符合适用图样、材料与工艺规范、检验状态和生产批准依据。 |
| production_route | 外购材料或近净成形坯料；机加工和清洗；路线特定的热处理；路线特定的表面预处理、阳极氧化、电镀或涂层；检验、不合格品控制、防护和放行。外包工序用供应商数据集表示，不得省略。 |
| market_state | 制造商大门处的全新、验收合格、可用零件，并声明零件号、修订版/构型、材料牌号、工艺路线、验收状态和净合格质量；运输包装不计入，除非数据集明确将其纳入边界。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供专门用于飞机火花点火往复式或旋转式活塞内燃机的全新、合格、可用零件。 |
| How much | 制造商大门处所声明零件号和构型的 1 kg 净合格质量。 |
| How well | 符合适用的批准设计或控制规范，包括已声明的材料、尺寸、特殊工艺、检验状态、标识和放行依据。 |
| How long or cycle | 截止制造商大门的一次生产与放行周期；不主张不同零件号具有相同服役寿命。 |
| reference_flow_link | aircraft_engine_part_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格产品 |
| 参考产品流 | 飞机用火花点火往复式或旋转式活塞内燃机零件（UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件名称和零件号；图样及修订版/构型；往复式或旋转式发动机用途；飞机用途及安装资格依据；材料牌号和产品状态；外购材料或近净成形坯料状态；热处理路线；表面处理路线；检验和放行状态；净合格质量；制造场址和地域；报告期；外包工艺边界；分配与回收处理；包装纳入状态 |

构建前景数据包时，`必需限定信息` 中列出的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少任何限定信息时，参考流定义均不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用最终处理后、排除的运输包装前的合格零件净质量。全部清单量归一化至 1 kg 合格产品。 |
| `accepted_product_mass` | 生产批次 | Mass | kg | 使用经校准秤具，或零件数量乘以受控且当前有效的该零件号实测单件质量，确定合格产品质量；不计入不合格品和未作为产品放行的样件。 |
| `energy_conversion` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始记录单位，按 1 kWh = 3.6 MJ 将 kWh 转换为 MJ。不得将电力与燃料能量合并。 |
| `gas_volume_conditions` | 天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量气体体积，并披露温度、压力、干/湿基准及任何标准体积换算。 |
| `aqueous_mass_conversion` | 工艺用水和水性废水 | Mass | kg | 优先使用实测质量。仅有体积时，采用适用于该流和报告条件的实测或有据可查的密度换算，并保留原始体积和密度证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收外购合金材料、铸件、锻件或供应商完工子件，同时具有材料/产品身份、质量、供应商、地域、生产路线和上游数据集引用。 |
| starting_condition_role | 报告组织控制制造路线的从摇篮到大门起始条件。 |
| product_classification_scope | 专门用于飞机火花点火往复式或旋转式活塞发动机的全新成品零件；不包括完整发动机或通用/非飞机发动机零件。 |
| recursive_input_rule | 若外购输入已经属于同一成品零件类别，则将其作为一个产品输入记录，关联独立上游数据集、零件号和大门边界，不在接收方前景过程中递归拆分。 |
| upstream_dataset_requirement | 每项外购材料、近净成形坯料、供应商完工零件和外包特殊工艺均须具备地域和技术代表性上游数据集，或明确披露为未解决数据缺口；不得省略供应商控制的负荷。 |
| disclosure | 声明进入边界时的材料和产品状态、准确的受控及外包工序、截断、场址和期间、成品率和不合格品核算、能源和水表分配、处理去向、包装状态，以及排除的工装或资本品。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | 所有前景数据集 | 纳入外购输入供应、生产者控制的全部制造和特殊工艺、检验、不合格品处置、防护及放行，直至制造商大门。 | `un-cpc-3-0-structure-2025`; `faa-ac-21-43a-2015`; `faa-ac-43-18-chg-2-2011` |
| `sb_outsourced_processes` | 外包机加工、热处理、表面处理、检验及其他特殊工艺 | 用上游数据集表示供应商服务及其材料、能源、排放和废物负荷；不得将外包当作截断。 | `faa-ac-21-43a-2015`; `faa-ac-43-18-chg-2-2011` |
| `sb_use_and_end_of_life` | 下游飞机和发动机阶段 | 排除发动机装配、飞机集成、运行、维修、更换和报废阶段，除非研究明确扩展边界并单独报告这些阶段。 | `un-cpc-3-0-structure-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machining_and_cleaning` | 材料准备、机加工和清洗 | required | 始终纳入把外购材料或近净成形坯料加工为所声明零件几何形状的受控工序；外购成品子件按边界规则作为递归输入。 | 前景制造与材料去除核算。 | 每 1 kg 合格零件的投入、切屑、废加工液、能源和水。 |
| `heat_treatment` | 热处理和淬火 | conditional | 所声明路线实施热处理或油淬时纳入；外包时使用供应商数据集。 | 受控热加工。 | 每 1 kg 合格零件的燃料、电力、淬火油补加、直接化石 CO2 和废淬火油。 |
| `surface_treatment` | 表面预处理与含铬阳极氧化或电镀 | conditional | 仅在所声明零件路线采用相应碱洗、酸活化、铬酸阳极氧化或镀铬步骤时纳入；其他表面处理须另设原子行。 | 受控表面加工与漂洗/废水核算。 | 每 1 kg 合格零件的电力、水、槽液化学品补加和废水。 |
| `inspection_and_release` | 检验、不合格品控制、防护和放行 | required | 始终纳入最终符合性活动和不合格品的实测处置；路线特定的无损检测耗材须在前景数据集中另设原子行。 | 质量放行与最终参考产品输出。 | 检验电力、不合格品质量和 1 kg 合格产品。 |

### 过程：材料准备、机加工和清洗（`machining_and_cleaning`）

#### 输入

##### 产品流

###### 铝合金铸造坯料（`aluminium_alloy_casting`）

适用铝合金路线时，记录进入机加工的准确牌号铝合金铸件实测质量。

- 选定流：铝合金铸件，声明合金牌号和铸造状态（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：所声明生产批次耗用的实测接收质量，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`faa-ac-43-18-chg-2-2011`

###### 合金钢锻造坯料（`alloy_steel_forging`）

适用合金钢路线时，记录进入机加工的准确牌号合金钢锻件实测质量。

- 选定流：合金钢锻件，声明合金牌号和锻造状态（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：所声明生产批次耗用的实测接收质量，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`faa-ac-43-18-chg-2-2011`

###### 机加工电力（`machining_electricity`）

记录供给机床、切屑和加工液处理以及边界内清洗设备的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或记录的设备功率乘以运行时间并按第 7 节分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 机加工和清洗工艺用水（`machining_process_water`）

记录为加工液配制和零件清洗而跨越过程边界的用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或批次记录的工艺用水质量；循环水仅在补水跨越边界时计入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 切削液补加（`cutting_fluid`）

记录跨越过程边界的外购切削液，并声明配方、浓度及其为纯油还是水溶性浓缩液。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：报告期补加并分配至所声明生产批次的实测加工液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铝机加工切屑（`aluminium_machining_chips`）

适用铝合金路线时，记录离开过程的分流铝合金切屑。

- 选定流：铝合金机加工切屑，声明合金及污染状态（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量或经库存调整的切屑质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 钢机加工切屑（`steel_machining_chips`）

适用合金钢路线时，记录离开过程的分流钢切屑。

- 选定流：钢废料，机加工切屑 `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量或经库存调整的切屑质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 废切削油（`waste_cutting_oil`）

仅在所声明加工液路线采用纯切削油时，记录离开过程的废切削油。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：送往所声明回收或处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

###### 废水溶性切削液乳化液（`spent_water_miscible_cutting_fluid_emulsion`）

适用水溶性加工液路线时，将废乳化液与废纯切削油分开记录。

- 选定流：废水溶性切削液乳化液（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：送往所声明回收或处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：

##### 基本流

### 过程：热处理和淬火（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理天然气（`heat_treatment_natural_gas`）

仅在所声明热处理路线使用边界内燃气炉时，记录燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配至所声明热处理批次的计量标准体积或实际体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：

###### 热处理电力（`heat_treatment_electricity`）

在边界内时，记录供给电炉、炉辅机、淬火循环和控制装置的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或记录的设备功率乘以运行时间并按第 7 节分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：

###### 淬火油补加（`quenching_oil`）

所声明路线包含油淬时，记录补加的新淬火油；循环槽液库存不得作为消耗量记录。

- 选定流：淬火油 `02f62137-e204-46e6-8e72-e88b450fbdc4`
- 流属性/单位：Mass / kg
- 数量规则：报告期加入并分配至处理批次的实测补加和更换油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废淬火油（`spent_quenching_oil`）

记录从槽中移出并送往所声明回收或处理路线的废淬火油。

- 选定流：废淬火油 `0f997fd8-26b1-432f-a8b8-e2703616b018`
- 流属性/单位：Mass / kg
- 数量规则：实测移出质量，并按有据可查的场外返还或场内库存变化进行调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：

##### 基本流

###### 直接化石源二氧化碳（`fossil_carbon_dioxide`）

仅记录边界内燃料燃烧的直接化石 CO2；上游电力排放保留在电力数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配至热处理批次的场址实测直接排放，或根据计量燃料、燃料碳含量和氧化证据进行的已披露计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_records`
- 来源：

### 过程：表面预处理与含铬阳极氧化或电镀（`surface_treatment`）

#### 输入

##### 产品流

###### 表面处理电力（`surface_treatment_electricity`）

记录供给所声明路线整流器、槽液加热、通风、泵和边界内排放控制的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至所声明零件和处理批次的分表计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`us-epa-ap42-12-20-electroplating-2021`

###### 表面处理工艺用水（`surface_treatment_process_water`）

记录加入处理槽、清洗和漂洗的水；仅计入跨越边界的补水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配至所声明处理批次的计量或批次记录用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`us-epa-ap42-12-20-electroplating-2021`

###### 氢氧化钠补加（`sodium_hydroxide`）

仅在所声明表面处理配方用于碱洗或碱蚀时，记录补加的氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：分配至所声明批次的外购溶液或固体补加料中的活性氢氧化钠质量，并保留浓度证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`us-epa-ap42-12-20-electroplating-2021`

###### 硫酸补加（`sulfuric_acid`）

仅在所声明配方用于酸活化或槽液化学时，记录补加的硫酸。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：分配至所声明批次的外购溶液中活性硫酸质量，并保留浓度证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`us-epa-ap42-12-20-electroplating-2021`

###### 铬酸补加（`chromic_acid`）

仅在所声明路线采用铬酸阳极氧化或六价铬电镀时，记录补加的铬酸。

- 选定流：铬酸溶液，声明浓度和槽液作用（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：分配至所声明批次的外购或配制补加料中的活性铬酸质量，并保留组成和浓度证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`us-epa-ap42-12-20-electroplating-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含铬金属表面处理废水（`chromium_containing_metal_finishing_wastewater`）

当过程边界止于处理前转移时，记录从所声明含铬处理线转入场内或场外处理的合并水性排放。

- 选定流：含铬金属表面处理废水，声明铬形态和浓度（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：分配至所声明处理批次的实测排放质量，或使用适用密度把实测体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`us-epa-ap42-12-20-electroplating-2021`

##### 基本流

### 过程：检验、不合格品控制、防护和放行（`inspection_and_release`）

#### 输入

##### 产品流

###### 检验电力（`inspection_electricity`）

记录供给边界内尺寸检验、无损检测、最终清洗、标识和放行文件设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或记录的设备功率乘以运行时间并分配至合格与不合格零件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_release_records`
- 来源：`faa-ac-21-43a-2015`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格飞机活塞发动机零件（`aircraft_engine_part_output`）

仅记录通过所声明检验和放行过程的零件。

- 选定流：飞机用火花点火往复式或旋转式活塞内燃机零件（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按定义为 1 kg 净合格参考产品；归一化前保留实测批次合格质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-structure-2025`; `faa-ac-21-43a-2015`

##### 废物流

###### 不合格飞机活塞发动机零件（`nonconforming_aircraft_engine_part`）

记录被报废处理或转入有据可查的非产品处置路线的不合格零件质量；不得从可回收金属投入中净扣除。

- 选定流：不合格飞机火花点火活塞发动机零件，隔离并受控处置（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：报告期按零件号和处置方式实测的不合格零件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_release_records`
- 来源：`faa-ac-21-43a-2015`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用机床、炉、槽、通风和检验设备 | 优先采用分表、批次记录、机器时间、槽载荷或其他实测因果驱动因素。记录驱动因素，并把分配总量与工厂记录核对。 |  |
| `allocation_recycling` | 铝切屑、钢切屑、不合格零件、废油及其他回收残余物 | 报告废物总输出及去向。不得从前景清单中扣除回收收益或避免的原生生产；任何回收效益须在单独的下游情景中建模并披露。 |  |
| `allocation_multi_output` | 生产多个可销售零件的生产批次 | 可行时按零件号细分。无法细分时，采用有据可查的物理因果关系；经济分配必须明确说明理由并披露敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_records` | `machining_and_cleaning` | 材料、电力、水、切削液、切屑和废加工液 | 采购/领料记录、秤具、电表、水表、批次流转卡和废物转移联单 | part_number; batch_id; accepted_mass_kg; input_identity; input_mass_kg; electricity_MJ_or_kWh; water_mass_or_volume; cutting_fluid_mass_kg; chip_material; chip_mass_kg; spent_fluid_identity; spent_fluid_mass_kg; inventory_change; destination | 将直接计量和称量的领用/外运量核对至各生产批次；保留原始单位和分配键。 | kg; MJ; kWh; m3 | 按批次采集，至少每月核对 | 有代表性的连续 12 个月，或披露的完整较短生产活动期 | 报告场址控制的全部机加工和清洗活动及纳入的供应商工序 | 按原子流汇总跨边界净数量，仅按第 7 节分配共用量，再除以合格零件质量。 | 校准记录、采购和领料记录、批次流转卡、计量总量、废物联单及物料平衡核对 |
| `cp_heat_treatment_records` | `heat_treatment` | 燃料、电力、淬火油、直接化石 CO2 和废淬火油 | 炉表、周期日志、槽液补加/移出日志、排放记录和批次流转卡 | batch_id; furnace_id; cycle; treated_part_mass_kg; accepted_mass_kg; gas_m3; gas_conditions; electricity_MJ_or_kWh; quench_oil_added_kg; quench_oil_removed_kg; direct_fossil_co2_kg; emission_calculation_inputs | 将每个炉次和槽液交易关联至处理批次；保留实测燃料、电力及全部排放计算输入。 | kg; MJ; kWh; m3 | 按炉次和槽液交易采集，每月核对 | 有代表性的连续 12 个月，或披露的完整较短生产活动期 | 边界内全部热处理和淬火设备及纳入的供应商服务 | 采用实测处理质量或其他有据可查的因果驱动因素分配共用炉次，再除以合格零件质量。 | 经校准计量记录、炉温曲线、受控配方、槽液日志、排放记录和批次追溯 |
| `cp_surface_treatment_records` | `surface_treatment` | 电力、水、氢氧化钠、硫酸、铬酸和废水 | 整流器和公用工程计量、槽液分析、化学品领用记录、漂洗记录、排放计量和处理联单 | batch_id; route; treated_area_or_mass; accepted_mass_kg; electricity_MJ_or_kWh; water_mass_or_volume; chemical_identity; solution_mass_kg; concentration; active_chemical_mass_kg; wastewater_mass_or_volume; density; chromium_speciation; destination | 各化学品按活性物质基准分别记录，保留溶液浓度，并核对槽液补加、带出、漂洗排放和库存变化。 | kg; MJ; kWh; m3 | 按批次和化学品补加采集，每月核对 | 有代表性的连续 12 个月，或披露的完整较短生产活动期 | 边界内全部表面处理、漂洗、通风和废水转移工序 | 按所声明路线汇总原子投入和输出，采用实测安培小时、处理面积或其他有据可查的因果驱动因素分配共用槽液，再除以合格零件质量。 | 经校准计量、分析证书、槽液控制日志、采购/领用记录、排放记录和危险废物文件 |
| `cp_inspection_release_records` | `inspection_and_release` | 检验电力、合格产品和不合格零件 | 检验/试验记录、设备日志、经校准秤具、放行记录和不合格处置 | part_number; revision; batch_id; inspection_route; electricity_MJ_or_kWh; accepted_count; accepted_mass_kg; rejected_count; rejected_mass_kg; disposition; release_status | 把能源、合格质量和不合格质量关联至同一零件号生产活动，并保留授权检验和处置记录。 | kg; MJ; kWh; Item(s) | 按批次或放行批采集，每月核对 | 有代表性的连续 12 个月，或披露的完整较短生产活动期 | 边界内全部最终检验、标识、防护、放行和不合格品控制 | 按零件号汇总合格与不合格质量，按因果关系分配共用检验能源，仅按合格质量归一化。 | 检验和试验记录、校准状态、放行文件、不合格处置授权、隔离证据和最终处置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化量 = 分配至所声明零件号的跨边界净数量 / 同一报告期净合格零件质量 | atomic flow quantity; allocation key where needed; accepted_mass_kg | quantity per 1 kg accepted reference product |  |
| `calc_electricity_conversion` | 电力记录 | electricity_MJ = electricity_kWh × 3.6；保留原始电表读数和单位 | electricity_kWh | electricity_MJ |  |
| `calc_solution_active_mass` | 氢氧化钠、硫酸和铬酸 | 活性化学品质量 = 溶液质量 × 实测或证书浓度质量分数 | solution_mass_kg; concentration_mass_fraction | active_chemical_mass_kg | `us-epa-ap42-12-20-electroplating-2021` |
| `calc_direct_fossil_co2` | 未连续测量的直接炉窑 CO2 | 采用场址有据可查的燃料碳计算，使用计量燃料、燃料碳含量、氧化证据及单位换算；披露方程和因子，不使用未声明默认值。 | gas_m3 or fuel mass; reference conditions; carbon content; oxidation factor; molecular conversion | fossil_carbon_dioxide_kg |  |
| `calc_aqueous_mass` | 按体积记录的水或废水 | 质量 = 实测体积 × 所声明条件下的流体密度 | volume; density; temperature and concentration conditions | water_or_wastewater_mass_kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和所有材料投入 | 保留零件号、当前图样/修订版、材料牌号、供应商或场址、批次/炉号、工艺路线、检验状态及从原材料到完工零件的追溯。 | 受控设计数据、批次流转卡、证书、供应商记录、检验状态和放行记录 |
| `dq_temporal_scope` | 所有前景记录 | 可用时采用一个有代表性的连续 12 个月；较短的完整生产活动期须说明日期、产量、季节性限制及其代表性理由。 | 计量覆盖、生产日历、批次清单和核对 |
| `dq_atomic_completeness` | 所有过程清单 | 核对外购投入、公用工程、化学品、废物、直接排放、合格质量、不合格质量和库存变化；每项额外路线特定交换均另设原子行。 | 物料和能源平衡、账单、计量、槽液日志、废物联单和遗漏登记 |
| `dq_special_processes` | 热处理、阳极氧化、电镀、涂层和无损检测 | 声明各工艺为场内或外包，并保留受控路线、供应商、配方/规范、验收证据和上游数据集链接。 | 特殊工艺证书、供应商控制记录、作业指导书、检验/试验记录和上游数据集 |
| `dq_measurement` | 仪表、秤具、量规和试验设备 | 报告期内使用经校准设备；记录估算、停机、缺失数据替代和不确定性。 | 校准状态、计量日志、维护记录和缺失数据登记 |
| `dq_unresolved_uuid` | 无已确认 Tiangong UUID 的清单行 | 保留准确的原子名称和限定信息并标记身份未解决；不得替换为范围更宽、分类不同或产品状态不同的流。 | UUID 审计记录和数据集层级未解决身份披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_product_identity` | 参考产品 | 若缺少零件号、修订版/构型、飞机火花点火活塞发动机用途、材料牌号、批准设计或控制规范依据、验收状态或净合格质量，则校验失败。 | `un-cpc-3-0-structure-2025`; `faa-ac-21-43a-2015`; `faa-ac-43-18-chg-2-2011` |
| `val_boundary` | 前景和供应商控制工序 | 若适用的机加工、热处理、表面处理、检验或供应商控制的特殊工艺被省略且无明确排除和数据缺口披露，则校验失败。 | `faa-ac-21-43a-2015`; `faa-ac-43-18-chg-2-2011` |
| `val_inventory_atomicity` | 所有交换 | 若一个清单行合并多种材料、公用工程、燃料、化学品、废物、废水类型或排放，或未声明路线适用性，则校验失败。 |  |
| `val_mass_and_energy_reconciliation` | 生产期间 | 要求合格质量、不合格质量、材料投入、回收切屑、废油、化学品/水输出、电力和燃料总量与来源记录及有据可查的分配键核对一致。 |  |
| `val_quality_release` | 合格与不合格零件 | 若缺少检验/试验状态、授权放行依据、不合格品隔离或最终处置证据，则校验失败。 | `faa-ac-21-43a-2015` |
| `val_uuid_and_units` | 含 UUID 和未解决的行 | 含 UUID 的行必须保留已审计流属性和单位组；未解决行必须以同一 row id 和语义限定信息保持明确未解决状态。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 根据前景制造记录生成的产品特定从摇篮到大门次级数据集。 |
| downstream_use | 在证明地域、技术、期间、路线和产品状态相容时，可作为所声明零件号在飞机活塞发动机、维修或飞机产品系统中的 secondary_dataset 或 background_dataset。 |
| allowed_use | 用于同一零件号/构型，或材料、制造路线、验收状态、地域和报告期可证明等价的产品足迹与 LCA 建模。 |
| excluded_use | 仅按质量比较不同零件号；表示完整发动机；用于压燃式、涡轮发动机、再制造、修理或维修制造零件；在无额外建模时提出使用阶段或服役寿命主张。 |
| required_metadata | canonical PCR id 和版本；零件名称/编号及图样修订版；发动机和飞机用途；材料牌号；外购输入状态；受控与外包路线；合格与不合格质量；场址/地域；报告期；电力组合与气体参考条件；分配；回收与处理去向；包装状态；来源和 UUID 缺口。 |
| required_quality_disclosure | 一手数据份额和覆盖；仪表与秤具校准；供应商数据覆盖；缺失数据处理；质量/能源核对；特殊工艺追溯；检验/放行证据；不确定性；未解决 UUID 和范围证据需求。 |
| update_trigger | 新零件或修订、材料或供应商变化、制造或特殊工艺变化、场址/地域变化、电力或燃料供应变化、分配变化、材料成品率或不合格率变化、报告期早于用户代表性要求，或 UUID/来源缺口得到解决。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05）。 | 英文类别身份及与相邻 CPC 产品类别的区分。 |
| `un-cpc-1-1-chinese-2004` | 正式指南（`official_guidance`） | 联合国统计司，《产品总分类第 1.1 版》中文版，ST/ESA/STAT/SER.M/77/Ver.1.1。https://digitallibrary.un.org/record/536544/files/M_77ver1_1c.pdf（检索日期：2026-09-05）。 | 用于核验当前专业中文译名的 CPC 43152 正式中文术语。 |
| `faa-ac-21-43a-2015` | 正式指南（`official_guidance`） | 美国联邦航空管理局，AC 21-43A，《依据 14 CFR 第 21 部分 F、G、K 和 O 分部进行生产》，2015 年 10 月 1 日。https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_21-43A.pdf（检索日期：2026-09-05）。 | 制造过程控制、从原材料到完工产品的追溯、检验和试验、设备校准、不合格品控制、供应商控制、搬运、储存和质量记录。 |
| `faa-ac-43-18-chg-2-2011` | 正式指南（`official_guidance`） | 美国联邦航空管理局，AC 43-18（含第 1、2 次变更），《维修人员制造航空器零件》，2011 年 6 月 7 日。https://www.faa.gov/documentLibrary/media/Advisory_Circular/Ac_43-18_Chg_1-2.pdf（检索日期：2026-09-05）。 | 可安装零件边界；材料、尺寸、工艺、检验和试验的设计数据需求；以及将机加工、电镀和焊接识别为制造服务。 |
| `us-epa-ap42-12-20-electroplating-2021` | 正式指南（`official_guidance`） | 美国环境保护署，AP-42 第 12 章第 20 节《电镀》，2021 年 10 月。https://www.epa.gov/sites/production/files/2020-11/documents/c12s20.pdf（检索日期：2026-09-05）。 | 飞机零件镀铬和铬酸阳极氧化的条件性过程分解，包括预处理、碱洗、酸浸、漂洗、电力、水、槽液化学品及含铬排放/废物。 |
