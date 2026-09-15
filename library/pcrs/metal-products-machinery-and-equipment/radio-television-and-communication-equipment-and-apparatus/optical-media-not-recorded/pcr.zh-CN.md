---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.optical-media-not-recorded
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未录制光学媒体

## 1. 范围与适用性

本 PCR 适用于出厂时未录入用户内容的成品光学记录媒体前景数据。包括 CD、DVD、蓝光等格式的空白一次写入及可重写光盘；带盒光盘须声明其壳体。工厂预制的寻轨、地址及格式信息本身不构成已录制内容（`un-cpc-3-0-structure-2025`、`ecma-359-2004`）。

代表性制造路线为染料型 DVD-R：树脂调理、基片模压、记录层涂布及干燥、金属化、边缘清洁、粘接、检测和包装。过程图中的各过程是同一个工厂前景汇总系统的数据采集单元，并非各自独立平衡的单元过程数据集。工序间光盘转移记录在生产台账中，不重复列为外部产品投入。`nist-sp-500-252-2003` 和 `bayer-wo2011092200a1` 支持分层及工艺区分。

不包括已录制内容、复制型 ROM 光盘、擦除后的二手媒体、光盘驱动器、磁性媒体、固态存储器件及单独销售的母版或压模。生产所用压模的制造属于上游投入要求，不属于本 PCR 的参考产品。中文标题为作者译名，经 `china-mof-optical-media-2013` 核验；此术语核验不建立 HS 映射。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.optical-media-not-recorded |
| classification_refs | CPC 3.0 47540；仅提供语义背景 |
| covered_products | 声明一次写入或可重写记录机理的全新成品空白光学媒体 |
| excluded_products | 已录制及复制内容媒体；使用后擦除的光盘；驱动器；磁性与固态媒体；单独销售的母版和压模 |
| representative_product | 空白 120 mm 单面 DVD-R，声明标称容量 4.70 Gbyte；染料和反射层组成由供应商确认 |
| production_route | 树脂调理；基片模压；记录层涂布；干燥；金属化；边缘清洁；必要时粘接；检验与测试；包装 |
| market_state | 工厂出厂口合格的未录制成品媒体，包含所需功能层；可拆包装独立计入清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够按声明格式记录信息的空白光学媒体 |
| How much | 1 kg 合格媒体净重；披露等效光盘数量及合计标称可写容量 |
| How well | 满足声明的格式及制造商验收条件；ECMA-359 仅适用于符合该标准的 DVD-R 型号，不适用于所有光学格式 |
| How long or cycle | 一次制造交付；不预设档案保存寿命、重写次数或用户刻录循环 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未记录的光学介质 `714535e8-24d4-44bf-8496-4837f638fdd4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 格式及型号；直径；标称可写容量及容量计量约定；记录层数与面数；一次写入或可重写；记录层化学组成；反射层组成；基片材料；保护层与粘接层；全新未录制状态；媒体平均净重和数量；不可分离盒体（如有）；可拆包装；验收规范和检测抽样；工厂、地域、技术、报告期及声明的起始状态 |

前景数据包须声明所有必需限定信息。质量归一化服务于生产清单，不能直接用于不同格式的等效服务比较。比较存储服务时还须规定可用容量、刻录成功率、重写、保存期限及驱动器兼容性；标称容量或寿命声明本身不能定义该服务。格式和材料依据：`ecma-359-2004`、`cci-notes-19-1`。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_media_mass` | reference_product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量合格媒体时扣除可拆包装；仅在声明不可分离盒体属于参考对象时计入其质量。 |
| `count_mass` | 验收及包装 | 质量 | kg | 按批次合格数量乘以实测平均媒体净重计算合格质量；保留抽样、去皮和校准记录。不得指定通用单盘质量。 |
| `energy_conversion` | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电力载体身份；1 kWh = 3.6 MJ 是单位恒等关系。不得将数据库属性标签解释为燃料，也不得将共用电表拆算为多种能源载体。 |
| `formulated_input` | 染料、粘接胶及保护漆 | 质量 | kg | 记录供货配方质量和组分分数；外购预混物及其组分不得重复作为外部投入。现场配制路线应改为记录实际单独采购的各组分。 |
| `gas_water_conversion` | 氩及水 | 质量 | kg | 保留体积计量原始记录，并根据有据可查的组成、密度、温度和压力换算；循环流量不等于补充量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 规定的基片树脂、供货涂布配方、反射层原料及包装进入制造场址 |
| starting_condition_role | 以工厂出厂口为终点的部分生命周期清单的前景入口状态 |
| product_classification_scope | 全新成品未录制光学媒体；上游树脂和化学品生产属于不同产品类别 |
| recursive_input_rule | 如购入同类别空白媒体，应按其实际状态和数量记录并关联供应商上游数据集，仅建模后续操作；不重复构建其已有生产过程，也不将其替代为原生树脂 |
| upstream_dataset_requirement | 为实际材料形态、化学组成、能源供应、运输和处理关联兼容的供应商或背景数据集。流 UUID 只确立身份，不代表上游清单。 |
| disclosure | 披露供应商地域、外协步骤、运输环节、处理去向、排除阶段、内部回收、不可分离盒体及汇总边界 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory` | 前景系统 | 纳入可归属生产、不合格和检测消耗的光盘、包装及场址服务。构建从摇篮到工厂大门的结果时，关联上游制造、入厂运输和外部废物处理。 | `wri-wbcsd-product-standard-2011` |
| `boundary_partial` | 下游用途 | 本部分结果不含用户刻录、读取、出厂后配送及消费后处理；披露此局限，开展全生命周期评价时另加相应情景。 | `wri-wbcsd-product-standard-2011` |
| `boundary_route` | 格式实例化 | 可重写媒体须记录实际相变合金、各介质层配方及初始化步骤；蓝光媒体须记录实际记录层和覆盖层技术。每种实际材料或排放建立一个具体交换，不得跨路线套用染料用量。 | `nist-sp-500-252-2003`、`cci-notes-19-1` |
| `boundary_completeness` | 场址采集 | 用完整配方、公用工程台账和废物登记表核对流卡。实际存在时，为涂布添加剂、边缘清洁剂、气体、燃料、制冷剂损失、工装摊销、盒体零件及包装组件分别建立交换。数据缺失不等于零，功能薄层不能仅因质量小而被排除。 | |
| `boundary_transfers` | 外协及内部工序 | 在 cp_output 保留工序间数量记录。外协操作仅计一次；外购半成品基片须有独立上游身份，且仅替代已经完成的操作。内部粉碎回用及溶剂回收保留为内部转移，并计入相应处理负荷。 | |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `disc_manufacture` | 基片及功能层制造 | required | 每条生产路线；实例化其实际层化学组成 | 前景生产 | 1 kg 合格成品媒体净重 |
| `disc_bonding` | 粘接与紫外固化 | conditional | 光盘结构使用紫外固化胶粘接基片 | 前景后处理 | 同一合格媒体分母 |
| `disc_lacquering` | CD 保护漆施涂 | conditional | CD 结构采用独立保护漆层 | 前景后处理 | 同一合格媒体分母 |
| `site_services` | 计量场址服务 | required | 纳入实际可归属服务，水相关流按条件纳入 | 前景辅助 | 同一合格媒体分母 |
| `pack_release` | 包装、验收及出厂放行 | required | 每次合格产出；仅纳入实际包装组件 | 前景产出 | 1 kg 合格媒体净重 |

各流卡均为汇总系统的边界交换。条件流须记录适用性判断。只有在具有缺失交换的客观证据时才可标记不适用；数量未取得仍属数据缺口。过程和路线描述规定适用性，不提供默认数值配方。

### 过程：基片及功能层制造（`disc_manufacture`）

#### 输入

##### 产品流

###### 基片树脂（`polycarbonate`）

依据本过程的采集协议记录该项外部交换。

- 选定流：聚碳酸酯颗粒 `0c945ca0-edf2-41f3-ba9e-23af3e75c6d1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外购树脂净消耗量，不重复计入内部回用浇道料；DVD 两片基片均需计量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`nist-sp-500-252-2003`

###### 反射层用银（`silver`）

纳入条件（`inclusion_condition`）：使用单一金属银反射层；银合金须建立其组成特定的独立交换。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量银靶消耗量并核对靶材库存；区分沉积银、可回收靶材余料和镀膜腔损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`nist-sp-500-252-2003`, `bayer-wo2011092200a1`

###### 记录层配方（`azo_dye_solution`）

纳入条件（`inclusion_condition`）：经核验的产品配方使用偶氮染料溶液；其他染料体系须另建配方特定交换。

- 选定流：光盘用偶氮染料涂布液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量单一供货涂布配方；记录配方标识、染料身份、固含量及各溶剂质量分数；不得重复计入其组分采购量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`nist-sp-500-252-2003`

###### 溅射气体（`argon_gas`）

纳入条件（`inclusion_condition`）：溅射使用外购气态氩。

- 选定流：气态氩
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量供应气体，并按声明温压下的供应商密度换算质量；不计内部循环量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：

###### 设备清洁溶剂（`isopropanol`）

纳入条件（`inclusion_condition`）：设备清洁使用异丙醇；不将其默认用作染料载体或通用边缘清洁配方。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量外部异丙醇用量并修正库存变化；声明纯度，不计内部回收溶剂循环量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：

#### 输出

##### 废物流

###### 外送模压废料（`pc_moulding_scrap`）

纳入条件（`inclusion_condition`）：未涂层聚碳酸酯作为废物离开场址。

- 选定流：洁净聚碳酸酯模压废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量外送处理的洁净未涂层聚合物废料；披露去向并与内部粉碎回用料区分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 含破坏性检测样品的涂层废盘（`metallized_disc_reject`）

纳入条件（`inclusion_condition`）：涂层或粘接光盘不合格，或被用于消耗性检测。

- 选定流：不合格金属镀层光盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按组成及处理去向称量不合格涂层光盘；纳入消耗可销售产出的刻录测试样品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 废涂布配方（`spent_dye_solution`）

纳入条件（`inclusion_condition`）：偶氮涂布液被废弃且未内部回收。

- 选定流：废光盘用偶氮染料涂布液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量同一已声明涂布配方的外排废液；保留溶剂组成、固含量和处理去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 外送废清洁溶剂（`spent_isopropanol`）

纳入条件（`inclusion_condition`）：异丙醇清洁产生单独收集的废溶剂。

- 选定流：废异丙醇清洗溶剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量异丙醇清洗废液并测定溶剂分数；记录污染物及回收或处理去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 清洁溶剂直接排放（`isopropanol_air`）

纳入条件（`inclusion_condition`）：异丙醇进入室外空气；注明排放位置。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用实测排放或回收治理后的逐物种溶剂平衡；扣除废物及产品中的溶剂留存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_releases`
- 来源：

###### 染料载体直接排放（`tetrafluoropropanol_air`）

纳入条件（`inclusion_condition`）：供应商配方确认含该溶剂且发生直接排放。

天工未提供该流的中文名称，选定流保留规范英文名称；本卡角色对应 2,2,3,3-四氟-1-丙醇。

- 选定流：2,2,3,3-Tetrafluoro-1-propanol `8a309c78-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：根据已记录涂布配方及实测回收、留存和治理数据，仅计算该物种；不得将全部 VOC 视作此物质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_releases`
- 来源：

### 过程：粘接与紫外固化（`disc_bonding`）

#### 输入

##### 产品流

###### DVD 粘接配方（`uv_bonding_adhesive`）

纳入条件（`inclusion_condition`）：声明的光盘结构使用紫外固化丙烯酸酯粘接工艺。

- 选定流：紫外固化丙烯酸酯 DVD 粘接胶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量投入粘接的完整供货胶配方，修正可回收退料及库存；记录光盘中固化保留质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_bonding`
- 来源：`bayer-wo2011092200a1`

### 过程：CD 保护漆施涂（`disc_lacquering`）

#### 输入

##### 产品流

###### CD 保护涂层（`uv_cd_lacquer`）

纳入条件（`inclusion_condition`）：CD 路线使用紫外固化丙烯酸酯保护漆；代表性粘接 DVD-R 不使用此漆。

- 选定流：紫外固化丙烯酸酯 CD 保护漆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量单一供货保护漆配方并扣除退回液体；记录组成及固化留存量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_lacquer`
- 来源：`nist-sp-500-252-2003`

### 过程：计量场址服务（`site_services`）

#### 输入

##### 产品流

###### 外购电力（`electricity`）

依据本过程的采集协议记录该项外部交换。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量可归属的干燥、模压、涂布、真空、固化、检测、包装、压缩空气制备和冷却用电，含分配后的待机耗电；将 kWh 换算为 MJ。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 外供补充水（`process_water`）

纳入条件（`inclusion_condition`）：场址为可归属生产活动使用外供工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量外供补充水质量；记录供水水质、来源和密度换算；不计冷却回路循环流量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

#### 输出

##### 废物流

###### 外排冷却排污水（`cooling_blowdown`）

纳入条件（`inclusion_condition`）：蒸发冷却产生排污水并送外部处理。

- 选定流：冷却塔排污废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量送外部处理的排污水质量和组成；保留水质及去向，不将其视为基本流排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

##### 基本流

###### 水分蒸发损失（`evaporated_water`）

纳入条件（`inclusion_condition`）：发生水分蒸发损失。

- 选定流：排入空气的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测蒸发量，或以补充水扣除排污、留存、飘水及库存变化计算；存在飘水时另行报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

### 过程：包装、验收及出厂放行（`pack_release`）

#### 输入

##### 产品流

###### 运输纸箱（`corrugated_box`）

纳入条件（`inclusion_condition`）：出厂光盘配用瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按使用纸箱数量乘以实测单箱皮重；纳入包装损耗并声明再生纤维含量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 叠装光盘轴座（`pp_spindle`）

纳入条件（`inclusion_condition`）：光盘配供聚丙烯轴座。

- 选定流：聚丙烯光盘包装轴座
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按聚丙烯轴座组件数量乘以实测组件质量；其他聚合物罩盖须独立建流。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

#### 输出

##### 产品流

###### 合格空白媒体（`reference_product`）

依据本过程的采集协议记录该项外部交换。

- 选定流：未记录的光学介质 `714535e8-24d4-44bf-8496-4837f638fdd4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将合格媒体净产出归一化为 1 kg，排除可拆包装、不合格品及已用于刻录测试的光盘；保留合格数量和实测平均盘重。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂出厂口合格媒体净重；使用共同分母 Q
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_output`
- 来源：`un-cpc-3-0-structure-2025`, `ecma-359-2004`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用生产 | 优先采用分项计量和生产批期拆分。不可避免的共用负荷采用实测因果驱动量，例如匹配负载下的设备运行时间；仅在产品和路线等同时才可按数量分配。 | `wri-wbcsd-product-standard-2011` |
| `allocation_losses` | 不合格品及回收 | 产率损失负荷归入合格产出。记录外部废料转移、其属性及回收分配约定；没有明确论证的模型，不得抵扣避免生产原生树脂或银的负荷。 | `wri-wbcsd-product-standard-2011` |
| `allocation_reconcile` | 分配系数 | 保留驱动量合计及分配份额；分配后的批期数量须与原电表或台账核对一致。内部回收不是可销售共产品，不产生避免生产的抵扣。 | |

## 8. 前景数据采集、计算与质量规则

以下为本 PCR 设计的采集协议。采集具有代表性的连续报告期，涵盖正常生产、启动、换型、不合格品及待机；声明日期并说明代表性。每条原始记录须带有场址、产线、批期、型号、单位、日期、源记录标识和负责审核人员。不得以专利实例替代工厂记录。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | disc_manufacture | 各项材料投入 | 库存及投料记录 | 材料和配方标识；组成；收货量；期初及期末库存；外部退料；内部回收；投料质量；密度；气体状态 | 称量投料及退料，与采购核对，保留供应商规范 | kg；原始气体体积 | 每批次及库存核对时 | 完整声明的批期序列 | 各制造产线及外协步骤 | 各材料外部消耗量除以合格质量 Q | 校准秤；BOM；配方表；核对台账 |
| `cp_bonding` | disc_bonding | 各项材料投入 | 库存及投料记录 | 材料和配方标识；组成；收货量；期初及期末库存；外部退料；内部回收；投料质量；密度；气体状态 | 称量投料及退料，与采购核对，保留供应商规范 | kg；原始气体体积 | 每批次及库存核对时 | 完整声明的批期序列 | 各制造产线及外协步骤 | 各材料外部消耗量除以合格质量 Q | 校准秤；BOM；配方表；核对台账 |
| `cp_lacquer` | disc_lacquering | 各项材料投入 | 库存及投料记录 | 材料和配方标识；组成；收货量；期初及期末库存；外部退料；内部回收；投料质量；密度；气体状态 | 称量投料及退料，与采购核对，保留供应商规范 | kg；原始气体体积 | 每批次及库存核对时 | 完整声明的批期序列 | 各制造产线及外协步骤 | 各材料外部消耗量除以合格质量 Q | 校准秤；BOM；配方表；核对台账 |
| `cp_energy` | site_services | 电力 | 仪表记录 | 期初及期末读数；kWh；产线运行时间；待机；共用负荷；分配驱动量 | 分时分项计量并与电费账单核对 | kWh 和 MJ | 每个计量时段和批期 | 与 Q 同期 | 场址及生产、辅助分项电表 | 可归属读数差乘以 3.6 后除以 Q | 校准；账单核对；分配计算 |
| `cp_water` | site_services | 补充水、排污水和蒸发分别记录 | 仪表及水平衡 | 入水质量或体积；密度；排污；蒸发；飘水；留存水；库存变化；组成；处理去向 | 各边界水流计量并闭合水平衡 | kg；原始 m3 | 每个批期及排水事件 | 与 Q 同期 | 可归属冷却及工艺用水系统 | 各水流除以 Q，不计内部循环 | 仪表校准；分析；去向记录；平衡残差 |
| `cp_waste` | disc_manufacture | 各项废物流 | 转移及检测记录 | 废物流标识；湿重；聚合物或溶剂分数；金属含量；废品数量；内部回收；去向 | 分别称量并记录废物组成 | kg 和数量 | 每次转移及废品批次 | 与 Q 同期 | 各产生废物产线及外部接收方 | 各外部废物流总质量除以 Q | 称量单；处理合同；检测台账 |
| `cp_releases` | disc_manufacture | 各已命名大气物种 | 排放实测或溶剂平衡 | 物种；配方质量分数；投入；回收；产品及废物留存；治理；排放环境区室 | 积分浓度与排气体积，或采用逐物种平衡 | 每种物质的 kg | 每批期并覆盖运行状态 | 与 Q 同期 | 涂布及清洁排放点 | 治理后的各物种直接排放量除以 Q | 方法报告；回收记录；检出限；不确定性 |
| `cp_packaging` | pack_release | 纸箱和轴座分别记录 | 包装计数及皮重 | 组件身份；聚合物或纤维等级；领用数量；组件质量；退料；包装损耗 | 计数并抽样称量组件 | 数量和 kg | 每种包装配置及批次 | 与 Q 同期 | 包装产线 | 各组件数量乘以平均质量后除以 Q | 包装 BOM；抽样皮重；核对记录 |
| `cp_output` | pack_release | 参考产品及产率 | 生产和验收记录 | 型号；工序间数量；合格数量；单盘净重抽样；废品；破坏性检测数量；在制品变化；标称容量；规范 | 校准称量、计数及有记录的光学验收检测 | kg；数量；声明的容量单位 | 每个生产批次 | 与投入同期 | 全部已纳入生产工序 | Q 为合格数量乘以实测平均净重，并与库存核对 | 签署放行；检测结果；皮重检查；计数器及秤校准 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | 全部外部交换 | q_i = X_i / Q，X_i 为分配后的批期交换量，Q 为合格媒体净质量；Q 必须为正 | cp_materials; cp_bonding; cp_lacquer; cp_energy; cp_water; cp_waste; cp_releases; cp_packaging; cp_output | 每 1 kg 合格媒体的交换量 | |
| `accepted_mass` | reference_product | Q = 各批合格数量乘以对应抽样平均净重后的合计；排除包装及破坏性检测光盘 | cp_output | 合格 kg 及等效数量 | |
| `material_consumption` | 外购材料 | 外部消耗 = 期初库存 + 收货 - 期末库存 - 退给外部的未使用料；明确计入在制品变化和内部转移 | cp_materials; cp_bonding; cp_lacquer; cp_output | 材料消耗质量 | |
| `solvent_balance` | 各溶剂排放 | 排放 = 溶剂投入 - 产品留存 - 外部废物中溶剂 - 外送回收溶剂 - 销毁溶剂 - 库存增加；内部回用溶剂抵消。负残差须调查。 | cp_materials; cp_bonding; cp_lacquer; cp_releases; cp_waste | 单一溶剂物种的直接排放 | |
| `yield_balance` | 物理完整性 | 将外部材料投入与合格产品、外部废品、可回收产出、排放及库存变化核对；分别保留聚合物、反射金属及溶剂平衡 | cp_materials; cp_bonding; cp_lacquer; cp_output; cp_waste; cp_releases | 残差记录及调查 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 全部材料和媒体 | 保留格式、记录机理、组成、供货形态及质量等级；供应商证据须确认代表性配方适用 | BOM、规范及签署验收 |
| `dq_coverage` | 全部阶段 | 将记录与过程图核对；披露未计量流、缺失供应商、处理覆盖及估算，不将空缺转为零 | 完整性登记及台账核查 |
| `dq_measurement` | 归一化数量 | 使用一致日期和产品边界；披露抽样、校准、分配、检出限及不确定性 | 原始记录及计算工作簿 |
| `dq_range` | 定量质量核查 | 结合工厂平衡和测量不确定性评价结果；本 PCR 不提供经验生产区间或档案保存寿命默认值 | 平衡审核及证据缺口记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考对象 | 核验全新未录制市场状态、全部限定信息及与 reference_product 的关联；已刻录检测废品不得计入合格产出。 | `un-cpc-3-0-structure-2025`、`ecma-359-2004` |
| `validate_units` | 清单 | 确认 Q 为正、按净质量归一化、单位换算明确且每个交换仅含一种材料或物种。UUID 不能替代缺失数量。 | |
| `validate_route` | 过程覆盖 | 每个必需过程须有采集证据；每个条件过程及流卡须声明适用性。替代记录化学路线须具有完整实例化 BOM 和排放覆盖。 | |
| `validate_balance` | 产率与排放 | 核验聚合物、金属、溶剂及水平衡；依据实测不确定性调查残差并记录处理措施。不得虚构未命名废物或排放以强行平衡。 | |
| `validate_conformance` | 产品质量 | 保留适用格式检测、验收条件及抽样依据。ECMA-359 符合性属于规范声明，不提供经验清单范围。 | `ecma-359-2004` |
| `validate_boundary` | 下游数据集 | 披露部分边界、缺失上游关联、处理去向及未解决交换；声明完整生命周期覆盖时须补齐已省略阶段。 | `wri-wbcsd-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经数据集专门审核后作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 向刻录、配送或存储服务模型提供空白光学媒体 |
| allowed_use | 格式和路线相匹配的工厂出厂口生产模型；与另行声明的下游情景关联 |
| excluded_use | 无限定地替代其他记录技术、已录制内容生产、驱动器、通用档案寿命，或仅按质量开展等效服务比较 |
| required_metadata | PCR 身份及版本；参考限定信息；场址及日期；净重与数量换算；过程边界；供应商和处理关联；包装；分配；采集方法 |
| required_quality_disclosure | 未解决身份与数量；缺失阶段；代表性；实测与计算值区分；不确定性；符合性证据；审核状态 |
| update_trigger | 记录化学组成、格式、功能层、供应商、能源结构、产率、回收、包装、场址或依据规范发生变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | [联合国统计司，CPC 3.0 分类结构（2025-06-30）](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); 检索日期 2026-09-09; independence_key: `un-cpc-3-0-structure-2025` | CPC 47540 身份及相邻未录制媒体类别。 |
| `china-mof-optical-media-2013` | `official_guidance` | [财政部网站双语税则表，第 165 页，第 6779 行](https://gss.mof.gov.cn/gzdt/zhengcefabu/201306/P020130708509079068339.pdf); 检索日期 2026-09-09; independence_key: `mof-p020130708509079068339` | 仅核验中文术语；不采用税率或建立分类映射。 |
| `nist-sp-500-252-2003` | `official_guidance` | [F. R. Byers，《CD 和 DVD 的保管与使用指南》，NIST SP 500-252（2003），第 3 节](https://nvlpubs.nist.gov/nistpubs/legacy/sp/NISTspecialpublication500-252.pdf); 检索日期 2026-09-09; independence_key: `nist-sp-500-252` | 聚碳酸酯、记录层差异、反射金属、CD 保护漆及 DVD 结构。 |
| `ecma-359-2004` | `standard` | [ECMA-359，第 1 版（2004-12），第 1、2、7、14 和 26 条](https://ecma-international.org/wp-content/uploads/ECMA-359_1st_edition_december_2004.pdf); 检索日期 2026-09-09; independence_key: `ecma-359-ed1-2004` | DVD-R 格式、空白状态预格式化及符合性范围；不提供生产范围。 |
| `cci-notes-19-1` | `official_guidance` | [加拿大文物保护研究所，《可记录 CD、DVD 和蓝光盘的寿命》，Notes 19/1](https://www.canada.ca/en/conservation-institute/services/conservation-preservation-publications/canadian-conservation-institute-notes/longevity-recordable-cds-dvds.html); 检索日期 2026-09-09; independence_key: `cci-notes-19-1` | 材料相关记录路线、蓝光差异及寿命声明的局限。 |
| `bayer-wo2011092200a1` | `literature` | [拜耳材料科技，《高速 DVD》，WO 2011/092200 A1（2011-08-04），说明书第 12-13 页；英文原文随 HK1177810A 提供](https://patentimages.storage.googleapis.com/ea/32/ff/60d39479719181/HK1177810A.pdf); 检索日期 2026-09-09; independence_key: `wo2011092200a1` | 技术路线实例：树脂干燥、模压、染料旋涂和干燥、溅射、边缘清洁及紫外固化粘接；专利案例数值不作为通用基准。 |
| `wri-wbcsd-product-standard-2011` | `standard` | [WRI/WBCSD，《产品生命周期核算与报告标准》（2011），第 6-9 章](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf); 检索日期 2026-09-09; independence_key: `ghg-protocol-product-standard-2011` | 参考流披露、部分生命周期边界、一手数据及分配顺序。 |
