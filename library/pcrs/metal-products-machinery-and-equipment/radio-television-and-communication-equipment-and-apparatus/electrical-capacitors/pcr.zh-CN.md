---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-capacitors
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 电容器

## 1. 范围与适用性

本 PCR 规定以经测试元件状态供应的分立电容器前景生产数据。示范清单覆盖多层陶瓷、液态铝电解和金属化聚丙烯薄膜路线。介质设计、额定电压、电容量、成品率和热处理使该类别区别于一般电子装配。类别包括固定和可变电容器；未列路线必须补充经核实的过程扩展，方可声明数据集完整。电池、单独销售的电容器裸零件及完整电能变换设备不属于参考产品。CPC 身份依据 `un-cpc-3-0-structure-2025`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-capacitors |
| classification_refs | CPC 3.0:47110 |
| covered_products | 分立固定和可变电容器；按路线编制前景数据包 |
| excluded_products | 电池；单独销售的零件；电容器组控制设备；完整电子设备 |
| representative_product | 一种明确介质及电气额定参数的经测试电容器 |
| production_route | 陶瓷片及电极加工和烧结；化成箔卷绕和浸渍；金属化薄膜卷绕；按路线端接和检验 |
| market_state | 出厂合格元件，外表面干燥且已放电；包装单列清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为中间元件提供声明的电容功能 |
| How much | 1 kg 同一已声明产品规格的合格电容器净质量 |
| How well | 声明电容量、容差、交直流额定电压、等效串联电阻或损耗因数、漏电、介质类别及测试温度和频率 |
| How long or cycle | 一次出厂交付；不推定使用寿命。使用阶段扩展须声明负载周期、温度、寿命及更换率。 |
| reference_flow_link | 将批次合格产出归一化至 1 kg；质量是中间产品声明单位，不表明不同设计的功能等价。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 电容器 `df93339b-f27d-4f3e-b672-9d2ef0c536f6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 介质与电解液身份；固定或可变设计；电容量与容差；交直流额定电压；等效串联电阻和漏电测试条件；尺寸与单件净质量；路线和购入材料状态；供应商与场址地域；生产期间；成品率；边界与上游覆盖 |

数据包须声明全部限定信息。中间产品参考约定依据 `ghg-protocol-product-standard-2011`；路线特定性能描述依据 `nichicon-aluminum-technical-notes` 和 `tdk-film-capacitors-primer`。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用合格元件净质量，不含包装；数量换算采用实测批次平均单件质量。 |
| energy_basis | 电力和燃料 | Net calorific value | MJ | 计量 kWh 按 3.6 MJ/kWh 换算；天然气体积及参考条件另行保留。 |
| formulation_mass | 浆料和电解液 | Mass | kg | 记录供应配方质量；不得将金属、固体或活性盐质量等同于购入混合物质量。 |
| water_basis | 水和液体废物 | Mass | kg | 体积转质量须提供实测密度与温度；废水污染物质量与湿流质量分列。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_production | foreground | 纳入从声明的购入材料状态至合格产出的全部场内相关生产、不合格品、热处理、洁净室需求、测试、包装及废物转移。 | `ghg-protocol-product-standard-2011` |
| boundary_upstream | upstream | 为每项购入材料和能源关联上游生产与交付数据。生坯带制造、箔材蚀刻和化成及薄膜金属化必须在上游或前景明确覆盖，不得遗漏或重复。 | `murata-mlcc-production-2011`, `nichicon-aluminum-technical-notes`, `tdk-film-capacitors-primer` |
| boundary_extensions | completeness | 卡片是路线基础，不是截断清单。核对物料清单、采购及排放台账；为每项实际但未列的组分、载膜、电镀盐、溶剂排放、处理药剂、燃料或废物补充独立交换。其他介质、可变及双电层设计须有经核实的路线扩展；不得仅按质量套用现有路线清单。 | `ghg-protocol-product-standard-2011` |
| boundary_partial | downstream | 工厂生产与从摇篮到大门结果分别报告。默认生产边界不含售出电容器的使用和报废阶段；扩展生命周期模型另行声明这些情景。 | `ghg-protocol-product-standard-2011` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有明确交付状态的购入陶瓷生坯带、电极浆料、阳极化成箔、阴极蚀刻箔、隔离纸、配制电解液或金属化薄膜 |
| starting_condition_role | 前景入口条件；不豁免上游负荷 |
| product_classification_scope | CPC 3.0:47110; 零件另行识别 |
| recursive_input_rule | 购入返工电容器保留独立供应状态上游数据集；不得递归套用同一成品过程。内部返工是计量循环，记录追加能源和损耗。 |
| upstream_dataset_requirement | 每项关联数据须记录供应商技术、地域、期间、材料状态和未含工序 |
| disclosure | 声明厂门位置、自制与外购划分、外包工序、运输、处理边界、排除项及扩展覆盖 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| ceramic | 陶瓷芯片制造 | conditional | 陶瓷介质路线 | 前景生产 | 每 1 kg 合格电容器产出 |
| electrolytic | 铝电解芯子制造 | conditional | 液态铝电解路线 | 前景生产 | 每 1 kg 合格电容器产出 |
| film_winding | 薄膜芯子制造 | conditional | 金属化聚丙烯薄膜路线 | 前景生产 | 每 1 kg 合格电容器产出 |
| finishing | 端接、装配、测试与包装 | required | 所有已声明路线 | 前景生产 | 每 1 kg 合格电容器产出 |
| utilities | 场址计量公用工程与直接燃烧 | required | 所有已声明路线；天然气仅在实际燃烧时纳入 | 前景生产 | 每 1 kg 合格电容器产出 |

### 过程：陶瓷芯片制造 (`ceramic`)

#### 输入

##### 产品流

###### 钛酸钡陶瓷生坯带 (`ceramic_tape`)

钛酸钡生坯带路线：记录购入带材质量、粘结剂含量和厚度；带材质量不含可剥离载膜。

- 选定流：钛酸钡陶瓷生坯带
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ceramic`
- 来源：`murata-mlcc-production-2011`

###### 镍电极浆料 (`nickel_paste`)

镍内电极路线：称量配制浆料的领用减退回量，并记录金属和溶剂比例。

- 选定流：镍电极浆料
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ceramic`
- 来源：`murata-mlcc-production-2011`

###### 铜电极浆料 (`copper_paste`)

铜外电极路线：称量湿浆消耗，区分附着固体与挥发溶剂。

- 选定流：铜电极浆料
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ceramic`
- 来源：`murata-mlcc-production-2011`

#### 输出

##### 废物流

###### 废弃多层陶瓷电容器 (`ceramic_reject`)

陶瓷不合格品外送处理时：将烧结后废芯片与未烧结带材边角料分别称量，记录金属含量和去向。

- 选定流：废弃多层陶瓷电容器
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ceramic`
- 来源：`murata-mlcc-production-2011`

### 过程：铝电解芯子制造 (`electrolytic`)

#### 输入

##### 产品流

###### 电容器用铝阳极化成箔 (`anode_foil`)

液态铝电解路线：称量带氧化膜的阳极化成箔；记录纯度、厚度、化成电压及供应商蚀刻和化成边界。

- 选定流：电容器用铝阳极化成箔
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electrolytic`
- 来源：`nichicon-aluminum-technical-notes`

###### 蚀刻铝箔 (`cathode_foil`)

液态铝电解路线：称量用作阴极的蚀刻箔；声明厚度、纯度、蚀刻状态及是否后续化成。

- 选定流：蚀刻箔铝线圈 `7e6ef577-653b-4ef1-9b41-74f1e31c2ff3`
- 流属性/单位：Mass / kg
- 流属性 UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组 UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electrolytic`
- 来源：`nichicon-aluminum-technical-notes`

###### 电容器隔离纸 (`paper`)

液态铝电解路线：按牌号、含水率和卷材状态称量干隔离纸；不得替换为电池聚合物隔膜。

- 选定流：电容器隔离纸
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electrolytic`
- 来源：`nichicon-aluminum-technical-notes`

###### 铝电容器液态电解液 (`electrolyte`)

液态浸渍路线：每条记录称量一种购入电解液配方，保留供应商配方或安全数据表身份、溶剂、盐和浓度；不同配方单列交换。

- 选定流：铝电容器液态电解液
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electrolytic`
- 来源：`nichicon-aluminum-technical-notes`

#### 输出

##### 废物流

###### 废铝箔 (`aluminum_scrap`)

箔材边角料外送时：称量分选废铝箔，记录污染及回收接收凭证；内部循环不计作新的购入投入。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 流属性 UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组 UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electrolytic`
- 来源：`nichicon-aluminum-technical-notes`

###### 废铝电容器电解液 (`spent_electrolyte`)

废浸渍液排出时：与漂洗水分别称量，声明组成、危险性分类及处理去向。

- 选定流：废铝电容器电解液
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electrolytic`
- 来源：`nichicon-aluminum-technical-notes`

### 过程：薄膜芯子制造 (`film_winding`)

#### 输入

##### 产品流

###### 电容器用金属化聚丙烯薄膜 (`film`)

金属化聚丙烯路线：计量薄膜消耗，记录聚合物厚度及电极金属质量；供应商数据必须包含金属化工序。

- 选定流：电容器用金属化聚丙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_film_winding`
- 来源：`tdk-film-capacitors-primer`

#### 输出

##### 废物流

###### 废金属化聚丙烯薄膜 (`film_scrap`)

分切或卷绕边角料外送时：称量废金属化聚丙烯薄膜，记录金属镀层、污染和去向。

- 选定流：废金属化聚丙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_film_winding`
- 来源：`tdk-film-capacitors-primer`

### 过程：端接、装配、测试与包装 (`finishing`)

#### 输入

##### 产品流

###### 镀锡铜线 (`wire`)

安装引线时：称量含镀层的购入镀锡铜线，记录直径及不合格损耗。

- 选定流：镀锡铜线
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`tdk-film-capacitors-primer`

###### 电容器铝壳 (`can`)

安装铝壳时：记录空成型铝壳质量与数量、涂层状态及供应商成型边界。

- 选定流：电容器铝壳
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`nichicon-aluminum-technical-notes`

###### 电容器丁基橡胶密封件 (`seal`)

仅当物料清单规定丁基橡胶端封时：称量成品密封件，保留胶料与硫化规格。

- 选定流：电容器丁基橡胶密封件
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`nichicon-aluminum-technical-notes`

###### 环氧树脂 (`epoxy`)

采用环氧封装时：称量树脂消耗并保留配方；固化剂若单独供应，作为独立化学品交换采集。

- 选定流：环氧树脂 `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- 流属性/单位：Mass / kg
- 流属性 UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组 UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

###### 镍 (`nickel`)

镀镍使用可溶性镍阳极时：称量镍阳极净消耗；槽液盐类和添加剂按具体物质另行记录。

- 选定流：镍
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`murata-mlcc-production-2011`

###### 锡 (`tin`)

镀锡使用可溶性锡阳极时：称量锡净消耗；不得仅按成品镀层推定投入量。

- 选定流：锡
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`murata-mlcc-production-2011`

###### 瓦楞纸箱 (`box`)

使用瓦楞运输纸箱时：称量空箱并分配至发运合格电容器质量；存在载带或卷盘时单列采集。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 流属性 UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组 UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

#### 输出

##### 产品流

###### 电容器 (`finished_capacitor`)

所有路线：记录通过测试的合格电容器净质量和数量；不含包装和不合格品；保留电容量、电压和测试条件。

- 选定流：电容器 `df93339b-f27d-4f3e-b672-9d2ef0c536f6`
- 流属性/单位：Mass / kg
- 流属性 UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组 UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`ghg-protocol-product-standard-2011`

##### 废物流

###### 含镍电镀废水 (`plating_water`)

仅在含镍电镀废水送入处理设施时：计量湿质量和镍浓度；区分送处理的废物流与最终环境基本流排放。

- 选定流：含镍电镀废水
- 流属性/单位：Mass / kg
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`

### 过程：场址计量公用工程与直接燃烧 (`utilities`)

#### 输入

##### 产品流

###### 电力 (`electricity`)

所有路线：计量生产、热处理、洁净室、压缩空气、老化和测试用电；核对共用工程，避免重复分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 流属性 UUID：`93a60a56-a3c8-11da-a746-0800200c9a66`
- 单位组 UUID：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`ghg-protocol-product-standard-2011`

###### 工艺用水 (`process_water`)

供水时：计量新增工艺用水，区分补水与循环水，记录处理后水质。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 流属性 UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组 UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`ghg-protocol-product-standard-2011`

###### 气态天然气 (`natural_gas`)

仅对场内天然气燃烧：计量声明温度和压力下的供应体积，并记录组成及热值基准。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 流属性 UUID：`93a60a56-a3c8-22da-a746-0800200c9a66`
- 单位组 UUID：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`ghg-protocol-product-standard-2011`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅对直接化石碳氧化：采集烟气二氧化碳实测值，或按实测燃料碳及氧化、碳保留记录计算；不含上游发电排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性 UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组 UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集上述批次数量并除以合格批次净产出的 kg 数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格电容器净产出
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`ghg-protocol-product-standard-2011`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_operations | 优先分表计量及批次分隔。无法避免分配时，按炉膛占用或机器时间等实测因果驱动量分配共用负荷，记录物理关系。 | `ghg-protocol-product-standard-2011` |
| allocation_fallback | coproducts | 仅在无法建立物理分配时采用经济或其他有依据关系；保留价格、期间及敏感性。不得仅按件数混合不同额定参数电容器。 | `ghg-protocol-product-standard-2011` |
| allocation_rejects | rework_and_scrap | 合格产出承担生产及不合格品处理需求。内部返工不得重复计入原生投入。明确报告外送废料质量及回收约定；不得自动赋予避免原生生产的抵扣。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_ceramic | ceramic | 各项交换及成品率 | 初级批次台账 | 行标识；材料牌号；期初期末库存；收货；退回；表计读数；合格净质量；不合格品；在制品；测试条件；供应商运输距离和方式 | 校准衡器和表计、物料清单核对、供应商证书及处理联单；每种物质分别记录 | kg；MJ；带参考条件的 m3 | 每批及每个计量区间 | 声明有代表性的连续生产期间，包括启动、待机及季节条件 | 已声明场址、生产线及外包阶段 | 对同一产品路线的核对后数量求和，再除以合格净产出，保留分配及库存变化 | 校准；发票；物料清单；测试证书；成品率及质量平衡核对 |
| cp_electrolytic | electrolytic | 各项交换及成品率 | 初级批次台账 | 行标识；材料牌号；期初期末库存；收货；退回；表计读数；合格净质量；不合格品；在制品；测试条件；供应商运输距离和方式 | 校准衡器和表计、物料清单核对、供应商证书及处理联单；每种物质分别记录 | kg；MJ；带参考条件的 m3 | 每批及每个计量区间 | 声明有代表性的连续生产期间，包括启动、待机及季节条件 | 已声明场址、生产线及外包阶段 | 对同一产品路线的核对后数量求和，再除以合格净产出，保留分配及库存变化 | 校准；发票；物料清单；测试证书；成品率及质量平衡核对 |
| cp_film_winding | film_winding | 各项交换及成品率 | 初级批次台账 | 行标识；材料牌号；期初期末库存；收货；退回；表计读数；合格净质量；不合格品；在制品；测试条件；供应商运输距离和方式 | 校准衡器和表计、物料清单核对、供应商证书及处理联单；每种物质分别记录 | kg；MJ；带参考条件的 m3 | 每批及每个计量区间 | 声明有代表性的连续生产期间，包括启动、待机及季节条件 | 已声明场址、生产线及外包阶段 | 对同一产品路线的核对后数量求和，再除以合格净产出，保留分配及库存变化 | 校准；发票；物料清单；测试证书；成品率及质量平衡核对 |
| cp_finishing | finishing | 各项交换及成品率 | 初级批次台账 | 行标识；材料牌号；期初期末库存；收货；退回；表计读数；合格净质量；不合格品；在制品；测试条件；供应商运输距离和方式 | 校准衡器和表计、物料清单核对、供应商证书及处理联单；每种物质分别记录 | kg；MJ；带参考条件的 m3 | 每批及每个计量区间 | 声明有代表性的连续生产期间，包括启动、待机及季节条件 | 已声明场址、生产线及外包阶段 | 对同一产品路线的核对后数量求和，再除以合格净产出，保留分配及库存变化 | 校准；发票；物料清单；测试证书；成品率及质量平衡核对 |
| cp_utilities | utilities | 各项交换及成品率 | 初级批次台账 | 行标识；材料牌号；期初期末库存；收货；退回；表计读数；合格净质量；不合格品；在制品；测试条件；供应商运输距离和方式 | 校准衡器和表计、物料清单核对、供应商证书及处理联单；每种物质分别记录 | kg；MJ；带参考条件的 m3 | 每批及每个计量区间 | 声明有代表性的连续生产期间，包括启动、待机及季节条件 | 已声明场址、生产线及外包阶段 | 对同一产品路线的核对后数量求和，再除以合格净产出，保留分配及库存变化 | 校准；发票；物料清单；测试证书；成品率及质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 每个清单行 | q_i = Q_i / M_good；M_good 必须为正；Q_i 为同期间净消耗或实测产出。 | Q_i; M_good | 每 kg 数量 |  |
| stock_balance | 购入材料 | 净消耗 = 期初库存 + 收货 - 期末库存 - 外部退回；识别在制品变化。 | 库存台账 | Q_i |  |
| count_mass | 参考产出 | 净质量 = 合格数量 × 实测平均单件质量；保留抽样方案及变异。 | 数量；称量样本 | M_good |  |
| fuel_carbon | 直接二氧化碳 | 采用烟气实测质量或含实测氧化及保留碳的燃料碳平衡。明确因子来源；上游电网二氧化碳不是直接烟气排放。 | 烟气或燃料碳记录 | 直接化石二氧化碳 | `ghg-protocol-product-standard-2011` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 全部材料 | 保留准确牌号、供应状态、组成及溯源；不得用通用金属替代加工箔材或浆料。 | 供应商证书和物料清单 |
| dq_completeness | 场址清单 | 核对全部材料、能源、不合格品和排放物种；有证据时将不存在的条件流标为不适用；未知不等于零。 | 采购、排放及处理台账 |
| dq_quality | 测量和上游数据 | 披露时间、地域、技术、不确定性、校准及覆盖；受控工序优先采用初级记录。 | `ghg-protocol-product-standard-2011` |
| dq_performance | 可比性 | 比较须具有等效电气服务及寿命假设；仅按质量归一化不构成等价。 | 电气测试及功能规格 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_flow | 要求全部参考限定信息、正的合格产出、一致单位换算及不含包装的净质量。 | `ghg-protocol-product-standard-2011` |
| validate_route | process_inventory | 每个纳入过程须有记录；核实条件路线适用性及全部场址特定扩展。缺少过程化学品或未经审查的路线扩展时，完整性无法判定。 | `ghg-protocol-product-standard-2011` |
| validate_balance | amounts | 在声明测量不确定性内核对材料、金属、溶剂及能源台账。解释差异及不合格率；不套用通用文献成品率阈值。 |  |
| validate_links | upstream_and_waste | 拒绝重复计算供应商加工、内部转移、废物处理及电网排放。未解决 UUID 须明确披露，不得静默用代理替代。 | `ghg-protocol-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在明确上游覆盖的过程或生命周期模型中，作为带路线限定的电容器生产投入 |
| excluded_use | 未限定的跨介质比较；用仅厂门数据声明完整生命周期；用于未核实路线 |
| required_metadata | 产品规格；参考限定信息；场址；期间；过程图；起始状态；供应商；单位；分配及运输 |
| required_quality_disclosure | 测量不确定性；来源覆盖；未解决身份；遗漏工序；范围证据局限及路线扩展 |
| update_trigger | 介质、供应商状态、能源供应、成品率、电镀化学品、配方或电气额定参数变化 |

## 11. 数据源

| source_id | type | reference | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 检索于 2026-09-09; independence_key: un-cpc-3-0-structure-2025 | CPC 47110 产品身份；47171 单列零件 |
| murata-mlcc-production-2011 | literature | Murata, Basics of capacitors, Lesson 3, 28 June 2011; https://article.murata.com/en-eu/article/basics-of-capacitors-3; 检索于 2026-09-09; independence_key: murata-basics-capacitors-lesson-3-2011 | 陶瓷片、电极、烧结、端接和检验的工艺顺序 |
| nichicon-aluminum-technical-notes | handbook | Nichicon, General Descriptions of Aluminum Electrolytic Capacitors, sections 1-3 to 1-6, PDF pages 3-6; https://www.nichicon.co.jp/english/products/pdf/aluminum-e.pdf; 检索于 2026-09-09; independence_key: nichicon-aluminum-technical-notes | 化成箔与蚀刻箔、隔纸、浸渍、外壳、老化和电性能表征 |
| tdk-film-capacitors-primer | literature | TDK, Capacitors Part 4, Film Capacitors [1], construction section; https://www.tdk.com/en/tech-mag/electronics_primer/7; 检索于 2026-09-09; independence_key: tdk-electronics-primer-7 | 薄膜介质、金属化电极与箔电极、卷绕和叠层结构 |
| ghg-protocol-product-standard-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 6-9 and summary pages 14-15; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; 检索于 2026-09-09; independence_key: wri-wbcsd-product-standard-2011 | 中间产品参考流、部分边界、初级数据采集和分配层级；仅支持温室气体方法 |
