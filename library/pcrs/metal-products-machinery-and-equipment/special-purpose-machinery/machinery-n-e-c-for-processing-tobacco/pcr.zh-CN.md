---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-processing-tobacco
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 未另列明的加工烟草用机械

## 1. 范围与适用性

本候选覆盖完整未另列明烟草加工机器类别，包括实际适用开包松散、烟包切片、调湿、梗压辊、叶梗再造烟草切丝、混合储存、再造烟草加工及后端卷杆组合架构。不是卷烟生产配方，也不仅卷烟机。独立专用零件属44523，农业烘干机44518及通用干燥包装输送实验仪器须独立主要功能审查。烟草专用集成模块仅纳入实际验收交付范围；产品目录不证明所有模块随供。来源：`un-cpc-44517`。

COMAS SO说明受控水平烟包切片；CLM说明双硬化旋转辊、可调间隙、过载分离侧活塞及随附喂卸振动输送机。DCRB说明旋转调湿筒、桨叶销、蒸汽水应用和随附公用介质柜；加热、倾角、施加料液和自动清洗为实际机型选项。侧活塞或蒸汽能力均不证明通用液压油初填或初装烟草。来源：`comas-slicer`；`comas-flatten`；`comas-dcrb`。

COMAS SAM说明单双层混合料仓、带条保持结构、包括拨料器的产品接触不锈钢及可选共同混合车。KT4说明电驱刀进给、砂轮、刀鼓底刀及压实喂料；实际刀合金热处理砂轮构造及供应完成状态仍须物料清单证据。Ammeraal供应应用专用织物聚酯带及刮料器；带不是散装聚酯树脂或运输服务数据集。来源：`comas-blending`；`koerber-cutter`；`ammeraal-belts`。

COMAS再造路线说明磨碎混合、辊涂或层压及蒸汽盘热风干燥替代；其中烟草胶水是客户喂料配方而非设备物料清单。Körber Protos说明纸幅处理、水基接缝胶、旋转切刀、接滤嘴和在线检测；Lab Maker卷杆与滤嘴模块可独立。传感器文说明拉料辊风机机罩联锁及成型加热器。MSM确认客户可配组合而非通用模块组。G.D121与重定向Körber概览仅建立设备家族存在，不建立制造配方。来源：`comas-recon`；`koerber-rods`；`koerber-sensors`；`koerber-msm`；`gd-maker`；`koerber-makers`。

运行吞吐刀寿命尺寸水分配方削减比例铭牌客户杆叶质量或产品安全营销均不建立工厂设备质量或制造数量。实际工厂验收运行独立作为归属负荷；消耗烟草纸胶水绝不进入验收设备净质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-processing-tobacco |
| classification_refs | CPC3.0:44517 |
| covered_products | 完整未另列明烟草加工机器，包括实际初加工开包切片调湿切丝混合及适用后端卷杆组合再造架构 |
| excluded_products | 独立供应专用烟草机器零件44523、农业烘干机44518、另归类通用干燥机包装机器及独立输送计量设备。烟草作物已制烟草卷烟及客户加工服务不是本设备输出。混合线审查实际主要功能及交付设备边界 |
| representative_product | 同一实际配置的完整验收设备，无代表重量 |
| production_route | 实际机械制造、烟草松散切片调湿切丝混合再造卷杆架构供应、表面处理、传动控制及工厂试验；自制或外购 |
| market_state | 完整验收交付配置，包括实际随附部件及初始保留润滑剂；净质量排除包装及试料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应完整烟草加工机器，而非客户烟草加工服务 |
| How much | 1 kg 同一配置验收净整机质量 |
| How well | 满足声明物料、机构、安全及实际验收计划 |
| How long or cycle | 一个制造交付期间，无默认寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未另列明的加工烟草用机械 `dc39ea23-5c74-4ba8-ab4d-6459d81cc7dd` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要烟草加工功能；型号修订；开包切片调湿压梗切丝混合再造卷杆组合架构；电动气动液压设计；热水汽供回；自制外购；实际随附工具模块保留填充附件；工厂烟草纸胶试料牌号配方；校准净质量和N；场址期间；原生单位公用接口；废物排放及不确定性 |

限定须在数据包声明；宽类别参考流不建立工厂配方、数量或性能默认值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `physical_basis` | material/water/species | 质量 | kg | 各项采用自身含量、水分、干湿基准、温度密度、库存、反应及返回，总量不是元素量。 |
| `utility_basis` | energy and gases | 交付能量或体积 | MJ; m3 | 电力1 kWh=3.6 MJ；气体保留m3及实际温压或声明标准条件，质量转换采用相应实测密度；热供回各质量乘自身共同零点焓，总已净区别，返回仅扣一次。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 纳入从收料、场内制造、机械或控制装配、集成、工厂试验或返工、公共服务、废物及包装至验收放行的实际操作。 |  |
| `make_buy` | supplier_interface | 各部件选择实际自制或外购状态：完整外购机架、筒、刀、辊、输送机、电机或控制器的嵌入投入计一次；自制改用实际原料及操作。仅计后续场内工作。内部转移成对，不把场内中间品列为外购。 |  |
| `factory_use` | production | 纳入实际工厂负载烟草松散切片调湿切丝混合再造卷杆试验、实际试料、清洗水、电力及消耗润滑剂，回收试料采用实测返回及库存。用户烟草卷烟卷杆输出及下游工厂运行不是设备制造输出。 |  |
| `bom_extension` | route | 卡片为具体条件性锚点，不是通用配方。审查实际物料清单、配方、试料、包装、燃料、废物和物种。增补每个缺失实际原子交换；仅有不存在证据时记录 not_applicable，未知不同于零。刀辊接触表面或处理配方未知须实际供应状态证据。 |  |
| `upstream` | links | 按实际牌号、状态、交付地理或电压及期间链接供应商生产和运输；计量废物转移后的外部处理与场内排放不同。供应商链接未完成时此工厂包不是完整摇篮到大门结果。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际投入供应牌号、完成状态和交付接口 |
| starting_condition_role | 工厂收料边界 |
| product_classification_scope | 完整未另列明烟草加工机器，包括实际初加工开包切片调湿切丝混合及适用后端卷杆组合再造架构 |
| recursive_input_rule | 同类别外购前体上游计一次，仅展开后续场内操作，内部转移成对抵消 |
| upstream_dataset_requirement | 实际牌号、配方、状态、地理期间和供应商；缺口明确 |
| disclosure | 实际供应清单、自制外购、保留填充及工厂试料、条件不适用、分母及不确定性 |

### 配置与供应状态矩阵

| 配置 | 实际条件接口 | 证据限制 |
| --- | --- | --- |
| 开包切片 | 实际松散切割机构喂料输送控制及验收供应范围 | 水平切片为一种架构，无通用烟包或设备尺寸 |
| 调湿施加料液 | 实际筒桨水汽管汇介质柜及可选加热清洗施料 | 试水汽烟草为消耗，不是设备钢或保留填充 |
| 压梗切丝 | 实际硬化辊过载分离动作刀鼓磨削及驱动喂料 | 实际钢合金热处理供应状态及电气气动液压设计须记录 |
| 混合储存专用输送 | 实际不锈钢接触面拨料器带条输送及可选混合车 | 整机制造不同于带供应商及独立通用输送机 |
| 再造及集成热模块 | 实际磨混辊涂或层压及实际集成干燥技术 | 不引入客户胶烟草配方，独立通用干燥机须另审范围 |
| 后端卷杆组合 | 实际供纸拉辊接缝加热旋切风机控制传感及随附滤嘴检测模块 | 仅实际牌号吞吐工厂试验，客户卷烟不是设备输出，包装机不自动包含 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 机械结构加工部件制造 | conditional | 仅实际成形焊接机加工磨削热处理，外购完成部件不重复嵌入制造 | foreground | 每 1 kg 参考流 |
| `finish` | 清洗防护表面处理 | conditional | 实际表面清洗涂装配方，无推定食品卫生标准或处理配方 | foreground | 每 1 kg 参考流 |
| `integration` | 烟草加工设备集成 | required | 实际声明初后加工架构机构驱动公用管汇控制及随供附件 | foreground | 每 1 kg 参考流 |
| `test` | 工厂合格试验返工 | required | 实际空载负载验收清洗返工，具体烟草纸胶消耗与设备质量分开 | foreground | 每 1 kg 参考流 |
| `dispatch` | 包装验收放行 | required | 实际完整验收设备交付范围校准净质量，排除包装废品试料 | foreground | 每 1 kg 参考流 |
| `services` | 剩余公用工程实际场内供能 | conditional | 仅同期间未分配剩余及实际场内供能 | foreground | 每 1 kg 参考流 |

### 过程：机械结构加工部件制造（`fabrication`）

仅实际成形焊接机加工磨削热处理，外购完成部件不重复嵌入制造。

#### 输入

##### 产品流

###### 热轧非合金钢板 （`steel`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：热轧非合金钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 冷轧不锈钢薄板 （`stainless`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：冷轧不锈钢薄板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：comas-blending

###### 切刀用合金工具钢棒 （`tool_steel`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：切刀用合金工具钢棒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 无涂层非合金钢焊丝 （`weldwire`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：无涂层非合金钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 气态氩焊接保护气 （`argon`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：气态氩焊接保护气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 氧化铝砂轮 （`abrasive`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：氧化铝砂轮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 水混金属加工乳化液浓缩物 （`coolant`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：水混金属加工乳化液浓缩物
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`fabrication_electricity`）

实际实测分配过程电力；共同服务仅全部过程分表负荷进口场内供能出口储能核对后的同期间未分配余量。负余量调查不截零，无铭牌或客户使用默认。 仅实际用户侧1–35kV交流电消费混合及匹配实际供应商地理期间，独立变压或不同低压地理供电需自身身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外送未处理钢生产废料 （`scrap`）

仅该实际名称外送废物转移，采用自身实测总质量含量水分干湿基准库存及成对内部返回。记录实际接收路线。实物废水转移与水环境基本排放分开；工厂试烟草纸残余不是外购部件或交付设备输出。无虚构回收或替代抵扣。 仅实际匹配供应子型组成完成状态地理和供应商接口，按该配置记录。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：清洗防护表面处理（`finish`）

实际表面清洗涂装配方，无推定食品卫生标准或处理配方。

#### 输入

##### 产品流

###### 异丙醇清洗溶剂 （`ipa`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际匹配供应子型组成完成状态地理和供应商接口，按该配置记录。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 市政自来水 （`water`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 实际自来水供应及供应商，工业水或去离子水分开，采用自身实测水分密度库存返回。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 聚酯涂装粉末 （`powder`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 实际干聚合物粉配方、自身树脂添加剂牌号回收固化，无默认聚合物类型。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`finish_electricity`）

实际实测分配过程电力；共同服务仅全部过程分表负荷进口场内供能出口储能核对后的同期间未分配余量。负余量调查不截零，无铭牌或客户使用默认。 仅实际用户侧1–35kV交流电消费混合及匹配实际供应商地理期间，独立变压或不同低压地理供电需自身身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 转移工业清洗废水 （`wastewater`）

仅该实际名称外送废物转移，采用自身实测总质量含量水分干湿基准库存及成对内部返回。记录实际接收路线。实物废水转移与水环境基本排放分开；工厂试烟草纸残余不是外购部件或交付设备输出。无虚构回收或替代抵扣。

- 选定流：转移工业清洗废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 干粉末涂装过喷废物 （`powder_waste`）

仅该实际名称外送废物转移，采用自身实测总质量含量水分干湿基准库存及成对内部返回。记录实际接收路线。实物废水转移与水环境基本排放分开；工厂试烟草纸残余不是外购部件或交付设备输出。无虚构回收或替代抵扣。 仅实际干粉涂装过喷废物及匹配废物类型，湿污泥或捕集液体滤材另需确切身份分析。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：烟草加工设备集成（`integration`）

实际声明初后加工架构机构驱动公用管汇控制及随供附件。

#### 输入

##### 产品流

###### 完成钢制设备机架 （`frame`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：完成钢制设备机架
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完成带桨叶调湿筒 （`drum`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：完成带桨叶调湿筒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：comas-dcrb

###### 完成钢制烟草切刀 （`knives`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：完成钢制烟草切刀
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：koerber-cutter

###### 硬化钢制烟梗压辊 （`rolls`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：硬化钢制烟梗压辊
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：comas-flatten

###### 钢制滚动轴承 （`bearing`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际供应完整滚珠滚柱轴承兼容材料尺寸及供应商，不是轴机座或辊本体。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完成工业减速器 （`gearbox`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：完成工业减速器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工业交流电动机 （`motor`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际供工业交流感应电机及匹配CPC46112接口和实际电压功率型式；通用记录不决定绕组磁体金属配方，捆绑驱动计一次。

- 选定流：电动机 `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完成离心鼓风机 （`blower`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：完成离心鼓风机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完成液体离心泵 （`pump`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际交付烟草机械中包含、用于有证据水供给清洗或调湿服务的完整离心液态水泵，核实介质机构压力温度交付状态及供应商兼容性。独立供应通用泵属于单独类别，不是完整烟草加工参考机器。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 蒸汽调节阀 （`valve`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际外购交付钢阀及有证据蒸汽压力温度调节设计兼容密封钢牌号，无通用阀材料假定，不把完整蒸汽供给当部件。

- 选定流：钢制阀门 `3cb88a81-618f-4fa5-814e-46399b121622`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 专用振动烟草输送机 （`conveyor`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际完成连续物料输送机及兼容专用振动喂卸配置供应商；实际供应范围，不代理运输服务或专地下输送机。

- 选定流：运送货物或材料用气动及其他连续式升降机和输送机 `f7693db3-d2af-46be-88aa-8d3a4a4aa276`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：comas-flatten

###### 完成聚酯输送带 （`belt`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：完成聚酯输送带
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：ammeraal-belts

###### 完成可编程逻辑控制器 （`plc`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际中国外购PLC硬件部件电压≤1000V及兼容硬件供应，不是整柜软件服务。

- 选定流：可编程逻辑控制器 `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 电子过程压力传感器 （`sensor`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：电子过程压力传感器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：koerber-sensors

###### 电阻成型加热器 （`heater`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际供应已制造非碳电热电阻兼容成型加热构造供应商，排除完整加热器总成及无证据热源默认。

- 选定流：加热电阻器，碳电阻器除外 `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：koerber-sensors

###### 绝缘低压铜电缆 （`cable`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际绝缘铜≤1000V电力线缆及挤包绝缘护套，原生长度m；独立物料质量换算需要时采用该实际电缆自身实测线密度kg/m。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：长度 / m
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_length。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_length`
- 来源：

###### 矿物基润滑脂 （`grease`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。

- 选定流：矿物基润滑脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 矿物润滑油 （`oil`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际石油源润滑油供应为石油馏分或经核实石油油含量至少70wt%的配制品，符合CPC333供应接口并匹配实际牌号添加剂交付状态供应商，不虚构配方含量。原生质量kg，分离安装保留填充与实际工厂消耗损失使用污染废油。名称热值不使油成为能量流或假定燃烧。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 矿物液压油保留初填 （`hydraulic`）

仅该实际供应牌号、化学组成、完成或未完成状态及配置。完整外购部件的嵌入制造计一次；自制改记实际原料及后续操作。记录自身水分含量库存返回，实际供应接口须匹配。 仅实际证实矿物石油基兼容液压系统填充及供应商配方，供应为石油馏分或核实石油油含量至少70wt%且符合CPC33380接口的配制品；此身份不确立任意合成或高含水液；矿物合成可能不确立每台设备有油。原生体积m3，实际温度自身密度换算保留净质量，分离消耗排放损失。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：

###### 交付交流电 （`integration_electricity`）

实际实测分配过程电力；共同服务仅全部过程分表负荷进口场内供能出口储能核对后的同期间未分配余量。负余量调查不截零，无铭牌或客户使用默认。 仅实际用户侧1–35kV交流电消费混合及匹配实际供应商地理期间，独立变压或不同低压地理供电需自身身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂合格试验返工（`test`）

实际空载负载验收清洗返工，具体烟草纸胶消耗与设备质量分开。

#### 输入

##### 产品流

###### 工厂试验用未制烤烟叶 （`tobacco`）

仅实际记录的工厂负载验收试验及该精确供应试料牌号。计量自身领用回收返回水分库存及化学组成；进入工厂归属负荷Qattr，绝不入设备净输出Dnet。目录客户吞吐或配方不是制造默认，纸胶不是设备构造材料。

- 选定流：工厂试验用未制烤烟叶
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：comas-dcrb

###### 工厂试验用已制吸用切丝烟草 （`cut_tobacco`）

仅实际记录的工厂负载验收试验及该精确供应试料牌号。计量自身领用回收返回水分库存及化学组成；进入工厂归属负荷Qattr，绝不入设备净输出Dnet。目录客户吞吐或配方不是制造默认，纸胶不是设备构造材料。 仅实际完成已制烟草切丝填料兼容供应25091/HS24.03接口及供应商，审核实际烟草或替代品组成及切形。官方中文显示不确立人工合成材料；萃取物及未切混合料不是该切丝进料。未切中间混合料鲜叶再造片完整卷烟为不同供应，无推定牌号配方。仅工厂试验，排除设备Dnet。

- 选定流：人造烟草 `0b1039e5-6251-4030-a2fd-707a1f32f365`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：koerber-rods

###### 工厂试验用卷烟纸 （`paper`）

仅实际记录的工厂负载验收试验及该精确供应试料牌号。计量自身领用回收返回水分库存及化学组成；进入工厂归属负荷Qattr，绝不入设备净输出Dnet。目录客户吞吐或配方不是制造默认，纸胶不是设备构造材料。 仅实际兼容切形册管或卷宽≤5cm卷烟纸；审核实际牌号宽度湿质量及纸幅供应商；不代理普通薄纸包装板或更宽卷。

- 选定流：卷烟纸 `ae3a445e-c064-4cba-abd3-cfeab698f8ca`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：koerber-rods

###### 工厂试验用水基聚乙酸乙烯酯胶黏剂 （`adhesive`）

仅实际记录的工厂负载验收试验及该精确供应试料牌号。计量自身领用回收返回水分库存及化学组成；进入工厂归属负荷Qattr，绝不入设备净输出Dnet。目录客户吞吐或配方不是制造默认，纸胶不是设备构造材料。

- 选定流：工厂试验用水基聚乙酸乙烯酯胶黏剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：koerber-rods

###### 工厂调湿试验用市政自来水 （`test_water`）

仅该供应接口原生状态的实际工厂试验消耗，不是客户运行。核对领用回收返回及保留消耗状态。总热用共同零点各自焓扣独立冷凝返回一次，已净发票不重复扣。 实际自来水供应及供应商，工业水或去离子水分开，采用自身实测水分密度库存返回。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：comas-dcrb

###### 工厂试验用外购工业热 （`test_heat`）

仅该供应接口原生状态的实际工厂试验消耗，不是客户运行。核对领用回收返回及保留消耗状态。总热用共同零点各自焓扣独立冷凝返回一次，已净发票不重复扣。 仅实际匹配中国天然气工业供热交付能量接口，供应者须匹配实际工厂试验交付。须自身计量总净返回及供应状态，供应者燃料在上游。

- 选定流：区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：comas-dcrb

###### 交付压缩空气 （`compressed_air`）

仅该供应接口原生状态的实际工厂试验消耗，不是客户运行。核对领用回收返回及保留消耗状态。总热用共同零点各自焓扣独立冷凝返回一次，已净发票不重复扣。 仅实际匹配供应子型组成完成状态地理和供应商接口，按该配置记录。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：

###### 交付交流电 （`test_electricity`）

实际实测分配过程电力；共同服务仅全部过程分表负荷进口场内供能出口储能核对后的同期间未分配余量。负余量调查不截零，无铭牌或客户使用默认。 仅实际用户侧1–35kV交流电消费混合及匹配实际供应商地理期间，独立变压或不同低压地理供电需自身身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工厂试验烟草固体残余 （`tobacco_waste`）

仅该实际名称外送废物转移，采用自身实测总质量含量水分干湿基准库存及成对内部返回。记录实际接收路线。实物废水转移与水环境基本排放分开；工厂试烟草纸残余不是外购部件或交付设备输出。无虚构回收或替代抵扣。

- 选定流：工厂试验烟草固体残余
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 工厂试验卷烟纸废料 （`paper_waste`）

仅该实际名称外送废物转移，采用自身实测总质量含量水分干湿基准库存及成对内部返回。记录实际接收路线。实物废水转移与水环境基本排放分开；工厂试烟草纸残余不是外购部件或交付设备输出。无虚构回收或替代抵扣。

- 选定流：工厂试验卷烟纸废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废矿物润滑油 （`oil_waste`）

仅该实际名称外送废物转移，采用自身实测总质量含量水分干湿基准库存及成对内部返回。记录实际接收路线。实物废水转移与水环境基本排放分开；工厂试烟草纸残余不是外购部件或交付设备输出。无虚构回收或替代抵扣。 仅实际使用污染矿物润滑油废物转移质量，测自身含水污染及接收处理，无处置回收默认。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：包装验收放行（`dispatch`）

实际完整验收设备交付范围校准净质量，排除包装废品试料。

#### 输入

##### 产品流

###### 瓦楞包装板 （`board`）

仅实际供应包装构造。计量自身领用返回库存及有证据回用；包装不入验收设备净质量，无假定周转或寿命。 实际C/E/F纤维≥80%瓦楞板及有证据再生成分构造；供应板而非完整箱。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 低密度聚乙烯包装膜 （`foil`）

仅实际供应包装构造。计量自身领用返回库存及有证据回用；包装不入验收设备净质量，无假定周转或寿命。 仅实际非泡沫非自粘未增强未复合无衬底PE-LD薄膜；其他聚合物或衬底膜单独确认。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 欧标木托盘 （`pallet`）

仅实际供应包装构造。计量自身领用返回库存及有证据回用；包装不入验收设备净质量，无假定周转或寿命。 仅实际欧标木托盘，记录领用返回回用，无默认周转次数。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`dispatch_electricity`）

实际实测分配过程电力；共同服务仅全部过程分表负荷进口场内供能出口储能核对后的同期间未分配余量。负余量调查不截零，无铭牌或客户使用默认。 仅实际用户侧1–35kV交流电消费混合及匹配实际供应商地理期间，独立变压或不同低压地理供电需自身身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未另列明的加工烟草用机械 （`reference_product`）

仅完整验收声明烟草加工机器配置；纳入实际随供安装部件附件及保留初填。称校准验收净质量，排除运输包装废品和消耗烟草纸胶介质。不推定液压油备刀或初装烟草。 仅实际完整适用已制造烟草加工机器厂门兼容交付类别及供应商；44517分类不是设备重量性能默认。

- 选定流：未另列明的加工烟草用机械 `dc39ea23-5c74-4ba8-ab4d-6459d81cc7dd`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：un-cpc-44517

##### 废物流

##### 基本流

### 过程：剩余公用工程实际场内供能（`services`）

仅同期间未分配剩余及实际场内供能。

#### 输入

##### 产品流

###### 交付交流电 （`services_electricity`）

实际实测分配过程电力；共同服务仅全部过程分表负荷进口场内供能出口储能核对后的同期间未分配余量。负余量调查不截零，无铭牌或客户使用默认。 仅实际用户侧1–35kV交流电消费混合及匹配实际供应商地理期间，独立变压或不同低压地理供电需自身身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 未指定空气化石源二氧化碳 （`co2`）

仅该实际实测排放物种来源及空气介质。同期间匹配治理后浓度排气流量及实际温压干湿修正，逸散独立实测。捕集物料为废物而非空气释放，不明闭合差额不是排放。每实际排放过程归属一次，供应商能量生产排放不是场内。 仅实际实测化石源CO2进入普通未指定空气，不是生物源室内水或长期释放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 未指定空气化石源一氧化碳 （`co`）

仅该实际实测排放物种来源及空气介质。同期间匹配治理后浓度排气流量及实际温压干湿修正，逸散独立实测。捕集物料为废物而非空气释放，不明闭合差额不是排放。每实际排放过程归属一次，供应商能量生产排放不是场内。 仅实际实测化石源CO进入普通未指定空气，碳闭合本身不能决定CO。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 未指定空气水蒸气 （`vapour`）

仅该实际实测排放物种来源及空气介质。同期间匹配治理后浓度排气流量及实际温压干湿修正，逸散独立实测。捕集物料为废物而非空气释放，不明闭合差额不是排放。每实际排放过程归属一次，供应商能量生产排放不是场内。 仅独立实测实际水蒸气排入普通未指定空气，保留冷却水废水及无关差额不是空气。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 未指定空气异丙醇 （`ipa_air`）

仅该实际实测排放物种来源及空气介质。同期间匹配治理后浓度排气流量及实际温压干湿修正，逸散独立实测。捕集物料为废物而非空气释放，不明闭合差额不是排放。每实际排放过程归属一次，供应商能量生产排放不是场内。 仅实际排放IPA CAS67-63-0进入普通未指定空气，匹配治理后采样，不是室内土壤液体捕集或长期释放。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 未指定空气全PM10颗粒物 （`pm10`）

仅该实际实测排放物种来源及空气介质。同期间匹配治理后浓度排气流量及实际温压干湿修正，逸散独立实测。捕集物料为废物而非空气释放，不明闭合差额不是排放。每实际排放过程归属一次，供应商能量生产排放不是场内。 仅独立实测完整PM10颗粒排入普通未指定空气，包含其细粒部分，采用粒径对应同期间治理后浓度流量状态及实测逸散基准。PM2.5–PM10仅粗粒级、烟炱、未指定总尘或捕集粉末不得代替此身份；另报细粒级须防重叠。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `causal` | site | 优先分离配置及子过程；按实测因果负荷、运行时间或适当物理驱动分配公共剩余，保留分子分母记录及不确定性。不得平均无关型号，也不得对全部公用工程自动按整机质量分配。 |  |
| `rejects` | accepted | 在合格输出归属 Q 中纳入实际废品、返工及合格试验负荷；分母仅含验收净质量或数量。分离回收转移及处理，不假定替代产品抵扣或再生上游零负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收批次 | 同一制造期间 | 同一配置工厂 | 每台验收净质量 | 校准、皮重、配套附件及验收记录 |
| cp_material | all | actual inputs | meter_issue | 具体物种牌号；供应状态；投料；各项水分密度或含量；自制外购；库存；Q；N | 同一期间按独立交换核对计量及仓储、配方和成对返回；Q 含废品或返工负荷，保留各项自身分析。 | kg | 每批或连续表 | 同一制造期间 | 同一配置工厂及供应商 | 分配数量 / 验收设备数量 | 牌号或成分检验、计量及库存 |
| cp_energy | all | electricity and heat | meter | 各过程表；总进口；实际场内供能量（含发电量）；出口；储能；供回蒸汽各质量温压焓；已净发票；Q；N | 核对同一期间和单位的各过程表，共享服务仅尚未分配剩余；调查负剩余。供应或返回蒸汽各用自身 kg 和 MJ/kg，共同零点，返回仅扣一次。 | MJ | 连续表及各试验 | 同一制造期间 | 同一配置及场址 | 分配能量 / 验收设备数量 | 校准表、供电接口、热力及分配不确定性 |
| cp_waste | all | specific waste | transfer | 各物流质量和自身含水或含量；期初末库存；内部返回；外送处理；Q；N | 称重、取样及处理转移，区分返回再用、回收及处置，不能推定替代抵扣。 | kg | 每批转移 | 同一制造期间 | 同一配置场址及处理接口 | 分配废物 / 验收设备数量 | 废物联单、取样及库存 |
| cp_emission | all | specific species/compartment | species_measurement | 实际物种介质；浓度；排气或液流；水分温压基准；捕集或销毁；各项分析；Q；N | 采用匹配物种及介质实测或核实实际技术因子；调查闭合，捕集不是销毁，差额不是空气排放。 | kg | 实际试验及排放期间 | 同一制造期间 | 同一配置场址边界 | 分配排放 / 验收设备数量 | 采样流量和综合不确定性 |
| cp_volume | all | specific supplied gas/fluid | meter | 气液身份；交付体积；实际温压或标准条件；密度；Q；N | 按实际状态计量原生体积：气体温压液体温度和组成状态，质量换算用该实际流自身实测密度，不用通用因子。 | m3 | 每批或连续表 | 同一制造期间 | 同一配置及供应接口 | 分配体积 / 验收设备数量 | 温压流量密度及校准 |
| cp_length | integration | actual insulated low-voltage copper cable | length_meter | 实际导体绝缘护套及电压；计量长度m；裁切安装返回；自身线密度kg/m；库存；Q；N | 按收料裁切安装长度及返回库存核对原生m，需物料质量时采用该实际电缆自身实测线密度kg/m，不用通用铜质量或能量代理。 | m | 每批裁切及安装 | 同一制造期间 | 实际配置线缆供应接口 | 分配长度 / 验收设备数量 | 计量尺裁切表实际构造及线密度 |

原始期间协议：N 为同一配置验收设备数，D 为该批校准验收净质量之和，M=D/N。每项 Q 为同期间归属数量，含废品、返工和工厂试验负荷；先 q_item=Q/N，再 q_ref=Q/D。包装及废品质量不入 D，保留实际各项原单位和各项成分、库存及反应记录。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | 覆盖实际全部交换，自制外购及附件、填充、试料分离；缺口明确 | 实际 BOM、路线及供应商 |
| mass_period | cohort | 同一配置期间和验收记录、校准质量及库存；不跨家族均值 | 校准及期间台账 |
| balance_uncertainty | physical balances | 按各项自身水分、密度、含量、反应及成对返回核对，与综合不确定性比较 | 实测、采样、反应及分配证据 |
| cohort_raw | cohort | Naccepted、Dnet与Qattr对应同一配置期间。Dnet为校准合格净质量之和；M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet。Qattr包含废品返工和工厂试验，Dnet排除包装废品及消耗试料。保留每项原单位。 | 校准及实际期间台账 |
| species_sampling | emissions | 治理后物种浓度乘匹配同期间气液流量及持续时间，校正温压干湿与单位；逸散独立实测。未知差额不成为空气释放，捕集不是销毁；每项金属化学或水流采用自身含量水分密度库存反应及成对返回。 | 实际浓度、流量、时段及状态记录 |
| contained_assay | physical balances | 各输入产品废料污泥液体或释放均用自身实测总质量乘自身含量分析及干湿基准；总合金或污泥不是所含金属。水各流用自身水分比例及实际温度密度，包含产品保留、反应、蒸发、排水及期初末库存，内部返回成对抵消。 | 各项实测化验含水及库存 |
| solvent_fates | solvent records | 回收返回、产品保留、捕集液体或滤材、已证实销毁及废水或介质分别记录；回收保留捕集及废水为非空气去向，捕集不是销毁。未知差额须调查，不能转成空气释放。 | 实际物料采样及治理记录 |
| utility_residual | energy | 同期间核对进口加实际场内供能量（含发电量）减出口及储能变化与机械制造表面处理集成试验发运负荷；公用行仅未分配余量。负余量调查期间单位及综合不确定性，不截零。 | 校准分表及总表 |
| heat_return | thermal interface | 总供热为实测供应kg乘自身MJ/kg减独立实测返回kg乘返回自身MJ/kg，采用共同零点及实测温压；总供应返回仅扣一次，已净计费不再次扣。物理蒸汽或冷凝水质量与热能分开，供应者锅炉燃料不是场内燃烧。 | 供应返回各计量热力状态及发票 |
| cohort | all inventory rows | 共同期间同一配置Qattr含归属废品返工试验；Naccepted仅验收整机数量，Dnet为校准验收净质量总和，包括实际随附安装工具保留填充附件，不含包装废品耗用试料。M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet；保留每种分子原生单位与明确换算，不平均不同配置。 | 校准净质量、供应清单、验收及批次原始期间记录 |
| provider_gaps | links | 每个实际上游和处理匹配状态地理期间；未核实不可作为完整足迹 | 直接记录及替代披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | 确认主要功能、烟草烟草松散切片调湿切丝混合再造卷杆功能、型号或修订、交付配置及激活架构。每个实际交换须匹配身份、属性、单位及供应商；不存在、零及未知保持不同。 |  |
| `denominator` | all inventory rows | 全部清单采用同一验收批次及共同期间。核实校准验收净质量和 N，废品及包装质量排除。核对 q_item=Q/N 后按同一平均 M 归一化；混合配置无效。 |  |
| `double_count` | make_buy | 核对完整外购模块与自制材料及操作、保留填充或附件与工厂消耗、成对内部转移与外部投入。每项实际负荷计一次。 |  |
| `water_close` | physical water records | 每项采用自身实测水比例、密度及干湿基准：新水及输入水分、反应水和期初库存减期末库存、产品保留、排水和蒸发；内部返回成对抵消。按采样、仪表及分配综合不确定性调查实测闭合，无通用容差。 |  |
| `species_close` | material and chemical records | 每种含金属或化学物分别闭合，采用各输入、产品、废料、污泥、液体及释放自身匹配分析和干湿基准、反应计量及库存。总质量不是含元素量。不得将全部清单质量规则用于能量或运输。 |  |
| `solvent_close` | solvent records | 区分保留溶剂、回收返回、捕集液体或介质、已证实销毁、废水或非空气剩余及实际空气物种释放。捕集不是销毁；不明差额应调查，不分配至空气。 |  |
| `utility_close` | energy records | 按同一期间及单位核对外购进口、实际场内供能量（含发电量）、出口及储能变化和已分配机械制造、表面处理、集成、试验或包装负荷。共享行仅未分配剩余；按期间、单位及综合计量不确定性调查负剩余，不截零。 |  |
| `steam_close` | steam and condensate | 相对于共同零点，按计量压力或温度采用供应质量乘供应自身 MJ/kg 和返回质量乘返回自身 MJ/kg。总供应只扣返回一次；已净发票不得再扣。物理蒸汽或冷凝水质量衡算独立于能量。 |  |
| `species_emissions` | air releases | 独立校验每种排放物及环境介质。燃料碳衡算不能单独确立 CO 或 NOx。NO2 质量不是以 NO2 当量报告的 NOx；报告约定与实际物种身份保持不同。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 实际配置工厂生产前景数据及明确已完成上游链接的模型 |
| excluded_use | 跨家族功能等价、默认用户加工服务、默认重量或制造因子、缺失供应商的完整足迹 |
| required_metadata | 第3节限定及原始期间分母、实际架构、自制外购和边界 |
| required_quality_disclosure | 采集覆盖、供应商或身份或配方缺口、分配和综合不确定性、全部条件及排除 |
| update_trigger | 型号或架构、配方、供应状态或地区、计量、工厂试验或处理路线改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| comas-dcrb | handbook | DCRB Direct Conditioning Cylinder; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/dcrb-series-conditioning | 产品架构或类别边界；非工厂配方或数量默认值 |
| comas-slicer | handbook | SO Horizontal Tobacco Bale Slicer; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/horizontal-slicer-so-series | 产品架构或类别边界；非工厂配方或数量默认值 |
| comas-flatten | handbook | CLM Tobacco Stem Flattening Machine; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/clm-series-flattening | 产品架构或类别边界；非工厂配方或数量默认值 |
| comas-recon | handbook | Reconstituted Tobacco Process Line; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/recon-process-line | 产品架构或类别边界；非工厂配方或数量默认值 |
| koerber-primary | handbook | Primary Tobacco Processing; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/solutions/machinery-and-process-equipment/primary | 产品架构或类别边界；非工厂配方或数量默认值 |
| koerber-makers | handbook | Tobacco Processing and Making Machines; undated; actual original HTML snapshot 2026-10-02; https://www.koerber-technologies.com/en/products/machines | 产品架构或类别边界；非工厂配方或数量默认值 |
| comas-blending | handbook | SAM Tobacco Blending Silos; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/silos-sam-series | 产品架构或类别边界；非工厂配方或数量默认值 |
| koerber-cutter | handbook | KT4 Tobacco Cutter; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/insights-and-events/high-performance-tobacco-cutter | 产品架构或类别边界；非工厂配方或数量默认值 |
| gd-maker | handbook | 121 Double Rod Cigarette Maker; undated; actual original HTML snapshot 2026-10-02; https://www.gidi.it/en/solutions/product/121 | 产品架构或类别边界；非工厂配方或数量默认值 |
| ammeraal-belts | handbook | Tobacco Primary Processing Belts; undated; actual original HTML snapshot 2026-10-02; https://ammeraalbeltech.com/en/industries/tobacco/primary-processing/ | 产品架构或类别边界；非工厂配方或数量默认值 |
| koerber-rods | handbook | Rod Making Machinery; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/solutions/machinery-and-process-equipment/secondary/rod-making | 产品架构或类别边界；非工厂配方或数量默认值 |
| koerber-sensors | handbook | Protos M5e Process Sensors; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/insights-and-events/sensors-machine-performance-development | 产品架构或类别边界；非工厂配方或数量默认值 |
| koerber-msm | handbook | Modular THP Maker; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/insights-and-events/modular-thp-maker | 产品架构或类别边界；非工厂配方或数量默认值 |
| un-cpc-44517 | official_guidance | Central Product Classification Version3.0 Explanatory Notes; Version3.0 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
