---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.handheld-electric-power-tools
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 手持电动工具制造

## 1. 范围与适用性

制造具有自带电动机且设计为作业时手持的完整通用车间/建筑工具：钻/起子、冲击工具、便携锯、磨削机及砂磨机。每个数据集声明一种产品功能及电机/传动配置。有线产品包括其安装市电线；无绳产品采用不含可拆电池及充电器的声明裸机本体供货。不可拆内置电池工具不在此限定本体规则内。

排除气动/液压/非电工具、固定机床、园艺/林业机械、医疗/食品设备、单售零件、可拆电池/充电器、可换钻头/锯片/磨料、套装箱包、用户运行及维护、工件生产与报废。套装必须按实测前景归属拆分独立产品及共享包装，不得采用整套质量作为工具M。不定义机加工、钻削或紧固服务参考。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.handheld-electric-power-tools |
| classification_refs | CPC 3.0 44232; narrower tool-body manufacturing context; no accepted mapping |
| covered_products | 按单一作业功能配置的完整有线工具或含整装电动机的无绳裸机本体。 |
| excluded_products | 可拆电池/充电器、内置电池工具、耗材、箱包、固定/非电工具、园艺/医疗/食品机械及作业服务。 |
| representative_product | 一台电机、齿轮箱、夹头、开关及电池触点接口明确的验收无绳电钻/起子裸机；有线变型包括实际电源线。 |
| production_route | 接收原料/零件 → 条件性聚合物成形、传动零件机加工、电机绕线及电气连接 → 配置装配 → 出厂验收/返工 → 发运。 |
| market_state | 含留存润滑剂及必需防护罩/把手的新制验收完整声明工具本体；独立套装产品及运输包装排除于工具净质量。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造交付一台完整声明手持电动工具本体；为产品参考，不是能量作业效率或用户作业服务。 |
| How much | 1 kg单一明确配置的验收净完整工具；为完整工具归一化份额，不是独立功能1 kg部件。 |
| How well | 符合放行物料清单/图纸及实际验收标准，涉及安装电机/传动、输出接口、控制、防护、电气符合性及明确作业模式；不假定通用扭矩/转速/噪声/耐久或寿命。 |
| How long or cycle | 一个制造及验收周期；工具运行小时、钻孔数及紧固件数不是此制造分母。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 带整装电动机的手用加工电动工具 `e7c50d40-dc9e-4e25-88d5-3df54c86969f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号/修订；序列号/批次；作业功能；有线/无绳裸机供货；有刷/无刷及AC/DC电机；齿轮箱/输出接口；控制；额定电压；必需安装防护罩/把手；留存润滑剂；安装线缆/触点边界；排除可拆电池/充电器/耗材/箱包；实测净质量M；实际放行测试标准；工厂/时期；自制/外购；成形/机加工/绕线/电气路线；上游/供应方覆盖；包装排除 |

在数据集元数据/参考流备注声明全部限定；此宽泛公开类别由本体范围及实际配置收窄；质量归一化不使不同作业功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | molding_power; fabrication_power; motor_build_power; electrical_power; assembly_power; test_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 归一化前将实测kWh按3.6 MJ/kWh换算；计量工厂墙侧交付供电，不将额定电机功率乘假定测试时间。 |

对具体验收有线工具或无绳裸机测量净质量M；包括安装电源线、触点接口、必需把手/防护罩及留存脂；排除可拆电池/充电器、可换耗材、箱包、工件及包装；采用校准实际称量及部件边界，不提供类别平均工具或电池质量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个制造场址接收外购原料及成品件；供应商生产不自动纳入前景。 |
| starting_condition_role | 工具制造模块声明物料/总成起点。 |
| product_classification_scope | 专用通用手持电动工具本体；排除独立电池/充电器及园艺/医疗/食品专用设备。 |
| recursive_input_rule | 外购电机/齿轮箱/电路板/壳体总成须明确所含件及上游边界；追溯止于声明供货，不重复内部树脂、绕组、轴承或润滑脂。 |
| upstream_dataset_requirement | 扩展研究另连接实际相容供应商、运输及废物处理，披露技术、牌号及地理；缺失供应方仍为缺口。 |
| disclosure | 报告场址/时期、自制/外购、外包、装配/试验供电、共享套装包装、资本/台架处理、运输/废物覆盖及缺失；制造模块本身不证明完整从摇篮到工厂门覆盖。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_foreground | manufacturing | 纳入实际接收至放行作业、可归属公用工程、耗材、损耗、返工及试验；条件制造仅在场内工单确认时适用；外购成品件替代重复场内制造。 |  |
| boundary_supply | complete_tool | 匹配放行本体供货、线缆/触点接口、电机/传动/控制及必需安全安装件；Bosch及Makita型号实例区分可拆附件及有线/无绳控制，不规定通用工具质量或制造试验。 | bosch-drill; makita-hp1640 |
| boundary_downstream | customer_work | 排除用户工具能量、电池循环、更换耗材及工件影响；仅纳入实际工厂负载试验介质及台架能量；不将用户粉尘/噪声值移作制造排放。 |  |
| boundary_species | elementary_flows | 计量实际控制后物种及室外受纳介质；收集切屑/擦布为废物，不是空气排放；采购溶剂不是基本流排放身份；未知数量是缺口而非零。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| molding | 壳体聚合物成形 | conditional | 仅限场内成形；外购壳体替代。 | foreground_production | 每 1 kg 参考流 |
| fabrication | 传动零件机加工 | conditional | 仅限来料毛坯实际机加工；不假定铸造/锻造/热处理。 | foreground_production | 每 1 kg 参考流 |
| motor_build | 电机绕线及精整 | conditional | 仅限场内绕线/浸渍/平衡；外购完整电机替代这些活动。 | foreground_production | 每 1 kg 参考流 |
| electrical | 电气连接及焊接 | conditional | 仅限场内实际电气作业；外购已贴装电路板采用上游边界。 | foreground_production | 每 1 kg 参考流 |
| assembly | 配置工具本体装配 | required | 所有产品；保留有线/无绳及传动特定安装件。 | foreground_production | 每 1 kg 参考流 |
| acceptance | 出厂验收及返工 | required | 所有产品；实际放行测试方案决定适用台架/载荷介质。 | foreground_production | 每 1 kg 参考流 |
| packing | 发运包装 | conditional | 仅限工厂实际施加保护。 | foreground_production | 每 1 kg 参考流 |

将具体壳体、电机/转子/绕组、齿轮传动/输出轴、轴承、夹头或其他固定接口、开关/控制器、电源线/触点、防护罩、把手、螺钉及润滑剂核对至工具物料清单；每种功能需自身实际接口/防护件，此起始集不是用于每台锯或磨机的通用电钻物料清单；各缺失实物件、化学品、废物及实测物种分别补入；场内内部转移不是外购投入；外购总成替代内部原料及工序。

### 过程：壳体聚合物成形（`molding`）

仅限场内成形；外购壳体替代。

#### 输入

##### 产品流

###### 丙烯腈-丁二烯-苯乙烯共聚物粒料（ABS） （`abs_resin`）

仅在实际壳体成形采用ABS粒料时纳入；保留供应商牌号、配方、添加剂/颜色及扣退回后的净领用；外购壳体替代树脂及场内成形；另加色母粒属于另一配方明确交换。

- 选定流： 丙烯腈-丁二烯-苯乙烯共聚物粒料（ABS） `4f197be0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

###### 玻璃纤维质量分数30%的聚酰胺6粒料 （`pa6_gf30`）

仅在供货复合料有记录为PA6-GF30时纳入；计量完整交付复合料质量，而非纯聚合物质量；不规定通用增强比例或壳体树脂；其他配方另设行。

- 选定流： 玻璃纤维质量分数30%的聚酰胺6粒料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

###### 交流电 （`molding_power`）

计量树脂实际干燥、注塑、冷却及修边需求；适用于低于1千伏交付电网平均电力，须明确实际地理/供应方。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

#### 输出

##### 废物流

###### 废弃ABS成形修边料 （`abs_trim`）

仅纳入实际ABS配方的外送废弃修边料；与内部清洁回用料及玻纤聚酰胺损耗分开称量。

- 选定流： 废弃ABS成形修边料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

### 过程：传动零件机加工（`fabrication`）

仅限来料毛坯实际机加工；不假定铸造/锻造/热处理。

#### 输入

##### 产品流

###### 预制钢齿轮毛坯 （`steel_blank`）

仅适用于场内机加工明确合金、形状及来料质量的钢齿轮毛坯；外购完整齿轮箱替代其所含齿轮原料及机加工；不假定场内锻造或热处理。

- 选定流： 预制钢齿轮毛坯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 未机加工铝合金齿轮箱壳体铸件 （`al_cast_housing`）

仅在场内机加工外购铸造壳体时纳入；保留合金、铸件净质量、机加工余量及表面处理边界；外购成品齿轮箱/壳体排除此毛坯。

- 选定流： 未机加工铝合金齿轮箱壳体铸件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 交流电 （`fabrication_power`）

计量实际车削、齿轮切削/磨削、钻孔及抽风需求；适用低于1千伏的交付电网平均供电；实际采用切削液或热处理路线时须补成分明确投入及废物记录后才可声称覆盖。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_offcuts`）

称量实际外送未经处理的碳钢/低合金钢边角料及切屑；含油切屑及有色金属分开；内部复用原料不是废物。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 未经处理铝合金机加工切屑 （`al_swarf`）

仅纳入实际合金特定的外送切屑，记录润滑剂污染及处理方；不替换为黑色金属切屑或再生铝产品。

- 选定流： 未经处理铝合金机加工切屑
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

##### 基本流

###### 颗粒物，粒径未特指 （`machining_pm`）

仅记录控制后实测排入室外空气、粒径及空气子介质未特指的颗粒物质量；不由机加工推断通用排放，也不将捕集粉尘记作空气排放。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

### 过程：电机绕线及精整（`motor_build`）

仅限场内绕线/浸渍/平衡；外购完整电机替代这些活动。

#### 输入

##### 产品流

###### 电磁线 （`winding_wire`）

仅适用于场内采用漆包绝缘铜导体的电机绕线；由记录的实际铜牌号、直径及漆包体系收窄此宽泛铜/铝身份；计量交付绝缘线质量，原件长度/质量值不是物理线密度；外购电机替代所含绕组投入。

- 选定流： 电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_motor_build。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_motor_build`

###### 成品电工钢定子叠片 （`stator_stack`）

仅记录用于场内绕线的外购成品定子叠片；明确钢牌号、几何及质量；已包含于叠片时不另加电工钢板。

- 选定流： 成品电工钢定子叠片
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_motor_build。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_motor_build`

###### 聚酯电机绕组浸渍漆 （`winding_varnish`）

仅纳入场内浸渍实际采用有记录的供货配方；分别记录树脂、溶剂及固含量、留存涂层与废物；不假定所有电机都在场内浸渍。

- 选定流： 聚酯电机绕组浸渍漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_motor_build。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_motor_build`

###### 交流电 （`motor_build_power`）

在实际发生时计量绕线、浸渍、平衡及电固化；适用低于1千伏的交付电网平均供电；浸渍漆实际溶剂物种、捕集及废物须补具体行。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_motor_build。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_motor_build`

#### 输出

##### 废物流

###### 废弃漆包绝缘铜绕组线边角料 （`winding_offcuts`）

称量实际废弃绝缘铜线边角料；记录漆包层比例及处理方；不得称为清洁铜金属废料或重复内部复用线。

- 选定流： 废弃漆包绝缘铜绕组线边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_motor_build。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_motor_build`

### 过程：电气连接及焊接（`electrical`）

仅限场内实际电气作业；外购已贴装电路板采用上游边界。

#### 输入

##### 产品流

###### 无助焊剂锡银铜焊料丝 （`solder_wire`）

仅在实际电子连接路线采用单独供货无助焊剂SAC焊料丝时纳入；明确合金及消耗质量；含芯焊料、焊膏及铅焊料另需配方明确交换。

- 选定流： 无助焊剂锡银铜焊料丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

###### 异丙醇溶剂松香基焊接助焊剂 （`rosin_flux`）

仅纳入一种有记录供货助焊剂配方；记录松香/活化剂浓度及交付溶液质量；不将所含溶剂再次记作采购纯异丙醇。

- 选定流： 异丙醇溶剂松香基焊接助焊剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

###### 纯异丙醇清洗溶剂 （`ipa_cleaner`）

仅纳入工厂连接清洗实际使用的单独外购纯异丙醇；保留纯度及领用/退回/留存废物平衡；其他水性浓度需另行身份。

- 选定流： 纯异丙醇清洗溶剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

###### 交流电 （`electrical_power`）

仅在场内实际进行时计量连接装配、焊接及抽风；适用低于1千伏交付电网平均供电；外购已贴装电路板排除重复上游元件制造。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

#### 输出

##### 废物流

###### 受异丙醇污染废弃棉擦拭布 （`spent_wipes`）

仅纳入实际产生的此种实物废物；对交付废物合并称量留存液体及棉布，记录溶剂含量及处置；不是溶剂排放质量。

- 选定流： 受异丙醇污染废弃棉擦拭布
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

##### 基本流

###### 异丙醇 （`ipa_air`）

仅记录捕集后实际排入室外空气、空气子介质未特指的异丙醇；采用实测物种或有记录纯度、回收、留存废物及控制的场址溶剂质量平衡；不设通用挥发比例；室内暴露属于不同介质。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

### 过程：配置工具本体装配（`assembly`）

所有产品；保留有线/无绳及传动特定安装件。

#### 输入

##### 产品流

###### 手持式机电工具电机子组件 （`motor`）

仅记录实际有刷/无刷及AC/DC设计的外购电机模块，声明所含绕组、转子及轴承；场内自制电机是内部转移，不是另一项外购投入。

- 选定流： 手持式机电工具电机子组件 `85b3d713-bbb4-4780-87f7-50b1edb65fe6`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品玻纤增强PA6工具壳体 （`housing`）

仅在供应商物料清单确认该聚合物复合料及零件几何时纳入；外购壳体替代相应场内树脂/成形；其他聚合物采用自身零件行。

- 选定流： 成品玻纤增强PA6工具壳体
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢齿轮电钻齿轮箱总成 （`gearbox`）

一个外购完整齿轮箱，明确壳体/齿轮/轴承及润滑脂边界；其他投入排除已包含齿轮毛坯、轴承及加注。

- 选定流： 成品钢齿轮电钻齿轮箱总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制钻夹头 （`chuck`）

仅记录放行图纸明确的有钥匙/无钥匙钻夹头；保留夹持范围/类型、质量及接口；其他工具需自身实际输出接口零件，不使用钻夹头。

- 选定流： 成品钢制钻夹头
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制滚珠轴承 （`bearing`）

仅在不含于外购电机/齿轮箱时记录实际规格及质量；不重复内部轴承。

- 选定流： 成品钢制滚珠轴承
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品电动工具扳机开关 （`switch`）

一个实际安装明确开关总成及接线边界；保留电压/电流额定参数及质量，不泛化为控制系统集合。

- 选定流： 成品电动工具扳机开关
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品无刷电机控制板 （`controller`）

仅适用于采用该外购已贴装控制板的无刷设计；记录所含开关/接插件及质量；不存在或已包含于电机模块时排除。

- 选定流： 成品无刷电机控制板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品绝缘铜市电电源线及插头 （`cord`）

一个插头/长度/绝缘明确的物理装配电源线产品；纳入有线工具M，无绳裸机不含；排除延长线。

- 选定流： 成品绝缘铜市电电源线及插头
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品无绳工具电池触点接插件 （`contact`）

仅指工具侧触点总成；记录合金/镀层及质量；此投入不是电池单体或电池包。

- 选定流： 成品无绳工具电池触点接插件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品石墨电机电刷 （`brush`）

仅适用于有刷电机且未含于外购电机时纳入；记录石墨牌号、引线边界及质量；无刷设计排除。

- 选定流： 成品石墨电机电刷
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 锂皂润滑脂 （`grease`）

仅纳入实际单独供货齿轮箱润滑脂；明确基础油、增稠剂/添加剂及交付质量；不重复外购完整齿轮箱内已有润滑脂；安装留存脂属于工具M。

- 选定流： 锂皂润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 交流电 （`assembly_power`）

计量实际最终紧固、安装及可归属动力工具；适用低于1千伏电网平均供电；防护罩、把手及螺钉若在供货总成外，按各物料清单零件独立记录。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

### 过程：出厂验收及返工（`acceptance`）

所有产品；实际放行测试方案决定适用台架/载荷介质。

#### 输入

##### 产品流

###### 交流电 （`test_power`）

计量实际磨合、空载/负载功能、控制及电气符合性试验的墙侧电量，包括台架供电/充电损耗及失败测试/返工；复用台架电池包不是工具本体材料投入，披露资本/测试设备边界，若纳入则单独记录实际更换/损耗；排除用户运行kWh。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 冷轧碳钢钻削试验片 （`test_coupon`）

仅纳入批准钻削负载试验实际消耗的钢试片；采集合金/厚度、领用质量、复用及移出切屑；其他工具/加载介质另需材质明确行；不规定通用负载试验或试片数量。

- 选定流： 冷轧碳钢钻削试验片
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

#### 输出

##### 产品流

###### 带整装电动机的手用加工电动工具 （`finished_machine`）

验收完整有线工具（含安装市电线）或无绳裸机本体，含电机、传动、控制、输出接口、必需防护罩/把手及留存润滑脂；排除可拆电池/充电器、可换钻头/锯片/磨料、箱包、试验工件及包装；工具特定固定接口及必需供货安全把手仍纳入。

- 选定流： 带整装电动机的手用加工电动工具 `e7c50d40-dc9e-4e25-88d5-3df54c86969f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

###### 工业后钢废料 （`test_swarf`）

仅纳入实际未经处理离厂的钢钻削试验边角料/切屑，与留存/复用试片分开计量；不是环境颗粒物；合金及污染须匹配此废物身份。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

### 过程：发运包装（`packing`）

仅限工厂实际施加保护。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`film`）

仅记录实际使用扣退回后的PE薄膜；明确牌号，包装质量与M分开。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

###### 瓦楞纸板 （`board`）

仅适用于与公开流一致、纤维至少80%且含再生材料的实际C/E/F楞纸板；记录实际组成；身份条件不是强制工具包装规范，其他纸板牌号另需身份。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | 优先使用直接工单领用及表计；按cp_allocation将其余共享需求按实测因果驱动分摊：成形批次需求及注射质量/循环、机加工/绕线设备时间结合实测功率、装配/试验台架需求及实际工位时间、套装包装实测产品需求或几何适配；以实际前景记录证明驱动并将分摊加排除需求核对至原总量；不假定固定负担比例。 |  |
| allocation_variants | product_mix | 配置或能耗不同的变型不得全部按机器台数分摊。质量或经济基准后备方法需有前景依据、不确定性敏感性及审查，不是本PCR规定的默认方法。 |  |
| allocation_scrap | steel_offcuts | 保留材料投入及单独实测的废钢输出，不自动给予避免钢生产抵扣；有关时报告废钢价格与去向；共产品分类或回收抵扣需另行声明且经审查的模型，防止重复抵扣；内部循环清洁聚合物回用料不是可销售共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收配置及有可追溯覆盖的抽样序列号 | 与活动记录相同的制造时期 | 一个声明场址的验收完整供货 | 每台验收净质量 | 秤校准；声明裸机/有线本体；电池/箱包排除；安装脂；可拆卸部件质量；验收签署 |
| cp_molding | molding | 本过程各原子行 | measurement | 树脂牌号/配方；领用/退回；干燥/注塑/冷却kWh；验收壳体；分开的修边/回用料 | 称量每种实际供货复合料及外部废物；计量成形/冷却需求；核对内部回用及库存；保留放行零件及供应商规范。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_fabrication | fabrication | 本过程各原子行 | measurement | 毛坯合金/形状；领用/退回；齿轮/壳体零件质量；各切屑；如用则记录切削液配方；机加工kWh；实际室外颗粒物监测 | 采用零件关联工单及原料/零件/废物平衡；计量实际设备及抽风需求；将任何实际热处理、切削液及废物路线补为具体行。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_motor_build | motor_build | 本过程各原子行 | measurement | 线导体/漆包/直径；交付绝缘线质量；实际绕组匝数；定子/转子边界；浸渍漆配方；领用/退回；留存涂层；线材/废物组分；kWh | 称量实际电磁线及供货件，计量绕线/平衡/固化并核对内部成品电机及废物；不将数据库长度/质量关系当线密度，不重复外购完整电机。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_electrical | electrical | 本过程各原子行 | measurement | 合金及助焊剂组成；溶剂纯度；领用/退回；焊点；捕集/回收溶剂；污染擦布质量/组成；室外异丙醇物种kg；kWh | 分别记录供货化学品及净使用；计量焊接及抽风；实测溶剂物种或按实际场址退回库存、废物留存液、回收溶剂及排放质量闭合平衡；保留不确定性及控制覆盖。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_assembly | assembly | 本过程各原子行 | measurement | 型号/物料清单修订；零件号/材质；电机有刷/无刷AC/DC；供货总成边界；安装数；各零件质量；润滑脂配方/加注；领用/退回；kWh | 采用配置受控接收/领用/退回零件及脂记录；称量各供货件，核对安装电源线/触点、电机/齿轮箱/控制及必需防护罩/把手；不重复内部件。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_acceptance | acceptance | 本过程各原子行 | measurement | 序列号/配置；放行测试方案；时长/模式；传动转速/控制响应；电气符合性；合格/不合格/返工；台架墙侧kWh；试片牌号/质量/复用；钢切屑；台架电池边界；实测M | 保留签署当前型号测试及验收结果；计量实际墙侧台架需求并追溯负载试验介质及移除残留物；包括失败测试/返工；不以额定功率乘假定时长替代测试，也不将复用试验电池算作发货本体部件。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_packing | packing | 本过程各原子行 | measurement | PE薄膜质量；纸板楞型/纤维/再生成分；领用/退回；套装共享包装；发运序列号 | 称量各实际包装件，排除于M并核对发运；按cp_allocation以实测产品特定包装需求或有依据实测几何驱动拆分套装共享包装，披露方法及闭合。 | kg | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_allocation | manufacturing | shared_demand | measurement | 公用工程总量；实测功率/负载；运行时间；包装产品尺寸/面积；验收配置数量；排除需求 | 尽可能分表计量；测量共用设备/炉/工位负载及因果驱动，并记录各共享交换采用该驱动的理由。 | MJ; h; m2 | 每个共用批次与每月核对 | 相同生产区间 | 该场址全部消耗产品与排除操作 | 按实测因果需求分摊总量；再汇总可归属数量 / 验收机器数量 | 分表一致性；总量闭合；驱动不确定性；敏感性；批准记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | abs_resin; pa6_gf30; molding_power; abs_trim; steel_blank; al_cast_housing; fabrication_power; steel_offcuts; al_swarf; machining_pm; winding_wire; stator_stack; winding_varnish; motor_build_power; winding_offcuts; solder_wire; rosin_flux; ipa_cleaner; electrical_power; spent_wipes; ipa_air; motor; housing; gearbox; chuck; bearing; switch; controller; cord; contact; brush; grease; assembly_power; test_power; test_coupon; test_swarf; film; board | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

应用normalize_mass前，保持单一声明配置及匹配时期。按各协议取得q_item：有效退回后的净原料/零件领用、可归属表计消耗或实测废物/排放，除以同一配置的验收机器数量。废品及返工负担由验收产出承担，不得除以全部投产数量。不同实测M的数据集只有在保留配置特定记录后才能按质量加权。单位转换及分摊在原始记录上完成，并另留计算凭据；本PCR不提供通用消耗范围、密度或排放因子。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | all_flows | 匹配实际零件/材料牌号、交付状态、浓度、地理、参考属性及单位；UUID仅提供身份，不提供数量依据或供应方数据集；交换完全链接前解决空身份。 | 供应商资料；流/属性/单位记录；身份审查 |
| quality_completeness | complete_machine | 将配置物料清单全部部件、必需安装防护罩/把手及线缆/触点核对至M；清点实际公用工程、化学品、每项废物及排放；缺失零件须测量，不按M残差臆造；报告覆盖及未链接供应方。 | 物料清单修订；称量表；物料平衡；缺失数据登记 |
| quality_period | production_records | 采用一个声明工厂及完整代表时期；记录型号变化、季节性、空载需求、外包及返工；量化一手覆盖与不确定性；历史产品案例不替代当前生产记录。 | 工单；验收台账；表计校准；来源限制 |
| quality_test | acceptance | 对实际电机/传动/控制/输出接口、必需防护罩/把手及电气符合性采用当前放行标准；区分有线与无绳台架供电；制造商用户性能/安全建议不是通用工厂测试限值或耐久要求。 | 签署测试方案；序列号/型号结果；校准及符合性规范 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1 kg参考输出、cp_mass实测M、完整声明工具本体供货及安装电源线/触点/防护罩/把手/脂边界；可拆电池/充电器、耗材、箱包及包装不得进入M，不采用套装毛质量。 |  |
| validation_normalization | inventory | 每个适用的非参考行采用normalize_mass及声明协议；核对q_item与M配置/时期相同、除法方向正确且能量/体积/件数分子单位保留。 |  |
| validation_route | processes | 按实际自制/外购记录匹配场内成形、齿轮机加工、电机绕线及电气作业；不得重复树脂及壳体、线材及外购电机、轴承/脂及外购齿轮箱、复用台架电池及发货工具。 |  |
| validation_species | elementary_flows | 匹配异丙醇CAS67-63-0及室外空气未特指子介质、颗粒物粒径覆盖及控制后边界；室内或高层对流层异丙醇身份不匹配室外工厂排放；捕集切屑/擦布仍为废物；不假定排放比例或因子。 |  |
| validation_coverage | dataset | 区分实测、计算、估算、排除、不适用及缺失数量；核对验收产出、废料、库存及分摊闭合；方法检查或投影有效不等于科学方法学批准，也不证明从摇篮到工厂门完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 用于明确配置与时期的有记录制造模块；只有建立供应商/运输/处理覆盖后方用于上游连接评价。 |
| excluded_use | 用户机加工/紧固服务、运行能量或寿命比较、按寿命归一化声明、不同设备配置的通用等价性及无依据的完整从摇篮到工厂门声明。 |
| required_metadata | PCR标识；型号/配置/物料清单及序列号范围；实测M及声明电池/线缆/脂边界；验收标准；场址/时期；自制/外购及工艺路线；参考基准；供应方及运输；包装；分摊；数据来源；版本。 |
| required_quality_disclosure | 实测覆盖、缺失身份/供应方及数量、路线排除、来源年龄/限制、转换条件、分摊依据、排放监测缺口、不确定性及独立审查状态。 |
| update_trigger | 物料清单或配置变化；验收试验修订；供应商/工序/电气或能源供应变化；新代表生产时期；身份或证据缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| bosch-drill | handbook | Bosch GSR/GSB18V-55原版说明书，1 609 92A 7XG，14.11.2022，PDF/印刷第15页Product Features及附件脚注。https://www.bosch-professional.com/binary/manualsmedia/o402762v21_160992A7XG_202211.pdf | 仅支持历史型号特定夹头、选择器、开关、把手及可拆电池/附件区分；不采用质量、扭矩、转速、电池寿命或运行因子；当前物料清单/放行测试决定前景。 |
| makita-hp1640 | handbook | Makita HP1640/HP1641说明书，884851B879，制造商保留版本，PDF元数据2023；PDF/印刷第5–6页Functional Description及Assembly。https://www.makita.ae/makita_cpanel/attachments/user_manuals/HP1640.pdf | 型号特定有线扳机/换向控制、夹头及侧把手装配；不移用通用材质、额定参数、运行钻削能力/噪声、寿命或制造能量。 |
