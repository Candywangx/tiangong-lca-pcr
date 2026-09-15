---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.watch-or-clock-movements
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 手表或钟表机芯

## 1. 范围与适用性

本 PCR 适用于手表或钟表机芯从摇篮到工厂大门的生产。机芯是产生并维持周期性现象且能够计时的装置；本 PCR 也涵盖包含装配该装置所需全部零部件的完整机芯套件。机械式、机电式以及电子式或石英式机芯均在范围内，交付状态可以是已装配、部分装配或明确声明的完整套件。

产品边界不包括完整手表和钟表；单独销售的表壳或钟壳、表盘、指针、表镜、表冠、表带及其他外部件；单独销售的机芯零部件；与机芯分开销售的电池；定时开关和时间记录设备；维修服务；分销；装入完整手表或钟表；使用阶段及寿命终止阶段。若电池、表盘或指针随机芯交付，应声明其是否包含并记录相应前景投入。所声明的产品状态和零部件完整性决定各条件过程及清单行是否适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.watch-or-clock-movements |
| classification_refs | CPC 3.0：48440 — Watch or clock movements |
| covered_products | 完整装配的手表机芯；完整装配的钟表机芯；机电式和电子式或石英式机芯；以未装配或部分装配状态交付的完整机芯套件 |
| excluded_products | 完整手表和钟表；单独销售的表壳或钟壳、表盘、指针、表镜、表冠、表带及其他零部件；单独销售的电池；定时开关和时间记录设备；因缺少功能零部件而无法计时的不完整或毛坯零部件套件 |
| representative_product | 工厂大门处合格的完整机芯，以质量为基准表示 |
| production_route | 外购或厂内零部件制造；条件适用的精密清洗或表面处理；机械式、机电式或电子式/石英式装配；调校与功能测试；发运包装 |
| market_state | 工厂大门处机芯或声明的完整机芯套件；声明装配状态、手表或钟表尺寸类别、调节系统、显示配置、电池包含情况、机芯型号及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 能够维持并计量时间的可销售手表或钟表机芯，或经装配即可形成该装置的已声明完整机芯套件 |
| How much | 1 kg 合格机芯产品净质量，不含可重复使用的运输包装 |
| How well | 符合生产者声明的机芯型号、尺寸类别、调节系统、显示接口、精度或功能测试、装配状态及零部件完整性规范 |
| How long or cycle | 一个工厂大门生产批次；使用阶段服务寿命不属于本从摇篮到大门参考 |
| reference_flow_link | `reference_movement` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 手表或钟表机芯 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机芯类别（手表或钟表）；调节系统（机械式、机电式、电子式/石英式或其他已声明类型）；机芯型号和主要尺寸；装配状态和完整性；显示接口或是否包含显示装置；是否包含电池；精度与测试规范；产品净质量；工厂地域；技术和报告期；一次包装与运输包装的包含情况 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | 参考产品及所有质量归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终验收后、加入可重复使用运输包装前确定机芯净质量。所有过程交换均归一化至 1 kg 合格参考产品输出。 |
| `mu_item_to_mass` | 机芯、电池和包装的件数记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用与具体机芯型号、电池规格或包装完全对应的实测批次平均单件质量换算；保留件数、样本量、实测质量和换算因子。不得使用通用件数—质量因子。 |
| `mu_electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量电量和换算来源。源记录为 kWh 时，按 1 kWh = 3.6 MJ 换算为 MJ，不得改变供应电力结构、电压、地域或损耗边界。 |
| `mu_water_mass` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用实测质量。若计量体积，应记录温度或声明的密度因子后换算为质量，不得默用密度。 |

## 5. 系统边界

前景边界始于工厂大门处购入的金属、成品机芯零部件、电子元件、润滑剂、清洗介质、电力、水、随附电池和包装。边界包括实际发生的厂内零部件制造、精密清洗或表面处理、机芯装配、调校与功能测试、废物首次交付处理前的次品处置，以及发运包装。上游生产采用供应商特定数据集，或采用地域、技术和产品状态具有代表性的数据集。资本设备、员工差旅、零售、装入完整手表或钟表、使用、维修和寿命终止默认不属于前景边界，除非研究目标明确纳入。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_product_boundary` | 产品识别 | 仅纳入计时机芯或完整机芯套件；排除完整手表或钟表、壳体、单独销售的外部件及时间记录设备。声明手表或钟表类别及装配状态。 | `usitc-hts-chapter-91-2013`; `un-cpc-3-0-structure-2025` |
| `sb_route_boundary` | 前景制造 | 纳入实际发生的厂内零部件、清洗、装配、测试和包装作业；仅当场址记录证明报告产品未执行某条件作业时，方可标记为不适用。 | `eta-movement-production-sites`; `us-epa-snap-precision-cleaning`; `eta-quartz-overview-2017` |
| `sb_upstream_boundary` | 外购投入 | 每项外购原子投入必须链接与材料牌号或零部件规格、地域、技术和交付状态相匹配的供应商特定或代表性上游数据集。 | `eu-pef-recommendation-2021-2279` |
| `sb_no_silent_cutoff` | 清单完整性 | 记录声明前景过程中所有实测材料、能源、水、废物和直接基本流交换。任何排除均须进行定量重要性核查并披露；缺少 UUID 不能作为截断理由。 | `eu-pef-recommendation-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂大门处购入的原料金属和零部件，并声明供应商、材料或零部件规格、交付质量、地域及上游数据集识别信息 |
| starting_condition_role | 机芯制造前景系统的上游产品投入 |
| product_classification_scope | 手表或钟表机芯及完整机芯套件；单独零部件和完整手表或钟表不属于规范产品边界 |
| recursive_input_rule | 若同一产品类别的外购完整机芯或完整机芯套件跨越边界，只作为带有上游数据集的供应产品投入记录一次，不再递归拆解；披露其在最终输出中的质量份额和作用。 |
| upstream_dataset_requirement | 有供应商特定数据集时优先采用；否则，每项外购投入使用在地域、技术、组成、时间和交付状态方面具有代表性的数据集。 |
| disclosure | 声明零部件自制与外购份额；机芯类别；调节系统；机芯型号；装配和完整性状态；电池、显示装置、表盘和指针的包含情况；厂内清洗或表面处理；测试规范；次品处理；包装；地域；技术及报告期。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 机芯零部件制造 | 条件纳入（`conditional`） | 报告场址制造夹板、桥板、齿轮、轴、弹簧或类似机芯零部件时纳入。 | 前景零部件生产 | kg 合格已制造零部件 |
| `precision_cleaning` | 机芯零部件精密清洗 | 条件纳入（`conditional`） | 装配或表面处理前的水基或溶剂清洗跨越报告边界时纳入。 | 前景零部件清洗 | kg 已清洗零部件 |
| `movement_assembly` | 机芯或完整套件装配 | 条件纳入（`conditional`） | 已装配或部分装配产品纳入；对未装配完整套件，记录零部件完整性，只省略未实际执行的作业。 | 前景产品装配 | kg 已装配机芯或完整套件 |
| `adjustment_testing` | 调校、检验与功能测试 | 必须纳入（`required`） | 各可销售机芯或完整机芯套件均按声明的验收规范执行。 | 前景质量保证 | kg 合格验收机芯或套件 |
| `dispatch_packaging` | 发运包装 | 必须纳入（`required`） | 适用于离开工厂大门的产品状态；各包装投入是否纳入取决于实际使用情况。 | 前景发运准备 | 1 kg 参考机芯输出 |

### 过程：机芯零部件制造（`component_fabrication`）

#### 输入

##### 产品流

###### 不锈钢原料（`component_stainless_steel`）

仅当不锈钢实际用于厂内机芯零部件制造时记录，并声明合金牌号和交付形态。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：Mass / kg
- 数量规则：发放至机芯零部件制造的实测净入库量，并调整库存变化和退回边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_fabrication_records`

###### 铜锌合金原料（`component_brass`）

记录用于夹板、轮系、桥板或其他厂内零部件的铜锌合金，并声明合金牌号和交付形态。

- 选定流：铜锌合金 `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- 流属性/单位：Mass / kg
- 数量规则：发放至机芯零部件制造的实测净入库量，并调整库存变化和退回边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_fabrication_records`

###### 零部件制造用电（`component_electricity`）

记录机加工、冲压、成形、去毛刺、抛光及可直接归属的本地辅助设备所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：零部件制造工作中心分表计量电量或按因果关系分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_fabrication_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制造机芯零部件（`component_output_parts`）

记录转入清洗或装配的合格夹板、桥板、齿轮和轴。

- 选定流：精密机芯零部件（夹板、桥板、齿轮和轴） `b22494b2-5115-4392-9850-51e046ce6d91`
- 流属性/单位：Mass / kg
- 数量规则：从制造转出的合格零部件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_fabrication_records`

##### 废物流

###### 机加工废料（`component_metal_scrap`）

记录离开零部件制造过程的已分类刨花、车屑和边角料，并披露合金分类和去向。

- 选定流：金属废料、刨花和车屑 `2a5ca712-1e70-48bf-b665-e6d49a55f3cb`
- 流属性/单位：Mass / kg
- 数量规则：首次交付时的实测废物质量，并与投入、合格输出、库存变化及其他已记录损失核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_fabrication_records`

##### 基本流

### 过程：机芯零部件精密清洗（`precision_cleaning`）

#### 输入

##### 产品流

###### 进入清洗的零部件（`cleaning_input_components`）

记录进入声明清洗作业的自制或外购机芯零部件。

- 选定流：精密机芯零部件（夹板、桥板、齿轮和轴） `b22494b2-5115-4392-9850-51e046ce6d91`
- 流属性/单位：Mass / kg
- 数量规则：进入精密清洗的零部件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_precision_cleaning_records`

###### 清洗工艺用水（`cleaning_process_water`）

记录水基清洗或漂洗所用工艺用水，并声明水源、水质和循环使用情况。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：补充水计量量减去未进入清洗系统且单独计量的回流水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_precision_cleaning_records`

###### 异丙醇清洗溶剂（`cleaning_isopropanol`）

记录进入精密清洗的异丙醇补充量，并声明纯度和回收溶剂比例。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存，减期末库存、场外退回量和转出的回收溶剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_precision_cleaning_records`

###### 清洗用电（`cleaning_electricity`）

记录水基清洗、超声设备、溶剂系统、干燥及可直接归属的抽排设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：清洗工作中心分表计量电量或按因果关系分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_precision_cleaning_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已清洗机芯零部件（`cleaning_output_components`）

记录从清洗转入装配、并带有清洁度规范的前景中间产品。

- 选定流：已清洗精密机芯零部件
- 流属性/单位：Mass / kg
- 数量规则：离开清洗过程的合格零部件实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_precision_cleaning_records`

##### 废物流

###### 含金属清洗废水（`cleaning_wastewater`）

记录现场或场外处理前离开清洗过程的水相废物；声明用于处理路径判定的实测金属、油类和溶剂指标。

- 选定流：含金属生产废水
- 流属性/单位：Volume / m3
- 数量规则：计量排放体积或经核实的清洗系统水平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_precision_cleaning_records`

###### 废异丙醇清洗溶剂（`cleaning_spent_isopropanol`）

单独于水相废水记录交付溶剂回收或废物处理的废异丙醇。

- 选定流：废异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：废物首次交付时容器实测毛质量扣除皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_precision_cleaning_records`

##### 基本流

### 过程：机芯或完整套件装配（`movement_assembly`）

#### 输入

##### 产品流

###### 进入装配的已清洗零部件（`assembly_input_cleaned_components`）

将已清洗夹板、桥板、齿轮、轴、弹簧、擒纵零件和其他零部件作为一个有定义的前景零部件套件中间产品记录，不得用其替代单独购入的零部件。

- 选定流：已清洗精密机芯零部件
- 流属性/单位：Mass / kg
- 数量规则：发放至装配的零部件套件实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_movement_assembly_records`

###### 石英晶体谐振器（`assembly_quartz_resonator`）

仅电子式或石英式机芯路线记录制成的谐振器；原料石英不能替代。

- 选定流：石英晶体谐振器
- 流属性/单位：Mass / kg
- 数量规则：发放至合格电子式或石英式机芯批次的实测收货质量，并调整库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格电子式或石英式参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_movement_assembly_records`
- 来源：`eta-quartz-overview-2017`

###### 机芯控制集成电路（`assembly_integrated_circuit`）

仅对使用集成电路的电子式或石英式路线记录，并声明封装和控制功能。

- 选定流：石英机芯控制集成电路
- 流属性/单位：Mass / kg
- 数量规则：发放至合格电子式或石英式机芯批次的实测收货质量，并调整库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格电子式或石英式参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_movement_assembly_records`
- 来源：`eta-quartz-overview-2017`

###### 精密机芯润滑剂（`assembly_lubricant`）

记录施加于机芯接触点的具体合成油或润滑脂，并识别配方和供应商。

- 选定流：手表或钟表机芯用合成润滑油
- 流属性/单位：Mass / kg
- 数量规则：点胶器发放量加期初库存，减期末库存和回收的未用润滑剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_movement_assembly_records`

###### 随机芯交付的纽扣电池（`assembly_button_cell`）

仅当电池随机芯交付时记录一种明确规格和化学体系的纽扣电池；否则将本原子行标记为不适用并披露排除情况。

- 选定流：石英机芯用纽扣电池
- 流属性/单位：Mass / kg
- 数量规则：件数乘以声明电池化学体系和尺寸对应的实测批次平均单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 含电池合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_movement_assembly_records`
- 来源：`eta-quartz-overview-2017`; `usitc-hts-chapter-91-2013`

###### 装配用电（`assembly_electricity`）

记录装配工位、受控环境、连接作业、润滑剂施加及可直接归属的本地辅助设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：装配工作中心分表计量电量或按因果关系分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_movement_assembly_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待测试的已装配机芯（`assembly_output_movement`）

将转入调校和测试的已装配或部分装配机芯记录为前景中间产品。

- 选定流：待测试的已装配手表或钟表机芯
- 流属性/单位：Mass / kg
- 数量规则：转入测试的已装配机芯实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_movement_assembly_records`

##### 废物流

##### 基本流

### 过程：调校、检验与功能测试（`adjustment_testing`）

#### 输入

##### 产品流

###### 进入测试的已装配机芯（`testing_input_movement`）

记录进入调校、走时或功能测试及最终检验的已装配机芯。

- 选定流：待测试的已装配手表或钟表机芯
- 流属性/单位：Mass / kg
- 数量规则：进入验收过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_adjustment_testing_records`

###### 测试用电（`testing_electricity`）

记录调校台、走时设备、电子测试台、可直接归属测试的环境控制及检验设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：测试工作中心分表计量电量或按因果关系分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_adjustment_testing_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待发运包装的合格机芯（`testing_accepted_movement`）

仅记录通过声明验收规范的机芯或完整套件。

- 选定流：待发运包装的合格手表或钟表机芯
- 流属性/单位：Mass / kg
- 数量规则：转入包装的合格机芯实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_adjustment_testing_records`

##### 废物流

###### 不合格机芯（`testing_rejected_movement`）

记录离开产品流并交付回收或处理的不合格机芯；返工后合格的机芯保留在过程平衡中，不得重复计为废物。

- 选定流：不合格手表或钟表机芯
- 流属性/单位：Mass / kg
- 数量规则：最终处置时实测不合格净质量，扣除返工成功并返回合格输出的机芯
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_adjustment_testing_records`

##### 基本流

### 过程：发运包装（`dispatch_packaging`）

#### 输入

##### 产品流

###### 进入包装的合格机芯（`packaging_input_movement`）

记录进入发运准备的合格机芯或完整套件。

- 选定流：待发运包装的合格手表或钟表机芯
- 流属性/单位：Mass / kg
- 数量规则：进入包装的机芯实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_packaging_records`

###### 发运瓦楞纸箱（`packaging_corrugated_box`）

记录随参考产品交付的瓦楞纸箱，并声明再生材料含量、重复使用情况以及该纸箱属于一次包装还是运输包装。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：包装件数乘以实测空箱质量，扣除声明边界内退回的可重复使用运输箱
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch_packaging_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考机芯输出（`reference_movement`）

记录工厂大门处的合格机芯或完整机芯套件。包装质量不计入 1 kg 净参考数量，应单独报告。

- 选定流：手表或钟表机芯
- 流属性/单位：Mass / kg
- 数量规则：由合格批次实测质量得到的 1 kg 净合格机芯输出固定归一化恒等式
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 净合格参考机芯输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | 共用制造、清洗、装配、测试和场址服务 | 优先通过单独计量或其他细分方法隔离产品特定工作中心和批次，从而避免分配。无法细分时，须在选择其他关系前说明理由。 | `eu-pef-recommendation-2021-2279` |
| `al_physical_relation` | 生产多个机芯系列的共用过程 | 对剩余共用交换，采用与交换驱动因素匹配的因果物理关系，例如设备时间、清洗负荷、测试时间或净加工质量；记录因子和源记录。 | `eu-pef-recommendation-2021-2279` |
| `al_other_relation` | 缺少可辩护物理关系的共用过程 | 仅在证明细分、系统扩展和物理分配不可行后，方可采用经济关系或其他关系；披露价格、期间、币种、因子和敏感性。 | `eu-pef-recommendation-2021-2279` |
| `al_scrap_treatment` | 机加工废料和不合格机芯 | 在首次处理交付前，将废料和不合格机芯作为废物流。除非下游研究明确采用并披露一致的回收分配方法，否则不得在前景清单内计入替代原生材料的抵扣。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_fabrication_records` | `component_fabrication` | 所列各材料、电力、合格零部件及废料交换 | 采购和领料记录；盘点；衡器；电表；废物转移记录 | 机芯型号；材料牌号；期初和期末库存；收货；退回；合格输出质量；废料质量；表计读数；表计分配驱动因素；时间戳 | 按批次和报告期核对各原子材料及输出，并保留表计和衡器识别信息 | kg；MJ | 每批次，按月核对 | 具有代表性的连续 12 个月或声明的生产周期 | 范围内全部零部件制造工作中心 | 汇总净原子投入与输出，按记录的因果驱动因素分配共用表计，再归一化至合格参考输出 | 衡器和表计校准记录；库存核对；废物转移凭证；材料平衡 |
| `cp_precision_cleaning_records` | `precision_cleaning` | 所列各零部件、水、异丙醇、电力、废水及废溶剂交换 | 批次单；化学品领料；槽液库存；水表和电表；排放表；废物联单 | 清洗路线；零部件质量；水；异丙醇采购、回收、库存和转移；电力；废水体积；废溶剂毛重和皮重；化学指标 | 按清洗周期核对，区分水相和溶剂路线及回收循环 | kg；m3；MJ | 每个清洗周期，按月核对 | 具有代表性的连续 12 个月或声明的生产周期 | 范围内全部清洗设备和本地抽排 | 按原子交换和路线汇总，扣除已记录的回收转移，并归一化至合格参考输出 | 表计校准记录；化学品库存核对；排放分析；废物联单 |
| `cp_movement_assembly_records` | `movement_assembly` | 所列各零部件、电子元件、润滑剂、电池、电力及已装配中间产品交换 | 物料清单；领料；盘点；点胶记录；装配计数；衡器；电表 | 机芯型号；路线；零部件标识；数量；实测单件质量；润滑剂领用和库存；电池化学体系及尺寸；电力；已装配输出质量；时间戳 | 将零部件和耗材领用与各机芯批次核对；仅采用实测批次平均单件质量换算件数 | kg；MJ | 每个装配批次，按月核对 | 具有代表性的连续 12 个月或声明的生产周期 | 范围内全部装配线和洁净区域 | 按原子交换和路线汇总，扣除退回的未用投入，并归一化至合格参考输出 | 受控物料清单；校准衡器；库存核对；表计记录；批次追溯 |
| `cp_adjustment_testing_records` | `adjustment_testing` | 已装配投入、电力、合格输出及不合格机芯 | 测试系统日志；检验记录；返工日志；衡器；电表；废物处置记录 | 机芯型号；投入件数和质量；测试规范；通过、失败及返工状态；合格质量；最终不合格质量；电力；时间戳 | 将各序列号或批次结果链接到声明的验收规范和最终处置 | kg；MJ | 每个测试批次，按月核对 | 具有代表性的连续 12 个月或声明的生产周期 | 范围内全部调校和测试工位 | 合格输出加最终不合格量必须与投入、库存变化和已记录返工损失核对；归一化至合格输出 | 测试设备校准；签署的验收记录；返工追溯；衡器和表计校准 |
| `cp_dispatch_packaging_records` | `dispatch_packaging` | 合格机芯、瓦楞纸箱及参考输出 | 装箱单；包装领用记录；包装皮重测量；合格机芯称量记录 | 机芯型号；装配状态；合格净质量；包装类型；件数；空箱质量；复用或退回状态；最终发运净质量；时间戳 | 称量有代表性的空包装，并将领用包装与发运机芯核对 | kg | 每个发运批次，按月核对 | 具有代表性的连续 12 个月或声明的生产周期 | 范围内全部发运包装区域 | 单独报告包装；将原子包装质量归一化至 1 kg 净合格机芯输出 | 装箱单核对；校准衡器；包装规范；退回记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | 不锈钢、铜锌合金、异丙醇、电子元件、润滑剂和电池 | 净消耗质量 = 期初库存 + 收货 - 期末库存 - 已记录退回 - 转出的回收未用材料 | 库存、收货、退回、回收及实测单件质量记录 | 每 1 kg 参考输出的原子投入 kg | `mass-balance-identity` |
| `calc_energy_normalization` | 电力行 | 归一化电力 = 过程表计电力 × 声明分配份额 ÷ 净合格参考输出质量；需要时按 3.6 MJ/kWh 将 kWh 换算为 MJ | 表计读数、分配驱动因素、输出质量、能源单位 | 每 1 kg 参考输出的 MJ | `mass-balance-identity` |
| `calc_process_mass_balance` | 各前景过程 | 投入质量 + 期初在制品 = 产品输出 + 废物输出 + 期末在制品 + 已量化直接质量释放；调查无法解释的差额 | 原子投入、输出、废物、库存及直接释放记录 | 过程质量平衡差额及完整性标志 | `mass-balance-identity` |
| `calc_reject_mass` | 不合格机芯 | 最终不合格质量 = 测试失败质量 - 返工成功并返回合格输出的质量 | 测试处置、返工和称量记录 | 每 1 kg 参考输出的不合格机芯 kg | `mass-balance-identity` |
| `calc_reference_output` | 参考机芯 | 归一化数量 = 实测净合格机芯质量 ÷ 同一实测净合格机芯质量 | 合格批次质量 | 1 kg 参考机芯 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和外购零部件 | 保留机芯型号、机芯类别、调节系统、装配状态、零部件完整性、电池包含情况、材料或零部件规格、供应商及批次追溯。 | 产品规范；物料清单；供应商声明；批次记录 |
| `dq_measurement` | 所有定量行 | 使用经校准的表计或衡器，记录单位与换算，保留原始读数，并记录共用表计的分配驱动因素。 | 校准证书；表计导出；称量凭证；计算工作表 |
| `dq_temporal` | 前景报告期 | 条件允许时采用有代表性的连续 12 个月；否则披露生产周期日期、季节性、停机、异常生产及代表性限制。 | 生产日历；月度核对；生产周期日志 |
| `dq_completeness` | 各前景过程 | 核对原子投入、输出、废物、库存变化、返工循环和直接释放。调查并披露重要差额和缺少的表计。 | 过程质量平衡；异常日志；废物联单 |
| `dq_upstream` | 上游数据集 | 记录供应商特定性或选择代理数据的理由，包括地域、技术、时间、组成和交付状态。 | 供应商数据集；数据集元数据；代表性评估 |
| `dq_route` | 条件过程和清单行 | 仅在有证据证明报告产品不存在相应路线、材料、电池、清洗介质或包装组件时，方可标记为不适用。 | 物料清单；路线单；采购和领料记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_reference_identity` | 参考流 | 确认参考输出为机芯或完整机芯套件，而非完整手表或钟表、壳体、单独零部件、定时开关或时间记录设备；核查全部必需限定信息。 | `usitc-hts-chapter-91-2013`; `un-cpc-3-0-structure-2025` |
| `vr_reference_amount` | 参考数量 | 确认归一化输出等于 1 kg 净合格机芯质量，且包装质量单独报告。 | `mass-balance-identity` |
| `vr_process_coverage` | 过程图 | 确认所有实际执行的厂内过程均已纳入、每个省略的条件过程均有路线证据，且每个必须过程均有详细清单章节。 | `eta-movement-production-sites`; `us-epa-snap-precision-cleaning` |
| `vr_inventory_atomicity` | 过程清单 | 确认每行仅表示一个原子物理、化学、能源、废物或基本流交换；拒绝笼统的公用工程、材料、包装、废物或排放标签。 | `eu-pef-recommendation-2021-2279` |
| `vr_uuid_semantics` | 带 UUID 的清单行 | 确认 state-100 流名称、中文名称、流类型、分类、属性、单位组、产品状态、地域、技术及 generalComment 与声明交换保持兼容。 |  |
| `vr_mass_balance` | 前景过程 | 确认投入、输出、废物、库存、返工及直接释放已核对；披露未解决差额，不得以缺少 UUID 为截断理由。 | `mass-balance-identity` |
| `vr_allocation` | 共用及多功能过程 | 确认优先尝试细分，并确认任何物理或其他分配因子均有记录的驱动因素、期间和敏感性。 | `eu-pef-recommendation-2021-2279` |
| `vr_source_and_range` | 定量约束 | 确认仅在至少两个相互独立、已核实原文且边界兼容的来源支持综合判断时采用外部经验范围；否则保留前景采集要求和未解决证据需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经代表性和完整性审查后可用作 `background_dataset` |
| downstream_use | 用于机芯制造的前景数据包，以及手表、钟表、计时设备和含机芯产品的下游 process 或 lifecyclemodel 投影 |
| allowed_use | 当必需限定信息和上游链接齐全时，可用于所声明的机芯类别、调节系统、机芯型号系列、装配状态、电池包含情况、制造路线、地域、技术和报告期 |
| excluded_use | 完整手表或钟表；壳体或其他单独销售零部件；定时开关和时间记录设备；维修；使用阶段电力或电池更换；寿命终止；或未经调整的实质不同机芯路线 |
| required_metadata | PCR id 和版本；产品名称及 CPC 背景；机芯类别；调节系统；机芯型号和尺寸；装配与完整性状态；显示接口；电池包含情况；产品净质量；自制与外购份额；过程适用性；工厂地域；技术；报告期；分配；截断；上游数据集；包装 |
| required_quality_disclosure | UUID 解析状态；来源和前景证据；计量与换算方法；表计分配；时间覆盖；质量平衡差额；返工与次品处理；分配敏感性；上游代表性；未解决范围证据 |
| update_trigger | 机芯型号系列、机芯类别、调节系统、装配状态、零部件自制与外购份额、电池包含情况、清洗化学品、生产技术、场址地域、分配方法、包装系统、上游数据集发生变化，或重要流超过声明复核阈值 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-07） | CPC 48440 正式分类识别 |
| `usitc-hts-chapter-91-2013` | official_guidance | 美国国际贸易委员会，Harmonized Tariff Schedule of the United States (2013)，Chapter 91，https://www.usitc.gov/publications/docs/tata/hts/bychapter/1300c91.pdf（检索于 2026-09-07） | 手表与钟表机芯尺寸、完整套件边界、不完整机芯区别以及壳体和外部件排除 |
| `eta-movement-production-sites` | official_guidance | ETA SA Manufacture Horlogère Suisse，The Motorist of Time，https://www.eta.ch/en/enterprise（检索于 2026-09-07） | 机芯生产包含手表零部件、机芯毛坯、石英式和机械式路线及装配的证据 |
| `us-epa-snap-precision-cleaning` | official_guidance | 美国环境保护署，Questions and Answers About SNAP — precision, electronics, and metals cleaning，https://www.epa.gov/snap/questions-and-answers-about-snap（检索于 2026-09-07） | 条件适用的精密清洗过程、清洗介质区别及污染物记录 |
| `eta-quartz-overview-2017` | handbook | ETA SA，Quartz 2017 Overview，https://www.eta.ch/sites/default/files/downloads-items/overview_vert_rv_TAB_EN.pdf（检索于 2026-09-07） | 石英机芯中的石英晶体、集成电路和电池零部件 |
| `eu-pef-recommendation-2021-2279` | official_guidance | 欧盟委员会，Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，Annex I，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-09-07） | 系统边界、企业特定数据、清单完整性、多功能过程处理层级及回收处理 |
| `mass-balance-identity` | method_factor | 将质量守恒恒等式应用于实测前景投入、输出、库存变化、返工、废物及直接释放 | 归一化、过程核对、次品计算及参考流恒等式 |
