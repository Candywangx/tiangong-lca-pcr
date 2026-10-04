---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-crushing-and-screening-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 矿物破碎与筛分机械制造

## 1. 范围与适用性

单一声明配置、制造交付的完整固定式电动颚式破碎机及干式矿物振动筛。本收窄类别不覆盖CPC44440全部活动。分别保留破碎机与筛分机系列、框架连接、安装传动、筛面/耐磨板及发货边界。参考功能是制造，矿物吞吐量及加工矿物质量不是清单分母。

圆锥/冲击破碎机、磨机、湿式洗选厂、矿物混合/捏合/凝集/成形及铸砂造型机；履带/轮式移动厂、内燃动力、独立输送机/给料机/除尘器、通用建筑基础、作为独立产品的备件制造、用户采石/采矿运行、安装、使用、维护、寿命期耐磨件更换及寿命终结。专用安装传动、防护及控制仅按实际完整供货纳入；脱离额外件另属产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-crushing-and-screening-machinery |
| classification_refs | CPC:3.0:44440; narrower |
| covered_products | 配置固定式电动颚破整机；配置干式振动矿物筛分整机。 |
| excluded_products | 圆锥/冲击破碎机、磨机、湿式洗选厂、矿物混合/捏合/凝集/成形及铸砂造型机；履带/轮式移动厂、内燃动力、独立输送机/给料机/除尘器、通用建筑基础、作为独立产品的备件制造、用户采石/采矿运行、安装、使用、维护、寿命期耐磨件更换及寿命终结。专用安装传动、防护及控制仅按实际完整供货纳入；脱离额外件另属产品。 |
| representative_product | 一台工厂验收颚破，声明铸造/制造框架、颚板、偏心/动颚/肘板机构、安装传动及安全防护；或另建模的振动筛，明确筛层/筛面、激振器、悬挂及传动；两者不是一份可互换物料清单。 |
| production_route | 原料/成品件接收；实际条件机械制造/焊接/涂覆；装配；验收；条件包装。铸造、电机绕线及供应商制造属于上游连接，除非扩展模块独立实测。 |
| market_state | 验收待发运新完整固定电动机器；安装可换耐磨面纳入净质量，备用组及运输包装排除。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造交付声明完整矿物破碎机或筛分机；产品参考，不是加工集料吨数。 |
| How much | 1 kg单一配置验收净完整机器；完整机器归一化份额，不是独立功能一千克部件。 |
| How well | 符合放行物料清单/图纸及实际破碎/筛分机构、传动、防护、控制、对中及电气符合性验收标准；不规定通用能力、孔径、功率、振幅或寿命。 |
| How long or cycle | 一个制造及验收周期；排除采石场运行小时、寿命吨数及耐磨件更换周期。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 固体的泥土、石料、矿石或其他矿物质用的检选、筛分、分离，洗涤、破碎、粉磨、混合或捏和机械，固体的矿物燃料、陶土泥料、未硬化水泥、粉刷材料或其他粉状、糊状矿产品用的凝集、成型或造型机械，成型铸砂模机 `2b2bc8e3-915f-49a6-a0f0-db69b9bba60a` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 系列/型号/物料清单修订；序列号/批次；颚破或筛分功能；固定/电动/干式范围；框架合金及螺栓/焊接连接；安装耐磨板或筛层面；传动/激振器/轴承/悬挂；所含防护/控制供货；留存脂/油及空/充液边界；实测净M；放行验收标准/试验介质；场址/时期；自制/外购；制造/涂覆路线；上游供应方及运输；包装排除 |

在数据集/参考备注声明全部限定；公开宽矿物机械身份由该实际完整机器收窄。质量归一化不建立破碎机、筛分机或不同配置功能可比性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | fabrication_power; welding_power; coating_power; assembly_power; test_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 归一化前按3.6 MJ/kWh换算实测kWh；保留交付电力电压/供应方及实际表计边界。 |
| hydraulic_volume | hydraulic_oil | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 清单分子保留供货流体实际m3。M内留存加注质量采用校准称重或同温度实测密度，不假定通用密度。 |

称量验收完整安装配置，含耐磨面、专用传动/防护/控制及留存润滑剂。排除运输支承/包装、备用组、试验介质、工厂结构及独立辅助机。任何发运拆卸前先称量完整组装验收机器；再以可追溯部件记录核对拆卸所需件至已称量机器，不能替代M称量；未解释缺失部件不能以质量残差填补。不提供类别每台重量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个制造厂接收原料、预制铸件及成品件；上游铸造/钢铁/电机制造不自动前景覆盖。 |
| starting_condition_role | 声明制造模块物料/装配起点。 |
| product_classification_scope | 单一声明配置、制造交付的完整固定式电动颚式破碎机及干式矿物振动筛。本收窄类别不覆盖CPC44440全部活动。分别保留破碎机与筛分机系列、框架连接、安装传动、筛面/耐磨板及发货边界。参考功能是制造，矿物吞吐量及加工矿物质量不是清单分母。 |
| recursive_input_rule | 各外购总成止于有记录供货边界，不以独立原料交换重复所含轴承/轴/绕组/涂层/润滑剂；内部制造转移不是采购。 |
| upstream_dataset_requirement | 扩展评价连接实际相容供应商、入厂运输及废物处理并披露材质/路线/地理；缺失供应方连接仍为缺口，身份UUID本身不提供上游影响。 |
| disclosure | 声明场址/时期、安装供货/拆卸、自制/外购、外包作业、制造公用工程、验收介质、包装、共享需求、资本/台架处理及排除；此制造前景模块本身不建立完整从摇篮到工厂门覆盖。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_foreground | manufacturing | 纳入实际接收至放行工序、可归属公用工程、耗材、损耗、返工及测试；条件路线须场址记录；声称清单完整前补齐实际未列物料/化学品/废物/物种。 |  |
| boundary_frame | frame | 不规定通用焊接结构；Metso销接/螺栓及Sandvik焊接框架案例证明路线差异；当前图纸/工单决定实际机器。 | metso-c-jaw-2024; sandvik-cj613-cj615 |
| boundary_screen | screen | 声明筛层/激振器/传动所含件；CVB法兰安装激振器/轴承及无焊横梁仅为配置实例；筛洗/漂洗设备及移动底盘排除于本干式固定范围。 | metso-cvb |
| boundary_downstream | mineral_use | 排除用户破碎/筛分能量、加工矿石/集料生产及寿命期耐磨需求；仅纳入实际工厂验收介质及控制后排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 框架/零件机械制造 | conditional | 仅实际场内切割/钻孔/机加工声明来料钢板或铸框；不假定铸造。 | foreground_production | 每 1 kg 参考流 |
| welding | 结构焊接 | conditional | 仅放行图纸/工单确认焊接时；销接/螺栓结构可省略。 | foreground_production | 每 1 kg 参考流 |
| coating | 清洗与保护涂覆 | conditional | 仅该配置实际场内清洗/涂覆；外购已涂覆件替代重复涂覆。 | foreground_production | 每 1 kg 参考流 |
| assembly | 机械/电气装配 | required | 安装实际框架、破碎或筛分机构、传动、防护及声明控制；核对自制/外购所含件。 | foreground_production | 每 1 kg 参考流 |
| acceptance | 验收测试与放行 | required | 采用当前放行型号特定测试，记录实际介质及能量，再称量验收完整配置。 | foreground_production | 每 1 kg 参考流 |
| packing | 运输防护与发运 | conditional | 仅实际包装；包装排除于M，不规定默认防护配方。 | foreground_production | 每 1 kg 参考流 |

每行是一个物理或化学明确交换；宽泛官方显示名由行注及实际规范收窄，不是混合包。此起始清单不是通用物料清单：分别核对固定/活动/侧颚板、夹具/销、带轮、筛网紧固件、筛层/框架/悬挂件、密封/软管/线缆及每项实际涂料组分、润滑排挤物、切削液、捕集焊烟/试验粉尘；逐项另加；外购总成替代其所含场内投入。区分不适用、证据缺失及实测零。

### 过程：框架/零件机械制造（`fabrication`）

仅实际场内切割/钻孔/机加工声明来料钢板或铸框；不假定铸造。

#### 输入

##### 产品流

###### 钢板 （`steel_plate`）

仅纳入实际用于框架侧板或支承结构切割/钻孔的热轧低合金高强钢板；保留牌号/厚度及净领用；其他碳钢/不锈钢另需身份；不规定通用钢板牌号。

- 选定流： 钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 预制铸钢破碎机框架段 （`frame_casting`）

仅记录接收后场内机加工的外购框架铸件；明确合金、几何、供货热处理及原料质量；成品外购框架替代重复铸件毛坯及机加工；场内铸造不在起点内。

- 选定流： 预制铸钢破碎机框架段
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 交流电 （`fabrication_power`）

计量实际机械切割/钻孔、车削/磨削及抽风；限低于1千伏电网平均交付，明确实际地理/供应方；实际热切割、切削液及热处理需补具体交换。

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

称量制造外送未经处理低合金钢边角/切屑；铸铁、富锰合金及油污切屑分开；内部原料复用不是外部废物交换。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 捕集低合金钢磨削粉尘 （`captured_dust`）

仅纳入组成有记录的分收粉尘；称量交处理方废物，不是残余空气排放；混磨料/矿物粉尘另需组成明确行。

- 选定流： 捕集低合金钢磨削粉尘
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

仅纳入实测控制后排向室外空气、粒径及空气子介质未特指的颗粒物；不提供默认因子/化学组成或假定每道作业均排放；捕集粉尘仍为废物。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

### 过程：结构焊接（`welding`）

仅放行图纸/工单确认焊接时；销接/螺栓结构可省略。

#### 输入

##### 产品流

###### 实心低合金钢焊丝 （`welding_wire`）

仅用于实际有记录的结构实心焊丝焊接；保留合金/直径及领用/退回质量；药芯丝/焊条另属产品；非焊接螺栓框架省略本工序。

- 选定流： 实心低合金钢焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

###### 压缩气态氩 （`shield_argon`）

仅在实际焊接规程采用单独气态氩时纳入；测量气瓶取用质量并扣余量退回；混合保护气须另为声明混合气交换；不规定钢焊接必须纯氩。

- 选定流： 压缩气态氩
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

###### 交流电 （`welding_power`）

计量实际焊接及抽风需求并含返工；限低于1千伏电网平均交付；实际存在的各实测焊烟物种分别补入，不假定焊烟因子。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

### 过程：清洗与保护涂覆（`coating`）

仅该配置实际场内清洗/涂覆；外购已涂覆件替代重复涂覆。

#### 输入

##### 产品流

###### 自来水 （`wash_water`）

仅纳入实际市政饮用水清洗；称量消耗，或以记录场址温度/密度换算实测体积；参考属性为质量而非体积；水资源及直接自然取水另属身份。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 溶剂型环氧底漆配方 （`epoxy_primer`）

仅纳入实际供应商确定的底漆组分，明确固含量/溶剂/批次；计量供货配方质量；场内另用固化剂/面漆/清洗剂各需配方行；不将内含溶剂重复记作采购稀释剂。

- 选定流： 溶剂型环氧底漆配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 二甲苯 （`xylene_thinner`）

仅纳入单独采购、实际混合异构组成/纯度有记录的液态二甲苯稀释剂；计量交付质量；宽泛二甲苯产品由此供货化学品收窄，不是通用稀释剂或基本流排放；乙苯/其他溶剂添加物须另披露。

- 选定流： 二甲苯 `55dcefce-e5b7-492d-9f02-5bd5a70c94a1`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 交流电 （`coating_power`）

实际发生时计量清洗/泵送、涂覆、抽风及电固化；限低于1千伏电网平均交付；燃气固化或外购热另需载体及实测物种行。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

#### 输出

##### 废物流

###### 钢件清洗水性废液 （`wash_effluent`）

仅纳入实际交处理废液；记录水、悬浮钢及清洗剂含量，称量交付废物；不是水资源或自动直接排淡水；披露处理边界。

- 选定流： 钢件清洗水性废液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 废弃溶剂型环氧底漆残留物 （`paint_residue`）

称量包含留存液体的实际废弃底漆残留物；记录固体/溶剂及处理方；捕集涂料残留不是空气排放；未用退回底漆不是废物。

- 选定流： 废弃溶剂型环氧底漆残留物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

##### 基本流

###### 二甲苯（所有异构体） （`xylene_air`）

仅纳入捕集后实际排向室外空气未特指子介质的二甲苯异构体总量CAS1330-20-7；实测物种质量或采用含记录纯度/回收/留存涂层/废物的溶剂特定闭合平衡；不得以室内/城市/高层空气身份或总VOC替代二甲苯；不假定排放比例。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

### 过程：机械/电气装配（`assembly`）

安装实际框架、破碎或筛分机构、传动、防护及声明控制；核对自制/外购所含件。

#### 输入

##### 产品流

###### 成品铸钢破碎机框架 （`frame_finished`）

仅记录外购完整框架并明确所含连接框架段；替代重复铸件/板材制造；自制框架为内部转移；据当前图纸声明焊接或销接/螺栓结构。

- 选定流： 成品铸钢破碎机框架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品合金钢破碎机偏心轴 （`eccentric_shaft`）

仅纳入颚式传动单独外购成品轴；保留合金/尺寸及所含轴承边界；已含于外购动颚总成时省略。

- 选定流： 成品合金钢破碎机偏心轴
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品铸钢破碎机动颚体 （`pitman`）

仅纳入颚破单独外购动颚体；明确所含轴/轴承边界，不重复内部件。

- 选定流： 成品铸钢破碎机动颚体
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品铸锰钢颚板 （`jaw_plate`）

仅纳入明确锰牌号/齿形的实际安装耐磨颚板；固定/活动各实物板分别作为交换实例称量；备用更换组排除于M并另声明额外产品。

- 选定流： 成品铸锰钢颚板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制破碎机肘板 （`toggle_plate`）

仅纳入实际钢规范的配置成品肘板；非钢实际变型需另设材质明确行。

- 选定流： 成品钢制破碎机肘板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品铸铁破碎机飞轮 （`flywheel`）

仅纳入实际机加工/平衡成品铸铁飞轮；不是通用铸铁原料或风机变桨硬件。

- 选定流： 成品铸铁破碎机飞轮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 金属丝网 （`screen_mesh`）

仅纳入实际单独安装的编织钢筛网；由钢牌号、孔径、丝径及编织状态收窄宽泛金属网；计量供货筛网质量；合成板/板式筛面另属实物交换。

- 选定流： 金属丝网 `f225c346-5bf4-489e-9342-9e1dcedca6ae`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品振动筛激振器总成 （`exciter`）

仅纳入外购配置激振器，并声明所含轴承/润滑剂/轴；不重复内部轴承或油。

- 选定流： 成品振动筛激振器总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 滚珠轴承或滚柱轴承 （`bearing`）

仅纳入单独安装完整钢制调心滚子轴承；由实际供应商类型/材质收窄类别身份，各实物轴承称量；外购激振器/动颚所含轴承替代此单独行。

- 选定流： 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品三相异步电动机 （`motor`）

声明实际安装电机类型/输出/安装/电压；完整外购电机包括绕组及转子，不另加上游铜投入。

- 选定流： 成品三相异步电动机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制螺旋压缩弹簧 （`spring`）

仅纳入明确几何的实际筛悬挂或颚破张紧弹簧；各实物弹簧计量，不规定通用数量/刚度。

- 选定流： 成品钢制螺旋压缩弹簧
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 硫化橡胶制的传动、输送带或胶带 （`belt`）

仅纳入实际硫化橡胶V形传动带；由记录V形、长度及增强体系收窄宽泛传动/输送类别；每条实物带为一个交换，不含输送服务。

- 选定流： 硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 钢紧固件 （`steel_bolt`）

仅纳入一个声明钢螺栓规范跨装配边界；记录实际强度/涂层/尺寸及单栓质量；螺母/垫圈/销及各其他规范紧固件另分行，不采用混合紧固包质量。

- 选定流： 钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制传动防护罩 （`guard`）

仅纳入单独外购成品钢防护罩；自制防护罩为板材制造已体现的内部转移；必需安装防护及安全件计入M。

- 选定流： 成品钢制传动防护罩
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品含电子元件钢制电机控制柜 （`control`）

仅纳入作为验收机器供货的专用柜；记录所含驱动、接线及壳体，排除全厂控制；不得原钢加柜体重复。

- 选定流： 成品含电子元件钢制电机控制柜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品颚口调节液压动力单元 （`hydraulic_unit`）

仅纳入实际安装颚口调节单元；记录所含泵/电机/油箱/阀及空/充液状态；不假定每台颚破都有。

- 选定流： 成品颚口调节液压动力单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 液压油 （`hydraulic_oil`）

仅纳入单独加注配方矿物液压油并记录供应商牌号/黏度/添加物/温度；参考属性为体积，采集实际m3，不将质量当体积；M中的留存油质量采用加注前后直接称重或同温度供应商/场址实测密度，不将数据库均值当通用密度；外购充液单元已含油时省略。

- 选定流： 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 配方锂皂润滑脂 （`grease`）

仅纳入单独领用、记录矿物基础油/稠化剂/牌号的实际脂；留存加注计入M，排挤/废物分测；外购轴承/总成所含脂省略。

- 选定流： 配方锂皂润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 交流电 （`assembly_power`）

计量可归属该配置的吊装、安装、紧固及电气/控制连接需求；限低压电网交付；实际密封、螺母/垫圈、软管、线缆及安装衬板以补实物明确行纳入，不用质量残差。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

### 过程：验收测试与放行（`acceptance`）

采用当前放行型号特定测试，记录实际介质及能量，再称量验收完整配置。

#### 输入

##### 产品流

###### 交流电 （`test_power`）

计量实际工厂验收/空载及规定负载测试需求、时长、失败测试及返工；不得额定kW乘编造时长或将采石场运行能量/吞吐移作制造。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 碎石灰石验收试验进料 （`test_stone`）

仅在实际放行协议消耗此进料时纳入；记录粒径/水分及扣复用后新进料；其他试验矿物物种另行；不假定每台机器必做石料负载测试。

- 选定流： 碎石灰石验收试验进料
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

###### 固体的泥土、石料、矿石或其他矿物质用的检选、筛分、分离，洗涤、破碎、粉磨、混合或捏和机械，固体的矿物燃料、陶土泥料、未硬化水泥、粉刷材料或其他粉状、糊状矿产品用的凝集、成型或造型机械，成型铸砂模机 （`finished_machine`）

验收完整配置固定式电动颚破或干式振动筛，声明安装传动/防护/耐磨面/悬挂/控制及留存液体；实际元数据收窄公开宽类别；质量不使破碎与筛分功能等价。

- 选定流： 固体的泥土、石料、矿石或其他矿物质用的检选、筛分、分离，洗涤、破碎、粉磨、混合或捏和机械，固体的矿物燃料、陶土泥料、未硬化水泥、粉刷材料或其他粉状、糊状矿产品用的凝集、成型或造型机械，成型铸砂模机 `2b2bc8e3-915f-49a6-a0f0-db69b9bba60a`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

###### 废弃破碎石灰石试验残留物 （`test_stone_waste`）

仅纳入移除交处理方废弃残留；记录水分/污染；循环试验石料为内部复用，外售合格石料为另产品并处理共产品，不自动作为废物。

- 选定流： 废弃破碎石灰石试验残留物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

### 过程：运输防护与发运（`packing`）

仅实际包装；包装排除于M，不规定默认防护配方。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`film`）

实际PE保护膜单独计量并排除于机器净M；记录配方/厚度及净发货领用。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

###### 窑干锯材（针叶材） （`timber`）

仅纳入明确树种/水分的实际窑干针叶锯材运输垫木；计质量非立方米；锯厂供货另需连接实际后续运输/供应方；不假定密度换算或热处理/检疫规则。

- 选定流： 窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
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
| allocation_direct | manufacturing | 优先直接工单领用及分表；按cp_allocation以实测负载/时间或实测批次需求分摊共用机床/吊装/抽风/涂覆/台架需求；验证各交换因果驱动，将分摊加排除需求核对原总量；不规定固定百分比或通用质量分配。 |  |
| allocation_variants | product_mix | 保留颚破及筛分配置分别记录；质量/制造/测试需求不同时不得全部按台数分摊共享负担；后备质量/经济基准须实测依据、不确定性/敏感性，并在复用前审查。 |  |
| allocation_scrap | waste_and_test_media | 保留原料输入及实际废物输出，不自动抵扣避免金属/矿物；内部复用原料/试验石仍为内部；试验矿物产出实际外售为产品时，披露独立产出质量/数量及有依据共产品方法，不把全部残留改称废物。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收序列号/配置 | 相同制造时期 | 相同制造厂及安装供货边界 | 每台验收净质量 | 校准；物料清单；流体加注；部件闭合；签署放行 |
| cp_fabrication | fabrication | 本过程各原子行 | measurement | 钢牌号/厚度；铸件供货状态；领用/退回；工单；kWh；切屑/粉尘；实测控制后颗粒质量 | 称量实际领用、有效原料退回及分收切屑/粉尘；计量设备/抽风，监测排放质量并记录时期/控制/粒径覆盖。 | kg; MJ | 每批次/工单/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；与验收台数相同 | 相同场址/配置；声明外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/验收台数闭合；缺失记录 |
| cp_welding | welding | 本过程各原子行 | measurement | 焊接规程/接头图；丝合金/形态；保护气组成；气瓶领用/退回质量；kWh；废品/返工；焊烟捕集/监测 | 确认实际焊接或螺栓场内路线；称量耗材/退回气，计量实际焊接/抽风；按实际监测补各焊烟/残留行。 | kg; MJ | 每批次/工单/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；与验收台数相同 | 相同场址/配置；声明外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/验收台数闭合；缺失记录 |
| cp_coating | coating | 本过程各原子行 | measurement | 底漆组分/固含/溶剂纯度；水质量或温度/密度/体积；领用/退回；留存涂层；kWh；回收；残留/废液；二甲苯排放质量 | 保留供应商配方/实际配制；测量原料/退回、膜留存、捕集/废物，计量公用工程；物种特定监测或闭合二甲苯平衡必须扣记录回收/留存/废物，不采用通用挥发比例或全部VOC当二甲苯。 | kg; MJ | 每批次/工单/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；与验收台数相同 | 相同场址/配置；声明外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/验收台数闭合；缺失记录 |
| cp_assembly | assembly | 本过程各原子行 | measurement | 物料清单/供应商；供货所含件边界；各件质量/类型；电机/框架路线；独立脂及流体体积/温度；留存加注质量；kWh；序列号 | 采用可追溯接收/领用/退回并称量各实物供货件；分测油体积/留存质量，核对内含轴承/润滑剂，计量安装/连接需求。 | kg; MJ; m3 | 每批次/工单/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；与验收台数相同 | 相同场址/配置；声明外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/验收台数闭合；缺失记录 |
| cp_acceptance | acceptance | 本过程各原子行 | measurement | 配置/序列号；签署测试方案；模式/时长；电气/防护/控制检查；对中/振动/转速结果；合格/失败/返工；kWh；试石粒径/水分/净进料/复用；残留处理方；实测M | 保留当前放行型号验收结果及实际台架表计；新试料净投入/移除废物与循环分称；不采用额定值乘假定时长或移入采石场能力。 | kg; MJ | 每批次/工单/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；与验收台数相同 | 相同场址/配置；声明外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/验收台数闭合；缺失记录 |
| cp_packing | packing | 本过程各原子行 | measurement | PE配方/厚度/质量；木材树种/水分/干燥/质量；领用/退回；发货序列号 | 分别称量实际保护膜及各垫木，排除于M，核对发货；质量基准不隐含体积/密度换算。 | kg | 每批次/工单/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；与验收台数相同 | 相同场址/配置；声明外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/验收台数闭合；缺失记录 |
| cp_allocation | manufacturing | shared_demand | measurement | 总表计公用工程；实测负载；实际机床/吊装/台架时间；服务产品；排除需求 | 分表或测量共用负载及因果运行时间；证明各驱动代表该需求并核对总供给。 | MJ; h | 每共用批次；每月核对 | 相同生产区间 | 全部消耗配置及排除操作 | 按实测因果需求分摊；可归属数量 / 验收机器数量 | 闭合；分表比较；不确定性；敏感性；有依据驱动 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_plate; frame_casting; fabrication_power; steel_offcuts; captured_dust; machining_pm; welding_wire; shield_argon; welding_power; wash_water; epoxy_primer; xylene_thinner; coating_power; wash_effluent; paint_residue; xylene_air; frame_finished; eccentric_shaft; pitman; jaw_plate; toggle_plate; flywheel; screen_mesh; exciter; bearing; motor; spring; belt; steel_bolt; guard; control; hydraulic_unit; hydraulic_oil; grease; assembly_power; test_power; test_stone; test_stone_waste; film; timber | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

normalize_mass前从匹配配置/时期记录获得q_item：扣有效退回后净领用、可归属公用工程或实测废物/物种除验收机器台数。废品/返工负担由验收产出承担，不除全部投产数。保留kg/M、MJ/M或m3/M分子；不以假定密度乘除质量/体积。公用工程单位换算及实测分摊运算另留可追溯计算。仅在披露相容范围及配置分别归一化后按质量加权合并变型。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | flows | 核对材质/合金、供货状态、化学组成、路线、地理、参考属性/单位及受纳介质；UUID仅支持身份；空身份及缺失供应方是不同缺口。 | 供应商资料；流身份/属性/单位直接审计 |
| quality_complete | machine | 全部安装物料清单件/留存流体核对验收净M，完整过程耗材/公用工程及分追损耗；不按残差分配缺失件重量。 | 物料清单；校准称量表；库存/物料平衡 |
| quality_period | records | 声明代表完整时期、工厂、外包、一手覆盖、配置变化、空载需求及不确定性；历史制造商案例提供架构，不提供当前生产数量。 | 工单；校准；验收记录；证据限制 |
| quality_acceptance | release | 采用实际签署型号测试方案/结果，覆盖机构、对中、传动、防护/控制、电气符合性及规定负载测试；样本能力/寿命声明不是通用工厂限值。 | 放行规范；序列号测试；校准台架 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1 kg输出、cp_mass实测M、一份验收完整颚破/筛分配置及安装供货核对；备用组/包装/试料排除于M；保留留存流体质量与单独油体积区别。 |  |
| validation_normalization | inventory | 每个适用非参考行采用normalize_mass及其声明采集协议；检查相同配置/时期、除法方向及分子单位。 |  |
| validation_route | processes | 将条件制造/焊接/涂覆匹配实际工单；排除成品框架/铸件/板及激振器/动颚内含轴/轴承/润滑剂重复；完整声明前缺失实际作业仍为缺口。 |  |
| validation_species | elementary_flows | 确认颗粒粒径覆盖及二甲苯异构体总量CAS1330-20-7、室外空气未特指介质及控制后质量；捕集固体/废液仍为废物；总VOC/室内暴露/水资源流不是这些排放。 |  |
| validation_coverage | dataset | 区分实测/计算/估算/排除/不适用/缺失，核对验收产出/损耗及分摊闭合；投影/计量通过不批准科学方法，也不建立从摇篮到工厂门完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明具体机器/时期制造模块；仅另建供应商/运输/处理覆盖后用于上游连接评价。 |
| excluded_use | 采石/矿物加工服务、运行能量/吞吐或寿命归一化比较、通用破碎/筛分等价及无依据完整从摇篮到工厂门声明。 |
| required_metadata | PCR标识；具体系列/型号/配置/物料清单；实测M/安装流体；验收标准；场址/时期；框架/材质路线；自制/外购；工序/能源边界；供应方/运输连接；包装；分摊；来源；版本。 |
| required_quality_disclosure | 一手实测覆盖、身份/供应方/数量缺口、排除路线、来源年龄/限制、换算/分摊依据、排放监测、不确定性及独立审查状态。 |
| update_trigger | 物料清单/安装供货变化；框架/传动/涂覆路线或验收标准修订；供应商/能源变化；新代表时期；身份/证据缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| metso-c-jaw-2024 | handbook | Metso Nordberg C系列颚破，4226-04-24，历史2024年4月样本，PDF/印刷第4页。https://www.metso.com/globalassets/brochure-nordberg-c-series-4226-04-24-en-agg.pdf | 仅型号系列特定非焊接销接/螺栓铸钢及轴承架构；不采用质量/功率/能力/寿命。 |
| sandvik-cj613-cj615 | handbook | Sandvik CJ613/CJ615颚破技术规范，TS5-1504/ENG ©2025，历史制造商保留版本，获取2026-10-05；PDF第1页及PDF/印刷第3页框架总成。https://www.rockprocessing.sandvik/siteassets/products/stationary-crushers-and-screens/pdf/ts5-15~1.pdf | 独立制造商反例：焊接框架包含铸钢前/后框、钢侧板及铸锰耐磨板；仅型号特定架构，不是通用材质或每台圆整重量。 |
| metso-cvb | handbook | Metso CVB系列倾斜筛，制造商页面注明2026年8月更新，获取2026-10-05，Durable screen design段落。https://www.metso.com/portfolio/cvb-series/ | 可配置筛的法兰安装激振器/轴承及无焊横梁；不采用寿命、角度/转速、质量或运行能量因子；湿式/移动供货不扩展本干式固定范围。 |
