---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.musical-audio-discs-tapes-or-other-physical-media
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 录有音乐的唱片、磁带或其他实体介质

## 1. 范围与适用性

本 PCR 支持销售时已录有音乐音频的新实体载体前景数据生产。以复制音频 CD 为代表路线；CD-R 刻录、PVC 黑胶唱片压制及盘装磁带复制装盒为条件路线。每个数据集固定一种载体结构、节目及供给状态。本方法区分内容复制、载体制造、作品专属压模、不合格品损失及包装负荷。

其他实体音乐载体仍属于类别范围，但不同结构的数据集必须先记录实际路线并增补具体交换。CD 清单不得作为闪存介质、多层光盘或历史虫胶唱片的替代模型。参考产品不含空白载体、视频产品、有声读物、非音乐录音、下载、流媒体及播放设备。来源：`un-cpc-3-0-structure-2025`; `cci-recording-media-care`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.musical-audio-discs-tapes-or-other-physical-media |
| classification_refs | CPC 3.0: 47610 |
| covered_products | 实体载体上的已录制音乐音频；每个数据集一种明确结构 |
| excluded_products | 空白介质；视频；有声读物；非音乐录音；下载；流媒体；播放硬件 |
| representative_product | 节目及包装已明确的复制音频 CD |
| production_route | 外购中间产品与压模 → 载体复制或录音 → 检验及包装 |
| market_state | 全新已录制载体，质量合格并包装出厂 |



## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供给合格的已录有音乐音频的声明实体载体 |
| How much | 1 kg |
| How well | 经批准节目可读取或播放、顺序正确且符合声明的介质特定外观验收；报告验收方法 |
| How long or cycle | 一个完整制造批次按产出归一化；不假设播放服务寿命 |
| reference_flow_link | `finished_music_media` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 音乐音频光盘、磁带或其他实体介质 `db247acc-87c3-406b-b093-15268b24a617` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 载体格式及结构；音乐节目标识与时长；录制技术及播放格式；合格件数与实测单件净质量；本体壳体和标签边界；包装材料清单；录制质量验收；工厂及报告期；供应商起始状态；再生料比例；公用投入地域与电压 |



在数据集元数据或等效产品记录中声明全部限定信息。1 kg 是制造声明单位，不代表相同质量提供等量聆听服务。专辑比较须统一节目、保真度、介质数量、使用及报废场景。来源：`weber-music-delivery-2010`

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 合格介质 | Mass | kg | 净载乐介质质量包含磁带本体壳体及附着标签，不含唱片盒、封套、内页册、包膜及运输纸箱；保留件数与实测单件质量。 |
| count_conversion | 件数及包装 | Mass | kg | 质量＝件数×实测平均单件质量；按格式及批次记录抽样。按每张专辑的介质件数另外换算音乐节目单位。 |
| tape_conversion | 盘装磁带及接带胶带 | Mass | kg | 质量＝耗用长度×实测线密度；缺少录音速度、轨道或面数及引带余量时，磁带时长不能直接确定长度。 |
| energy_conversion | 外购电力 | Net calorific value | MJ | 保留交付电能；1 kWh＝3.6 MJ。不得在该交换内换算为一次能源，也不得把电网排放计为厂区直接排放。 |
| gas_conditions | 气态天然气 | Volume | m3 | 声明参考温度、压力及干湿基准，统一换算仪表读数。由能量账单反推体积时须使用供应商特定热值。 |
| water_density | 外购水及排污水 | Mass | kg | 使用记录的密度及温度换算实测体积，区分外取水、循环、蒸发及排水。 |



## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供应商交付的配制树脂、成品压模、涂磁磁带或空白光学载体及外购组件，并记录上游负荷 |
| starting_condition_role | 前景采集接口；不从生命周期边界移除上游制造 |
| product_classification_scope | 已录制音乐实体介质；CPC 背景不能替代载体状态 |
| recursive_input_rule | 每项外购同类别投入设置一个供应商接口；内部转移仅计一次 |
| upstream_dataset_requirement | 覆盖实际配方、组件制造、供应商能耗、进厂运输及废物处理；披露地域、技术及未解决覆盖缺口 |
| disclosure | 声明起始状态、排除项、厂内或外购工序，并区分厂内结果与关联上游结果 |



| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_scope | manufacturing_system | 编制从原料获取到出厂的制造数据集，包含外购材料及组件、其上游生产与进厂运输、母版处理、载体生产或录音、相关公用投入、包装及生产废物处理；厂内观测与关联上游结果分别报告。 | `ghg-protocol-product-standard-2011` |
| boundary_route | carrier_construction | 每个数据集声明一种载体结构和路线。复制 CD 包含成型、金属化及保护涂覆；CD-R 刻录从外购空白光盘开始；PVC 黑胶唱片包含压制；盘装磁带复制包含录音及装带。不得仅凭格式名称套用其他路线清单。 | `nist-optical-disc-care-2003`; `cci-recording-media-care`; `nac-cassette-production-2026` |
| boundary_supplied_components | supply_boundary | 外购成品压模、涂磁分切磁带、壳体组件、印制标签及包装时，取得覆盖其全部内含材料及加工的上游数据集。若厂内制造，则用实测生产及其原子交换替代外购组件边界，不得两者重复计入；小批量生产也计入相关母版准备。 | `nist-optical-disc-care-2003`; `nac-cassette-mastering-2026`; `gz-media-music-manufacturing` |
| boundary_completeness | site_instantiation | 这些流卡为核心采集结构。场址数据集完成前，必须补齐实际存在但未列出的交换，例如具体工艺化学品、废保护漆、废压模、外送树脂废料、印刷色料、燃料、外购蒸汽、制冷剂泄漏及实测燃烧排放物。逐项记录组分、数量及去向；声称不存在须有证据，缺少 UUID 不得作为截断理由。 |  |
| boundary_recursion | same_category_inputs | 购买已录制音乐介质用于重包装或后续加工时，记录交付状态并仅关联一次供应商数据集。物理追溯在有记录的供应商接口停止，不得在分类标签处停止；内部转移须核对，避免重复外部投入或最终产出。 |  |
| boundary_downstream | excluded_stages | 出厂后流通、零售、播放设备及聆听用电、消费者出行与消费后报废属于独立下游场景。创作表演、版权及版税不属于本实体制造数据集，应披露该排除项；不得据此部分生命周期声称完整聆听服务比较或完整产品温室气体核算符合性。 | `weber-music-delivery-2010`; `ghg-protocol-product-standard-2011` |



## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mastering | 母版准备与压模 | conditional | 复制 CD 或压制黑胶唱片采用外购压模 | 前景制造 | 1 kg 合格已录制介质 |
| optical | 光盘复制或 CD-R 刻录 | conditional | 声明为光学音频介质 | 前景制造 | 1 kg 合格已录制介质 |
| vinyl_pressing | 黑胶唱片压制 | conditional | 声明为 PVC 沟槽音频唱片 | 前景制造 | 1 kg 合格已录制介质 |
| tape_duplication | 磁带复制及装带 | conditional | 声明采用盘装磁带复制装盒路线 | 前景制造 | 1 kg 合格已录制介质 |
| site_energy | 厂区能源与用水 | required | 所有生产路线；具体燃料及用水按各自条件纳入 | 前景制造 | 1 kg 合格已录制介质 |
| finishing | 整饰、包装及放行 | required | 所有合格介质；每种包装组件按条件纳入 | 前景制造 | 1 kg 合格已录制介质 |



各过程为同一集成制造系统的前景采集分区。内部在制品数量在批次日志中核对，仅放行载体作为参考产出。逐卡按条件纳入，避免重复公共能源用水或整饰台账。

### 过程：母版准备与压模（`mastering`）

#### 输入

##### 产品流

###### 镍制唱片压模（`nickel_stamper`）

采用外购成品镍压模复制 CD 或压制黑胶唱片时：采集压模质量、更换量及寿命期合格复制数量。

- inclusion_condition: 采用外购成品镍压模复制 CD 或压制黑胶唱片时

- 选定流：镍制唱片压模

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：压模更换质量按寿命期合格复制数量分配后，除以合格介质质量

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_mastering`

- 来源：`nist-optical-disc-care-2003`; `gz-media-music-manufacturing`

### 过程：光盘复制或 CD-R 刻录（`optical`）

#### 输入

##### 产品流

###### 聚碳酸酯颗粒（`polycarbonate_granulate`）

复制 CD 注塑时：分别采集光学级别、外部树脂耗用量及厂内回料量。

- inclusion_condition: 复制 CD 注塑时

- 选定流：聚碳酸酯颗粒 `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_optical`

- 来源：`nist-optical-disc-care-2003`

###### 铝溅射靶材（`aluminium_target`）

复制 CD 金属化时：分别称量靶材消耗量及可回收余料。

- inclusion_condition: 复制 CD 金属化时

- 选定流：铝溅射靶材

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_optical`

- 来源：`nist-optical-disc-care-2003`

###### 紫外固化丙烯酸酯保护漆（`uv_lacquer`）

CD 使用此声明的保护漆配方时：保留配方、固含量、净领用质量及施涂损失。

- inclusion_condition: CD 使用此声明的保护漆配方时

- 选定流：紫外固化丙烯酸酯保护漆

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_optical`

- 来源：`nist-optical-disc-care-2003`

###### 空白可刻录光盘（CD-R）（`blank_cd_r`）

仅在 CD-R 刻录时：计量空白光盘数量及质量；其上游供给已包含基片、染料、金属及保护漆制造。

- inclusion_condition: 仅在 CD-R 刻录时

- 选定流：空白可刻录光盘（CD-R）

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_optical`

- 来源：`nist-optical-disc-care-2003`

#### 输出

##### 废物流

###### 废光盘（`waste_compact_disc`）

成品 CD 不合格品外送时：区分复制型和可刻录型结构，保留去向及称量质量。

- inclusion_condition: 成品 CD 不合格品外送时

- 选定流：废光盘

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_optical`

- 来源：`nist-optical-disc-care-2003`

### 过程：黑胶唱片压制（`vinyl_pressing`）

#### 输入

##### 产品流

###### PVC 唱片压制专用混合料（`pvc_record_compound`）

PVC 唱片压制时：采集配方、颜色、外部再生料比例及净投料；单独记录厂内边料回用。

- inclusion_condition: PVC 唱片压制时

- 选定流：PVC 唱片压制专用混合料

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_vinyl_pressing`

- 来源：`cci-recording-media-care`; `gz-media-music-manufacturing`

#### 输出

##### 废物流

###### 废 PVC 唱片压制边料（`waste_pvc_record`）

固态 PVC 边料外送时：记录组分、质量及处理方式；厂内回料不属于外送废物。

- inclusion_condition: 固态 PVC 边料外送时

- 选定流：废聚氯乙烯（PVC） `cacd273c-d5c5-4f38-91c2-660d8a86498b`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_vinyl_pressing`

- 来源：`cci-recording-media-care`; `gz-media-music-manufacturing`

### 过程：磁带复制及装带（`tape_duplication`）

#### 输入

##### 产品流

###### 未录音氧化铁涂层聚酯音频磁带（`blank_audio_tape`）

盘装磁带复制录音时：采集耗用长度及实测线密度；外购已涂磁磁带的上游包含基膜、磁性涂层及黏结剂。

- inclusion_condition: 盘装磁带复制录音时

- 选定流：未录音氧化铁涂层聚酯音频磁带

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_tape_duplication`

- 来源：`cci-recording-media-care`; `nac-cassette-mastering-2026`; `nac-cassette-production-2026`

###### 空白音频盒式磁带壳体组件（`cassette_shell`）

向外购壳体装带时：计数并称量包含带芯、螺钉和引带的单一成套组件。

- inclusion_condition: 向外购壳体装带时

- 选定流：空白音频盒式磁带壳体组件

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_tape_duplication`

- 来源：`cci-recording-media-care`; `nac-cassette-mastering-2026`; `nac-cassette-production-2026`

###### 聚酯胶黏音频接带胶带（`splicing_tape`）

采用聚酯基接带胶带装带时：采集长度及线密度；胶黏层已包含在外购复合胶带中。

- inclusion_condition: 采用聚酯基接带胶带装带时

- 选定流：聚酯胶黏音频接带胶带

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_tape_duplication`

- 来源：`cci-recording-media-care`; `nac-cassette-mastering-2026`; `nac-cassette-production-2026`

#### 输出

##### 废物流

###### 废聚酯磁性音频磁带（`waste_audio_tape`）

散装磁带裁切料及不合格磁带离厂时：称量已涂磁磁带并记录去向；报废已装带盒式磁带必须另列废物流。

- inclusion_condition: 散装磁带裁切料及不合格磁带离厂时

- 选定流：废聚酯磁性音频磁带

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_tape_duplication`

- 来源：`cci-recording-media-care`; `nac-cassette-mastering-2026`; `nac-cassette-production-2026`

### 过程：厂区能源与用水（`site_energy`）

#### 输入

##### 产品流

###### 电力（`electricity`）

在统一分配台账中采集母版处理、复制、录音、冷却、压缩空气制备、印刷、包装及相关存储的外购电力。

- inclusion_condition: 声明路线中实际存在该物理交换时

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`

- 流属性/单位：Net calorific value / MJ; 属性 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`

- 数量规则：分配后的实测 kWh × 3.6 MJ/kWh，再除以合格介质质量

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_site_energy`

###### 工艺用水（`process_water`）

冷却或清洗使用外部补充用水时：计量外部投入，不含厂内循环量；保留水质和来源。

- inclusion_condition: 冷却或清洗使用外部补充用水时

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_site_energy`

###### 气态天然气（`natural_gas`）

天然气在厂内燃烧供热时：采集修正体积、参考温度、压力及组分；不得再计外购厂内所产热量。

- inclusion_condition: 天然气在厂内燃烧供热时

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`

- 流属性/单位：Volume / m3; 属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_site_energy`

#### 输出

##### 废物流

###### 冷却塔排污废水（`cooling_blowdown`）

冷却塔排污水送处理时：采集质量、添加剂及去向；与蒸发及废清洗液区分。

- inclusion_condition: 冷却塔排污水送处理时

- 选定流：冷却塔排污废水

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_site_energy`

##### 基本流

###### 二氧化碳（化石源）（`fossil_co2`）

化石燃料厂内燃烧直接排入空气时：采用实测 CO2，或修正用气体积乘经核验的供应商特定化石 CO2 因子；电网排放保留在上游。

- inclusion_condition: 化石燃料厂内燃烧直接排入空气时

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：实测直接化石 CO2，或修正用气体积×经核验场址特定因子，再除以合格介质质量

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_site_energy`

### 过程：整饰、包装及放行（`finishing`）

#### 输入

##### 产品流

###### 纸质标签（`paper_label`）

外购纸质标签附于介质时：计数并称量；声明印刷及胶黏层供给边界；压入黑胶唱片的标签计入介质质量。

- inclusion_condition: 外购纸质标签附于介质时

- 选定流：纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

- 来源：`nac-cassette-production-2026`

###### 紫外固化黑色丝网印刷油墨（`uv_black_ink`）

采用此单一配方直接丝网印刷 CD 时：采集油墨净领用质量；每种其他颜色或配方分别列为交换。

- inclusion_condition: 采用此单一配方直接丝网印刷 CD 时

- 选定流：紫外固化黑色丝网印刷油墨

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

- 来源：`nist-optical-disc-care-2003`

###### 聚苯乙烯 CD 唱片盒（`cd_jewel_case`）

提供外购聚苯乙烯 CD 唱片盒时：计数并称量；盒式磁带盒及其他聚合物包装必须另列交换。

- inclusion_condition: 提供外购聚苯乙烯 CD 唱片盒时

- 选定流：聚苯乙烯 CD 唱片盒

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

- 来源：`weber-music-delivery-2010`

###### 印制纸板唱片封套（`paperboard_sleeve`）

外购印制纸板封套用于介质包装时：计数并称量，在供应商数据集中声明涂层及印刷。

- inclusion_condition: 外购印制纸板封套用于介质包装时

- 选定流：印制纸板唱片封套

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

- 来源：`gz-media-music-manufacturing`

###### 印制纸质 CD 内页册（`printed_booklet`）

附有外购印制内页册时：计数并称量；内页册质量属于包装，不属于参考介质质量。

- inclusion_condition: 附有外购印制内页册时

- 选定流：印制纸质 CD 内页册

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

- 来源：`weber-music-delivery-2010`

###### 低密度聚乙烯包装薄膜（`ldpe_film`）

仅在实际使用 LDPE 膜时：称量包装膜净领用量；玻璃纸及聚丙烯膜必须另列交换。

- inclusion_condition: 仅在实际使用 LDPE 膜时

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

###### 瓦楞纸箱（`corrugated_box`）

使用批量运输纸箱时：计数并称量，按实际装箱数量分配；避免重复计入供应商进厂包装。

- inclusion_condition: 使用批量运输纸箱时

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

- 来源：`weber-music-delivery-2010`

#### 输出

##### 产品流

###### 音乐音频光盘、磁带或其他实体介质（`finished_music_media`）

每个数据集对应一种明确的介质结构；对合格载有音乐的产品计数并称量；包含本体壳体及标签，不含可拆卸包装。

- inclusion_condition: 声明路线中实际存在该物理交换时

- 选定流：音乐音频光盘、磁带或其他实体介质 `db247acc-87c3-406b-b093-15268b24a617`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：1 kg 合格已录制介质；保留实测件数及单件净质量

- 数值来源模式：`fixed_value`

- 适用范围：`product_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 废瓦楞纸板包装（`waste_corrugated_box`）

前景边界内废弃瓦楞包装时：分类称量废物，记录回收或处置去向。

- inclusion_condition: 前景边界内废弃瓦楞包装时

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`

- 流属性/单位：Mass / kg; 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 数量规则：批次净数量按计量规则换算后除以合格介质质量（kg）

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 合格已录制介质，分母不含包装

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_finishing`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_processes | 优先分开产品批次并直接计量相关过程。不可避免时，按经证实的物理关系分配；只有记录物理分配不适用的原因并开展敏感性分析后，才可采用经济分配。 | `ghg-protocol-product-standard-2011` |
| allocation_tooling | mastering_and_stampers | 按同一作品和格式在记录寿命期内的合格复制数量分配母版与压模准备负荷，负荷分子包含试制及失败批次。记录更换和部分寿命，不得假设无限复用。 |  |
| allocation_utilities | site_energy | 尽可能采用路线分表。否则按实测功率与时间需求分配批次用电，按实测热需求分配工艺热，按实际件数分配包装，并将分配份额与厂区总表核对。音乐时长本身不是成型负荷的因果分配基准。 |  |
| allocation_recycling | scrap_and_recycled_content | 将厂内回料作为内部循环，仅计一次再加工能耗及损失。对外部再生料和废物处理采用明确披露的再生含量法；不得在出厂结果中扣除假设的原生材料替代量。可用但不符合原规格且对外出售的介质须单独作为产品记账，不得自动视为废物。 | `ghg-protocol-product-standard-2011` |



## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mastering | mastering | 压模台账 | batch_and_meter_records | tool_id; title_id; format; mass_kg; installation/removal_date; good_copies; failed_copies; supplier | 称量外购压模，核对更换及寿命期批次日志。 | kg; count | 每次压模更换及生产批次 | 完整声明报告期及生产批次；保留日期与产品组合 | 具名工厂及纳入供应商；不得无记录合并多个场址 | 按实际合格复制数量分配准备负荷，再按合格介质质量归一化。 | 校准、发票、库存核对、抽样计划、不确定度及验收记录 |
| cp_optical | optical | 光盘批次日志 | batch_and_meter_records | lot_id; optical_route; resin_grade; resin_kg; target_before/after_kg; lacquer_kg; solids_fraction; blank_count; blank_mass_kg; accepted_count; reject_kg; internal_regrind_kg | 称量领退料；记录产线运行；抽检内容可读性及表面缺陷。 | kg; count | 每个生产批次 | 完整声明报告期及生产批次；保留日期与产品组合 | 具名工厂及纳入供应商；不得无记录合并多个场址 | 采用外部净消耗，计入启动及不合格品，分开 CD-R 与复制工艺数据。 | 校准、发票、库存核对、抽样计划、不确定度及验收记录 |
| cp_vinyl_pressing | vinyl_pressing | 压制批次日志 | batch_and_meter_records | lot_id; compound_formula; external_recycled_fraction; feed_kg; internal_trim_return_kg; exported_trim_kg; accepted_count; net_record_mass_kg | 核对料斗领料及称量边料，检查音频和唱片外观质量。 | kg; count | 每个压制批次 | 完整声明报告期及生产批次；保留日期与产品组合 | 具名工厂及纳入供应商；不得无记录合并多个场址 | 归一化前区分厂内回用、外部投料及外送废物。 | 校准、发票、库存核对、抽样计划、不确定度及验收记录 |
| cp_tape_duplication | tape_duplication | 复制及装带日志 | batch_and_meter_records | lot_id; tape_type; length_m; linear_mass_kg_per_m; shell_count; shell_mass_kg; splice_length_m; splice_linear_mass; accepted_count; reject_tape_kg; programme_minutes | 测量磁带耗用及组件质量，核对装带计数并按批准母版抽检回放。 | m; kg; count; min | 每个复制批次 | 完整声明报告期及生产批次；保留日期与产品组合 | 具名工厂及纳入供应商；不得无记录合并多个场址 | 使用实测值将长度及件数换算为质量，计入引带与裁切损失。 | 校准、发票、库存核对、抽样计划、不确定度及验收记录 |
| cp_site_energy | site_energy | 计量及排放台账 | batch_and_meter_records | meter_id; time_start/end; kWh; gas_m3; gas_reference_conditions; water_kg; blowdown_kg; emission_measurement_or_factor; allocation_driver; operating_hours | 使用经校准仪表、账单及排放测量或经核验场址特定因子，保留因子来源与边界。 | kWh; MJ; m3; kg | 按计量间隔记录并在每个报告期核对 | 完整声明报告期及生产批次；保留日期与产品组合 | 具名工厂及纳入供应商；不得无记录合并多个场址 | 将分配份额与厂区总量核对，仅按批次合格质量归一化一次。 | 校准、发票、库存核对、抽样计划、不确定度及验收记录 |
| cp_finishing | finishing | 放行、包装及供给台账 | batch_and_meter_records | lot_id; medium_format; programme_id; accepted_count; unit_mass_kg; packing_count; component_mass_kg; net_ink_kg; stock_changes; waste_kg; supplier_dataset; inbound_transport; delivery_boundary | 称量载体及每种包装组件，核对发票、库存变动、供应商生产和运输覆盖及放行检验。 | kg; count; min; tonne-km | 每批及每个报告期 | 完整声明报告期及生产批次；保留日期与产品组合 | 具名工厂及纳入供应商；不得无记录合并多个场址 | 以合格载体质量为分母，包装质量与供给链接分别保持可追溯。 | 校准、发票、库存核对、抽样计划、不确定度及验收记录 |



### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | q_i＝分配后的 Q_i / M_good；M_good＝N_good×实测平均载体质量。全部投入、产出及库存量采用同一时间边界。 | quantity; allocation_share; accepted_count; unit_mass | normalized_exchange |  |
| tool_share | mastering | 按批次合格复制数量/寿命期合格复制数量分配相关压模及母版总负荷，再归一化；更新时核对未满寿命记录。 | tool_mass; good_copy_history | allocated_tool_mass |  |
| site_share | site_energy | 分配数量＝厂区数量×实测因果份额；全部份额须与计量总量核对。 | meter_quantity; causal_driver | allocated_utility |  |
| supply_link | upstream_dataset | 将每项外购实物净投入仅关联一次相容的生产及进厂运输数据；报告覆盖并避免重复内含组件。 | supplier; product_state; quantity; transport | upstream_link | `ghg-protocol-product-standard-2011` |



### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | all rows | 保留准确配方、供给状态、批次、供应商及去向；在下游声称完全匹配前解决缺失流 | 材料清单及供应商规格 |
| coverage | reporting period | 覆盖完整批次，包括准备、试制、不合格品、停机及库存变动；披露缺口和季节或产品组合偏差 | 批次与计量核对 |
| quality | accepted output | 记录抽样方法、批准的音频和内容准则、播放设备及外观检查；不得以理论产量代替合格产量 | 放行及不合格品日志 |
| uncertainty | all quantities | 保留计量不确定度和实际波动；本 PCR 不提供文献推导的默认数量或数值范围 | 校准及来源适用性评价 |



## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | 必须具有已录制音乐内容、明确实体载体及全部参考限定信息；空白介质、视频、纯口述内容产品及播放硬件不得作为参考产出。 | `un-cpc-3-0-structure-2025` |
| validate_rows | inventory | 每项实例化交换必须为原子流，具有数量与单位，并关联采集记录或计算；UUID 必须符合流类型、状态及计量要求，缺失 UUID 须明确保留。 |  |
| validate_balance | campaign | 将外部材料投入及期初库存与合格介质、单列包装、废物、排放及期末库存核对；依据仪器不确定度及记录的转化过程调查差额，不得虚构通用容差。 |  |
| validate_route | process_coverage | 要求覆盖每个适用过程和场址特定扩展，匹配供应商边界，并采用统一公用投入台账。CD-R 供给不得重复计入复制 CD 的组成材料；涂磁磁带不得重复其上游涂层制造。 |  |
| validate_quality | release_and_data | 采用批次验收记录确认内容可读取、顺序正确及介质特定外观质量；消耗与不合格品记录须保留失败复制品。评价技术、地域、时间代表性、完整性及计量可靠性。 | `nist-optical-disc-care-2003`; `cci-recording-media-care`; `ghg-protocol-product-standard-2011` |
| validate_ranges | quantitative_evidence | 采用实测前景值。外部推断区间须具有至少两个独立原文来源，且介质状态、单位、边界相容，并说明综合推断方法。同一出版物的场景不独立；精确归一化及单位换算不属于范围。 |  |



## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明实体音乐产品生命周期或流通模型的制造投入 |
| allowed_use | 相同载体结构、产品状态、技术及供给边界；按实测质量和件数关系缩放 |
| excluded_use | 不加限定跨格式替代；完整流媒体与实体产品比较；未添加场景的零售、播放或报废结论 |
| required_metadata | 载体格式及结构；音乐节目标识与时长；录制技术及播放格式；合格件数与实测单件净质量；本体壳体和标签边界；包装材料清单；录制质量验收；工厂及报告期；供应商起始状态；再生料比例；公用投入地域与电压 |
| required_quality_disclosure | 采集日期、仪器、抽样覆盖、分配、供应商链接、废物路线、UUID 缺口、不确定度及部分生命周期边界 |
| update_trigger | 载体或配方变化；新供应商或电网；路线或包装变化；产率、压模寿命或证据更新；重大覆盖修正 |



## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | [UNSD, CPC Version 3.0 structure, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); 访问日期 2026-09-09 | 录有音乐的实体介质分类范围及排除项；核验官方 CSV 相应条目及缓存哈希。 |
| nist-optical-disc-care-2003 | official_guidance | [Byers, Care and Handling of CDs and DVDs, NIST SP 500-252 (2003)](https://nvlpubs.nist.gov/nistpubs/legacy/sp/NISTspecialpublication500-252.pdf); 访问日期 2026-09-09 | 核验第 3.1–3.5 节：基片、压模复制、反射金属、保护漆、印刷面及可刻录结构；不采用数量值。 |
| cci-recording-media-care | official_guidance | [Canadian Conservation Institute, Iraci, Caring for audio, video and data recording media](https://www.canada.ca/en/conservation-institute/services/preventive-conservation/guidelines-collections/caring-audio-video-data-recording-media.html); 访问日期 2026-09-09 | 核验沟槽介质表 1 及磁性、光学介质章节：PVC 唱片、涂磁磁带及介质结构。 |
| gz-media-music-manufacturing | extension_guidance | [GZ Media, Music manufacturing services](https://www.gzmedia.com/music/); 访问日期 2026-09-09 | 核验母版制作、电铸、压制、包装组装及废料回用工序。 |
| nac-cassette-production-2026 | extension_guidance | [National Audio Company, From Master to Mixtape: Part 2 (2026)](https://www.nationalaudiocompany.com/blog/from-master-to-mixtape-part-2/); 访问日期 2026-09-09 | 核验盘带复制、标签或印刷、包装及出货工序；不采用生产速度。 |
| nac-cassette-mastering-2026 | extension_guidance | [National Audio Company, From Master to Mixtape: Part 1 (2026)](https://www.nationalaudiocompany.com/blog/from-master-to-mixtape-part-1/); 访问日期 2026-09-09 | 核验母版制作及提示信号控制裁切、接带装盒；不采用音质数值论断。 |
| ghg-protocol-product-standard-2011 | standard | [WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011)](https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf); 访问日期 2026-09-09 | 核验第 7–9 章：边界披露、数据质量、分配顺序及回收一致性；用于清单记账，不声明完整产品温室气体核算符合性。 |
| weber-music-delivery-2010 | literature | [Weber、Koomey 和 Matthews，《不同音乐交付方式的能源与气候变化影响》(2010)，可访问的存档 PDF](https://fepropaz.com/wp-content/uploads/2019/10/weber2010.pdf)；DOI：10.1111/j.1530-9290.2010.00269.x；访问日期 2026-09-10 | 已核验原文：“方法与假设”（印刷页 756）及“CD 和 CD 包装生产”（印刷页 759）。该文区分单张专辑交付的功能等效与本 PCR 的出厂质量归一化，并确认其历史 CD/CD-R 案例不能建立载体特定制造活动范围。 |
