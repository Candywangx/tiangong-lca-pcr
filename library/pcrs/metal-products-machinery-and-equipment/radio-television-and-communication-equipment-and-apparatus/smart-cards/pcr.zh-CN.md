---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.smart-cards
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 智能卡

## 1. 范围与适用性

本 PCR 适用于作为成品或明确声明为未个性化产品交付的实体智能卡电子载体，其用途包括支付、身份识别、通信、门禁、交通和物联网。合规的前景数据包必须将接口声明为接触式、非接触式或双界面，并定义一个具体产品画像，不得使用类别平均卡。

前景边界可包括卡体制备、非接触式天线或嵌体制造、芯片或模块安装、层组装与层压、印刷与裁切、电气和外观测试、个性化以及包装。每个数据包必须说明参考产品是未个性化、预个性化还是完全个性化，并说明其中哪些操作处于报告边界内。

本 PCR 不适用于裸半导体芯片或晶圆、独立集成电路模块、仅有磁条的卡、读卡器或终端、移动网络订阅、远程 SIM 配置、可下载 eSIM 配置文件或其他服务。可拆卸实体 UICC/SIM 卡仅在明确作为实体智能卡产品时纳入。卡产品之外的嵌入式或集成式 eUICC 硬件以及 eSIM 服务系统需要独立的产品和服务边界。接触式支付卡、身份凭证、可拆卸 SIM 或单一卡尺寸的证据不得外推至整个类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.smart-cards |
| classification_refs | CPC 3.0：47920，智能卡，精确映射语境 |
| covered_products | 实体接触式、非接触式和双界面智能卡；用于支付、身份识别、通信、门禁、交通和物联网的成品或明确声明为未个性化的智能卡载体 |
| excluded_products | 裸芯片和晶圆；独立 IC 模块；仅有磁条的卡；读卡器和终端；实体卡产品之外的嵌入式或集成式 eUICC 硬件；eSIM 配置文件、订阅、远程配置平台和其他服务 |
| representative_product | 制造厂门交付的成品智能卡，已声明接口、卡体材料体系、芯片/模块配置、适用时的天线配置、尺寸、质量、个性化状态和应用类别 |
| production_route | 所声明的卡体制备、适用时的天线/嵌体集成、芯片/模块安装、层组装和层压、印刷和裁切、测试、边界内个性化以及包装的组合 |
| market_state | 在所声明厂门交付的成品或明确声明为未个性化的实体智能卡；不是平均化服务或裸电子元件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在所声明厂门符合一个明确产品画像的成品智能卡 |
| How much | 1 kg 合格智能卡；除非明确纳入并单独报告，否则不含包装 |
| How well | 满足所声明的物理、接口、电气、外观、个性化和质量验收规范 |
| How long or cycle | 一个生产批次或报告期；使用寿命单独披露，不作为归一化基准 |
| reference_flow_link | `p_final_test_packaging` 的合格参考产品产出；若个性化和单独最终包装不在声明边界内，则为 `p_lamination_print_cut` 的产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 智能卡 `da4b294a-b663-486c-8e61-05dc1a40ad40` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 接口：接触式/非接触式/双界面；卡体材料和层结构；芯片/模块类型及其以裸芯片、模块或嵌体供货；适用时的天线导体、基材和集成路线；单芯片或多芯片实现；长宽厚；实测单卡质量；个性化状态及纳入的个性化操作；应用类别；合格卡数量和质量；废料、拒品和返工的数量与质量；是否纳入包装；制造地域和报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景清单归一化到 1 kg 合格智能卡。质量应来自经校准的批次称量，或由合格卡数量乘以具有统计代表性的实测单卡质量得到。 |
| `card_dimensions` | 实体参考产品规范 | Dimension | mm | 报告所声明卡型的长度、宽度和厚度以及适用规范或图纸。不得对 SIM 插件、令牌或其他形态假定 ID-1 尺寸。 |
| `unit_mass_and_count` | 生产与质量记录 | Mass and count | kg and card | 同时记录合格、拒收、报废和返工卡数量及实测或抽样单卡质量，使数量到质量的换算可复现。 |
| `component_mass` | 卡体、芯片/模块、天线/嵌体、覆盖层、胶黏剂、油墨及其他材料投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按元件或材料族报告领用、退回和装入质量；不得由借记卡或仅接触式卡推断全部智能卡组成。 |
| `scrap_rate` | 各前景制造过程 | Mass and count | kg and % | 根据过程特定的合格、拒收、报废和返工记录计算废品率和拒品率。声明分母，并说明返工最终合格还是报废。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景厂门接收的外购卡体材料或预制片材、芯片/模块或裸芯片、适用时的天线/嵌体材料、胶黏剂、油墨、覆盖层、辅料和包装；明确识别所纳入的上游元件制造 |
| starting_condition_role | 第一道前景制卡操作之前的实体与电子投入 |
| product_classification_scope | CPC 3.0:47920 范围内一个已声明的实体智能卡画像，而非支付、身份识别、通信或物联网服务的类别平均值 |
| recursive_input_rule | 作为下游个性化、测试或包装过程投入的同类别未个性化或半成品智能卡仍是显式上游产品投入。应使用其上游数据集，不得递归重建或重复计算相同制卡阶段。 |
| upstream_dataset_requirement | 上游数据集须匹配材料、芯片/模块、天线/嵌体、接口、地域、技术和个性化状态；否则须记录替代依据及其影响。 |
| disclosure | 声明所纳入/排除的元件制造、接触式/非接触式/双界面设计、卡体结构、天线路线、层压与印刷路线、个性化边界、尺寸、单卡质量、质量收率、废料/返工处理、包装和废物去向。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_physical_card_only` | 产品与服务边界 | 纳入实体智能卡产品及其声明的制造操作；除非显式链接单独的服务研究，否则排除用卡服务、交易处理、订阅、远程 SIM 配置和可下载配置文件。 | `gsma-sgp22-v3-1` |
| `boundary_interface_specific` | 接口特定制造 | 仅当操作处于声明的前景边界内时，非接触式或双界面卡纳入天线/嵌体成形和连接，接触式或双界面卡纳入接触焊盘/模块操作。 | `iso-iec-14443-1-2018`; `emvco-contact-chip`; `nist-fips-201-3-front-end` |
| `boundary_personalization` | 个性化与发行 | 声明是否纳入逻辑加载、密钥注入、编码、可视印刷、压印、激光雕刻和发行特定测试。不得把未个性化产出视为已个性化卡。 | `nist-fips-201-3-front-end` |
| `boundary_material_and_construction` | 卡体和成品尺寸 | 纳入并披露达到所声明卡型、尺寸和物理性能所需的材料与结构步骤；外购材料应链接上游数据集。 | `iso-iec-7810-2019` |
| `boundary_no_narrow_extrapolation` | 类别综合 | 借记卡证据仅用于识别可能的元件和制造数据字段。无画像特定证据时，不得把其材料数量、质量、寿命或拒品观察值用于其他智能卡画像。 | `lindgreen-debit-card-lca-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_card_body` | 卡体材料制备及片材或卡坯成形 | required | 每种实体卡均需纳入；外购成品卡体可作为上游产品投入并缩短本前景过程 | 制备所声明卡体材料和层体系 | kg 预制卡体材料或卡坯 |
| `p_antenna_inlay` | 非接触式天线或嵌体制造与集成 | conditional | 非接触式和双界面画像应纳入，除非外购嵌体数据集已完整代表 | 形成并连接所声明天线/嵌体体系 | kg 合格嵌体或带天线卡体 |
| `p_module_embedding` | 芯片或模块安装与电气互连 | required | 纳入与接触式、非接触式或双界面结构匹配的路线；外购成品嵌体/模块仍为上游投入 | 安装安全 IC/模块并形成接触焊盘或天线连接 | kg 装有模块的卡结构 |
| `p_lamination_print_cut` | 层组装、层压、印刷、后处理和裁切 | required | 仅在前景记录保留负荷和收率时拆分或合并单元操作 | 将分层结构转化为尺寸合规的未个性化卡 | kg 合格未个性化卡 |
| `p_personalization` | 逻辑和可视个性化 | conditional | 仅当参考产品为预个性化或完全个性化且操作位于厂界内时纳入 | 加载或编码数据并施加产品特定可视特征 | kg 合格个性化卡 |
| `p_final_test_packaging` | 最终电气/外观测试、质量放行与包装 | required | 包装可位于参考质量之外，但随产品供应时须单独建清单 | 放行合格参考卡并区分拒品、返工和包装 | kg 合格参考卡 |

### 过程：卡体材料制备及片材或卡坯成形（`p_card_body`）

#### 输入

##### 产品流

###### 声明的卡体材料和层（`card_body_materials`）

记录跨越前景边界的每种树脂、聚合物片材、纸/纤维层、涂层、覆盖层、再生含量原料或其他声明卡体材料。材料族、牌号、再生或生物基含量、供应商数据集以及领用/退回质量须可区分。

- 选定流：路线特定卡体材料或预制片材；由声明的材料画像选择准确天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去有记录的未用退回量，按预制卡体产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预制卡体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_card_body_records`
- 来源：`iso-iec-7810-2019`

###### 卡体过程能源（`card_body_energy`）

记录本过程配混、片材制备、印刷准备、成形或卡坯制备使用的计量电力、热力、压缩空气和其他能源。

- 选定流：场址和能源载体特定的能源流
- 流属性/单位：Energy / MJ 或按仪表记录的 kWh
- 数量规则：分配给声明生产批次的实测过程能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预制卡体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_card_body_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预制卡体片材或卡坯（`prepared_card_body`）

记录转入天线/嵌体、模块或层压操作的合格中间产出，并保留材料结构和尺寸。

- 选定流：预制智能卡卡体片材或卡坯；若存在匹配的已发布行则选择准确天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预制卡体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_card_body_records`

##### 废物流

###### 卡体边料、不合格材料和拒品（`card_body_scrap`）

按材料族和去向分别记录边料、开机损失、不合格片材和拒收卡坯。内部回收物不得同时作为废物产出和新的外部投入计数。

- 选定流：路线和材料特定的生产废物
- 流属性/单位：Mass / kg
- 数量规则：实测离开过程的废物，与内部返工或回收材料分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预制卡体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_card_body_records`

##### 基本流

### 过程：非接触式天线或嵌体制造与集成（`p_antenna_inlay`）

#### 输入

##### 产品流

###### 天线导体、基材和连接材料（`antenna_materials`）

对非接触式或双界面卡，记录导体材料和几何路线、嵌体基材、导电胶或连接材料及外购天线/嵌体投入。接触式产品应省略此行并声明不适用。

- 选定流：路线特定天线导体、基材和连接材料；由声明设计选择准确天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：合格嵌体产出对应的实测材料领用量减有记录退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格嵌体或带天线卡体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_antenna_inlay_records`
- 来源：`iso-iec-14443-1-2018`; `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017`

###### 天线/嵌体过程能源（`antenna_process_energy`）

记录埋线、蚀刻、印刷、粘接、测试和其他纳入天线或嵌体操作的实测能源。

- 选定流：场址和能源载体特定的能源流
- 流属性/单位：Energy / MJ 或按仪表记录的 kWh
- 数量规则：分配给声明批次的实测过程能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格嵌体或带天线卡体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_antenna_inlay_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格天线嵌体或带天线卡体（`conforming_antenna_inlay`）

记录连续性、谐振或其他声明电气验收测试后的产出质量和数量。

- 选定流：产品特定的非接触式天线嵌体或带天线卡体
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量和合格数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格嵌体或带天线卡体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_antenna_inlay_records`

##### 废物流

###### 天线和嵌体拒品（`antenna_inlay_rejects`）

按材料和去向记录导体、基材、连接和电气测试拒品。

- 选定流：路线特定的天线/嵌体生产废物
- 流属性/单位：Mass / kg
- 数量规则：扣除成功返工后实测离开过程的拒品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格嵌体或带天线卡体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_antenna_inlay_records`

##### 基本流

### 过程：芯片或模块安装与电气互连（`p_module_embedding`）

#### 输入

##### 产品流

###### 声明的芯片、模块或外购嵌体（`chip_module_input`）

记录准确的安全 IC 形态和接口配置：裸芯片、接触式模块、非接触式模块/嵌体或双界面模块/嵌体。不得用已核验的接触式模块流替代仅非接触式或双界面产品。

- 选定流：产品和接口特定的芯片/模块/嵌体；画像匹配后选择准确天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测接收和领用质量，并与模块数量和抽样单件质量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格装模块卡结构
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_module_embedding_records`
- 来源：`emvco-contact-chip`; `iso-iec-14443-1-2018`; `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017`

###### 模块安装材料和能源（`module_attachment_inputs`）

记录所声明安装路线使用的槽位制备、胶黏剂、导电连接、封装料、焊料或键合材料及实测能源。

- 选定流：路线特定的安装材料和能源流
- 流属性/单位：材料为 Mass / kg；能源载体为 Energy / MJ 或 kWh
- 数量规则：分配给声明批次的实测材料领用量和能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格装模块卡结构
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_module_embedding_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格装模块卡结构（`module_equipped_cards`）

记录连接和基本电气检查后的合格产出质量与数量。

- 选定流：产品特定的装模块智能卡结构
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量和合格数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格装模块卡结构
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_module_embedding_records`

##### 废物流

###### 芯片/模块和安装拒品（`module_embedding_rejects`）

分别记录损坏芯片/模块、连接失败、拒收卡体及回收元件，并保留最终去向。

- 选定流：路线特定的电子和卡体生产废物
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录的回收和成功返工后实测离开过程的拒品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格装模块卡结构
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_module_embedding_records`

##### 基本流

### 过程：层组装、层压、印刷、后处理和裁切（`p_lamination_print_cut`）

#### 输入

##### 产品流

###### 预制结构、覆盖层、油墨、胶黏剂和表面材料（`lamination_print_inputs`）

记录进入声明操作的预制卡体、适用时的天线/嵌体、装模块结构、覆盖层、油墨、涂层、胶黏剂以及安全或表面特征材料。

- 选定流：产品特定预制结构和路线特定材料
- 流属性/单位：Mass / kg
- 数量规则：实测转入的中间体质量加辅料净领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格未个性化卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lamination_print_cut_records`
- 来源：`iso-iec-7810-2019`; `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017`

###### 层压、印刷和裁切能源（`lamination_print_cut_energy`）

记录层组装、层压/压制、印刷、固化、后处理、冲切和裁切使用的实测电力、热力、压缩空气和其他能源。

- 选定流：场址和能源载体特定的能源流
- 流属性/单位：Energy / MJ 或按仪表记录的 kWh
- 数量规则：分配给声明批次的实测过程能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未个性化卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lamination_print_cut_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格未个性化智能卡（`unpersonalized_cards`）

记录产品特定个性化之前尺寸、外观和电气均合格的卡。若该卡为参考产品，应链接声明的参考流并说明排除个性化。

- 选定流：未个性化智能卡（嵌入模块，覆膜/成品） `d0e27754-4f25-412f-b693-80d41310168e`
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量和合格数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格未个性化卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lamination_print_cut_records`

##### 废物流

###### 层压、印刷和裁切废料（`lamination_print_cut_scrap`）

按材料/电子含量和去向分别记录边料、分层、印刷拒品、尺寸拒品和受损电子结构。

- 选定流：路线特定的复合材料或含电子元件生产废物
- 流属性/单位：Mass / kg
- 数量规则：扣除成功返工后实测离开过程的拒品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未个性化卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lamination_print_cut_records`

##### 基本流

### 过程：逻辑和可视个性化（`p_personalization`）

#### 输入

##### 产品流

###### 未个性化或预个性化卡（`cards_for_personalization`）

按质量、数量、接口、材料结构、芯片/模块、天线配置、尺寸和先前个性化状态记录来料实体卡。不得在本过程中重建上游卡数据集。

- 选定流：未个性化智能卡（嵌入模块，覆膜/成品） `d0e27754-4f25-412f-b693-80d41310168e`
- 流属性/单位：Mass / kg
- 数量规则：实测来料批次质量并与卡数量和单卡质量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格个性化卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_personalization_records`
- 来源：`nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017`

###### 个性化材料和能源（`personalization_inputs`）

记录覆盖膜、色带、油墨、激光耗材、标签、载具、密钥注入或编码设备能源及其他实体投入。数字配置文件或订阅服务不是实体卡的质量投入，不得建模为智能卡产品。

- 选定流：路线特定个性化材料和能源流
- 流属性/单位：材料为 Mass / kg；能源载体为 Energy / MJ 或 kWh
- 数量规则：分配给声明批次的实测材料领用量和能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格个性化卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_personalization_records`
- 来源：`nist-fips-201-3-front-end`; `gsma-sgp22-v3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格个性化智能卡（`personalized_cards`）

记录所需逻辑、外观和接口测试后的质量与数量，并声明个性化状态和应用类别。

- 选定流：智能卡 `da4b294a-b663-486c-8e61-05dc1a40ad40`
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量，或合格数量乘以具有代表性的实测单卡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格个性化卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_personalization_records`

##### 废物流

###### 个性化拒品和安全销毁（`personalization_rejects`）

按数量、质量、原因和去向记录错误订单、编码失败、外观缺陷、安全拒品、成功返工和安全销毁。

- 选定流：路线特定的含电子元件拒品卡废物
- 流属性/单位：Mass / kg
- 数量规则：减去成功返工卡后实测离开过程的拒品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格个性化卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_personalization_records`
- 来源：`lindgreen-debit-card-lca-2017`

##### 基本流

### 过程：最终电气/外观测试、质量放行与包装（`p_final_test_packaging`）

#### 输入

##### 产品流

###### 等待最终放行的卡（`cards_for_final_release`）

按先前个性化状态记录来料卡，并将质量和数量与放行、返工和拒收产出核对。

- 选定流：产品特定的未个性化、预个性化或个性化智能卡
- 流属性/单位：Mass / kg
- 数量规则：实测来料质量并与卡数量和代表性单卡质量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格参考卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release_records`

###### 包装和最终测试能源（`final_test_packaging_inputs`）

记录托盘、载具、信封、纸箱、标签、防护材料和实测测试/包装能源。除非另有明确声明，包装质量不计入智能卡参考质量。

- 选定流：包装材料和场址特定能源流
- 流属性/单位：包装为 Mass / kg；能源载体为 Energy / MJ 或 kWh
- 数量规则：分配给放行批次的实测包装领用量和能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格参考卡
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考智能卡（`reference_smart_cards`）

按声明产品画像记录净包装质量、卡数量、尺寸和实测单卡质量，并将全部前景清单归一化到此产出。

- 选定流：智能卡 `da4b294a-b663-486c-8e61-05dc1a40ad40`
- 流属性/单位：Mass / kg
- 数量规则：实测合格批次质量；仅可依据 `calc_reference_mass` 使用数量换算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考智能卡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release_records`

##### 废物流

###### 最终测试拒品、返工损失和包装废物（`final_release_waste`）

分别记录测试失败卡、送返工卡、返工失败后销毁卡和包装废物。保留缺陷原因、电子含量、安全处理和最终去向。

- 选定流：路线特定的含电子元件拒品和包装废物流
- 流属性/单位：Mass / kg
- 数量规则：实测离开最终放行过程的废物质量，不含仍处于开放返工状态的卡，并避免与上游拒品行重复计数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格参考卡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release_records`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多产品制卡 | 在分配共享负荷之前，只要存在独立测量，就按产品画像、接口、材料结构、产线、批次和过程细分记录。 |  |
| `allocation_shared_operations` | 共享层压、印刷、个性化、测试和公用工程 | 用有记录的因果物理驱动因素分配共享实测负荷，例如机器时间、仪表区间、加工片材面积、按实测单卡质量调整的卡数量或批次时间。仅在无法建立物理因果关系时采用经济分配，并披露敏感性。 |  |
| `allocation_rework` | 返工回路 | 将返工投入和损失归属产生返工的批次。成功返工卡仅作为合格产出计数一次，不得同时计为废料。 |  |
| `allocation_scrap_recycling` | 送回收或资源化的废料 | 离开前景的废料作为废物报告。仅在单独声明的下游模型中，采用有记录的方法和去向施加回收、资源化或替代抵扣；默认不计避免负荷。 |  |
| `allocation_no_service_coproduct` | 数字配置文件和服务 | 除非独立服务模型定义关系并避免重复计算，否则不得把实体卡制造负荷分配给 eSIM 配置文件、订阅、交易处理或其他服务。 | `gsma-sgp22-v3-1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_card_body_records` | `p_card_body` | 材料、能源、合格产出、边料和拒品 | 采购/领用/退回日志；仪表；生产和废物单据 | material_id; material_family; grade; recycled_or_biobased_content; issued_mass; returned_mass; energy_by_carrier; accepted_mass; accepted_count; trim_mass; reject_mass; destination | 按批次核对仓储记录、校准仪表、产线计数器和废物单据 | kg; card; kWh; MJ | 每批次并按月核对 | 代表性报告期，通常至少 12 个月；季节性/短期生产则覆盖全部生产期 | 范围内全部前景卡体产线 | 按批次汇总净材料和能源；内部回收单列；按合格产出归一化 | 校准记录；材料规范；供应商记录；批次核对；废物转移证据 |
| `cp_antenna_inlay_records` | `p_antenna_inlay` | 导体/基材/连接投入、能源、合格嵌体、拒品 | 物料清单；领用/退回日志；仪表；电气测试和拒品日志 | interface; antenna_route; conductor; substrate; connection_material; issued_mass; returned_mass; energy; processed_count; accepted_count; reject_count; reject_mass; test_result; destination | 核对材料领用与嵌体数量和质量；保留连续性/谐振或声明的验收结果 | kg; item; kWh; MJ | 每批次 | 代表性报告期 | 范围内全部非接触式/双界面嵌体产线 | 净领用量和能源除以合格产出；成功返工单列 | 材料证书；仪表校准；电气测试记录；废物单据 |
| `cp_module_embedding_records` | `p_module_embedding` | 芯片/模块/嵌体投入、安装材料、能源、合格产出、拒品 | 接收、领用、贴装/键合、电气测试、返工和拒品记录 | interface; module_id; chip_form; chip_count; module_count; sampled_unit_mass; issued_mass; attachment_material; energy; accepted_count; reject_count; reject_mass; recovered_count; destination | 核对安全元件序列号/数量记录、材料质量、产线产出和缺陷处置 | kg; item; kWh; MJ | 每批次 | 代表性报告期 | 范围内全部模块安装产线 | 用批次实测质量或统计支持的单件质量计算；净投入按合格产出归一化 | 供应商规范；数量核对；抽样计划；测试和销毁记录 |
| `cp_lamination_print_cut_records` | `p_lamination_print_cut` | 分层投入、辅料、能源、尺寸、合格卡、边料和缺陷 | 批次配方；领用/退回日志；仪表；尺寸/外观/电气质检；废物单据 | layer_construction; input_mass; overlay_ink_adhesive_mass; energy; sheet_count; card_count; length_mm; width_mm; thickness_mm; unit_mass; accepted_count; accepted_mass; trim_mass; defect_mass; rework_count; destination | 核对批次记录、校准的尺寸和质量抽样、计数器及废物记录 | kg; card; mm; kWh; MJ | 每批次 | 代表性报告期 | 范围内全部层压/印刷/裁切产线 | 汇总合格和拒收产出；净材料与能源按合格未个性化卡质量归一化 | 配方批准；仪器校准；质检抽样计划；废物转移证据 |
| `cp_personalization_records` | `p_personalization` | 来料卡、个性化材料/能源、合格卡、返工和拒品 | 安全库存、作业、编码/密钥注入、可视个性化、测试、返工和销毁记录 | application_class; incoming_state; target_state; interface; incoming_count; incoming_mass; material_issue; energy; accepted_count; accepted_mass; rework_count; reject_count; reject_mass; defect_reason; destruction_destination | 核对安全卡保管与作业完成和销毁证据，不在 LCA 数据集中存储秘密凭证 | kg; card; kWh; MJ | 每个性化作业/批次 | 代表性报告期 | 范围内全部个性化设施 | 来料 = 合格 + 开放返工 + 拒收，仅按有记录转移调整；按合格质量归一化 | 保管核对；设备日志；验收测试；安全销毁证书 |
| `cp_final_release_records` | `p_final_test_packaging` | 最终测试投入、合格参考产出、包装、返工、拒品和废物 | 最终质检；校准批次称量；卡数量；包装领用；返工和废物记录 | interface; material_system; module; antenna; dimensions; personalization_state; input_count; accepted_count; accepted_mass; sampled_unit_mass; sample_size; packaging_mass; energy; rework_count; reject_count; reject_mass; destination | 对放行批次进行净包装称量，或采用获批的代表性单卡质量抽样计划；核对全部处置 | kg; card; mm; kWh; MJ | 每放行批次 | 代表性报告期 | 范围内全部最终放行和包装产线 | 合格参考质量加单独报告的包装；核对投入和全部产出处置 | 秤校准；抽样计划；放行证书；包装规范；废物/销毁证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 合格参考智能卡 | 优先使用经校准的净合格批次质量。若按数量换算：accepted_mass_kg = accepted_count x representative_unit_mass_g / 1000；报告抽样设计和不确定性。 | accepted_count; accepted_lot_mass; representative_unit_mass_g; sample_size | kg 合格参考质量 |  |
| `calc_net_material_input` | 每种材料或元件 | net_input_kg = issued_mass_kg - documented_unused_return_kg - documented_internal_recycle_return_kg；跟踪内部回收，但不把它计为新的外部投入。 | issued_mass; unused_return_mass; internal_recycle_return_mass | kg 净外部材料投入 |  |
| `calc_scrap_rate_mass` | 各过程和前景总计 | scrap_rate_mass_percent = 100 x final_scrap_mass / (accepted_output_mass + final_scrap_mass)；排除开放返工并单独报告回收元件质量。 | accepted_output_mass; final_scrap_mass; open_rework_mass; recovered_component_mass | 过程特定和总质量废品率 |  |
| `calc_rework_rate_count` | 各过程 | rework_rate_count_percent = 100 x cards_entering_rework / processed_card_count；报告后续合格比例和报废比例。 | processed_card_count; rework_entry_count; rework_accepted_count; rework_scrapped_count | 返工率和处置比例 |  |
| `calc_normalized_inventory` | 全部前景行 | 对共享操作应用有记录的分配后，normalized_amount = reconciled lot amount / accepted reference mass_kg。 | reconciled lot amount; accepted reference mass; allocation driver | 每 1 kg 合格智能卡的量 |  |
| `calc_mass_reconciliation` | 各过程 | 比较净质量投入与合格产出、废料/拒品产出、回收元件、实测排放和库存变化。调查并披露无法解释的不平衡；不得虚构流以强制平衡。 | net mass inputs; conforming outputs; wastes; recoveries; measured releases; opening/closing inventory | 质量核对结果和无法解释的差额 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_profile` | 参考产品 | 保留接口、应用类别、卡体材料/层、芯片/模块、适用时的天线/嵌体、单/多芯片设计、尺寸、质量、个性化状态和包装纳入情况。 | 批准的产品规范和物料清单 |
| `dq_identity` | 带 UUID 的引用 | 使用前确认当前公开天工身份和参考属性；不得把元件、未个性化卡、错误 CPC 或错误状态的行用作通用参考产品。 | 天工公开行回读和产品画像匹配 |
| `dq_temporal` | 前景活动数据 | 使用一个代表性报告期，通常至少 12 个月；短期/季节性产品则覆盖全部生产期；披露偏差和重大过程变化。 | 带日期的生产、仪表、采购和废物记录 |
| `dq_completeness` | 前景清单 | 在每个过程中核对合格、拒收、报废、返工、回收和转移的数量/质量；纳入跨越声明边界的全部材料和能源载体。 | 批次核对和质量平衡报告 |
| `dq_measurement` | 质量、尺寸、数量和能源 | 保留校准状态、抽样计划、样本量、换算因子以及数量到质量和尺寸测量的不确定性。 | 校准证书、抽样记录和仪表日志 |
| `dq_security_and_privacy` | 个性化记录 | 保留可审计数量、质量、过程状态和销毁证据，不在 LCA 数据集中发布密钥、个人数据、凭证或持卡人信息。 | 脱敏的保管与销毁记录；数据治理批准 |
| `dq_no_extrapolation` | 二手证据 | 支付卡、身份卡、SIM 和物联网卡证据均按画像特定处理。转用于另一画像必须有记录的代表性论证和敏感性评估。 | 证据到字段映射和替代日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品流必须是 Smart cards `da4b294a-b663-486c-8e61-05dc1a40ad40`，其 state-code-100 身份已在编写时核验，并使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `validate_interface` | 产品画像和过程适用性 | 必须且只能声明一种接口画像：接触式、非接触式或双界面。非接触式和双界面画像须披露天线/嵌体材料及集成；接触式和双界面画像须披露接触模块/焊盘结构。 | `iso-iec-14443-1-2018`; `emvco-contact-chip`; `nist-fips-201-3-front-end` |
| `validate_card_body` | 卡体结构 | 声明每个材料层的材料族、层结构、适用时的再生或生物基含量及上游数据集。 | `iso-iec-7810-2019` |
| `validate_dimensions_mass` | 实体产品 | 报告长度、宽度、厚度、规范/图纸、实测单卡质量、抽样基准、合格数量和合格质量。拒绝把单一卡型假定为整个类别的数据集。 | `iso-iec-7810-2019` |
| `validate_chip_module` | 电子元件边界 | 声明芯片/模块形态、接口兼容性、单/多芯片实现、供应商或元件身份、数量/质量基准以及芯片/模块制造属于上游还是前景。裸芯片或接触式模块证据不得代表整个类别。 | `emvco-contact-chip`; `nist-fips-201-3-front-end`; `lindgreen-debit-card-lca-2017` |
| `validate_personalization_boundary` | 产品状态和前景边界 | 声明未个性化、预个性化或完全个性化产出，并列出纳入或排除的逻辑加载、编码、密钥注入、可视印刷/雕刻、测试和安全销毁操作。 | `nist-fips-201-3-front-end`; `gsma-sgp22-v3-1` |
| `validate_scrap_rework` | 收率和废物清单 | 报告过程特定的合格、拒收、报废和返工数量及质量、分母定义、最终去向和防重复计数措施。借记卡拒品观察值不是类别默认值。 | `lindgreen-debit-card-lca-2017` |
| `validate_mass_reconciliation` | 各前景过程 | 提供经核对的质量平衡，或对无法解释的差额进行有记录的调查，不得虚构流。 |  |
| `validate_service_exclusion` | eSIM 和其他服务 | 从实体智能卡产品数据集中排除 eSIM 配置文件下载、订阅管理、远程配置、交易处理和其他服务；若单独建模并链接，则须避免重复计算。 | `gsma-sgp22-v3-1` |
| `validate_no_narrow_extrapolation` | 证据代表性 | 未经显式画像匹配和证据，不得把仅接触式模块、未个性化卡路线、借记卡组成、身份卡结构、可拆卸 SIM 或一种形态外推至全部智能卡。 | `lindgreen-debit-card-lca-2017`; `nist-fips-201-3-front-end`; `gsma-sgp22-v3-1` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经评审后适合作为 `secondary_dataset` 或 `background_dataset` 发布的智能卡制造前景数据包 |
| downstream_use | 需要具有已声明接触式、非接触式或双界面画像的实体智能卡制造清单的产品 LCA 和生命周期模型 |
| allowed_use | 用于所声明的卡材料体系、接口、芯片/模块和天线配置、尺寸、个性化状态、地域、技术和报告期；有敏感性分析时允许有记录的情景替代 |
| excluded_use | 裸芯片/模块、读卡器、实体卡之外的 eUICC 硬件、eSIM/通信/支付/身份服务、交易处理或未经画像匹配的全部智能卡的通用代表 |
| required_metadata | canonical PCR id；CPC 映射语境；应用类别；接口；卡体材料/层；芯片/模块；适用时的天线/嵌体；尺寸/厚度；实测单卡质量；个性化状态/边界；过程路线；地域；时期；分配；合格/拒品/废料/返工数据；包装纳入情况；UUID 核验 |
| required_quality_disclosure | 来源覆盖；仪表和秤校准；数量到质量抽样；质量核对；时间和场址覆盖；替代；缺失流；废物去向；安全/隐私脱敏；窄画像证据转移或不转移的理由 |
| update_trigger | 卡型、材料/层结构、再生/生物基含量、接口、芯片/模块、天线/嵌体、层压或个性化技术、尺寸/质量、工厂/地域、分配、废料/返工处理、包装或证据/UUID 身份发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-iec-7810-2019` | standard | ISO/IEC 7810:2019, Identification cards - Physical characteristics，2025 年确认现行，https://www.iso.org/standard/70483.html（检索于 2026-08-09） | 卡材料、结构、物理特性、尺寸和与测试关联的披露要求 |
| `iso-iec-14443-1-2018` | standard | ISO/IEC 14443-1:2018, Cards and security devices for personal identification - Contactless proximity objects - Part 1: Physical characteristics，https://www.iso.org/standard/73596.html（检索于 2026-08-09） | 非接触式接口范围和天线/嵌体适用性 |
| `emvco-contact-chip` | official_guidance | EMVCo, EMV Contact Chip and supporting ISO standards，https://www.emvco.com/emv-technologies/emv-contact-chip/（检索于 2026-08-09） | 接触式接口定义及与非接触式支付接口的区分；不作为类别范围组成证据 |
| `nist-fips-201-3-front-end` | official_guidance | NIST, FIPS 201-3 PIV Front-End Subsystem，https://pages.nist.gov/FIPS201/frontend/（检索于 2026-08-09） | 双界面身份卡示例；卡体、嵌入天线、层压、印刷/电子信息、个性化和测试边界；不提供类别范围数量 |
| `gsma-sgp22-v3-1` | standard | GSMA SGP.22 v3.1, RSP Technical Specification，https://www.gsma.com/esim/wp-content/uploads/2023/12/SGP.22-v3.1.pdf（检索于 2026-08-09） | 区分 eUICC/配置文件/远程配置系统和服务与实体智能卡制造数据集 |
| `lindgreen-debit-card-lca-2017` | literature | Lindgreen, E.R. et al., Evaluating the environmental impact of debit card payments, DOI: 10.1007/s11367-017-1408-6；DNB Working Paper 574，https://www.dnb.nl/media/a3sk2oob/574-evaluating-the-environmental-impact-of-debit-card-payments.pdf（检索于 2026-08-09） | 仅用于借记卡窄证据下的卡体、芯片模块、NFC 天线、层压/制造、个性化、拒品和废物字段拆分；不作类别范围数值外推 |
