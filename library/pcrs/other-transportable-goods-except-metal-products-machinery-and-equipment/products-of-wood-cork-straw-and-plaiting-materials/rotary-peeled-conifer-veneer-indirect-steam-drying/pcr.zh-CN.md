---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.rotary-peeled-conifer-veneer-indirect-steam-drying
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
sync_with: pcr.en-US.md
---

# 不超过6毫米的未胶合针叶材旋切单板——蒸汽间接干燥

## 1. 范围与适用性

本PCR适用于以未处理针叶材原木为原料，经旋切、剪切、蒸汽盘管间接干燥、分级后出厂的单层未胶合单板，实际厚度不超过6毫米。包括调质及每一次重干燥。全部过程热量来自外购蒸汽，场内采用电动搬运。交付单板无胶黏剂、背衬、表面涂层或防腐处理。按植物学确认针叶树种，不能根据商品名或“软木”字样推定。[epa-veneer-2002]

锯切或刨切单板、阔叶材单板、仅湿态出厂单板、直燃干燥、厂内燃烧或热氧化、湿式尾气洗涤、树脂拼接、胶合板及改性木材不适用。任一事实变化均需另行方法审查并显式补充过程；共用木材UUID不能扩大适用范围。本方法选择CPC31511中的一种实际路线，不代表整个分类叶项。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.rotary-peeled-conifer-veneer-indirect-steam-drying |
| classification_refs | CPC 3.0 31511; narrower |
| covered_products | 经干燥的单层未胶合针叶材旋切单板，实际厚度不超过6毫米 |
| excluded_products | 阔叶材或刨切或锯切薄板；胶合或带背衬产品；处理木材；仅湿态输出；直燃路线 |
| representative_product | 声明植物学针叶树种、实际厚度及实测出厂含水率的旋切未胶合单板 |
| production_route | 未处理原木接收→剥皮截断→蒸汽调质→旋切剪切→蒸汽间接干燥和重干燥→分级包装 |
| market_state | 声明工厂出厂门的干燥、未胶合、无背衬、未处理单板；含水率和等级验收要求由实际买方明确 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为后续制造提供未胶合针叶材薄片原料 |
| How much | 按首次验收时声明的可出厂含水状态计的1千克单板净质量 |
| How well | 实际厚度不超过6毫米；声明树种、尺寸、等级及含水率验收标准；无胶黏剂和背衬 |
| How long or cycle | 一个制造及出厂交付周期；不指定下游使用寿命 |
| reference_flow_link | accepted_veneer |

这是声明的材料数量，不证明下游成品具有同等功能。

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 针叶树植物学树种及来源地域；实木单层薄片；实际厚度不超过6毫米及长宽；旋切路线；干基可出厂含水率及测量方法；首次验收生产群组及分级验收标准；未胶合、无背衬、无涂层、未防腐状态；外购蒸汽间接干燥及重干燥记录；实际工厂和供应方、地域和生产期；排除包装的木材净质量；上游原木供应方边界及相容的热力交付和回水约定 |

木质材料UUID有意不指定上述维度。保留其原生名称和质量属性，在交换元数据中补足较窄事实，并链接实际合格供应方。即便共用通用UUID，也须拒绝刨花板、胶合饰面、阔叶材或含水率及路线不相容的供应方。构建的数据集若缺少限定信息或供应方边界，则属于不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_output | 参考产品 | 质量 | kg | 独立测量Q为选定期间内生产批次唯一首次验收木材净质量之和，每项按声明可出厂验收状态下实测的干基含水率u0锁定，排除包装。按acceptance_event_bridge在相同首次验收基准上核对Q=D_new+FG_new+L_new，各项互斥且穷尽。只有证实全部其他验收后去向均不存在（L_new=0）时才可用Q=D_new+FG_new。期初已验收成品、购入成品单板、退货、复检及再次验收均不新增Q；首次验收前废品不进入Q，验收后损失或报废不得扣减Q。用cp_reference采集。每项清单均按每1千克参考流计。 |
| moisture_conversion | 木质材料及残余物 | 质量 | kg | 使用干基含水率小数u=(湿质量-绝干质量)/绝干质量；绝干质量=湿质量/(1+u)。保留样品湿质量及绝干质量。单板每张选四至五处，及时称量，在101至105摄氏度烘至恒重；披露挥发性抽提物偏差。不得把锯材样品尺寸套用于薄单板。[usda-wood-moisture-2021] |
| electricity_conversion | electricity | 能量 | MJ | 按1千瓦时=3.6兆焦换算实测电量，保留实际交付电压及地域；全部干燥批次仅汇总一次。 |
| steam_enthalpy | steam_heat | 传递热量 | MJ | 记录进汽千克数、压力、温度、干度和进汽焓，以及每个回水或损失流的千克数与焓；在有文件支持的同一焓基准下，以输入焓减去跨供应系统回水边界带出的焓求供应净热量。声明未返还凝结水的处理方式。不得用通用常数把蒸汽质量换算为热量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在工厂接收门的未处理针叶材原木，明确带皮状态、来源、进厂含水率及库存 |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 31511; narrower |
| recursive_input_rule | 外购同类别干燥单板须独立限定上游输入，不能作原木或零负荷内部返料。它不属于本原木进料路线，需显式方法审查。厂内湿单板、重干燥及返还单板属内部转移和库存，同一数量只产生一次唯一首次验收事件。购入成品单板及其后续验收或出厂均不进入本路线的生产Q。 |
| upstream_dataset_requirement | 链接相容的实际林业或原木生产、入厂运输、电力、具有约定回水边界的交付蒸汽热、自来水、油、包装和外部废物处理。工厂前景本身为门到门；从摇篮到工厂门使用须补齐所有上游链接，且不重复供应方负荷。 |
| disclosure | 披露接收及出厂边界、树种、场址和期间、库存变化、外协环节、运输、公用工程供应方、排除的资本设备和人员活动，以及每项截断和缺失链接。下游胶合、使用及报废另建模。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | veneer_mill | 包括原木堆场损失、剥皮截断、蒸汽调质、旋切剪切、每次干燥及重干燥、冷却分级、干式收集和包装。在一体化胶合板厂保留独立工序记录，使本输出止于施胶或拼接之前。 | epa-veneer-2002 |
| boundary_heat | steam_heat | 本前景边界只接受外购蒸汽间接用热。若运行厂内锅炉、直燃干燥机或热氧化设备，则须扩展实际燃料和各项排放；本路线不得按供应方蒸汽质量虚构厂内锅炉排放。 | epa-veneer-2002 |
| boundary_air | veneer_mill | 对干燥、调质及逸散出口按控制后的实际排放测量；收集粉尘和排水为不同输出。间接干燥仍可释放木材有机物；没有燃烧不等于没有排放。 | epa-veneer-2002 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| veneer_mill | 旋切单板工厂至干单板出厂 | required | 声明的原木进料蒸汽间接干燥路线 | foreground | 1 kg reference flow |

该集成单元保留接收调质、旋切剪切、干燥和重干燥及出厂的工序台账；它们不是额外最终产品。湿单板内部转移的进出质量及含水状态须一致；工序计量仅分配各实物分叉之前发生的负荷。

### 过程：旋切单板一体化制造（`veneer_mill`）

#### 输入

##### 产品流

###### 针叶材单板原木（`conifer_logs`）

供旋切用的未处理针叶材实木原木。记录植物学树种、产地、是否带皮、初始含水率、供应方及接收净质量。此通用流标识不负责选择林业数据集，也不把单板等同于原木。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wood`
- 来源：`epa-veneer-2002`

###### 外购电力（`electricity`）

包括旋切机、剥皮机、截断锯、剪切机、输送机、干燥风机、重干燥、除尘、归属于生产的照明及电动场内搬运。按实际交付电压和地域计量；记录千瓦时并乘以3.6换算。本路线不包括燃油移动设备。

- 选定流：外购交流电
- 流属性/单位：能量 / MJ
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`epa-veneer-2002`

###### 外购蒸汽净传热（`steam_heat`）

包括原木加热和间接干燥盘管用热，以及重干燥。清单交换为传递热能，而非蒸汽商品质量。分别计量进汽和出厂凝结水，依据压力、温度及焓记录计算交付净热量。按同一回水约定链接一份供应方热力数据集；不得再以蒸汽质量重复叠加供应负荷。

- 选定流：外购蒸汽净传递热量
- 流属性/单位：能量 / MJ
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`epa-veneer-2002`

###### 原木调质补充水（`makeup_water`）

记录进入原木调质水池及清洗回路的自来水补充量。池内循环水属内部回路，不得重复计入外购水。直接取用地表水或地下水需另列基本输入流，并扩展水账户。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`epa-veneer-2002`

###### 液压与轴承用油（`lubricating_oil`）

记录旋切机及配套液压设备实际补充的石油基新油，用领用、退库及库存记录核对。液压系统内循环不得反复算作新油投入。若场址还使用其他配方，应分别列行。

- 选定流：石油基液压润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_consumables`
- 来源：`epa-veneer-2002`

###### 出厂低密度聚乙烯包装膜（`packaging_film`）

包括随单板包出厂的低密度聚乙烯膜及其可归属损耗。包装质量不计入单板净质量分母。实际存在的其他每项包装组件均另列原子交换；薄膜不能代表缺失的托盘或打包带。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_consumables`
- 来源：`corrim-western-plywood-2025`

##### 废物流

声明路线中无该类外部交换。

##### 基本流

声明路线中无该类外部交换。

#### 输出

##### 产品流

###### 验收干燥单板（`accepted_veneer`）

唯一的未胶合单板净参考输出，按唯一首次验收时声明的可出厂含水状态计量。以后出厂的期初已验收成品、购入成品单板、退货、复检及再次验收不构成新生产输出。按acceptance_event_bridge保留完整锁定的首次验收数量，包括新验收期末成品及后续全部损失、降级、报废或返工去向。1千克参考量代表事件分母，不能作为额外外部实物输出再加到实际出厂、期末库存和废物上。声明针叶树植物学树种、旋切路线、实际厚度不超过6毫米、长宽、分级标准、无胶黏剂或背衬或涂层或防腐处理、外购蒸汽间接干燥及实际生产厂和供应方。通用木质材料仅为质量标识；上述各事实均须有交换层证据。

- 选定流：木质材料 `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_reference`
- 来源：`epa-veneer-2002`

###### 外售燃料树皮（`bark_coproduct`）

仅有销售凭证及明确燃料用途的独立树皮流才算共产品。记录实际湿质量及含水率，用于干质量分配。不假定木质材料原生标识涵盖树皮。不得将同一树皮再计为废物。

- 选定流：未处理针叶材树皮燃料共产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`corrim-western-plywood-2025`

###### 可销售旋切剩余木芯（`peel_core`）

仅当旋切机剩余圆柱木芯作为独立木产品实际销售时记录。记录尺寸、净质量、含水率及去向。其产品用途和分配止于旋切阶段；不得把单板干燥负荷分配给木芯。

- 选定流：未处理针叶材旋切木芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`corrim-western-plywood-2025`

###### 可销售湿单板剪切料（`wood_clip_coproduct`）

指干燥前作为原料外售的单一湿单板剪切料流，须有买方及接收证据。干剪切料和干单板废品另设实物账户。不得自动给予避免产品或能源替代收益。

- 选定流：未胶合针叶材单板剪切料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`corrim-western-plywood-2025`

##### 废物流

###### 废弃树皮（`bark_waste`）

不具有合格共产品去向的树皮按独立称量的废物记录，链接实际外部处理。记录质量、含水率和接收方；不得给予共产品分配份额，也不得默认焚烧。

- 选定流：未处理针叶材树皮废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`epa-veneer-2002`

###### 截断锯木屑废物（`bucking_sawdust`）

原木截断或配套木材锯切产生、送往实际外部回收或处理的未污染木屑。原生标识允许未处理的焚烧或回收路线；须选择相容接收方并披露路线。作为有用商品销售的木屑需另设共产品账户，不用此废物卡。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`epa-veneer-2002`

###### 干燥单板废品（`veneer_reject`）

送出工厂的干燥等外单板和干剪切废料。记录干燥批次、实测含水率、原验收标识（如有）及报废发生于首次验收之前或之后；保留全部实际生产、重干燥及返工失败负荷。验收后报废保留原Q0，仅在原群组L_new中按首次验收基准计一次。厂内退回重加工的单板属于库存或内部转移，不是外部废物；实际损失、降级及其他去向须有各自具体实物记录及适用的原子交换。

- 选定流：未胶合针叶材单板废品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`epa-veneer-2002`

###### 调质池废水（`conditioning_effluent`）

调质水池实际排往外部污水处理的排污量，记录体积或质量、密度基准、接收处理厂及分析项目。回流不是排放。若厂内处理或直接排入环境，须先补充处理过程及各项排放，方可声明完整。

- 选定流：废原木调质水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`epa-veneer-2002`

###### 废液压油（`spent_oil`）

计量更换后送往实际有资质接收方的废油，并与新油及库存变化核对。不得每个生产循环都把设备内循环油计为废物。

- 选定流：废石油基液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`epa-veneer-2002`

###### 收集干木粉尘（`collected_dust`）

分别于锯屑和单板废品称量干式收集器排料，记录含水率及实际处理去向。收集量不是空气排放，也不自动成为可售共产品。过滤设备内留存粉尘计入库存变化。

- 选定流：收集的未处理针叶材木粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`epa-veneer-2002`

##### 基本流

###### 细颗粒物排放（`pm25`）

实际干式收集后的室外空气排放，按来源采样测定不超过2.5微米的颗粒物。收集粉尘仍是固体残余物。声明实际空气环境分室，排除烟囱与逸散估算重复。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`epa-veneer-2002`

###### 粗颗粒物排放（`pmcoarse`）

室外空气排放中大于2.5且不超过10微米的颗粒物，与pm25不重叠。总PM10已包含pm25，不能与两个分段重复相加。实际存在大于10微米颗粒物时另行定量。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`epa-veneer-2002`

###### 可凝结有机气溶胶（`condensable_organic_aerosol`）

干燥机可凝结颗粒物须定义采样或过滤温度及相态。与非凝结气体分别测量；相加前核对其与可过滤颗粒物、总有机碳或挥发性有机物测量的重叠。此流不能代理所有挥发性有机物。

- 选定流：可凝结有机颗粒物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`epa-veneer-2002`

###### 木材受热释放甲醛（`formaldehyde`）

筛查实际调质或干燥尾气中的此单一物质，对检出的、经控制后排入室外空气的量定量。不得采用施胶或热压排放因子。证实不存在的证据可支持not_applicable；未分析属于未知。其他每项已识别有机物另列原子流。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`epa-veneer-2002`

###### 干燥蒸发水（`water_vapour`）

木材失去并排入室外空气的水。核对进出木材含水量、废品、重干燥及库存；排除供应方蒸汽生产和返还凝结水。此交换不产生收益，也不代表有机物排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`usda-wood-moisture-2021`

###### 大于10微米颗粒物（`pmover10`）

对控制后排入室外空气的大于10微米颗粒物单独定量，与两个细粒段分开。保留实际采样切割点，不再加计总可过滤粉尘。缺失粗粒段仍属于排放完整性缺口。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`epa-veneer-2002`

###### 甲醇筛查及排放（`methanol`）

EPA表10.5-3在间接加热软木干燥机加热区及冷却尾气中列出甲醇CAS67-56-1。对实际工厂筛查，并定量控制后排入室外空气的不重叠量；不得把表中因子作为默认值。未检出须保留方法和检出限。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`epa-veneer-2002`

###### α-蒎烯筛查及排放（`alpha_pinene`）

EPA表10.5-3在间接加热软木干燥尾气中列出α-蒎烯CAS80-56-8。所选原生基本流为CAS80-56-8，不指定对映体，排入未特指空气。保留物质及环境分室证据，定量实际排放；不得用本行替代β-蒎烯或柠檬烯。不移植表中数值因子。

- 选定流：蒎烯 `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于新首次验收生产群组的累计实物交换量除以Q；保留继承向量、分子原单位及工序去向台账。旧群组服务另行保留。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`epa-veneer-2002`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | veneer_mill | 首先用工序计量和独立分支记录。将单板干燥及重干燥、最终分级和包装直接归给验收干单板及该阶段产生的废品。此前已外售的湿木芯或湿剪切料不承担下游干燥和包装负荷。 | corrim-western-plywood-2025 |
| allocation_dry_mass | veneer_mill | 对确属共用且分离前的工序，按该工序输出的有用产品实测绝干质量分配负荷：share_i=dry_i/sum(dry_useful_outputs)。在剥皮和旋切阶段依次实施，并将湿单板流带入干燥。废物不获产品分配份额；其处理负荷留在责任工序。不得按分配份额缩减实物交换数量。该干质量细化是实物质量分配先例与含水测量结合的显式方法综合。 | corrim-western-plywood-2025; usda-wood-moisture-2021 |
| allocation_recovery | bark_coproduct; peel_core; wood_clip_coproduct | 将输出认定为有用产品前，须具备合同、去向及含水率证据。内部循环不获共产品份额或出口收益。不得把归因型分配与避免燃料收益混合。若实际功能不能由物理细分和分配表达，须保留问题待审，并用实测价格披露经济分配敏感性，不得虚构默认值。 | corrim-western-plywood-2025 |

## 8. 前景数据采集、计算与质量规则

生产与服务使用独立群组台账。Q按唯一首次验收事件的实测木材净质量和干基含水率u0独立求和，不从发运或剩余可售库存倒算。各事件绑定批次或分片标识及首次验收日期。以与Q相同的原首次验收基准核对新群组Q=D_new+FG_new+L_new：D_new为扣除关联退回后的净发运量；FG_new为已验收期末成品；L_new覆盖全部其他实际净去向，包括未归成品的留存退回、损失、报废、降级、使用和期末转回返工或在制品。关联退回须追踪至最终去向仅计一次，不得同时留在D_new和另一项。新群组无期初已验收库存。三类去向须互斥且穷尽；仅有证据证明L_new=0时可用两项式。未解释差额仍属未解决，不得假定损失为零或调整Q。

逐分片j用独立测量的当前干基含水率u_j将去向质量换算为原验收等价质量m_eq,j=m_current,j/(1+u_j)*(1+u0_j)；仅汇总相容分片数量并保留两次测量。实际干木损失按相同u0基准核对。后续吸水或失水另入木材水量实物账；同一干木仍在发运或库存中时，不改变Q，也不再形成一项木材损失去向。含水率、分片谱系或损失证据缺失时不得声明核对完整。同基准下首次验收100千克、净发运60千克、期末成品30千克及验收后损失10千克时，Q保留100千克而非90千克；群组负荷100单位仍为100/100=1单位/千克。

已验收材料的后续发运、客户退回、复检、重干燥、返工失败及再次验收均不新增分母事件，也不减少原群组数量Q0。期末仍在返工的退回分片归入L_new；成功再次验收后可将其去向移至FG_new或D_new，不同时累计其毛转移量和最终去向。返工失败时，即便服务没有任何成功输出，也须将实际失败活动、处理及继承向量保留在原Q0下。期初已验收成品及购入成品单板均不进入新生产Q；购入单板仍在本原木进料路线之外，须另行方法审查。

按批次、实物状态及继承累计向量结转期初期末原料、在制品（WIP）及成品库存：向量保留各自原单位的原始实物交换数量，以及单独归属的环境负荷。将实际消耗或完成的原料和未验收在制品继承向量仅一次转入新群组，并仅一次追加其截至首次验收的实测生产交换及同一新群组实际发生的包装出厂服务。后续服务包括实际返工失败及损失处理仍绑定原验收记录及不变的Q0；不得虚构尚未实施的未来服务。未动用原料及尚未验收完工的期末在制品连同向量保留；已验收材料退回在制品时仍保留其原验收群组及向量；不得自动将其采购量或累计负荷计入本期验收输出。内部转移不得再次作为外部输入。缺失来源或无法细分的库存归属须先解决，方可声明归一化完整。

期初已验收成品保留原生产向量及原始验收净质量。旧验收批次以后的储存、出厂、重新包装、重干燥或其他服务，须作为可独立追溯的服务增量归回原群组，在原始验收净质量已知且为正时以该质量相除，不得使用新群组Q。不得重复记入继承生产交换或将旧批次假作新制造。共用仪表须依可追溯活动记录拆分群组；无法识别归属的服务保持未归一化待定。Q=0时，当前新生产或在制品以及未归属的全部交换和负荷向量须按原单位保留并结转或留待审查；不得输出为零、无穷大或虚构的每千克生产结果。以上为分母一致性规则，不是工厂用量或文献得率默认值。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | veneer_mill | accepted_veneer | measurement | 生产群组及固定批次或分片谱系；唯一首次验收标识及日期；树种；尺寸；等级；校准的首次验收净质量Q0及干基含水率u0；皮重；毛发运及关联退回；互斥D_new、FG_new及每项L_new去向；当前质量及含水率与原基准换算；验收后损失报废降级使用；返工或在制品转移、失败活动和再次验收；期初已验收成品及购入成品单板流转；期初期末原料、在制品及成品质量和继承实物交换及负荷向量；旧群组原始验收净质量；工厂和供应方 | 经校准的单板包称重并扣除薄膜；厚度测量和首次买方质量验收；每张单板四至五处含水率采样，及时称量并烘至恒重。独立汇总唯一事件得到Q，按acceptance_event_bridge在锁定首次验收基准上核对Q=D_new+FG_new+L_new。逐次退回追溯至唯一最终去向，同时保留实际干湿数量及等价基准数量。返工失败及服务对应原Q0记录；再次验收、购入或期初成品不得作新生产。将已消耗原料或在制品及其继承向量追溯至完成群组；未动用库存及旧群组服务另行保留。不得因期间变化将继承向量归零。 | kg | 每批；核对完整生产期 | 同一声明生产期 | 仅实际工厂和声明路线 | 每 1 kg 参考流 | 校准、原始事件记录、完整去向桥接、含水率谱系证据、失败活动记录及缺失数据披露 |
| cp_wood | veneer_mill | conifer_logs | measurement | 原木供应方；植物学树种；产地；进料质量；树皮；进料及湿单板含水率；湿态转移；库存变化 | 称量进厂载荷及独立分支转移；按树种和工序保留来源链及代表性含水样本。 | kg | 每次接收及分支批次 | 同一声明生产期 | 仅实际工厂和声明路线 | 每 1 kg 参考流 | 校准、原始记录、核对及缺失数据披露 |
| cp_utilities | veneer_mill | electricity; steam_heat; makeup_water | measurement | 表号；工序；电量千瓦时；水千克；蒸汽千克；进汽回水压力温度干度及焓；回水千克；损失；供应方边界；校准 | 分表计量调质、旋切和每次干燥或重干燥；核对账单和库存。保留完整蒸汽或凝结水实物台账及唯一的供应方净热量账户。 | MJ; kg | 连续计量；每报告期核对 | 同一声明生产期 | 仅实际工厂和声明路线 | 每 1 kg 参考流 | 校准、原始记录、核对及缺失数据披露 |
| cp_consumables | veneer_mill | lubricating_oil; packaging_film | measurement | 材料标识；新料领用千克；退料；库存变化；保留包装；损耗；供应方 | 核对采购、领用和库存与实际消耗；分别称量实际包装组件。 | kg | 每次领用及每月平衡 | 同一声明生产期 | 仅实际工厂和声明路线 | 每 1 kg 参考流 | 校准、原始记录、核对及缺失数据披露 |
| cp_residues | veneer_mill | bark_coproduct; peel_core; wood_clip_coproduct; bark_waste; bucking_sawdust; veneer_reject; spent_oil; collected_dust | measurement | 工序；实物流；湿质量千克；干基含水率；销售或废物状态；去向；买方或接收方；适用时价格；库存变化 | 在实际分离点分别称量各流；采集含水率样本并保留销售或废物转移凭证；核对内部回流，并对应cp_reference单独标识验收后去向，不重复计算退回分片。 | kg | 每输出批次并核对期间 | 同一声明生产期 | 仅实际工厂和声明路线 | 每 1 kg 参考流 | 校准、原始记录、核对及缺失数据披露 |
| cp_releases | veneer_mill | conditioning_effluent; pm25; pmcoarse; pmover10; condensable_organic_aerosol; formaldehyde; methanol; alpha_pinene; water_vapour | measurement | 排口；工序；控制设施；实测浓度；尾气流量；运行小时；粒径或相态；采样过滤温度；分析物；排污千克；木材水量平衡；检出限 | 在控制后对代表性正常及重干燥工况测量；按来源结合浓度、流量及运行时间。保留不确定性、未检出结果及木材水量平衡；每项额外检出物另列行。 | kg | 代表性监测及连续活动记录 | 同一声明生产期 | 仅实际工厂和声明路线 | 每 1 kg 参考流 | 校准、原始记录、核对及缺失数据披露 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_accounting | all inventory rows | 以实际完成的原料或在制品继承向量及截至首次验收的实测增量和其后全部实际可归属服务、损失处理及返工失败组装各新首次验收群组向量，各仅计一次。未验收期末在制品向量及旧已验收成品向量分别保留；已验收材料返工保留原群组和不变的Q0，不作为新生产在制品完工。旧群组服务增量始终对应原Q0，即便返工无成功产出，亦不得使用新Q。Q=0保留新生产未归一化向量。实物库存交换数量、事件分母及已分配负荷相互区分。 | cp_reference; cohort and stock identities; inherited vectors; attributable measurements | cumulative cohort vectors in original units | usda-wood-moisture-2021 |
| acceptance_event_bridge | all inventory rows | Q为逐分片按原干基含水率u0独立测量的唯一首次验收木材净质量之和。用互斥穷尽净去向核对Q=D_new+FG_new+L_new：扣除关联退回的发运、已验收期末成品及全部其他实际验收后去向（留存净退回、损失、报废、降级、使用及期末返工或在制品）。依据实测含水率与分片谱系按m_eq,j=m_current,j/(1+u_j)*(1+u0_j)换算去向；纯含水变化与木材损失分开记账。Q=D_new+FG_new仅在证实L_new=0时成立。首次验收100千克、净发运60千克、期末成品30千克和损失10千克时，Q仍为100千克。再次验收、期初成品及购入成品不新增Q；返工失败保留实际向量及原Q0。内部毛循环量和Q均非额外外部实物输出。未解释差额阻止完整核对，不得改变Q。 | cp_reference; cp_residues; cp_releases; original event masses/moistures; parcel destinations | 锁定Q及完整同基准事件去向核对 |  |
| normalize_period | all inventory rows | Q>0时，以cohort_accounting组装的新首次验收群组各累计实物交换向量除以其以千克计的首次验收净质量Q。验收输出为Q/Q=每1千克参考流中的1千克。保留各分子单位。Q=0时不得归一化新输出，须保留未归一化的实物交换及负荷向量；旧群组服务使用其原始验收净质量。 | cohort vectors; Q; original accepted net mass; cp_reference | 每1千克参考流 | usda-wood-moisture-2021 |
| dry_mass_ledger | conifer_logs; accepted_veneer; bark_coproduct; peel_core; wood_clip_coproduct; bark_waste; bucking_sawdust; veneer_reject | 逐项实际流或库存独立计算dry=wet/(1+u)。含成品仓储的全厂边界核对：期初干库存+实际外部干投入=期末干库存+实际外部干产品或废物转出+未包含在这些转出中的实测干损失或释放。包括全部原料、在制品和成品库存及外部退回，各仅计一次；外部各去向划分不得重叠；Q和厂内验收返工转移不作为额外外部输入或输出，因此不再以Q重复计算已验收期末成品。验收等价桥接及实物水量账分别保留。分配负荷前，按各工序明确声明的实物边界核对。不得虚构得率、把未解释差额当实测损失，或缩放实测输出强行平衡。 | wet kg; dry-basis u; actual stocks/external movements; cp_wood; cp_residues; cp_reference | 工序及全厂实物平衡的绝干千克数 | usda-wood-moisture-2021; corrim-western-plywood-2025 |
| net_heat_ledger | steam_heat | H_in=sum(m_in*h_in)；H_return=sum(m_return*h_return)。在同一基准及实际供应系统边界下计算兆焦净热量，包括有记录的未返还凝结水处理。h为千焦每千克时，将所得千焦除以1000；与热量表及账单约定核对。 | cp_utilities; steam and return states; supplier convention | net delivered MJ | epa-veneer-2002 |
| release_period | pm25; pmcoarse; pmover10; condensable_organic_aerosol; formaldehyde; methanol; alpha_pinene | 将各已识别物浓度与相容的干湿基尾气流量及实际小时数积分；校正单位并保留检出限。分别记录各排口和相态，仅汇总不重叠质量，按cohort_accounting归至正确群组，且仅在该群组分母为正时相除。 | cp_releases; concentration; flow; hours | kg per 1 kg reference flow | epa-veneer-2002 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_state | accepted_veneer | 实际植物学树种、等级、尺寸、含水率及未胶合状态须可审计；混合树种批次保留组成，不得掩盖阔叶材。 | 供应方树种及验收记录 |
| representativeness | veneer_mill | 采用声明的完整运行期，覆盖正常生产、停机、季节含水变化和重干燥；披露排除项、抽样工序、不确定性及与文献的时空差异。文献值不等于工厂测量。 | 期间核对及缺失记录登记 |
| provider_matching | all inventory rows | 按流类型、质量或能量属性、电压、树种状态、地域及交付边界核对各实际供应方或处理方。未解决的原生UUID仍是显式标识缺口；空白或通用标识均不能授权不相容供应方。 | 原生记录及实际供应或处理文件 |
| emissions_completeness | cp_releases | 保留逐物质有机物筛查、相态温度条件及粗颗粒评估。总挥发性有机物是质量核对项，不能替代单一化合物基本交换。未检出是有限证据，不是无条件零。 | 检测报告及排口相态登记 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | accepted_veneer | 拒绝阔叶材、锯切或刨切路线、厚度超过6毫米、施胶或背衬或防腐处理、缺失植物学树种及缺失必需限定信息。一个通用木质材料UUID不能证明这些事实或供应方合格。 | epa-veneer-2002 |
| validate_measurement | all inventory rows | 新输出归一化要求Q>0，实物数量有限且非负，两种语言首次验收群组及分母相同。Q=0时保留未归一化实物交换及负荷向量，不得虚构归一化输出。拒绝单板包毛质量、百分数与小数混淆、未换算体积、重干燥重复计量及无依据蒸汽热换算。按有记录的仪器不确定性核对物料及能量平衡；本PCR不虚构容差。 | usda-wood-moisture-2021; epa-veneer-2002 |
| validate_cohort | all inventory rows | 独立核验唯一首次验收事件Q，并按acceptance_event_bridge核对完整Q=D_new+FG_new+L_new，包括实测含水换算、关联净退回、损失报废降级及期末返工或在制品；仅证实L_new=0时允许两项式。拒绝按剩余可售数量倒算Q、遗漏损失强行平衡、退回去向重复或将Q加进全厂实物库存平衡。期初已验收成品、购入成品单板、复检及再次验收不新增Q。按批次来源和原Q0审核原料、在制品及成品继承向量和全部实际服务或返工失败；拒绝缺失或归零向量、删除失败活动负荷、把库存质量作新生产、旧群组服务除以新Q，以及Q=0时任何每千克新输出结果。事件或去向证据未解决仍属不完整。 | usda-wood-moisture-2021 |
| validate_allocation | veneer_mill | 每个共用工序有用产品份额之和为1；保留实测绝干质量、去向及库存变化。拒绝将干燥包装分给上游已售木芯、按分配缩减输出质量、将废物计为可售共产品，或同时采用分配及避免燃料收益。 | corrim-western-plywood-2025; usda-wood-moisture-2021 |
| validate_boundary_emissions | veneer_mill | 核对所有实际公用工程、各项包装组件、残余物、废水去向及不重叠的空气物质和相态。缺失证据、标识或供应方仍须披露。新增厂内燃烧或湿处理需扩展清单；在全部上游和处理链接验证前，不得宣称从摇篮到工厂门结果完整。 | epa-veneer-2002 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在记录的边界上使用已限定树种的旋切单板；下游胶合板或其他制造可链接此未胶合材料输入，并自行建模胶黏剂及后续工序。 |
| excluded_use | 通用针叶材单板平均值；阔叶材或刨切或锯切或胶合饰面；完整建筑服务比较；自动碳中和或避免能源声明。 |
| required_metadata | 全部参考流限定信息；实际工厂和供应方；期间；边界；树种组成；实物工序及继承库存群组台账；独立锁定的首次验收Q或Q0、互斥D_new/FG_new/L_new去向及原基准含水换算；实际返工失败或服务向量和实物库存平衡；含水测量方法；公用工程边界；分配份额；上游和处理链接。 |
| required_quality_disclosure | 采集及标识缺口；采样排口；检出限和相态重叠；时空适用性；分配敏感性；截断；缺失供应方；不得推定科学或研究批准。 |
| update_trigger | 树种或状态或厚度、来源、旋切路线、热力供应方、干燥或控制技术、含水率验收、共产品市场或测量基准变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-veneer-2002 | official_guidance | US EPA, AP-42 §10.5 Plywood Manufacturing, January 2002, pp. 10.5-1–10.5-4 and Table 10.5-3 pp.10.5-10–10.5-11; https://www.epa.gov/sites/default/files/2020-10/documents/c10s05.pdf | 原木调质、旋切剪切、蒸汽间接干燥和重干燥、未胶合薄片终止边界及逐来源相态排放及间接加热软木有机物筛查（包括CAS标识，不采用表中因子）。不移植胶合板树脂、热压或温度含水率排放数值默认值。 |
| usda-wood-moisture-2021 | handbook | USDA Forest Products Laboratory, Wood Handbook—Wood as an Engineering Material, FPL-GTR-282 (2021), Chapter 13, printed pp.13–1–13–2, PDF pp.323–324; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 干基含水率、单板代表性取样、及时称量、烘干及方法局限；干质量换算，不规定出厂含水率或密度。 |
| corrim-western-plywood-2025 | literature | CORRIM, Life Cycle Assessment of Softwood Plywood Production – Western Region, edited 22 July 2025, §§3.2.1 and 3.2.6, PDF pp.12–13,16; https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Western-Plywood-Report-Final-07222025.pdf | 实物分配先例、包装独立归属及上游边界。地区一体化胶合板清单和平均值不作为单板数值；逐阶段干质量处理为本PCR显式说明的方法综合。 |
