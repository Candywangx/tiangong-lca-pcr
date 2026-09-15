---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.microphones-and-stands-therefor-loudspeakers-headphones-earphones-and-combined-micropho-e132c47e
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 传声器（麦克风）及其座架；扬声器；耳机、耳塞机及传声器/扬声器组合设备；音频电放大器；电气扩音机组

## 1. 范围与适用性

本PCR涵盖独立的电声换能器、传声器座架、音频放大器及电气扩音机组。主要功能为存储媒体录制或播放、广播电视接收或电信通信的设备属于各自类别。联网能力本身不能决定产品身份：应披露主要功能及供货配置。类别成员依据`un-cpc-3-0-structure-2025`确定。

共同方法是零部件接收、机电装配、与功能相适应的验收测试和包装。详细清单代表采用外购成品中密度纤维板箱体、外购单元、焊接连接及聚酯吸声絮垫的无源全频扬声器。它是数据采集方案，不是通用物料清单，也不是VISATON或Genelec的产品数据集。`visaton-solo-20-construction`和`genelec-recycling-materials`支持装配结构；`miljogiraff-transparent-light-speaker-2022`支持零部件边界的区分。

对于其他涵盖产品，采集数据前必须实例化其参考产品和原子物料清单。共同过程保留一次，对不适用的代表行说明依据。传声器需要拾音组件、安装结构及灵敏度/指向性证据；耳机需要换能器、佩戴结构及声明的声道；放大器需要装配电路、电源、输出负载及效率证据；传声器座架需要承载、调节及稳定性证据，不得虚设耗电。多分频或有源扬声器中实际存在的分频器、放大器或电池组件均须单独建行。代表路线的数量不得自动移用于其他设计。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.microphones-and-stands-therefor-loudspeakers-headphones-earphones-and-combined-micropho-e132c47e |
| classification_refs | CPC 3.0：47330；语义范围参考，分类映射待中央接受 |
| covered_products | 传声器及专用座架；扬声器；耳机、耳塞机及传声器/扬声器组合设备；音频电放大器及电气扩音机组 |
| excluded_products | 存储媒体录制/播放设备；广播接收机；电信设备；助听器；完整换能器以外单独交易的未完成零件 |
| representative_product | 成品中密度纤维板箱体无源全频扬声器 |
| production_route | 购入成品零部件；布线与焊接；装配；声学/电气测试；包装 |
| market_state | 全新、经测试、可销售的出厂产品；包装单独列入清单 |


中文标题为作者译文，已依据`china-rcep-tariff-japan-hs8518`中官方中文HS 8518术语核对。这是术语证据，不构成新增已接受分类映射。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应所声明设计的无源扬声器，用于电声转换 |
| How much | 1 kg放行产品净质量，等于1 / m_unit台；m_unit为实测单台质量，单位kg |
| How well | 声明频带、额定阻抗、灵敏度、失真及测试信号/电平/距离/声场；满足有记录的型号专用验收规范 |
| How long or cycle | 一个至出厂的完整生产周期；下游寿命和使用模式另行声明，不设默认年限 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 中密度纤维板箱体无源扬声器 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类及型号；主要功能；有源/无源；独立单元/带箱体整机；单声道/立体声/成套组成；单台净质量；随附配件；单元数量及类型；箱体和磁体组成；性能/测试条件；装配场址及生产周期；外购零部件起始状态；包装范围；供应商边界；维修及预期寿命证据 |


本生产模块采用声明质量单位。质量相同不能证明声学服务等效。下游比较必须明确产品数量、声学/电气性能、使用负荷、寿命、维修及其余生命周期阶段。必需限定信息应写入数据集元数据或关联技术记录；缺失限定信息时参考对象不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mu_net_mass | 参考产品 | Mass | kg | 以排除包装的M_good为分母；计数至质量换算必须对应具体型号，不得混用对、套与台。 |
| mu_energy | 电力 | Net calorific value | MJ | 实测kWh乘3.6换算为MJ。功放额定瓦数不是耗能量；使用随时间记录的墙端计量电量，包含工厂测试期间的待机。 |
| mu_components | 零部件投入 | Mass | kg | 使用购入状态的零部件质量。不得同时叠加完整单元及其磁体/音圈的上游负荷；声明MDF含水率和助焊剂供应态/干基质量。 |
| mu_test_basis | 性能记录 | 声明的声学/电气属性 | 声明的测试单位 | 结果须随附激励信号、夹具、距离、环境及校准记录。IEC 60268-21公开范围支持物理声学测试，不提供通用音质合格水平。 |



## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 装配场址已到货的完整扬声器单元、成品箱体、线材、紧固件及填充件 |
| starting_condition_role | 前景零部件装配入口状态 |
| product_classification_scope | 独立换能器、传声器座架及音频扩音产品；不得以存储媒体播放或接收机设备替代 |
| recursive_input_rule | 本类别内购入的完整扬声器单元作为投入并关联独立供应商数据集。前景追溯在声明的到货状态终止；不得将最终产品数据集回连自身。 |
| upstream_dataset_requirement | 各外购交换须关联从摇篮至交付的零部件/材料/能源供应证据，包含零件制造和运输。清单流身份本身不是供应数据集。 |
| disclosure | 披露外协与厂内操作、未关联的上游阶段、废物去向、基础设施处理及排除项。仅前景结果是门到门，不是摇篮到大门或摇篮到坟墓。 |


| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| sb_production | foreground_boundary | 包含实际执行的接收、布线、连接、安装、阻尼材料装填、测试、复测、返工及包装。外购箱体制造保留在供应商边界；厂内制造箱体须另设明确过程。 | visaton-solo-20-construction; miljogiraff-transparent-light-speaker-2022 |
| sb_lifecycle | downstream_use | 本PCR产出生产模块。完整生命周期声明前必须关联分销、用户使用、维修及寿命终结阶段；逐项说明排除及其重要性。 | ec-environmental-footprint-2021 |
| sb_waste | waste_boundary | 在交接点记录生产废物并关联适当处理；区分废物处理、可销售共产品及内部返工。保留零部件分离信息以供下游回收。 | genelec-recycling-materials |
| sb_double_count | upstream_and_direct_flows | 供应背景排放保留在关联数据集中；前景基本流仅计入实测或计算的场址排放。区分上游、工厂测试与用户使用电力。 | ec-environmental-footprint-2021 |



## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 零部件装配与连接 | required | 声明的产品采用所述代表装配路线 | 前景生产 | 终检前装配品 |
| test_pack | 验收测试与包装 | required | 所有放行产品；测试方式与实际功能对应 | 前景测试与包装 | 1 kg放行产品净质量 |


全部数量采用同一生产周期，并按放行产品质量归一化。条件性不存在必须有实际路线记录支持，不能以未测量作为依据。本清单不允许省略已识别交换：凡跨越前景边界的额外购入零部件、裁切废料、薄膜废物、清洗剂或各项直接排放，均须逐项实例化为物理或化学行。排放必须记录物种、环境介质、测量及捕集效率；不得使用“焊接烟气”汇总流。代表路线不预设燃烧或湿法清洗。

### 过程：零部件装配与连接（`assembly`）

#### 输入

##### 产品流

###### 电动式扬声器单元（`driver`）

对购入的完整单元称重；磁体、音圈、振膜及框架仅计入一次。

- 选定流：电动式扬声器单元
- 流属性/单位：Mass / kg
- 数量规则：对购入的完整单元称重；磁体、音圈、振膜及框架仅计入一次。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 带接线端子盒的成品中密度纤维板扬声器箱体（`enclosure`）

称量包含表面饰层及端子盒的成品箱体；取得供应商材料组成和加工边界。

- 选定流：带接线端子盒的成品中密度纤维板扬声器箱体
- 流属性/单位：Mass / kg
- 数量规则：称量包含表面饰层及端子盒的成品箱体；取得供应商材料组成和加工边界。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 绝缘铜芯扬声器连接电缆（`connection_cable`）

记录含绝缘层的实际下料电缆质量；长度换算必须采用实测单位长度质量。

- 选定流：绝缘铜芯扬声器连接电缆
- 流属性/单位：Mass / kg
- 数量规则：记录含绝缘层的实际下料电缆质量；长度换算必须采用实测单位长度质量。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 钢螺钉（`steel_screws`）

记录领用数量减退库数量，并乘经核实的单件质量；声明牌号及镀层。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：记录领用数量减退库数量，并乘经核实的单件质量；声明牌号及镀层。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 聚酯纤维吸声絮垫（`acoustic_wadding`）

称量安装的无涂层吸声絮垫，单独核算裁切损失；记录纤维与粘结剂组成。

- 选定流：聚酯纤维吸声絮垫
- 流属性/单位：Mass / kg
- 数量规则：称量安装的无涂层吸声絮垫，单独核算裁切损失；记录纤维与粘结剂组成。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 无助焊剂锡银铜焊料（`solder`）

记录端子焊点消耗的无助焊剂锡银铜焊料；必须取得供应商合金组成，不预设为SAC305。

- 选定流：无助焊剂锡银铜焊料
- 流属性/单位：Mass / kg
- 数量规则：记录端子焊点消耗的无助焊剂锡银铜焊料；必须取得供应商合金组成，不预设为SAC305。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 固体松香助焊剂（`rosin_flux`）

称量单独供应的固体松香助焊剂消耗；含溶剂配方必须单独核算组分及排放。

- 选定流：固体松香助焊剂
- 流属性/单位：Mass / kg
- 数量规则：称量单独供应的固体松香助焊剂消耗；含溶剂配方必须单独核算组分及排放。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 电力（`assembly_electricity`）

计量装配工具、焊接、烟气抽排及按因果关系分摊的厂务电量；不重复计入test_pack电表读数。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量装配工具、焊接、烟气抽排及按因果关系分摊的厂务电量；不重复计入test_pack电表读数。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200c9a66`; `93a60a57-a3c8-11da-a746-0800200c9a66`

#### 输出

##### 产品流

###### 终检前的已装配无源扬声器（`assembled_output`）

记录转入test_pack的净质量；保留批次身份并核对在制品。

- 选定流：终检前的已装配无源扬声器
- 流属性/单位：Mass / kg
- 数量规则：记录转入test_pack的净质量；保留批次身份并核对在制品。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

##### 废物流

###### 废无铅焊料浮渣（`solder_dross`）

称量单独收集并送往回收的焊料浮渣；inclusion_condition：浮渣跨越边界；否则记录不存在的依据。

- 选定流：废无铅焊料浮渣
- 流属性/单位：Mass / kg
- 数量规则：称量单独收集并送往回收的焊料浮渣；inclusion_condition：浮渣跨越边界；否则记录不存在的依据。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 废松香助焊剂（`rosin_residue`）

称量单独收集的松香残渣；inclusion_condition：残渣离开过程；留在产品上的助焊剂计入产品质量。

- 选定流：废松香助焊剂
- 流属性/单位：Mass / kg
- 数量规则：称量单独收集的松香残渣；inclusion_condition：残渣离开过程；留在产品上的助焊剂计入产品质量。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_assembly`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

### 过程：验收测试与包装（`test_pack`）

#### 输入

##### 产品流

###### 终检前的已装配无源扬声器（`assembled_input`）

使用与assembled_output相匹配的转移质量；此为内部连接，不是第二次外购投入。

- 选定流：终检前的已装配无源扬声器
- 流属性/单位：Mass / kg
- 数量规则：使用与assembled_output相匹配的转移质量；此为内部连接，不是第二次外购投入。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 电力（`test_electricity`）

按实际测试时序计量测试功放墙端输入、分析仪、老化及包装设备耗电；包含复测。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按实际测试时序计量测试功放墙端输入、分析仪、老化及包装设备耗电；包含复测。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_test_pack`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200c9a66`; `93a60a57-a3c8-11da-a746-0800200c9a66`

###### 瓦楞纸箱（`corrugated_carton`）

称量领用纸箱减未用退库纸箱；区分随产品交付的纸箱与报废破损纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：称量领用纸箱减未用退库纸箱；区分随产品交付的纸箱与报废破损纸箱。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_test_pack`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 低密度聚乙烯薄膜（PE-LD）（`ldpe_film`）

称量领用薄膜减退库量；依据供应商证据记录牌号、厚度及再生成分。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：称量领用薄膜减退库量；依据供应商证据记录牌号、厚度及再生成分。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bom_test_pack`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

#### 输出

##### 产品流

###### 中密度纤维板箱体无源扬声器（`reference_product`）

将放行产品净质量M_good归一化为1 kg；排除全部包装质量，返工合格产品只计一次。

- 选定流：中密度纤维板箱体无源扬声器
- 流属性/单位：Mass / kg
- 数量规则：将放行产品净质量M_good归一化为1 kg；排除全部包装质量，返工合格产品只计一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

##### 废物流

###### 废弃无源扬声器（`rejected_loudspeaker`）

称量移交已识别处理单位的不可修复整机；可返工的在制品不计为废物。

- 选定流：废弃无源扬声器
- 流属性/单位：Mass / kg
- 数量规则：称量移交已识别处理单位的不可修复整机；可返工的在制品不计为废物。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_test_pack`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`

###### 包装废弃物，纸板（`cardboard_waste`）

称量单独收集的纸板包装废弃物；排除随合格产品出厂的包装。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass / kg
- 数量规则：称量单独收集的纸板包装废弃物；排除随合格产品出厂的包装。 按calc_normalize除以M_good。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg放行扬声器净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_test_pack`
- 属性与单位组引用：`93a60a56-a3c8-11da-a746-0800200b9a66`; `93a60a57-a4c8-11da-a746-0800200c9a66`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| al_hierarchy | shared_operations | 优先评估过程细分或系统扩展；否则采用经证明的因果物理关系，记录后备经济分配及敏感性。 | ec-environmental-footprint-2021 |
| al_metering | shared_electricity | 依据cp_energy_assembly; cp_energy_test_pack，以实测设备功率时间或其他经验证的因果驱动因素分配共用电力；仅按台数分配须证明各型号负荷相同。分配总量须与电表核对。 |  |
| al_rework | rejects_and_recovery | 依据cp_release及cp_waste_assembly; cp_waste_test_pack，失败测试和返工负荷保留在以周期内合格产出为分母的核算中。回收单独报告；不得仅因废料有售价便抵扣全部原生材料生产。 |  |



## 8. 前景数据采集、计算与质量规则

### 数据采集协议

表头为稳定字段标识，依次表示协议、过程、流角色、记录类型、原始字段、采集方法、单位、频率、时间覆盖、场址范围、汇总规则及质量证据。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_bom_assembly | assembly | 零部件及包装 | 供应商记录与称重 | 型号；批次；供应商零件；材料组成；单件数量；单件质量样本；领用/退库质量；期初/期末库存；含水率；装配边界 | 以校准称重及物料清单版本核对仓库领退料 | kg; units; m | 每批及每次供应商/设计变更 | 声明的代表性生产周期，包含正常启停及返工 | 实际装配场址与指定供应商 | 各零部件净消耗除以M_good；损失单独保留 | 校准；秤分辨率；抽样覆盖；供应商声明；签署的库存核对 |
| cp_bom_test_pack | test_pack | 零部件及包装 | 供应商记录与称重 | 型号；批次；供应商零件；材料组成；单件数量；单件质量样本；领用/退库质量；期初/期末库存；含水率；装配边界 | 以校准称重及物料清单版本核对仓库领退料 | kg; units; m | 每批及每次供应商/设计变更 | 声明的代表性生产周期，包含正常启停及返工 | 实际装配场址与指定供应商 | 各零部件净消耗除以M_good；损失单独保留 | 校准；秤分辨率；抽样覆盖；供应商声明；签署的库存核对 |
| cp_energy_assembly | assembly | 电力 | 分项电表及设备日志 | 电表编号；边界；起止kWh；时间；空闲状态；运行/待机功率；测试时长；返工时间；型号产量；分配驱动因素 | 分别计量两个过程；功率时间后备法必须用电表核验 | kWh; W; h | 每生产周期；带时间戳测试日志 | 与放行产品同一周期 | 装配、抽排、测试工位；已说明的共用厂务负荷 | kWh换算MJ；过程总量和分摊共用负荷与场址电表核对；除以M_good | 电表校准；时间戳检查；分配因素验证 |
| cp_energy_test_pack | test_pack | 电力 | 分项电表及设备日志 | 电表编号；边界；起止kWh；时间；空闲状态；运行/待机功率；测试时长；返工时间；型号产量；分配驱动因素 | 分别计量两个过程；功率时间后备法必须用电表核验 | kWh; W; h | 每生产周期；带时间戳测试日志 | 与放行产品同一周期 | 装配、抽排、测试工位；已说明的共用厂务负荷 | kWh换算MJ；过程总量和分摊共用负荷与场址电表核对；除以M_good | 电表校准；时间戳检查；分配因素验证 |
| cp_transfer | assembly | 扬声器内部转移 | 批次转移及在制品台账 | 批次编号；台数；质量抽样；转移时间；期初/期末在制品；返工路线 | 匹配输出与输入转移单，并实物核对在制品 | kg; units | 每次转移 | 同一清单周期 | 配对的发送/接收工位 | 关联相等的转移质量；核算跨期在制品；合并总量时消去内部连接 | 签署的转移记录；在制品检查 |
| cp_release | test_pack | 参考产品及性能 | 验收测试与放行台账 | 序列号/型号；信号；阻抗；频带；灵敏度；失真；测试电平；距离；环境；校准；合格/不合格；复测；放行数量；单台净质量；含入配件 | 采用有记录的型号验收程序及校准测试；称量不含包装的可销售产品 | kg; units; 声明的测试单位 | 每放行批；测试频率由实际验收计划规定 | 同一生产周期 | 终检及包装线 | M_good等于各型号放行台数乘经核实的单台净质量；修复整机仅计一次 | 测试日志；校准；验收计划；放行批准 |
| cp_waste_assembly | assembly | 各项独立废物流 | 废物称重与转移记录 | 废物组成；容器皮重；毛重/净重；日期；批次；去向；废物/产品状态；回收或处置；残留物；捕集证据 | 称量各分离废物流；核对接收凭证；筛查直接排放并识别每种物质 | kg | 每次移交及周期平衡 | 与材料使用同一周期 | 生产场址至指定接收处理单位 | 扣除皮重，各废物流单独除以M_good；披露存货变化及实测直接排放 | 转移凭证；组成/SDS；校准称重；处理路线证据 |
| cp_waste_test_pack | test_pack | 各项独立废物流 | 废物称重与转移记录 | 废物组成；容器皮重；毛重/净重；日期；批次；去向；废物/产品状态；回收或处置；残留物；捕集证据 | 称量各分离废物流；核对接收凭证；筛查直接排放并识别每种物质 | kg | 每次移交及周期平衡 | 与材料使用同一周期 | 生产场址至指定接收处理单位 | 扣除皮重，各废物流单独除以M_good；披露存货变化及实测直接排放 | 转移凭证；组成/SDS；校准称重；处理路线证据 |


### 计算规则

列字段依次表示规则编号、适用对象、公式或规则、输入、输出及来源标识。

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | 全部外部交换 | q_i = Q_i / M_good，M_good必须为正且采用同一周期；Q_i为经库存调整的消耗或排出数量。 | cp_bom_assembly; cp_bom_test_pack; cp_waste_assembly; cp_waste_test_pack; cp_release | kg/kg or MJ/kg |  |
| calc_good_mass | reference_product | M_good = sum(N_released_model × m_unit_model)，排除包装；用总量直接称重核验。 | cp_release | kg; normalized reference_product = 1 |  |
| calc_energy | 电力 | E_MJ = 3.6 × E_kWh；采用功率时间法时，E_kWh = sum(P_input_W × hours) / 1000，包含实测待机及复测时段。 | cp_energy_assembly; cp_energy_test_pack | MJ/kg |  |
| calc_balance | 质量流 | 残差 = 外部材料输入 + 期初库存 - 期末库存 - 合格产品 - 出厂包装 - 外部废物 - 实测质量排放；内部转移抵消。结合测量合成不确定度调查残差。 | cp_bom_assembly; cp_bom_test_pack; cp_transfer; cp_waste_assembly; cp_waste_test_pack; cp_release | kg residual and explanation |  |


### 数据质量要求

列字段依次表示要求编号、适用对象、要求及证据。

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_design | 参考及物料清单 | 每个质量换算对应一个型号/配置；识别磁体类型、电子部件及随附配件，防止不同音频产品暗中共用材料构成。 | cp_bom_assembly; cp_bom_test_pack; cp_release |
| dq_primary | 前景数量 | 保留原始测量及不确定度；单独报告估计值，取得实测工厂能耗，不沿用来源案例的光电鼠标代理量。 | cp_energy_assembly; cp_energy_test_pack; miljogiraff-transparent-light-speaker-2022 |
| dq_representativeness | 关联供应数据集 | 披露地域、技术、年份、再生成分、供应商边界及任何代理替代；仅有流UUID不能提供这些事实。 | ec-environmental-footprint-2021 |
| dq_completeness | 全部过程 | 闭合物料清单及废物平衡；记录确实不存在的路线。每个新识别零部件、工艺化学品、废物或排放均新增一个具体交换。 | cp_bom_assembly; cp_bom_test_pack; cp_waste_assembly; cp_waste_test_pack |



## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| val_identity | reference_definition | 必须具备全部限定信息、具体产品对象及单台净质量。类别成员身份和通用音频设备标签不能证明流身份或功能等效。 | un-cpc-3-0-structure-2025 |
| val_trace | inventory | 每个有效行必须具备原始记录、数量基准、兼容属性/单位且恰为一个原子交换。缺测不同于实测零值或有依据的不适用。 |  |
| val_balance | mass_and_internal_links | 按批次与周期核对cp_transfer输出/输入。结合称重不确定度和存货变化调查非零质量残差；不得调整合格产出来强制平衡。包装不属于产品净质量。 |  |
| val_energy | factory_test | 核实装配/测试电表不重叠、kWh换算、测试时长及返工。拒绝未经验证的电输入模型而直接用额定声功率或功放输出瓦数乘时间的估计。 |  |
| val_performance | test_pack | 依据cp_release保留实测物理响应及型号专用验收准则；标准范围层面的证据不能证明符合未审阅条款。 | iec-60268-21-2018-scope |
| val_coverage | dataset_use | 说明阶段覆盖、未匹配供应链接、地域/技术/时间代表性及不确定度。单独使用本代表生产清单不能支持全类别比较声明。 | ec-environmental-footprint-2021 |



## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 在适当审查并完成供应链接后作为secondary_dataset；background_dataset |
| downstream_use | 前景数据包投影为process和lifecyclemodel；作为匹配扬声器设计的供应商生产投入 |
| allowed_use | 具有明确阶段覆盖及单位换算的声明场址/型号/周期生产清单 |
| excluded_use | 未经限定的所有音频设备平均值；座架/耳机/放大器替代；用户使用电力默认值；未补齐阶段及审查的完整生命周期或可比较EPD声明 |
| required_metadata | 必需限定信息；地域；日期；物料清单版本；供应商数据集；过程图；边界；分配；原始记录链接；处理路线 |
| required_quality_disclosure | 测量不确定度；缺失记录及供应链接；代理数据集；完整性；场址代表性；翻译/审查状态 |
| update_trigger | 设计/物料清单、供应商、箱体、磁体、电子部件、装配/测试路线、电力结构或废物处理变化；测量证据更新 |



## 11. 数据源

外部证据仅支持所列用途。特定来源的材料组成、电力代理量、寿命假设及环境结果不作为类别默认值。以下网络来源均于2026-09-09获取。列字段依次表示来源标识、类型、参考文献及用途。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 47330及相邻47311、47321、47323：类别成员及排除边界 |
| china-rcep-tariff-japan-hs8518 | official_guidance | China tariff schedule, Annex I, Section 3: Japan; official Chinese text hosted by Fujian Department of Commerce. https://swt.fujian.gov.cn/xxgk/jgzn/jgcs/zcfgc/sbqyzymy/202012/W020201218620318530448.pdf | HS 8518及子目：仅用于中文术语核对，不规定税率或声明与CPC完全等同 |
| ec-environmental-footprint-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I, sections 3.2, 4.5 and 4.6. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 | 功能、明确边界、分配层级和代表性；采用相关原则，不声明完全符合PEF |
| visaton-solo-20-construction | handbook | VISATON SOLO 20, Building instruction, Assembly and Inner damping. https://www.visaton.de/en/products/fullrange-systems/solo-20/bauanleitung | 中密度纤维板箱体、扬声器开孔、接线及声学阻尼结构；不移用尺寸或数量 |
| genelec-recycling-materials | handbook | Genelec, Recycling and Materials. https://www.genelec.com/recycling-information-materials | 扬声器单元、箱体材料、声学填充、包装及可分离废物组分；不规定再生成分默认值 |
| miljogiraff-transparent-light-speaker-2022 | literature | Viktor Hakkarainen and Marcus Bernhard, Miljögiraff AB, Life Cycle Assessment of Light Speaker by Transparent, report 977, 11 May 2022. https://transpa.rent/site/assets/cms/pdf/Life%20Cycle%20Assessment%20report%20Transparent%20LS%20V3%202022-05-11.pdf | 第3.3及4.2—4.4节，第14—23页：称重零件清单及上游零件加工与总装的区分；其中代理装配能耗不作为实测基准 |
| iec-60268-21-2018-scope | standard | IEC 60268-21:2018, Sound system equipment — Part 21: Acoustical (output-based) measurements; official scope page. https://webstore.iec.ch/en/publication/28687 | 仅公开范围：无源及有源系统的物理输入至声输出测试；不声称核验付费条款或通用合格限值 |
