---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47221-to-47223
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电话及有线或无线网络通信设备专用零部件

## 1. 范围与适用性

本PCR适用于单独交付的真实专用零部件，用于带无绳手柄的固定电话、蜂窝或其他无线电话，以及其他电话或网络通信设备。依据图纸、配合与接口、BOM、完成状态和剩余装配确定交付物；称为备件或依赖主机不足以证明零部件身份。仅有功能也不能决定边界。[cpc3-telecom; apple-enclosure]

完整电话机、已完成的替换无绳手柄、路由器、调制解调器及完整通信设备均排除，即便使用还需注册、电缆、电源、软件或主机机箱。Panasonic可选手柄资料反证兼容性不能证明未完成零部件。自动数据处理设备网卡另行分类；通用芯片、裸PCB、独立连接器、麦克风、电池、树脂和金属坯料是上游投入，不是本PCR产出。[cpc3-telecom; panasonic-handset; census-electronics]

外壳、手柄组成壳体、屏蔽件、安装件、专用柔性连接件及无源天线组件，在实际主机和专用交付状态得到证明时可纳入。电子、射频或网络模块不得因含电子元件或缺UUID而排除：仅纳入真实专用未完成组成件，记录实际剩余主机装配，并经分类审查排除完整设备及另行分类通用元件。Cisco有源上联模块支持实际模块接口但不直接证明零部件分类，其空白模块展示主机专用配合及气流要求。[apple-enclosure; apple-connector; taoglas-cellular; cisco-network-module]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47221-to-47223 |
| classification_refs | CPC 3.0 47401 |
| covered_products | 合格电话或网络主机图纸定义的专用未完成零部件；有界条件机械、聚合物、连接件、无源天线及电子射频子组件工艺 |
| excluded_products | 完整电话通信设备、自动数据处理网卡、另行分类通用电子元件及材料坯料 |
| representative_product | 按单一图纸版次交付且不含主机逻辑板、电池和显示屏的电话外壳；不假定牌号或重量 |
| production_route | 实际自制外购路线：外购完成零件投入或制造规定机械、聚合物及电子组成件，继而进行实际表面处理、零部件装配和验收 |
| market_state | 工厂出厂单独交付的验收专用零部件，主机装配在边界外 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在指定主机提供规定的组成配合、容纳、安装或电气射频接口 |
| How much | 单一图纸版次和交付状态的1千克验收净零部件 |
| How well | 满足实际图纸公差、牌号与BOM及规定零部件验收测试，不虚构通用射频性能 |
| How long or cycle | 一次生产及工厂验收周期，不假定主机使用寿命 |
| reference_flow_link | `final_part` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 47221 至 47223 小类货物的部件 `bf7766aa-8f63-4869-bd70-2090483f4437` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主机型号及功能；图纸零件号版次；交付完成状态；剩余主机装配；分类审查；牌号配方BOM；自制外购及纳入工序；测试规范；验收净批质量；校准皮重；场址时期；供应商及公用工程接口；废物去向 |

所有限定信息须在前景包元数据或等效产品过程说明中声明。质量单位仅比较同一零部件规范与状态，不证明不同通信零件功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 | kg | 采用cp_mass及经校准秤采集同一图纸版次BOM状态的验收净批零部件质量，排除运输包装和不交付工装。清单及采集均使用每1千克参考流。 |
| count_mass | 按件计数的实物零部件及材料记录 | 质量 | kg | 计数记录必须有同一被计总体经校准测得的验收净批质量；不得由标称手柄重量、外壳百分比或其他版次推定质量。批交换量除以该实测验收千克数，单件称重及计数换算须复现同一净批基准。 |
| species_basis | 材料、化学品、残余物及排放物种质量平衡 | 质量 | kg | 区分材料总质量及所含元素质量；成分分析匹配牌号、溶液浓度、湿干状态及采样时期。 |
| energy_units | test_power; factory_power; natural_gas | 净热值 | MJ | 能源保留MJ，校准千瓦时按3.6兆焦每千瓦时换算。燃气体积须采用供应商热值及实测条件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明供应商出厂及交付状态的认证坯料或外购已完成组成件 |
| starting_condition_role | 外购上游中间品或组件接口 |
| product_classification_scope | CPC3主机47221–47223专用零部件，实际交付零件分类独立审查 |
| recursive_input_rule | 外购同类零部件作为上游切断接口，记录已完成工序，不再递归加入其制造 |
| upstream_dataset_requirement | 匹配物态牌号、地域时期和供应商出厂接口，供应商生产纳入一次，缺供应商覆盖明确标记；产品UUID不等于上游负荷数据集 |
| disclosure | 交付状态、纳入排除工序、实际工艺条件、供应商覆盖及残留身份数量缺口 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | all processes | 要求证明未完成组成件身份；仅有主机配合或不能独立运行不足以成立；完整设备及另行分类元件不能作为最终产出。 | `cpc3-telecom`; `panasonic-handset`; `census-electronics` |
| boundary_make_buy | all processes | 每项BOM记录自制外购、来料完成状态、上游覆盖及此处工序。若外购板件天线外壳已含铜聚合物芯片制造，不再重复加入内含投入或工序；场内制造须纳入实际材料化学废物能源。 | `apple-enclosure`; `taoglas-cellular` |
| boundary_factory | all processes | 纳入分配的制造处理装配返工验收公用工程处理包装。工厂射频导通测试属生产；之后电话通话、数据流量、主机安装维修和报废在本生产包外，需另外声明生命周期阶段。 | `apple-enclosure`; `cisco-network-module` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| p_receipt | 来料与上游接口 | required | 每项选定零部件 | foreground | `final_part` |
| p_mechanical | 机械成形与机加工 | conditional | 场内制造的图纸专用金属外壳、屏蔽件或安装件 | foreground | `final_part` |
| p_polymer | 聚合物成型与修边 | conditional | 场内制造的图纸专用聚合物外壳、嵌件或手柄壳体 | foreground | `final_part` |
| p_electronic | 专用电子或射频子组件制造 | conditional | 需主机集成的真实未完成专用零部件，且场内实际进行板件、天线或连接组件工序 | foreground | `final_part` |
| p_finish | 表面处理与清洁 | conditional | 图纸要求且实际执行的涂覆、粘接或清洁 | foreground | `final_part` |
| p_assembly | 零部件装配与验收 | required | 按交付零部件实际执行装配及尺寸、导通或射频验收 | foreground | `final_part` |
| p_utilities | 公用工程与污染控制 | required | 分配实际公用工程及处理，燃烧仅在实际存在时纳入 | foreground | `final_part` |
| p_dispatch | 包装与出厂 | required | 供应商出厂验收净零部件 | reference | `final_part` |

下列为原子工艺候选行，不是通用BOM或配方。仅使用卡片规定的实际认证牌号配方及交付接口；每项实际不同材料组件化学品燃料废物或物种另列具名行。缺UUID不排除真实工艺。仅有工艺证据才记录not_applicable，零、未知与不适用分别处理。内部过程转移须成对并在总出厂边界抵消，重复加工仍保留。

### 过程：来料与上游接口（`p_receipt`）

#### 输入

##### 产品流

###### 图纸专用注塑电话手柄壳体（`bought_shell`）

仅在外购该成型壳体时；供应商生产仅计一次，不采用平均外壳占比代理。

- 选定流：图纸专用注塑电话手柄壳体
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_bom
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`apple-enclosure`; `protolabs-molding`

###### 主机专用已装联电话电路板子组件（`bought_board`）

仅在外购实际专用子组件时；仍需审查完整设备及通用裸板分类。

- 选定流：主机专用已装联电话电路板子组件
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_bom
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`cpc3-telecom`

###### 主机专用柔性蜂窝天线组件（`bought_antenna`）

仅在主机图纸、馈电接口及安装状态证明专用零部件属性时；外购天线生产覆盖一次。

- 选定流：主机专用柔性蜂窝天线组件
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_bom
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`taoglas-cellular`

###### 图纸专用电话USB-C柔性连接组件（`bought_connector`）

仅限按主机图纸配装的专用连接组件；通用独立连接器归其自身类别。

- 选定流：图纸专用电话USB-C柔性连接组件
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_bom
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`apple-connector`

### 过程：机械成形与机加工（`p_mechanical`）

#### 输入

##### 产品流

###### EN AW-6061铝合金坯料（`aluminum_stock`）

仅在实际证书与图纸一致时为条件候选牌号；每项其他实际认证牌号须另列。

- 选定流：EN AW-6061铝合金坯料
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_material
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`apple-enclosure`

###### C11000铜带（`copper_stock`）

仅在实际屏蔽件或导体由认证C11000铜带成形时；不得依据主机身份推断合金。

- 选定流：C11000铜带
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_material
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`cpc3-telecom`

###### 矿物油切削液浓缩液（`cutting_oil`）

仅在使用该配方时；记录浓度、活性组分、稀释水及供应商配方。

- 选定流：矿物油切削液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_chem
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chem`
- 来源：`apple-enclosure`

#### 输出

##### 废物流

###### EN AW-6061机加工废料（`aluminum_scrap`）

仅外部废料；期初期末库存及内部回熔转移分别记录。

- 选定流：EN AW-6061机加工废料
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_residual
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`apple-enclosure`

###### C11000铜冲压废料（`copper_scrap`）

铜工艺存在时；需记录牌号与实际处理供应商。

- 选定流：C11000铜冲压废料
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_residual
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`cpc3-telecom`

### 过程：聚合物成型与修边（`p_polymer`）

#### 输入

##### 产品流

###### ABS注塑树脂粒料（`abs_resin`）

仅在规定确切供应商ABS牌号时；需实际添加剂、再生含量与干燥记录。

- 选定流：ABS注塑树脂粒料
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_material
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`protolabs-molding`

###### PC/ABS注塑树脂粒料（`pcabs_resin`）

实际替代树脂工艺，而非额外必需树脂；记录混配及牌号、干燥与回用料。

- 选定流：PC/ABS注塑树脂粒料
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_material
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`protolabs-molding`

#### 输出

##### 废物流

###### ABS注塑不合格品（`abs_reject`）

ABS工艺存在时；内部返回浇口料不再作为外部投入或废物重复计量。

- 选定流：ABS注塑不合格品
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_residual
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`protolabs-molding`

### 过程：专用电子或射频子组件制造（`p_electronic`）

#### 输入

##### 产品流

###### 聚酰亚胺柔性覆铜电路基材（`bare_flex`）

仅用于场内实际专用柔性线路或天线图形制造；外购完成柔性件采用其内含负荷。

- 选定流：聚酰亚胺柔性覆铜电路基材
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_bom
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`taoglas-cellular`

###### 封装射频集成电路（`mounted_ic`）

仅在该外购封装器件于此装联到真实专用未完成通信子组件时；不强制芯片制造。

- 选定流：封装射频集成电路
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_bom
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`cpc3-telecom`

###### SAC305焊膏（`solder`）

记录实际锡银铜合金成分与助焊剂占比；区分焊膏总质量和所含锡银铜。

- 选定流：SAC305焊膏
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_chem
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chem`
- 来源：`apple-connector`

###### 氯化铁水溶液蚀刻液（`etchant`）

仅在场内实际采用该溶液蚀刻铜时；需浓度及槽液库存，不从天线资料推定配方。

- 选定流：氯化铁水溶液蚀刻液
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_chem
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chem`
- 来源：`taoglas-cellular`

#### 输出

##### 废物流

###### 含铜废氯化铁蚀刻液（`etchant_waste`）

仅来自该蚀刻工艺；废液总质量与匹配铜铁分析分列，并明确实际处理接口。

- 选定流：含铜废氯化铁蚀刻液
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_residual
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`taoglas-cellular`

### 过程：表面处理与清洁（`p_finish`）

#### 输入

##### 产品流

###### 异丙醇清洁溶剂（`ipa`）

仅在实际工厂清洁采用IPA时；维修资料仅支持溶剂身份，不给出工厂默认用量。

- 选定流：异丙醇清洁溶剂
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_chem
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chem`
- 来源：`apple-connector`

###### 丙烯酸压敏胶膜（`adhesive`）

仅在实际图纸或供应商成分证明该胶膜时；Taoglas胶黏剂商品名不足以证明聚合物组成。

- 选定流：丙烯酸压敏胶膜
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_chem
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chem`
- 来源：`taoglas-cellular`

#### 输出

##### 基本流

###### 排入空气的异丙醇（`ipa_air`）

仅计实测或按物种计算的治理后排放；保留回收及溶剂库存变化。

- 选定流：排入空气的异丙醇
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_emission
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：`apple-connector`

### 过程：零部件装配与验收（`p_assembly`）

#### 输入

##### 产品流

###### 交流电（`test_power`）

仅限中国用户侧1–35千伏电网供电，分配实际工厂验收及测试用电；其他国家或电压需匹配身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_energy
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`cpc3-telecom`

### 过程：公用工程与污染控制（`p_utilities`）

#### 输入

##### 产品流

###### 交流电（`factory_power`）

同一已核验中国1–35千伏用户接口，排除已计量test_power；不得用焚烧专用电力代替电网。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_energy
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`protolabs-molding`

###### 工业工艺用水（`water`）

实际外购供水；内部冷却循环不得重复作为购入量。

- 选定流：工业工艺用水
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`protolabs-molding`

###### 管道天然气（`natural_gas`）

仅实际场内燃气加热或干燥；体积计量需供应商热值及条件，纯电工艺不假定燃烧。

- 选定流：管道天然气
- 流属性/单位：净热值 / MJ
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_energy
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`protolabs-molding`

#### 输出

##### 废物流

###### 含铜工业废水（`wastewater`）

仅实际水相金属工艺；分列悬浮及溶解物种、接收处理，并另列其他废水。

- 选定流：含铜工业废水
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`taoglas-cellular`

###### 含铜废水处理污泥（`sludge`）

仅实际处理产物；需湿干基、铜含量及处置去向。

- 选定流：含铜废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_residual
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`taoglas-cellular`

##### 基本流

###### 排入空气的化石二氧化碳（`co2`）

仅实际燃烧，需燃料碳及氧化证据，并与外购电力上游分开。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_emission
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：`protolabs-molding`

###### 排入空气的一氧化碳（`co`）

仅采用该物种实际计量或适用因子证据；燃料碳平衡不能独自确定CO。

- 选定流：排入空气的一氧化碳
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_emission
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：`protolabs-molding`

###### 排入空气的二氧化氮（`no2`）

仅采用明确NO2物种证据；以NO2当量表示的总NOx不自动等于纯NO2。

- 选定流：排入空气的二氧化氮
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_emission
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：`protolabs-molding`

### 过程：包装与出厂（`p_dispatch`）

#### 输入

##### 产品流

###### 瓦楞纸板箱（`box`）

仅实际出厂零部件纸箱，与验收净零部件质量分开。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_pack
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`apple-enclosure`

###### 防静电屏蔽金属化聚乙烯袋（`esd_bag`）

仅实际电子或射频件包装袋，需组成及供应商覆盖信息。

- 选定流：防静电屏蔽金属化聚乙烯袋
- 流属性/单位：质量 / kg
- 数量规则：实测归属交换量除以验收净零部件批质量（千克）；cp_pack
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`cisco-network-module`

#### 输出

##### 产品流

###### 验收合格图纸定义的电话或网络通信设备专用零部件（`final_part`）

严格对应交付零部件状态及图纸版次，排除完整设备。

- 选定流：47221 至 47223 小类货物的部件 `bf7766aa-8f63-4869-bd70-2090483f4437`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mass`
- 来源：`cpc3-telecom`; `apple-enclosure`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_causality | shared factory operations | 先考察细分或系统扩展。确需分配时保留总清单并选择经证明的物理因果；按适用情况采用实际注塑模次型腔负荷、机加工时间、回流装载或实测测试需求，不因产出为千克就按零件质量分配。其他关系须论证及敏感性分析。 | `ef-allocation-2021` |
| allocation_residual | scrap and rework | 不假定售出废料为共产品或避免原生材料信用。披露选择的回收处理分配、供应商及去向；内部回用转移抵消，但重复能源和损失保留。不合格品及复测负荷纳入验收产出分母。 | `ef-allocation-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | p_dispatch | 验收净零部件 | foreground_record | 图纸；版次；主机；交付状态；批次；皮重；校准验收净千克；验收数量 | 用经校准秤称量同一验收零件总体，排除运输包装；保留可追溯批次数量配对及验收记录。 | kg | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |
| cp_bom | p_receipt | 外购组成件 | foreground_record | 零件号；状态；自制外购；供应商；覆盖；交付质量；库存变化 | 按实际图纸核对收发料BOM及供应商覆盖，计数供货时称量组件。 | kg | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |
| cp_material | p_mechanical | 认证坯料 | foreground_record | 牌号；配方；干基；批次；收发质量；验收质量；库存 | 采用校准地磅或秤及证书，核对废料回用及期初期末库存，不设固定收率。 | kg | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |
| cp_chem | p_finish | 专用化学品 | foreground_record | 物种；牌号；浓度；活性比例；供应商；称量消耗；槽液库存；反应；回收 | 核对计量添加、分析和库存记录，区分配方总质量与每项活性化学品。 | kg | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |
| cp_energy | p_utilities | 实际能源接口 | foreground_record | 电表；电压；国家；供应商；工序负荷；测试时长；千瓦时；燃料体积；热值 | 分表计量实际工序测试能源，保留负荷分配及供应接口；电力千瓦时转兆焦，燃料体积按实际条件及热值转换。 | MJ | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |
| cp_residual | p_utilities | 单项废物流 | foreground_record | 具名废物流；湿干质量；分析；库存；返回；外部去向；处理供应商 | 逐项称量分开废物流并采样分析组成，内部返回与外部废物独立核对。 | kg | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |
| cp_water | p_utilities | 水及废水 | foreground_record | 供水；流量计；密度；铜物种；浓度；体积；库存；蒸发；供应商 | 采用校准表及同期浓度样品，区分补水、内部循环及实际排放。 | kg | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |
| cp_emission | p_utilities | 单项排放物种 | foreground_record | 物种；环境介质；治理状态；流量；浓度；计量时段；因子适用性；库存回收 | 测量治理后排放，或采用论证的物种专用因子与匹配活动量；保留不确定性，不单靠燃料碳推定CO或NO2。 | kg | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |
| cp_pack | p_dispatch | 单项包装组件 | foreground_record | 纸箱包装袋身份；组成；收用质量；供应商；返回率 | 称量每项实际包装组件并核对批次消耗，与参考零部件净质量分开。 | kg | 每批及报告期 | 同一生产期及图纸版次 | 实际场址及可追溯供应商 | 每 1 kg 参考流 | 校准；可追溯性；不确定性；核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalization | all inventory rows | 批次归属交换量除以经校准验收净零部件批质量（千克）；保留原分子单位并拒绝非正分母，参考产出始终为1千克。 | cp_mass; actual batch exchange | 每1千克参考流交换量 |  |
| energy_conversion | test_power; factory_power | 计量千瓦时乘以3.6得兆焦，再除以验收净千克。保留实际国家电压供应商并排除重复测试用量。 | cp_energy; cp_mass | MJ per kg |  |
| contained_species | 材料、化学品、残余物及排放物种质量平衡 | 每项材料化学品用实测总量乘匹配分析浓度求所含物种，保留期初期末库存、反应保留及实际释放，不采用通用共同含量。 | cp_material; cp_chem; cp_residual; cp_emission | 分立物种平衡 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all flows | 实际图纸接口状态及确切供应商牌号；采用UUID前核验类型属性单位地域，类别流不提供图纸、场址、供应商、地域或专用零部件限定信息，须明确采集。 | 图纸；直读身份；供应商覆盖 |
| dq_coverage | all processes | 工艺台账分别记录纳入、不适用、零及未知；候选资料案例不建立通用经验范围。 | 工艺证据；报告期实测总量 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | final_part | 核验合格主机与交付未完成零部件、确切版次及剩余装配；完整可选手柄、调制解调器路由器及自动数据处理网卡不能仅凭兼容性认作专用零部件。 | `cpc3-telecom`; `panasonic-handset` |
| validate_mass | all inventory rows | 核验正值校准验收净批千克、同一图纸BOM状态时期及计数总体，核对验收不合格返工；包装排除参考质量并保留分子单位。 |  |
| validate_balance | all processes | 核对外部材料总投入与期初库存，对应验收组成件、外部废料废物、排放及期末库存；内部成对转移抵消。实际铜铝锡银铁及其他物种分别平衡，每项使用自身匹配分析。纳入反应氧化溶解释放及湿干水分；废料总量不等于所含铜。核对补水库存、排放蒸发带出，以及化学添加库存、回收反应残余。按实测不确定性调查不平衡，不设虚构固定容差收率。燃料碳经证据可支持CO2但不能确定CO或NO2。 |  |
| validate_completeness | dataset | 检查所有实际条件工序及原子交换、自制外购上游负荷仅一次、公用工程供应商电压、实际废物去向及排放物种介质。必需数量未知、所需UUID供应商未解决或换算无支持均阻止完整数据集；方法计量通过不代表设备合规或证据完成。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配零部件规范状态的上游接口，用于前景包及下游process/lifecyclemodel构建 |
| excluded_use | 通用完整手柄路由器模型、主机使用阶段电力、按千克比较不同零件功能、无限定材料替换 |
| required_metadata | 所有参考限定信息、实际工艺、供应商覆盖及分配 |
| required_quality_disclosure | 未解决身份供应商、实测不确定性、缺来源范围覆盖及确切边界 |
| update_trigger | 图纸BOM版次、交付状态、自制外购、供应商、牌号、工厂工艺测试或公用工程变更 |

## 11. 数据源

| 来源ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| cpc3-telecom | official_guidance | UNSD CPC3.0 Explanatory Notes, 30 June 2025, pp257/259; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 主机零件分类及完整设备自动数据处理网卡反边界，不提供材料配方 |
| apple-enclosure | handbook | Apple iPhone15/15Plus Enclosure, 10 April2025, Before You Begin/Reassembly; https://support.apple.com/en-gb/120605 | 交付外壳需逻辑板电池显示屏及其他主机装配，仅为案例 |
| apple-connector | handbook | Apple iPhone15 USB-C Connector, 3 June2025, Removal/Reassembly; https://support.apple.com/en-gb/122386 | 专用连接柔性件、主机装配及清洁身份，不给工厂数量因子 |
| cisco-network-module | handbook | Cisco Catalyst9500 Hardware Installation Guide, Installing a Network Module; https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9500/hardware/install/b_catalyst_9500_hig/9500_installing-network-module.html | 专用插槽空白件气流及模块接口；有源模块未经完成状态审查不确定分类 |
| panasonic-handset | handbook | Panasonic handset part-number/model compatibility list; https://help.na.panasonic.com/answers/parts-and-accessories-telephone-handset-part-number-to-model-number-compatibility-list/ | 可选运行手柄反例：兼容性不证明未完成零部件 |
| taoglas-cellular | handbook | Taoglas FXP14.07.0100A Flexible PCB Cellular Antenna, SPE-12-8-050-G, p1; https://cdn.taoglas.com/datasheets/FXP14.07.0100A.pdf | 无源蜂窝柔性天线电缆连接胶黏集成案例，不证明普遍专用或制造配方 |
| protolabs-molding | handbook | Protolabs Injection Molding Services, tooling/materials/quality sections; https://www.protolabs.com/services/injection-molding/ | 条件塑料成型、树脂备选及检验能力，必须采集实际供应商牌号工序 |
| census-electronics | official_guidance | US Census Schedule B2022 Chapter85, headings8517/8534/8536/8541/8542; https://www.census.gov/foreign-trade/schedules/b/2022/c85.html | 设备零件及单列通用电子元件的独立反证，不自动形成CPC映射 |
| ef-allocation-2021 | official_guidance | Commission Recommendation(EU)2021/2279, section4.5 pp87–88; https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | 分配层级及可证明物理关系 |
