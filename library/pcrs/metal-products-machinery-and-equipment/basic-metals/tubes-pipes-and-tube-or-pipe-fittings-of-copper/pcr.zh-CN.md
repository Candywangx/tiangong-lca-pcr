---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-copper
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铜管及铜管接头或铜管配件

## 1. 范围与适用性

本 PCR 适用于半成品铜或铜合金管材、直管或盘管以及铜制管接头或管件的工厂大门生产。涵盖以铜坯挤压或热穿孔并经轧制和/或拉拔的无缝路线、以铜带为原料的焊管路线、以铜管材或已声明铜料制造管件的路线，以及按实际情况纳入的热处理、脱脂、酸洗、漂洗和场内废水处理。

前景边界始于符合规格的外购铜坯、铜带或铜管材，止于制造厂门口的净合格产品。铜矿开采、选矿、冶炼、精炼、外购原料生产、资本品、配送、安装、使用、维护和寿命终止阶段不在前景边界内；所有外购投入仍必须连接上游数据集。成套组件、已安装管道系统、阀门和旋塞、软管、铝镍钢铁等其他金属制品，以及无关的铜板、箔、线、棒或粉末均不包括在内。

每个数据集只能代表一个已声明产品形态和路线。以下路线相关流卡按条件适用，不要求同时建模全部路线，也不得将产品变体与所有工艺选择做笛卡尔展开。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-copper |
| classification_refs | CPC 3.0: 41516，精确分类语境 |
| covered_products | 直管或盘管形态的半成品铜或铜合金管材和管道；铜制管接头或管件 |
| excluded_products | 未锻轧铜；铜板、箔、线、棒和粉末；已安装管道系统；阀门和旋塞；软管；其他金属制管、管道或管件 |
| representative_product | 具有已声明合金牌号、尺寸、壁厚、状态、表面状况和工厂大门合格状态的铜管材 |
| production_route | 只声明实际适用路线：挤压与拉拔；挤压、开坯轧制与拉拔；热穿孔、开坯轧制与拉拔；带材焊接；或管件制造；并声明任何退火和表面处理步骤 |
| market_state | 制造厂门口净合格产品；声明产品形态、直管或盘管、合金牌号、尺寸、状态、表面、检验状态、地域及包装边界 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造厂门口提供一种已声明且符合规格的铜或铜合金管材、管道或管接头/管件 |
| How much | 1,000 kg 净合格产品；不含边角料、废品、可重复使用载具及配送包装，除非研究明确扩展大门边界 |
| How well | 符合已声明采购规格中的合金牌号、几何形状、尺寸公差、状态、表面状况和检验状态 |
| How long or cycle | 生产型参考；使用寿命和使用循环不在本工厂大门 PCR 范围内 |
| reference_flow_link | `ref_copper_tubing` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态：管材、管道或管件；合金牌号及成分基准；无缝、焊接或管件路线；外径或公称尺寸；壁厚或管件几何；直管或盘管；状态；表面状况及涂层；净产品质量基准；制造地域；参考期；工厂大门及包装边界 |

Tiangong 参考身份是 CPC 41516 下以质量计量的正式流“铜管材”。对于管件数据集，应沿用本 PCR 的归一化要求，但不得将产品错误标为铜管材；在发布管件专项数据集前，必须披露管件精确 UUID 尚未解决，并新建或选择经审查的精确管件流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有含铜物料平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 干基或交付态质量必须前后一致并声明基准；将净合格产品归一化为 1,000 kg。参考产品质量不含边角料、废品和包装。 |
| `gas_volume_conditions` | 气态天然气、氮气及今后经核实的氢气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积并披露压力、温度及标准/基准状态；汇总前统一换算至一个已声明参考状态。 |
| `electricity_energy` | 电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 原始记录保留电表 kWh，并用已披露精确换算关系转为 MJ；不得将上游发电排放作为前景直接排放重复计入。 |
| `water_mass` | 工艺用水投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按体积计量时，使用有文件记录的密度和温度基准换算；只报告跨越场址边界的新鲜补水，不报告内部循环水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 无缝成形路线为外购铜坯，焊管路线为外购铜带，管件路线为外购铜管材；各投入均声明合金牌号、质量、供应商地域及上游数据集 |
| starting_condition_role | 半成品铜制品制造的门到门前景起始条件 |
| product_classification_scope | CPC 3.0 类 4151 及精确产品语境 41516；分类引用不能替代已声明物理产品形态 |
| recursive_input_rule | 当 CPC 41516 铜管材进入管件制造时，只以 `input_copper_tubing_for_fittings` 记录一次并连接上游数据集，在该投入处停止递归套用本 PCR |
| upstream_dataset_requirement | 每项外购铜坯、铜带、铜管材、化学品、气体、燃料、电力、水及场外处理服务，都需要地域和技术具有代表性的上游数据集或明确数据缺口 |
| disclosure | 声明路线、起始材料、再生成分主张及方法、纳入单元操作、内部循环、处理边界、产品质量基准、包装边界、地域、参考期和所有排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_operations` | 前景制造 | 仅纳入已声明产品实际使用的单元操作：按实际情况包括预热、挤压或穿孔、开坯轧制、拉拔、焊接、管件成形或机加工、退火、脱脂、酸洗、漂洗、干燥、检验及场内废物处理。 | `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | 外购投入 | 在已声明来料状态处停止前景追溯，并为每项外购投入连接上游数据集；不得把铜生产、发电、燃料供应或化学品生产悄然并入前景交换。 |  |
| `boundary_internal_recycling` | 铜及液体内部循环 | 不得把场内循环的铜、水、酸洗液或乳化液重复报告为外部投入或产出；只报告净边界交换并披露循环。 | `eu-jrc-nfm-bref-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming_and_fabrication` | 管材、管道或管件成形与制造 | `required` | 始终纳入；只启用与已声明无缝、焊接或管件路线相符的材料和产品流卡。 | 将外购铜料转化为合格几何形态的前景制造 | 净合格铜管材、管道或管件质量 |
| `annealing_and_surface_treatment` | 退火、脱脂、酸洗、漂洗及处理 | `conditional` | 仅在报告组织对已声明产品实施相应操作时纳入，并只记录对应原子交换。 | 前景热处理、表面精整和场内废水处理 | 经处理净产品质量 |

### 过程：管材、管道或管件成形与制造（`forming_and_fabrication`）

#### 输入

##### 产品流

###### 无缝成形用铜坯（`input_copper_billet`）

仅在挤压或热穿孔路线记录符合规格的铜坯；必须声明合金牌号、铜坯尺寸、供应商、再生成分主张和来料质量。

- 选定流：铜坯
- 流属性/单位：Mass / kg
- 数量规则：已声明无缝路线消耗的实测来料铜坯质量，扣除原样退回库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净合格铜管材或管道产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 焊管用铜带（`input_copper_strip`）

仅在采用焊管路线时记录未涂层铜带；声明合金牌号、带材尺寸、边缘准备、供应商和来料质量。

- 选定流：铜带
- 流属性/单位：Mass / kg
- 数量规则：已声明焊管路线消耗的实测铜带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净合格焊接铜管材或管道产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 管件制造用铜管材投入（`input_copper_tubing_for_fittings`）

仅在铜管材被加工为管件时记录。应用同类别递归投入规则，只连接一次上游铜管材数据集。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：Mass / kg
- 数量规则：管件制造消耗的实测铜管材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净合格铜管件产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_records`
- 来源：`un-cpc-3-0-2025`

###### 成形设备用电（`forming_electricity`）

记录已声明路线中挤压、穿孔、轧制、拉拔、焊接、成形、机加工及可直接归属辅助设备所用外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按路线归属的实测电力；共享电表须记录分配依据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_electricity_meter`
- 来源：`eu-jrc-nfm-bref-2017`

###### 铜坯或工具加热用天然气（`forming_natural_gas`）

仅在成形过程采用燃气预热或可直接归属的热工设备时记录气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量或经发票核对并归属于已声明成形路线的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_gas_meter`
- 来源：`eu-jrc-nfm-bref-2017`

###### 成形工艺补水（`forming_process_water`）

记录用于工具冷却、轧制乳化液配制或成形线且跨越场址边界的新鲜工艺补水；不计内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录的回水或循环水后归属于成形过程的实测新鲜补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_water_meter`
- 来源：`eu-jrc-nfm-bref-2017`

###### 拉拔润滑剂（`drawing_lubricant`）

仅在使用拉拔工艺时记录具体外购拉拔润滑剂；声明产品名称、配方类别、供应商以及润滑剂随产品或处理物流出的方式。

- 选定流：铜管拉拔润滑剂
- 流属性/单位：Mass / kg
- 数量规则：净润滑剂消耗量 = 采购量 + 期初库存 - 期末库存 - 经核实退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格拉拔产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forming_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 开坯轧制乳化液（`rolling_emulsion`）

仅在使用开坯轧制时记录跨越过程边界的具体乳化液浓缩物或配制乳化液；不计内部循环溶液，并披露其中用水核算。

- 选定流：铜管开坯轧制乳化液
- 流属性/单位：Mass / kg
- 数量规则：考虑库存变化和经核实回收量后的实测新鲜乳化液净补加量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格轧制产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forming_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格铜管材或管道（`product_copper_tubing`）

仅在管材或管道数据集中记录。产品形态、合金牌号、尺寸、状态、表面状况、检验状态和净质量必须与参考流限定信息一致。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：Mass / kg
- 数量规则：扣除废品和返工后的净合格管材或管道质量，并归一化至参考数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forming_output_records`
- 来源：`un-cpc-3-0-2025`

###### 合格铜管件（`product_copper_fitting`）

仅在管件数据集中记录。在精确管件流完成审查前 UUID 留空，不得以铜管材 UUID 替代。

- 选定流：铜管接头
- 流属性/单位：Mass / kg
- 数量规则：扣除废品和返工后的净合格管件质量，并归一化至参考数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forming_output_records`
- 来源：`un-cpc-3-0-2025`

##### 废物流

###### 分流收集的铜边角料及废品（`copper_scrap`）

记录以分流铜废料形式离开前景边界的净铜边角料、锯切端料、拉拔废品和管件废品；场内返回成形过程的材料不作为产出。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：扣除场内重熔或直接回用后运出场址的实测分流铜废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_waste_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 成形燃料产生的直接化石二氧化碳（`forming_fossil_co2`）

只记录场内成形燃料燃烧产生的直接化石二氧化碳；不含燃料供应和发电的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据成形过程实测天然气和有文件记录的场址特定碳平衡或经核实燃烧因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forming_gas_meter`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：退火、脱脂、酸洗、漂洗及处理（`annealing_and_surface_treatment`）

#### 输入

##### 产品流

###### 精整设备用电（`finishing_electricity`）

仅在相关操作纳入边界时，记录退火辅助、脱脂、酸洗、漂洗、干燥、泵送、抽排和场内处理用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于已纳入精整操作的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经处理净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_electricity_meter`
- 来源：`eu-jrc-nfm-bref-2017`

###### 退火用天然气（`finishing_natural_gas`）

仅在纳入的退火、干燥或处理设备于场内燃烧天然气时记录气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量或经发票核对并归属于已纳入精整操作的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 经处理净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_gas_meter`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氢气保护气（`protective_hydrogen`）

仅在退火保护混合气中使用外购工业氢气时记录；在精确公开流完成审查前 UUID 留空。

- 选定流：工业氢气
- 流属性/单位：Volume / m3
- 数量规则：校正至已声明参考状态的实测氢气净消耗体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 退火净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氮气保护气（`protective_nitrogen`）

仅在退火保护混合气中使用外购气态氮时记录。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：Volume / m3
- 数量规则：校正至已声明参考状态的实测氮气净消耗体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 退火净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 酸洗用硫酸（`sulfuric_acid`）

仅在使用硫酸酸洗时记录新鲜硫酸；声明浓度、等级、配液方式、回用循环和供应商。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：考虑库存变化、回收酸和返回溶液后的新鲜硫酸净加入质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 酸洗净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 中和用氢氧化钠（`sodium_hydroxide`）

仅在场内中和过程购买并消耗氢氧化钠时记录；声明溶液浓度及消耗量采用溶液质量还是纯 NaOH 质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：按已声明浓度基准计算的场内处理净外购氢氧化钠消耗质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经处理净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 漂洗与处理工艺补水（`finishing_process_water`）

记录脱脂、漂洗、配液和处理的新鲜工艺补水；不计内部串级使用或循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录的返回水和循环水后跨越场址边界的实测新鲜补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经处理净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_water_meter`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 酸性含铜漂洗废水（`acidic_copper_wastewater`）

仅在酸性含铜漂洗水离开前景边界并送场外处理时记录净液态废水；声明 pH、溶解铜、悬浮物、去向及是否在场内中和。

- 选定流：酸性含铜漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：扣除内部串级回用、蒸发、回收和场内处理后运出的实测净废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经处理净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 含铜酸洗处理污泥（`copper_pickling_sludge`）

记录从酸洗液或漂洗水处理过程中运出的脱水含铜污泥；不得用电解精炼阳极污泥替代。

- 选定流：含铜酸洗处理污泥
- 流属性/单位：Mass / kg
- 数量规则：运出污泥的实测湿重或干重，并声明含水率基准和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经处理净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 精整燃料产生的直接化石二氧化碳（`finishing_fossil_co2`）

只记录场内退火、干燥或处理过程中天然气燃烧产生的直接化石二氧化碳；不含燃料供应和发电的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据精整过程实测天然气和有文件记录的场址特定碳平衡或经核实燃烧因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 经处理净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_gas_meter`
- 来源：`eu-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享成形和精整设备 | 优先采用过程细分、路线专用计量、生产工单以及运行时间或工程因果记录，之后才考虑分配。 |  |
| `allocation_internal_scrap` | 场内返回的铜 | 将返回同一前景系统的铜视为内部循环：既不是共产品，也不是外运废物；只承载有记录的再加工负荷。 | `eu-jrc-nfm-bref-2017` |
| `allocation_exported_scrap` | 离场铜废料 | 将外运铜废料记录为独立废物产出。若下游采用避免负荷或再生成分方法，应披露该方法，并使其独立于未分配前景清单。 |  |
| `allocation_shared_residual` | 无法避免的共享负荷 | 如不能按因果关系细分，对于负荷随质量变化的操作，按实测质量通量分配；只有在记录因果理由并开展敏感性检验时才可采用其他参数。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_material_records` | `forming_and_fabrication` | 铜坯、铜带、铜管材、润滑剂、乳化液 | 收货、领用、退回和库存记录 | 产品身份；供应商；批次；合金/配方；期初库存；采购；领用；退回；期末库存；质量 | 按产品和路线核对校准秤、仓库记录与发票 | kg | 每批，按月核对 | 代表性连续 12 个月，或较短生产期内全部批次 | 数据集所含全部前景成形线 | 采购 + 期初库存 - 期末库存 - 经核实退回量，并归属于已声明路线 | 秤校准、发票、库存核对、产品规格 |
| `cp_forming_electricity_meter` | `forming_and_fabrication` | 电力 | 分时电表和生产工单记录 | 电表编号；起止读数；kWh；产线；路线；运行时间；产品质量 | 读取专用电表，或依据因果运行记录分配经核实共享电表 | kWh | 分时或每班，按月汇总 | 与生产相同参考期 | 所有纳入成形设备及辅助设备 | 汇总归属 kWh，换算 MJ，除以净产品质量并乘 1,000 kg | 电表校准、电费单、分配核对 |
| `cp_forming_gas_meter` | `forming_and_fabrication` | 天然气和直接化石 CO2 | 燃气表、发票、燃料质量和排放计算记录 | 体积；压力；温度；基准状态；碳含量或因子身份；氧化基准；设备；路线 | 将分表读数与发票核对，并保留经核实直接排放计算 | m3 和 kg CO2 | 每班或每月 | 与生产相同参考期 | 所有纳入成形燃烧设备 | 统一燃气状态；按因果运行归属；计算直接 CO2 且不含上游排放 | 仪表校准、发票核对、因子或碳平衡记录 |
| `cp_forming_water_meter` | `forming_and_fabrication` | 工艺补水 | 水表和循环平衡记录 | 新鲜取水；回水；循环；排污；密度基准；产线；路线 | 读取边界补水表并核对内部循环平衡 | kg 或 m3 | 每班或每月 | 与生产相同参考期 | 所有纳入成形水系统 | 只报告新鲜边界补水，换算 kg 后按净产品归一化 | 水表校准、水平衡、密度基准 |
| `cp_forming_output_records` | `forming_and_fabrication` | 合格产品 | 秤量、检验和生产工单记录 | 产品形态；合金；尺寸；状态；表面；总产出；废品；返工；净合格质量 | 核对经检定秤、终检放行与生产工单 | kg | 每批 | 与投入相同参考期 | 所有被代表产品线 | 按已声明产品汇总净合格质量并归一化至 1,000 kg | 秤校准、检验放行、质量核对 |
| `cp_forming_waste_records` | `forming_and_fabrication` | 分流铜废料 | 废料秤单和场内回用记录 | 质量；合金；污染；来源产线；场内返回；去向 | 将废料秤与场内重熔/回用日志及运输单据核对 | kg | 每次运输，按月核对 | 与生产相同参考期 | 所有纳入成形线 | 外运废料 = 分流废料产生量 - 经核实场内返回量 | 秤校准、运输单据、物料平衡 |
| `cp_finishing_material_records` | `annealing_and_surface_treatment` | 氢气、氮气、硫酸、氢氧化钠 | 交付、储罐、气瓶、库存、浓度和领用记录 | 身份；供应商；浓度/纯度；期初库存；收货；期末库存；退回；参考状态 | 核对校准储罐/气瓶/秤读数与采购和领用记录 | kg 或 m3 | 每次交付和每批，按月核对 | 与经处理产品相同参考期 | 所有纳入精整线 | 净消耗 = 收货 + 期初库存 - 期末库存 - 经核实退回或回收量 | 校准、供应商规格、库存和浓度核对 |
| `cp_finishing_electricity_meter` | `annealing_and_surface_treatment` | 电力 | 分时电表和生产记录 | 电表编号；kWh；设备；操作；经处理产品质量 | 读取专用电表，或依据因果运行记录分配共享电表 | kWh | 分时或每班，按月汇总 | 与经处理产品相同参考期 | 所有纳入精整和处理设备 | 汇总归属 kWh，换算 MJ，按经处理产品质量归一化 | 电表校准、电费单、分配核对 |
| `cp_finishing_gas_meter` | `annealing_and_surface_treatment` | 天然气和直接化石 CO2 | 燃气表、发票、燃料质量和排放计算记录 | 体积；压力；温度；基准状态；因子身份或碳含量；设备 | 将分表读数与发票核对并保留经核实直接排放计算 | m3 和 kg CO2 | 每班或每月 | 与经处理产品相同参考期 | 所有纳入精整燃烧设备 | 统一燃气状态；按因果运行归属；计算直接 CO2 且不含上游排放 | 仪表校准、发票核对、因子或碳平衡记录 |
| `cp_finishing_water_meter` | `annealing_and_surface_treatment` | 新鲜工艺补水 | 取水表和串级/循环平衡 | 新鲜取水；串级回用；循环；排污；蒸发；密度基准 | 读取场址边界补水并核对精整水平衡 | kg 或 m3 | 每班或每月 | 与经处理产品相同参考期 | 所有纳入表面处理及处理线 | 只报告新鲜边界补水，按经处理产品质量归一化 | 水表校准、水平衡、密度基准 |
| `cp_finishing_waste_records` | `annealing_and_surface_treatment` | 废水和污泥 | 废水表、实验室、脱水和运输记录 | 废水体积/质量；pH；溶解铜；悬浮物；污泥质量；含水率；去向 | 结合校准流量/秤量记录、代表性实验室结果和运输联单 | kg | 每次排放或运输，按月核对 | 与经处理产品相同参考期 | 所有纳入酸洗及处理线 | 报告内部回用、回收、蒸发和场内处理后的净边界输出 | 仪表校准、实验室 QA、联单、处理平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 同期交换量 / 同产品同路线净合格质量 × 1,000 kg | 同期交换量；净合格产品质量 | 每 1,000 kg 参考产品交换量 |  |
| `calc_stock_consumption` | 润滑剂、乳化液、酸、碱及保护气 | 净消耗 = 期初库存 + 收货 - 期末库存 - 经核实退回或回收量；浓度和气体状态基准须一致 | 库存、收货、退回、回收、浓度及气体状态记录 | 净消耗质量或体积 |  |
| `calc_direct_fossil_co2` | `forming_fossil_co2`; `finishing_fossil_co2` | 依据统一状态后的实测燃料及有文件记录的场址特定碳平衡或经核实燃烧因子计算直接化石 CO2；注明因子来源、氧化基准和单位，绝不含上游排放 | 统一状态后的天然气记录；碳含量或经核实因子；氧化基准 | 每 1,000 kg 产品的直接化石 CO2 kg |  |
| `calc_copper_mass_balance` | 成形路线 | 铜投入质量 = 净合格铜产品 + 外运铜废料 + 实测含铜损失 + 库存变化；对差异开展调查，不得强制闭合 | 铜坯/铜带/铜管材质量；合格产品；废料；含铜废物；在制品变化 | 已披露铜物料平衡闭合结果 | `eu-jrc-nfm-bref-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和铜投入 | 保留产品形态、合金牌号、成分基准、尺寸、壁厚或管件几何、状态、表面、路线、供应商及批次关联。 | 采购规格、证书、生产工单、检验放行 |
| `dq_temporal_alignment` | 所有前景交换 | 可获得时采用代表性连续 12 个月；较短生产期应纳入全部批次，并披露时长、季节性、停机、启停和代表性。 | 仪表时间戳、生产日历、批次登记 |
| `dq_completeness` | 过程图和清单 | 将每条纳入产线和操作与已声明路线核对；说明缺失计量、估算分配、排除操作、零记录和数据缺口。 | 产线图、仪表图、核对日志、缺口清单 |
| `dq_measurement` | 质量、能源、气体、水、废水和污泥 | 使用校准仪器或核对发票；保留原始单位、换算因子、气体参考状态、水密度基准、化学品浓度和污泥含水率基准。 | 校准记录、账单、实验室 QA、换算工作表 |
| `dq_upstream_linkage` | 外购投入和场外处理 | 为每项边界投入和处理产出连接身份、地域、技术和参考期匹配的数据集，否则披露明确未解决数据缺口。 | 数据集映射表和代表性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考流 | 确认恰为 1,000 kg 净合格产品，流属性为 Mass、单位为 kg，且全部必需限定信息齐全；拒绝以总产量或含包装质量作为参考产品。 |  |
| `validate_route_logic` | 过程图和清单 | 确认只声明一个产品形态和路线；不适用路线的流卡必须缺省，不得填零或填入其他路线交换。 | `eu-jrc-nfm-bref-2017` |
| `validate_atomic_flows` | 清单 | 确认每个选定流都是具有所述方向、流类型、属性和单位的单一物理、化学、废物或能源交换；拒绝集合标签和合并备选项。 |  |
| `validate_uuid_identity` | 含 UUID 行 | 重新核对公开状态 100、英文和中文 baseName、流类型、分类、属性、单位组及参考单位；发布管件专项数据集前仍需取得精确管件 UUID。 |  |
| `validate_copper_balance` | 成形 | 检查已披露铜物料平衡并调查未解释差异；不得通过修改实测产品或废料量强制闭合。 |  |
| `validate_energy_emissions` | 天然气和化石 CO2 | 确认直接化石 CO2 仅来自场内燃料燃烧，引用保留的因子或碳平衡记录，并排除电力和燃料供应上游排放。 |  |
| `validate_internal_loops` | 水、乳化液、酸及铜循环 | 确认内部循环未重复计作外部投入或产出，只归一化净边界交换。 | `eu-jrc-nfm-bref-2017` |
| `validate_bilingual_alignment` | 双语 PCR | 确认英文和中文的过程 id、行 id、UUID、受控标记、规则 id、数量、范围状态和来源 id 顺序一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明铜管材、管道或管件产品及路线的工厂大门前景生产数据集 |
| downstream_use | `secondary_dataset`；完成代表性及未解决身份审查后可作 `background_dataset` |
| allowed_use | 在产品和路线限定信息匹配时，用于需要质量归一化工厂大门铜管材、管道或管件生产数据的产品足迹、过程及 lifecyclemodel 研究 |
| excluded_use | 铜矿开采或精炼；通用未锻轧铜；已安装管道系统；使用阶段服务；寿命终止；其他金属；管件 UUID 尚未解决时的管件专项发布 |
| required_metadata | PCR id 和版本；产品形态；合金；尺寸；状态；表面；路线；起始材料；再生成分方法；场址地域；参考期；技术；纳入操作；内部循环；分配；上游数据集；包装边界 |
| required_quality_disclosure | 仪表和秤覆盖；校准；批次和时间覆盖；物料平衡闭合；共享计量分配；气体参考状态；化学品浓度；污泥含水率；代表性；未解决 UUID 和范围证据 |
| update_trigger | 产品形态、合金、原料、路线、炉型、拉拔或轧制技术、表面处理、处理边界、能源供应、场址地域、分配、参考期、精确流身份或来源支撑证据发生重大变化 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-06-23） | CPC 41516 身份及层级 |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术（BAT）参考文件》，2017，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf（检索日期：2026-09-04） | 铜管工艺分解、成形和退火投入、酸洗、内部循环及处理产出 |
| `un-cpc-1-1-chinese` | `official_guidance` | 联合国统计司，《CPC 第 1.1 版中文版》，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/cpc_v1_1_complete%28pdf%29_chinese.zip（检索日期：2026-09-04） | 代码 41516 的专业中文产品术语 |
