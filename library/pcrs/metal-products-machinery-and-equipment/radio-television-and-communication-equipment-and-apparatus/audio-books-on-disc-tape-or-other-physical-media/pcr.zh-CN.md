---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.audio-books-on-disc-tape-or-other-physical-media
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 光盘、磁带或其他实体介质上的有声读物

## 1. 范围与适用性

本 PCR 用于采集实体介质上完整有声读物套装的前景数据。产品为交付的已记录复制品，包括已声明的零售包装盒及随附印刷品。一套产品可以由同一版本的多个编号载体组成。数字下载、流媒体、纯文本电子书、音乐录音、不具备书籍身份的其他口述录音、作为空白介质出售的产品，以及播放设备，不属于本产品边界。分类区分依据 `un-cpc-3-0-structure-2025`；载体和母版区分依据 `loc-marc-sound-recording`。

默认前景模块从已提供的音频母版与制成的空白载体开始，或从购入、等待最终组装的已记录有声读物套装开始，涵盖复制或文件写入、核验、套装组装及出厂放行。本模块属于门到门生产清单。构建从摇篮到大门的模型时，必须连接有据可查的上游供应数据集。本 PCR 不直接构成完整产品碳足迹或收听服务比较。模块边界是由作者设计、通过 `cp_boundary` 执行的数据采集方案，并不表示通用碳核算标准规定了这一具体边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.audio-books-on-disc-tape-or-other-physical-media |
| classification_refs | CPC 3.0：47691；作为分类背景，映射关系须另行接受 |
| covered_products | 光盘、磁带或固态实体介质上的已记录有声读物套装；分别识别节选版与完整版 |
| excluded_products | 下载；流媒体；纯文本介质；音乐录音；非书籍口述录音；空白介质产品；播放器；不涉及已记录产品所有权的复制服务 |
| representative_product | 记录于已声明数量的光盘上的完整有声读物版本，附有经称量的零售包装盒与随附印刷品 |
| production_route | 购入 CD-R 的录制；盒式磁带复制；向购入闪存书卡写入文件；购入已记录有声读物套装的组装，包括供应商提供压制光盘的路线 |
| market_state | 生产者发运时通过核验的已记录复制品，声明版本身份、载体数量和包装组成 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以完整实体套装提供已记录的书籍语音内容 |
| How much | 1 kg 已放行套装，包括已声明的零售包装盒及随附印刷品；等效套数为 1 / m_set，其中 m_set 为每套完整产品的实测质量，单位 kg |
| How well | 版本、语言、节选状态、章节顺序及声明的播放兼容性正确；所需载体齐全，并按有记录的核验计划通过验收 |
| How long or cycle | 一次生产放行事件；声明正常播放速度下的内容时长 D，单位 h；D 不代表使用寿命或收听循环次数 |
| reference_flow_link | `audiobook_output`；执行 `normalize_release` 并保留完整套装数量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 有声读物光盘、磁带及其他实体载体 `866db10b-a6d4-4204-93b9-efd59499e22b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 书名及版本标识；语言；节选状态；内容时长 D；每套载体格式与数量；录制或写入路线；播放兼容性；载体净质量；零售包装组成与质量；完整套装质量 m_set；已放行套数；场址及地理位置；报告期；供应母版的边界；上游连接；购入已记录产品的状态；不合格品及返工核算 |

前景数据包必须声明全部限定信息。质量归一化不表示不同版本或载体技术在功能上可相互替代。`cp_release` 和 `cp_boundary` 定义参考对象的采集证据；`loc-marc-sound-recording` 和 `loc-nls-equipment` 支持录音格式区分。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| complete_set_mass | 参考产品与购入已记录套装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对每种版本及包装配置称量完整套装，分别保留载体与包装质量。一本书需要多张光盘时，不得以单张光盘作为归一化套装。 |
| duration_basis | 录音元数据 | Duration | h | 记录正常速度下按顺序播放的全部内容时长；不得乘以声道数，也不得用压缩文件大小代替播放时长。 |
| electricity_conversion | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 将电力保留为能量交换；按单位定义，1 kWh = 3.6 MJ。保留原始电表单位及换算过程，不得将电力当作燃烧燃料。 |
| stock_correction | 材料和废物记录 | Mass | kg | 用实测批次单件质量换算组件数量。对收货和领用记录进行期初期末库存、退货及返工校正，并采用与合格产出一致的报告时间窗。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已交付的制成空白载体、制成包装组件及所提供的音频母版；或为最终组装而交付的已记录有声读物套装。逐一记录供应商已完成的操作。 |
| starting_condition_role | 前景数据采集切分点，并非断言上游制造或音频制作没有环境负荷 |
| product_classification_scope | 实体介质上的已记录有声读物产品；空白介质与远程内容保持独立身份 |
| recursive_input_rule | 将购入的已记录套装记为 `purchased_audiobook`，声明供应商、格式、包装状态及数量，连接供应商阶段数据集后停止本地递归；不得将该输入连接回本过程自身产出。 |
| upstream_dataset_requirement | 若报告从摇篮到大门的结果，应连接载体制造、适用时的供应商复制、包装制造与印刷、音频母版制作、购入电力及入厂运输。对每个连接记录地理位置、技术、年份、分配及重叠情况。 |
| disclosure | 门到门结果与所连接的上游结果分别报告。披露缺失供应商数据、母版制作排除项、资本设备处理方式，以及分销、收听使用、重复使用和寿命终结排除项。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_start | 前景模块 | 执行 `cp_boundary` 中的起始状态记录。纳入场内复制、文件写入、核验、组装、可归属辅助能耗及不合格品。购入的压制光盘包含供应商制造；CD-R 输入需要场内写入，不能代替压制路线。 | `nist-cd-dvd-care-2003`; `loc-marc-sound-recording` |
| boundary_master | 音频母版 | 所提供的母版文件是定义复制作业的信息，不应虚构为质量交换。通过 `cp_boundary` 记录其来源与制作边界。单独建模的录音及编辑能耗须分配至复制品，并避免与上游重复计入。 | `loc-marc-sound-recording` |
| boundary_expansion | 场址完整性 | 将现场流程核查与物料清单、电表及废物记录对照。若场址还进行光盘成型、磁带涂布、印刷、溶剂清洗或燃料使用，则应向前景数据包增补单独识别的原子交换及采集协议，或在已声明的切分点连接供应模块。清单未列出某行不等于其影响为零。 | |
| boundary_linking | 下游模型 | 保持本部分清单与完整生命周期研究的区别。纳入边界内全部投入及可归属操作；在声明更广覆盖范围前，记录排除项和附加上游模块。 | `ghg-product-standard-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| physical_release | 复制、核验及完整套装组装 | required | 每次实体有声读物放行均适用；各载体投入按实际路线有条件纳入 | 前景生产 | 1 kg 已放行完整套装 |

### 过程：复制、核验及完整套装组装（`physical_release`）

采用合并过程边界，避免虚构复制与包装之间的内部材料转移；仍以分项作业日志识别各项操作。每项条件性交换保留独立的 `inclusion_condition`，仅有证据证明不存在时才可排除。制成载体保留其复合产品身份，不得再次加入已包含的树脂或金属。路线区分依据 `nist-cd-dvd-care-2003`、`loc-marc-sound-recording` 和 `loc-nls-equipment`。

#### 输入

##### 产品流

###### 未记录的可录式光盘（CD-R）（`blank_cd`）

`inclusion_condition`: 作业将有声读物写入购入的未记录 CD-R 光盘时纳入。 记录包含记录层及保护层的制成光盘质量；供应商生产纳入上游连接。

- 选定流：未记录的可录式光盘（CD-R）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_material 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`nist-cd-dvd-care-2003`

###### 空白盒式录音磁带（`blank_cassette`）

`inclusion_condition`: 作业向购入的组装完成的空白盒式磁带复制音频时纳入。 称量包含磁带及一体外壳的完整盒式磁带，将播放长度和磁带配方作为供应商限定信息记录。

- 选定流：空白盒式录音磁带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_material 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`loc-marc-sound-recording`

###### 空白 USB 闪存书卡（`blank_flash`）

`inclusion_condition`: 作业将音频文件写入购入的空白 USB 闪存书卡时纳入。 记录制成书卡的完整质量及容量；半导体制造属于上游，书卡不作为播放设备。

- 选定流：空白 USB 闪存书卡
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_material 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`loc-nls-equipment`

###### 有声读物光盘、磁带及其他实体载体（`purchased_audiobook`）

`inclusion_condition`: 为最终组装或包装而购入已记录有声读物复制品时纳入。 声明供应商阶段的状态及已含包装，不得再次计入已有包装盒或已完成录制操作。

- 选定流：有声读物光盘、磁带及其他实体载体 `866db10b-a6d4-4204-93b9-efd59499e22b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_material 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`un-cpc-3-0-structure-2025`

###### 聚苯乙烯光盘盒（`case`）

`inclusion_condition`: 放行套装装配单独购入的聚苯乙烯光盘盒时纳入。 计量含一体托盘的成品包装盒，而非树脂原料；排除已计入购入录制品质量的包装盒。

- 选定流：聚苯乙烯光盘盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_material 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`

###### 纸板光盘套（`sleeve`）

`inclusion_condition`: 已声明套装配置使用单独供应的纸板光盘套时纳入。 记录成品纸套质量及印刷状态，不重复加入其中已包含的纸板或油墨。

- 选定流：纸板光盘套
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_material 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`

###### 包装, 纸质说明书内页（`booklet`）

`inclusion_condition`: 套装附有单独购入的印刷纸质说明书内页时纳入。 计量印刷完成的说明书内页；除非扩展前景边界明确纳入印刷，否则印刷属于上游。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_material 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`

###### 电力（`electricity`）

`inclusion_condition`: 纳入可归属于已声明复制、核验及组装模块的全部购入电力。 使用作业和辅助负荷记录；供应商电网发电仅通过电力供应数据集表示。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组：能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_energy 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy`

##### 废物流

默认起始状态下未定义此类交换；按 boundary_expansion 核验场址是否存在附加交换。

##### 基本流

默认起始状态下未定义此类交换；按 boundary_expansion 核验场址是否存在附加交换。

#### 输出

##### 产品流

###### 有声读物光盘、磁带及其他实体载体（`audiobook_output`）

`inclusion_condition`: 纳入报告期内放行的合格完整套装。 Q 包含已声明的零售包装盒及随附印刷品质量。不合格品和不完整套装不计入合格 Q；归一化至一千克是恒等关系，不是经验产率。

- 选定流：有声读物光盘、磁带及其他实体载体 `866db10b-a6d4-4204-93b9-efd59499e22b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_release 记录合格放行质量 Q；normalize_release 后为 Q / Q = 1 kg。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 废弃已记录光盘（`waste_disc`）

`inclusion_condition`: 录制、核验或搬运失败后废弃并移出边界的已记录光盘纳入本行。 将复合光盘与包装盒分别称量；内部重试的光盘在实际废弃前不计入转移废物。

- 选定流：废弃已记录光盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`nist-cd-dvd-care-2003`

###### 废盒式录音磁带（`waste_cassette`）

`inclusion_condition`: 完整盒式录音磁带被判不合格并作为废物转移时纳入。 将磁带盒及磁带作为一个复合废物对象计量，不使用通用废塑料身份代替。

- 选定流：废盒式录音磁带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`loc-marc-sound-recording`

###### 废 USB 闪存书卡（`waste_flash`）

`inclusion_condition`: 故障闪存书卡被永久废弃并转交处理时纳入。 将交付废物处理的书卡与退回供应商维修及场内保留可重复使用的书卡区分。

- 选定流：废 USB 闪存书卡
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`loc-nls-equipment`

###### 包装废弃物，纸类（`waste_paper`）

`inclusion_condition`: 废弃印刷纸质内页作为分拣后的纸类废物流离开模块时纳入。 按转移批次计量，并保留污染状态和去向信息。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`

###### 包装废弃物，纸板（`waste_board`）

`inclusion_condition`: 损坏或多余的纸板光盘套废弃并离开模块时纳入。 将废纸板与废印刷纸质内页分开记录，并考虑废物暂存量变化。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 cp_waste 采集本项交换的原始数量及库存或分配校正，依 normalize_release 除以合格放行质量 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行完整有声读物套装，包含已声明零售包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste`

##### 基本流

默认起始状态下未定义此类交换；按 boundary_expansion 核验场址是否存在附加交换。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 共享操作 | 优先采用直接作业计量和独立采购记录。仍需分配时，应论证物理因果驱动因素，并披露采用其他分配依据的情况。 | `ghg-product-standard-2011` |
| allocation_copy_jobs | 复制及组装 | 按 `cp_energy`，依据有记录的设备占用时间分配实测能耗，将准备及待机能耗分配给引发这些活动的作业。只有载体及循环要求经证实相同时才可按复制数量分配；音频时长不是通用制造驱动因素。 | |
| allocation_master | 共享母版制作模块 | 按 `cp_boundary`，披露上游标题制作负荷如何在实体与数字发行方式及生产总体间分配。分别保留实测与预测复制数量，对预测进行敏感性分析，并防止通过供应商已记录复制品数据集重复计入。 | |
| allocation_rejects | 不合格品及回收 | 将复制失败及销毁套装的负荷归属于合格产出。单独追踪返工，不将其计为新产出。回收假设应与所连接数据集一致，不得向前景模块赋予缺乏依据的替代原生材料抵扣。 | `ghg-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_boundary | physical_release | 供应边界及路线 | 供应商及作业记录 | 供应商；母版标识；版本；输入状态；已完成操作；上游数据集；地理位置；年份；运输质量与距离；共享母版分配 | 将采购订单追溯至作业指令和供应商声明，并开展现场流程核查 | kg; km; 数据集标识 | 每次供应商或路线变更 | 与产出相同的生产时间窗 | 声明场址及供应商 | 建立操作与模块对应表，每项操作只计一次 | 供应商证据、边界图及已记录的数据缺口 |
| cp_material | physical_release | 各载体及包装组件 | 库存及称量记录 | 行标识；批次；组件规格；期初库存；收货；期末库存；退货；领用数量；抽样单件质量 | 对照仓库台账、衡器与作业物料清单 | kg; item | 每批及库存结算时 | 包括准备和失败作业的完整代表性报告期 | 生产及包装仓库 | 各行净耗用量除以合格产出质量；不对不兼容版本直接平均 | 衡器检查、供应商规格及库存核对 |
| cp_energy | physical_release | 电力 | 电表及作业日志 | 电表标识；起止读数；单位；作业标识；运行时间；准备；待机；辅助负荷；分配驱动因素 | 对生产及包装分表计量，将分配能耗与场址电费账单核对 | kWh; MJ; h | 每个生产批组，并按报告期核对 | 与合格产出相同的报告期 | 复制、核验、包装及可归属辅助活动 | 汇总分配至作业的能耗，换算单位后除以放行质量 | 电表校准、账单核对及驱动因素论证 |
| cp_release | physical_release | 合格有声读物套装 | 生产及质量记录 | 书名；版本；语言；节选状态；时长；格式；每套载体数；合格套数；不合格数量；载体净质量；包装盒质量；随附印刷品质量；整套毛质量；核验结果 | 称量完整套装；将书名及章节顺序与授权母版对照；记录适用于该格式的播放与文件完整性检查 | kg; set; h | 每种版本及每批；按有记录的批次计划核验 | 与投入相同的报告期 | 最终核验及发运 | Q 为已声明配置的合格套数乘实测单套质量之和 | 称量表、内容清单、检验计划及放行授权 |
| cp_waste | physical_release | 各种废弃载体及废纸 | 废物转移及返工记录 | 行标识；来源；质量；污染状态；返工数量；库存变化；去向；处理路线 | 分别称量已分拣的光盘、盒式磁带、闪存书卡、印刷纸和纸板废物，并与转移记录核对 | kg; item | 每批及每次移出 | 与生产时间窗一致，并校正暂存量 | 生产、包装及废物暂存区 | 离开边界的废物质量除以 Q；内部返工单独记录 | 衡器检查、废物接收单及组件平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_release | 所有清单行 | 对每行 i，a_i = 经校正及分配的 A_i / Q；Q 为合格放行质量且必须大于零。按定义，产出 Q / Q = 1 kg。 | `cp_material`; `cp_energy`; `cp_release`; `cp_waste` | 每参考流的交换量 | |
| set_conversion | 声明产出 | m_set = 每套载体质量 + 每套所含包装盒及随附印刷品质量；每 kg 等效套数 = 1 / m_set。保留实测批间差异，不四舍五入为整数套。 | `cp_release` | 可审核的套数与质量换算 | |
| stock_use | 投入数量 | 净耗用质量 = 期初库存 + 收货 - 期末库存 - 未使用退货质量。与作业领用及内部退库记录独立核对。 | `cp_material` | 各行实际耗用总质量 | |
| material_balance | 所有实物投入与产出 | 将耗用的载体和包装质量与已放行套装质量、移出废物及在制品变化核对。根据衡器不确定度及记录的遗漏调查差异；不规定通用容差。 | `cp_material`; `cp_release`; `cp_waste` | 组件质量核对 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | 完整套装 | 没有数量及明确加权总体时，不得混合不同版本、节选状态或载体格式。 | `cp_release` 中的内容清单及称量记录 |
| quality_coverage | 前景 | 对受控操作使用实测或有据可查的初级活动数据，说明时间、地理及技术代表性。 | `cp_boundary`; `cp_energy`; `ghg-product-standard-2011` |
| quality_missing | 缺失数量 | 缺失、零和不适用是不同状态。用作完整清单前须解决主要数量缺失。 | 对照 `cp_material` 和 `cp_waste` 进行的完整性核查 |
| quality_ranges | 筛选 | 即使没有外部基准，也须采集前景数量。不得将光盘制造案例数值直接用于磁带或闪存介质，也不得将存储建议视为产率范围。 | 批次记录；`nist-cd-dvd-care-2003` 仅用于说明存储指导的不同用途 |

NLS 专用规范提供了多书卡识别、包装及质量检查的实例；本 PCR 不将其中具体标签尺寸或字体要求推广至所有产品（`loc-nls-labeling-packaging-2014`）。

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | 参考产出 | 必需限定信息齐全，Q 大于零，归一化采用一致的已声明零售整套毛质量基准，载体序列完整。以称量记录核验 `set_conversion`。 | |
| validate_routes | 投入及边界 | 要求提供具体路线的纳入证据。购入已记录复制品与场内空白介质复制不得重复描述同一复制品。拒绝形成自循环的供应商连接。 | |
| validate_energy | 电力 | 核对电表总量及分配量，保留 MJ 或有记录的 kWh 换算，不在场址直接排放行中列入上游电网排放。 | |
| validate_inventory | 交换 | 要求原子身份、方向、流类型及单位正确。未确认的 UUID 保持为空。将所有材料投入及废物流与记录核对；遗漏场址实际附加交换会导致覆盖不完整。 | |
| validate_quality | 产品放行 | 要求版本内容清单、时长及适合所声明格式的播放或完整性检查。仅有质量总量不能证明有声读物套装完整且可用。 | `loc-marc-sound-recording`; `loc-nls-equipment` |
| validate_use_claim | 数据集声明 | 标明前景边界及上游连接完整性。不得将门到门数据作为完整生命周期结果，也不得仅按产品质量比较阅读或收听服务。 | `ghg-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 经数据审核后，作为已声明实体有声读物生产模块的 background_dataset |
| allowed_use | 在已声明载体格式、供应切分点、场址及报告期内，对指定版本或已披露生产组合建模 |
| excluded_use | 独立的完整产品碳足迹；下载或流媒体清单；播放器制造；收听服务比较；未经重新确认的其他载体路线 |
| required_metadata | 参考流限定信息；采集时间窗；套装数量及质量换算；过程边界；供应商及电力连接；路线条件；分配方法；实测数量及计算追溯关系 |
| required_quality_disclosure | 缺失上游数据；未解决的流身份；完整性；代表性；测量不确定度；返工；不合格品；母版制作处理方式及外部基准缺失 |
| update_trigger | 新载体或包装设计；供应商、录制路线、版本或电力供应变化；产率或分配依据变化；新增实测数据或已核验流身份 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | [United Nations CPC 3.0 structure, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); 访问日期 2026-09-09; independence_key: `un-cpc-3.0-structure-30jun2025` | 产品身份及排除项；不作为定量清单证据 |
| `nist-cd-dvd-care-2003` | `official_guidance` | [Care and Handling of CDs and DVDs: A Guide for Librarians and Archivists, Fred R. Byers, 2003](https://nvlpubs.nist.gov/nistpubs/legacy/sp/NISTspecialpublication500-252.pdf); 访问日期 2026-09-09; independence_key: `nist-sp-500-252-2003` | 载体状态与材料边界区分，第 3.1—3.4 节 |
| `loc-marc-sound-recording` | `official_guidance` | [MARC 21 Bibliographic Format: 007 Sound Recording](https://www.loc.gov/marc/bibliographic/bd007s.html); 访问日期 2026-09-09; independence_key: `loc-marc21-bibliographic-007-sound-recording` | 格式、实体载体与母版区分，字段 01 和 09 |
| `ghg-product-standard-2011` | `standard` | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, 2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf); 访问日期 2026-09-09; independence_key: `wri-wbcsd-product-standard-2011` | 通用边界披露、初级数据及分配原则，第 6—9 章 |
| `loc-nls-equipment` | `official_guidance` | [Library of Congress: Equipment for NLS Materials](https://www.loc.gov/nls/services-and-resources/equipment-for-nls-materials/); 访问日期 2026-09-09; independence_key: `loc-nls-equipment-for-nls-materials` | 闪存书卡路线及播放兼容性限定信息；不采用设备数值作为默认值 |
| `loc-nls-labeling-packaging-2014` | `standard` | [NLS Specification 420:2014: Labeling and Packaging of Books on Digital Talking Book Cartridges, version 1.3](https://www.loc.gov/nls/wp-content/uploads/2019/09/420-2014final.pdf); 访问日期 2026-09-09; independence_key: `loc-nls-specification-420-2014-v1.3` | 完整复制品识别及包装检验的 NLS 专用示例，第 1、3、4 节 |
