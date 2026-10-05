---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-non-electric-water-heaters
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 其他非电热水器

## 1. 范围与适用性

本 PCR 覆盖声明供应配置的完整其他非电即热或储水热水器。燃气即热与储水设计不同；实际燃油或其他燃料或间接热配置须自身功能、热源接口及供应清单证据。电点火、控制、风机或泵可作为非电加热结构的辅助部件。通用水箱、换热器、燃烧器或太阳能就绪水箱不自动成为完整类别输出。质量归一化制造，不使不同热水服务等价。来源：`un-cpc-44827`；`wco-hs2022`；`rinnai-condensing`；`bw-gas-storage`；`bw-indirect`；`bock-oil`。

CPC 3.0 44827 明确引用 HS 2022 8419.11（燃气即热）及8419.19（其他）；太阳能热水器为44826或8419.12，电热器为44817，集中锅炉为44825。HS84.19 将非电即热或储水热水器置于通用非家用热处理机械之后，以分号分隔。CPC 家用上级标题本身不能证明每个 HS 关联品仅限家用。声明家用、商用或工业主要功能，按实际供应状态审查存疑工业或多功能混合、锅炉组合、通用间接水箱及独立换热单元或零件。

Rinnai 说明冷凝燃气即热器的随附隔离或泄压组件及单独安装方供应排烟。Bradford White 燃气储水器说明搪瓷、阳极、泡沫及可转换燃气控制；其间接型号说明玻璃涂层碳钢盘管与锅炉供回接口，未声明燃烧器。Bock 燃油储水资料所列运输质量不含燃烧器和控制，因此须核实供应热水器的完整性。这些为不同产品事实，不是一个通用燃气型号配方。单独部件及 STIEBEL 太阳能就绪混合水箱是邻接反例（`stiebel-hybrid-adjacent`）；Rheem 太阳能辅助加热整机为邻接类别，不自动等于其他非电热水器（`rheem-solar-adjacent`）。目录容量、额定燃料功率、运输质量、效率、保修、寿命及温度不作为工厂生产默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-non-electric-water-heaters |
| classification_refs | CPC 3.0:44827；HS 2022:8419.11,8419.19 |
| covered_products | 完整其他非电即热或储水热水器；实际燃气、储水、其他燃料或间接配置须主要功能及供应状态审查 |
| excluded_products | 太阳能或电热水器、集中采暖锅炉；独立水箱或换热器或燃烧器或零件不能作为完整输出；工业多功能边界须审查 |
| representative_product | 声明一个完整验收配置，不将一个燃气型号普遍化 |
| production_route | 实际自制外购容器、换热器、燃烧器、控制、内衬、保温、集成及工厂试验路线 |
| market_state | 完整验收工厂供应清单，含另箱随附附件及实际保留填充；排除仅安装方供应品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应完整非电热水器，不是消费者热水服务 |
| How much | 1 kg 同一配置验收净整机质量 |
| How well | 满足实际水路、燃烧、压力、泄漏、安全及声明验收要求 |
| How long or cycle | 一个制造交付期间，无默认寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他非电热水器 `5df9cf00-65b4-4cb5-b2b9-46664241c680` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要功能及家用或商用或工业市场；实际分类及供应边界；型号修订；即热或储水；实际燃气或燃料或间接热源；冷凝或非冷凝；水箱或盘管或燃烧器自制外购；防腐内衬或阳极或保温配方；排烟或风机或控制；随附与安装附件；实际保留填充；压力或泄漏或燃烧或电气工厂验收；校准净质量及同期间验收 N；供应商地理电压单位；物种介质及不确定性 |

全部限定须在数据包声明；已匹配完整类别参考身份，但具体供应状态和主要功能仍须核实。质量不表示用户热服务等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `physical_basis` | material/water/species | 质量 | kg | 每项采用自身分析、含水、干湿基准、实测温度密度、库存及反应；总质量不等于含元素。 |
| `gas_state` | test gas | 体积 | m3 | 声明气体表基准与实际温压湿度；质量或体积用实际组成密度转换，不能转移电厂案例因子。 |
| `energy_interface` | energy | 交付能量 | MJ | 电力1 kWh=3.6 MJ。热供应质量乘自身焓减独立返回质量乘返回自身焓，共同零点；总供热扣返回一次，已净不再扣。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 纳入收料、实际場内制造或防腐或保温、集成、工厂验收或返工、服务、废物及包装至验收放行。 | rinnai-condensing; bw-gas-storage; bw-indirect; bock-oil |
| `make_buy` | supplier_interface | 外购完整水箱或燃烧器或换热器或控制器的上游材料操作计一次。自制改用原料及实际操作。部分供应模块声明剩余工作。内部转移成对，每项负荷计一次。 | rinnai-condensing; bw-gas-storage; bw-indirect; bock-oil |
| `factory_use` | production | 纳入实际工厂水压或泄漏及燃烧或功能试验水、燃气或油或电力及损失；分离保留交付填充及附件。用户燃料或热水、安装排烟或管或调试及使用阶段冷凝水在工厂生产之外。制造商安装说明不证明工厂试验数量。 |  |
| `bom_extension` | route | 原子卡为条件性锚点，不是通用配方。增补每种实际牌号、涂层组分、泡沫前体或发泡剂、焊接气、燃料、附件、填充、废物及排放物种；要求实际配方或分析及路线。not_applicable 需不存在证据，未知不等于零。 |  |
| `upstream` | links | 实际上游生产或运输及外部处理链接需供应状态地理期间。外购热嵌入供应商锅炉燃料不是场内燃烧；供应商缺口解决前不声明完整摇篮到大门。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际投入牌号或完成状态及供应商交付接口 |
| starting_condition_role | 工厂收料边界 |
| product_classification_scope | 完整其他非电热水器，实际主要功能及供应状态已审查 |
| recursive_input_rule | 同类别外购前体上游计一次，仅后续场内工作；内部转移成对抵消 |
| upstream_dataset_requirement | 实际牌号配方状态供应商地理期间；链接完整外购品，不再次展开嵌入材料 |
| disclosure | 自制外购、完整供应清单、场内过程、试验燃料或水、保留填充、安装排除、分类缺口、分母及不确定性 |

### 架构及供应状态矩阵

| 配置 | 实际制造或集成 | 限制 |
| --- | --- | --- |
| 燃气即热 | 实际燃烧器、换热器、点火、燃气阀、感测、排烟或风机及条件性冷凝水路径 | 不强加储水箱；冷凝及非冷凝需实际金属及架构 |
| 燃气储水 | 实际容器或烟道、内衬、阳极、保温、外壳、燃烧器及控制 | 移动住宅屋顶排管来源为特定配置，不是默认随附件 |
| 燃油或其他燃料 | 实际随附燃烧器或燃油泵或燃烧接口与容器或换热器；增补每种真实燃料及物种 | Bock 运输质量不含燃烧器或控制；称量完整供应状态，其他燃料配方未解决 |
| 间接或混合 | 实际加热盘管及外部热供应或返回、水箱及控制；声明实际辅助加热 | 通用盘管水箱、独立换热器、集中锅炉、太阳能就绪或电辅助混合须分类审查；不强制场内燃烧器 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 容器、换热器及壳体制造 | conditional | 条件性自制成型、焊接或钎焊、清洗、防腐内衬或烧成、保温及外壳；外购完整水箱或换热器不重复嵌入制造 | foreground | 每 1 kg 参考流 |
| `integration` | 热水器集成 | required | 实际燃烧器或间接热接口、控制、阀、风机或排烟、耐火、密封及随附附件或填充；燃气即热不要求储水箱 | foreground | 每 1 kg 参考流 |
| `test` | 工厂验收及返工 | required | 实际压力或泄漏、防腐完整性、燃烧点火或燃气安全或热功能及辅助电气；追踪消耗燃料及试料，排除安装调试 | foreground | 每 1 kg 参考流 |
| `dispatch` | 包装及验收放行 | required | 完整验收实际供应清单；净产品质量排除运输包装及消耗试料 | foreground | 每 1 kg 参考流 |
| `services` | 剩余公用工程 | conditional | 仅共同期间未分配剩余及实际场内产能，不重复全厂进口 | foreground | 每 1 kg 参考流 |

### 过程：容器、换热器及壳体制造（`fabrication`）

条件性自制成型、焊接或钎焊、清洗、防腐内衬或烧成、保温及外壳；外购完整水箱或换热器不重复嵌入制造。

#### 输入

##### 产品流

###### 碳钢板 （`steel_sheet`）

仅自制容器或外壳实际认证碳钢板。不采用板桩或双语身份冲突，记录牌号状态及自身铁或碳分析。

- 选定流：碳钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 不锈钢板 （`stainless`）

条件性实际深加工不锈钢平板及供应商牌号用于自制换热器或容器或壳体；未深加工轧材需另匹配身份。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 铜管 （`copper_tube`）

实际认证压力铜管用于自制换热器；娱乐滑管备注不兼容，UUID 未解决。

- 选定流：铜管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 银钎料 （`braze`）

仅场内实际消耗含银钎料；采集自身银或铜成分，助焊剂另列；软焊料不自动等于此合金。

- 选定流：银钎料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 钢焊丝 （`weld_wire`）

自制焊接实际焊丝牌号及成分；非熔化极路线可证实不存在。

- 选定流：钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 气态氩 （`argon`）

仅实际纯气态保护或吹扫氩；液态采购或二氧化碳混合不同，须自身供应状态行。

- 选定流：气态氩
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 搪瓷熔块 （`enamel`）

实际自制搪瓷熔块或配方及内衬或烧成；完整外购搪瓷水箱嵌入计一次。其他表面前处理或涂层化学需独立原子行。

- 选定流：搪瓷熔块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 镁阳极棒 （`magnesium`）

实际热水器随附完整镁防腐阳极；采集合金及净随附质量，不能替代石墨或碳阳极。

- 选定流：镁阳极棒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 玻璃棉保温材料 （`glass_wool`）

仅实际玻璃棉保温牌号。不将发表堆密度转为工厂质量因子。

- 选定流：玻璃棉 `85977f80-d866-44ec-bac9-52cb2d9fb421`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 硬质聚氨酯保温泡沫 （`pu_foam`）

仅实际外购已固化硬质聚氨酯保温；场内发泡改列每种真实多元醇或异氰酸酯或发泡剂或催化剂及损失，不能采用通用 OSB 胶配方。

- 选定流：硬质聚氨酯保温泡沫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 过程水 （`water`）

实际制造清洗或工艺供应；要求实际水分、计量温度密度及循环库存。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 异丙醇 （`ipa`）

仅实际化学异丙醇清洗投入；混合清洗剂需实际组成行，不假定蒸发比例。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 碳钢管 （`steel_tube`）

实际自制间接盘管或水箱烟道碳钢管；保留认证牌号及压力或表面状态；完整外购涂层盘管制造嵌入计一次。

- 选定流：碳钢管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 聚醚多元醇 （`polyol`）

仅实际化工厂供应的环氧丙烷嵌段聚合聚醚多元醇，匹配此选定路线用于自制聚氨酯发泡。其他聚醚牌号或路线须自身身份；要求实际配方、羟值及分析记录，不假定通用配方、生物基比例或性能。

- 选定流：聚醚多元醇 `328068ba-3cd2-44c7-a118-8274c9c7885b`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 聚合二苯基甲烷二异氰酸酯 （`pmdi`）

仅实际泡沫级聚合MDI；OSB胶树脂不兼容。要求实际异氰酸酯化学或分析及其他发泡剂或催化剂行；供应已固化泡沫不重复场内配方。

- 选定流：聚合二苯基甲烷二异氰酸酯
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

###### 外购交流电 （`fabrication_electricity`）

实际本过程表负荷，不与全厂或剩余电力叠加；选定中国1–35千伏须实际交付接口匹配。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：bw-indirect; bw-gas-storage

###### 天然气 （`fabrication_natural_gas`）

计量实际工厂燃烧试验或场内烧成燃气；拒绝特定电厂组成或供应商。声明实际燃气规格及表温压湿度密度，不纳入使用燃料负荷。

- 选定流：天然气
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：bw-indirect; bw-gas-storage

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废钢 （`steel_scrap`）

实际独立外送废物，记录自身组成或含水或库存及处理接口；回收内部返回成对。废物质量不是水或空气元素排放。

- 选定流：废钢 `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：bw-indirect; bw-gas-storage

###### 废铜 （`copper_scrap`）

实际独立外送废物，记录自身组成或含水或库存及处理接口；回收内部返回成对。废物质量不是水或空气元素排放。

- 选定流：废铜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：bw-indirect; bw-gas-storage

###### 搪瓷废水污泥 （`enamel_sludge`）

实际独立外送废物，记录自身组成或含水或库存及处理接口；回收内部返回成对。废物质量不是水或空气元素排放。

- 选定流：搪瓷废水污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：bw-indirect; bw-gas-storage

###### 废异丙醇溶剂 （`spent_solvent`）

实际独立外送废物，记录自身组成或含水或库存及处理接口；回收内部返回成对。废物质量不是水或空气元素排放。

- 选定流：废异丙醇溶剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：bw-indirect; bw-gas-storage

##### 基本流

###### 异丙醇 （`ipa_air`）

实际独立实测物种向未指定普通空气释放，匹配控制后浓度、流量、时段及状态及独立逸散证据。每项计量释放仅归属实际制造或工厂试验排放源及期间一次；不在过程行上叠加重复全厂总量。仅实际场内来源，不将差额推为空气。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：bw-indirect; bw-gas-storage

###### 化石二氧化碳 （`fabrication_co2`）

实际独立实测物种向未指定普通空气释放，匹配控制后浓度、流量、时段及状态及独立逸散证据。每项计量释放仅归属实际制造或工厂试验排放源及期间一次；不在过程行上叠加重复全厂总量。仅实际场内来源，不将差额推为空气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：bw-indirect; bw-gas-storage

###### 化石一氧化碳 （`fabrication_co`）

实际独立实测物种向未指定普通空气释放，匹配控制后浓度、流量、时段及状态及独立逸散证据。每项计量释放仅归属实际制造或工厂试验排放源及期间一次；不在过程行上叠加重复全厂总量。仅实际场内来源，不将差额推为空气。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：bw-indirect; bw-gas-storage

###### 二氧化氮 （`fabrication_no2`）

仅实际实测分子二氧化氮向空气；亚硝酸根及以二氧化氮当量报告 NOx 为不同身份，未解决。

- 选定流：二氧化氮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：bw-indirect; bw-gas-storage

###### 二氧化硫 （`fabrication_so2`）

实际适用场内燃烧实测分子二氧化硫，普通空气介质；拒绝室内或平流层或水候选。

- 选定流：二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：bw-indirect; bw-gas-storage

###### 水蒸气 （`fabrication_water_vapour`）

实际独立实测物种向未指定普通空气释放，匹配控制后浓度、流量、时段及状态及独立逸散证据。每项计量释放仅归属实际制造或工厂试验排放源及期间一次；不在过程行上叠加重复全厂总量。仅实际场内来源，不将差额推为空气。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：bw-indirect; bw-gas-storage

### 过程：热水器集成（`integration`）

实际燃烧器或间接热接口、控制、阀、风机或排烟、耐火、密封及随附附件或填充；燃气即热不要求储水箱。

#### 输入

##### 产品流

###### 搪瓷热水器水箱 （`tank_module`）

仅声明热水器配置的实际供应搪瓷储水箱。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：搪瓷热水器水箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 燃气热水器燃烧器总成 （`burner_module`）

仅声明热水器配置的实际供应燃气热水器燃烧器。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：燃气热水器燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 燃油燃烧器总成 （`oil_burner`）

仅声明热水器配置的实际供应燃油燃烧器。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：燃油燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 热水器换热器 （`exchanger_module`）

仅声明热水器配置的实际供应热水器换热器。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：热水器换热器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 热水器泄压阀 （`valve`）

仅声明热水器配置的实际供应泄压阀。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：热水器泄压阀
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 热水器燃气控制阀 （`gas_valve`）

仅声明热水器配置的实际供应燃气控制阀。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：热水器燃气控制阀
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 热水器电子控制器 （`controller`）

仅声明热水器配置的实际供应电子控制器。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：热水器电子控制器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 热水器燃烧风机 （`fan`）

仅声明热水器配置的实际供应燃烧风机。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：热水器燃烧风机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 热水器烟气排管 （`vent`）

仅声明热水器配置的实际供应烟气排管。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：热水器烟气排管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 耐火黏土砖 （`refractory`）

仅声明热水器配置的实际供应耐火黏土砖。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：耐火黏土砖
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 硅橡胶密封垫 （`gasket`）

仅声明热水器配置的实际供应硅胶垫。外购完整状态上游计一次；自制采用实际原料操作并抵消内部转移。核实随附与安装方供应附件。

- 选定流：硅橡胶密封垫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 去离子水 （`retained_water`）

仅实际产品工厂交付保留去离子水；多数排出试水不属于交付质量。其他保留填充须实际组成及独立身份。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 黄铜排水阀 （`drain_valve`）

实际随附黄铜排水阀，独立称量供应完成状态；不是通用黄铜原料或仅安装阀。

- 选定流：黄铜排水阀
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 钢制安装支架 （`bracket`）

实际供应钢制安装支架及随附组件；Rinnai室内组件不同于室外配置及单独购买屋顶排管。

- 选定流：钢制安装支架
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 外购交流电 （`integration_electricity`）

实际本过程表负荷，不与全厂或剩余电力叠加；选定中国1–35千伏须实际交付接口匹配。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：rinnai-condensing; bock-oil

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂验收及返工（`test`）

实际压力或泄漏、防腐完整性、燃烧点火或燃气安全或热功能及辅助电气；追踪消耗燃料及试料，排除安装调试。

#### 输入

##### 产品流

###### 自来水 （`test_water`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 压缩空气 （`test_air`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 天然气 （`natural_gas`）

计量实际工厂燃烧试验或场内烧成燃气；拒绝特定电厂组成或供应商。声明实际燃气规格及表温压湿度密度，不纳入使用燃料负荷。

- 选定流：天然气
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 丙烷 （`propane`）

仅实际丙烷工厂试验；记录液化供应及汽化接口。混合液化石油气不是纯丙烷，需实际混合身份。

- 选定流：丙烷 `9c0d706a-c414-4afb-ad0c-4777c4072311`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 轻燃油 （`oil_fuel`）

仅实际匹配轻燃油工厂试验消耗；选定流原生体积 m3，质量换算用独立实测批次密度或温度。不采用目录密度或热值因子。

- 选定流：轻质燃油 `2a02a3f7-8d3b-4556-aebc-318fddcbfe1e`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：rinnai-condensing; bock-oil

###### 外购交流电 （`test_electricity`）

实际本过程表负荷，不与全厂或剩余电力叠加；选定中国1–35千伏须实际交付接口匹配。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：rinnai-condensing; bock-oil

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 热水器工厂试验废水 （`effluent`）

实际独立外送废物，记录自身组成或含水或库存及处理接口；回收内部返回成对。废物质量不是水或空气元素排放。

- 选定流：热水器工厂试验废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：rinnai-condensing; bock-oil

###### 不合格非电热水器 （`heater_reject`）

实际终止不合格热水器外送；可修返回保持成对内部返工；废品质量不计合格分母。

- 选定流：不合格非电热水器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：rinnai-condensing; bock-oil

##### 基本流

###### 化石二氧化碳 （`co2`）

实际独立实测物种向未指定普通空气释放，匹配控制后浓度、流量、时段及状态及独立逸散证据。每项计量释放仅归属实际制造或工厂试验排放源及期间一次；不在过程行上叠加重复全厂总量。仅实际场内来源，不将差额推为空气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：rinnai-condensing; bock-oil

###### 化石一氧化碳 （`co`）

实际独立实测物种向未指定普通空气释放，匹配控制后浓度、流量、时段及状态及独立逸散证据。每项计量释放仅归属实际制造或工厂试验排放源及期间一次；不在过程行上叠加重复全厂总量。仅实际场内来源，不将差额推为空气。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：rinnai-condensing; bock-oil

###### 二氧化氮 （`no2`）

仅实际实测分子二氧化氮向空气；亚硝酸根及以二氧化氮当量报告 NOx 为不同身份，未解决。

- 选定流：二氧化氮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：rinnai-condensing; bock-oil

###### 二氧化硫 （`so2`）

实际适用场内燃烧实测分子二氧化硫，普通空气介质；拒绝室内或平流层或水候选。

- 选定流：二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：rinnai-condensing; bock-oil

###### 水蒸气 （`water_vapour`）

实际独立实测物种向未指定普通空气释放，匹配控制后浓度、流量、时段及状态及独立逸散证据。每项计量释放仅归属实际制造或工厂试验排放源及期间一次；不在过程行上叠加重复全厂总量。仅实际场内来源，不将差额推为空气。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：rinnai-condensing; bock-oil

### 过程：包装及验收放行（`dispatch`）

完整验收实际供应清单；净产品质量排除运输包装及消耗试料。

#### 输入

##### 产品流

###### 瓦楞纸板 （`board`）

仅实际 C、E 或 F 型多层瓦楞纤维板，含再生材料且纤维含量至少80%，与此选定身份匹配；保留供应商组成及状态证据。此为板材，不是任意纸板或外购完整纸箱。不入验收净质量。

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

###### 聚乙烯包装薄膜 （`pe_film`）

实际聚乙烯薄膜包装，不是树脂或箱包物品；供应状态分类冲突仍待身份审查。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 木托盘 （`pallet`）

仅匹配供应规格的实际欧标木托盘；其他托盘设计需自身身份。包装不入验收净质量。

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

###### 外购交流电 （`dispatch_electricity`）

实际本过程表负荷，不与全厂或剩余电力叠加；选定中国1–35千伏须实际交付接口匹配。

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

###### 其他非电热水器 （`reference_product`）

选定完整验收配置包括实际保留填充及附件，排除包装和废品。

- 选定流：其他非电热水器 `5df9cf00-65b4-4cb5-b2b9-46664241c680`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：

##### 废物流

##### 基本流

### 过程：剩余公用工程（`services`）

仅共同期间未分配剩余及实际场内产能，不重复全厂进口。

#### 输入

##### 产品流

###### 外购蒸汽热量 （`purchased_heat`）

仅实际中国天然气区域或工业交付热匹配选定身份，不是通用蒸汽供应商。记录实际热接口，净供回热独立核对，供应商上游燃料不是场内。

- 选定流：区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 外购交流电 （`electricity`）

仅匹配中国1–35千伏用户侧供电的未分配剩余；实际其他电压或地理须自身身份，场内产能另列。

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
| cp_material | all | actual inputs | meter_issue | 具体物种牌号；供应状态；原单位；气体实际温压或湿度及仪表标准状态；投料；各项水分密度或含量；自制外购；库存；Q；N | 同一期间按独立交换核对计量及仓储、配方和成对返回；Q 含废品或返工负荷，保留各项自身分析。 | kg; m3 | 每批或连续表 | 同一制造期间 | 同一配置工厂及供应商 | 分配数量 / 验收设备数量 | 牌号或成分检验、计量及库存 |
| cp_energy | all | electricity and heat | meter | 各过程表；总进口；实际产能；出口；储能；供回蒸汽各质量温压焓；已净发票；Q；N | 核对同一期间和单位的各过程表，共享服务仅尚未分配剩余；调查负剩余。供应或返回蒸汽各用自身 kg 和 MJ/kg，共同零点，返回仅扣一次。 | MJ | 连续表及各试验 | 同一制造期间 | 同一配置及场址 | 分配能量 / 验收设备数量 | 校准表、供电接口、热力及分配不确定性 |
| cp_waste | all | specific waste | transfer | 各物流质量和自身含水或含量；期初末库存；内部返回；外送处理；Q；N | 称重、取样及处理转移，区分返回再用、回收及处置，不能推定替代抵扣。 | kg | 每批转移 | 同一制造期间 | 同一配置场址及处理接口 | 分配废物 / 验收设备数量 | 废物联单、取样及库存 |
| cp_emission | all | specific species/compartment | species_measurement | 实际物种介质；浓度；排气或液流；水分温压基准；捕集或销毁；各项分析；Q；N | 采用匹配物种及介质实测或核实实际技术因子；调查闭合，捕集不是销毁，差额不是空气排放。 | kg | 实际试验及排放期间 | 同一制造期间 | 同一配置场址边界 | 分配排放 / 验收设备数量 | 采样流量和综合不确定性 |

原始期间协议：N 为同一配置验收设备数，D 为该批校准验收净质量之和，M=D/N。每项 Q 为同期间归属数量，含废品、返工和工厂试验负荷；先 q_item=Q/N，再 q_ref=Q/D。包装及废品质量不入 D，保留实际各项原单位和各项成分、库存及反应记录。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | 覆盖实际全部交换，自制外购及附件、填充、试料分离；缺口明确 | 实际 BOM、路线及供应商 |
| mass_period | cohort | 同一配置期间和验收记录、校准质量及库存；不跨配置均值 | 校准及期间台账 |
| balance_uncertainty | physical balances | 按各项自身水分、密度、含量、反应及成对返回核对，与综合不确定性比较 | 实测、采样、反应及分配证据 |
| cohort_raw | common-period records | Naccepted、Dnet 与 Qattr 对应同一配置和期间。Dnet 为校准合格净质量之和；M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet。Qattr 包含废品、返工和工厂试验，Dnet 排除包装、废品及已消耗试料，保留每项原单位。 | 实际期间及校准验收台账 |
| species_sampling | air or liquid releases | 控制后物种浓度乘同期间匹配气液流量或积分时间，校正温压干湿及单位；逸散独立实测。不能用碳闭合推导 CO 或 NOx，NO2 不等于 NOx 当量。 | 实际采样、流量、时段及状态记录 |
| provider_gaps | links | 每个实际上游和处理匹配状态地理期间；未核实不可作为完整足迹 | 直接记录及替代披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | 确认主要功能、声明的家用或商用或工业市场、型号或修订、交付配置及激活架构。每个实际交换须匹配身份、属性、单位及供应商；不存在、零及未知保持不同。 |  |
| `denominator` | all inventory rows | 全部清单采用同一验收批次及共同期间。核实校准验收净质量和 N，废品及包装质量排除。核对 q_item=Q/N 后按同一平均 M 归一化；混合配置无效。 |  |
| `double_count` | make_buy | 核对完整外购模块与自制材料及操作、保留填充或附件与工厂消耗、成对内部转移与外部投入。每项实际负荷计一次。 |  |
| `water_close` | physical water records | 每项采用自身实测水比例、密度及干湿基准：新水及输入水分、反应水和期初库存减期末库存、产品保留、排水和蒸发；内部返回成对抵消。按采样、仪表及分配综合不确定性调查实测闭合，无通用容差。 |  |
| `species_close` | material and chemical records | 每种含金属或化学物分别闭合，采用各输入、产品、废料、污泥、液体及释放自身匹配分析和干湿基准、反应计量及库存。总质量不是含元素量。不得将全部清单质量规则用于能量或运输。 |  |
| `solvent_close` | solvent records | 区分保留溶剂、回收返回、捕集液体或介质、已证实销毁、废水或非空气剩余及实际空气物种释放。捕集不是销毁；不明差额应调查，不分配至空气。 |  |
| `utility_close` | energy records | 按同一期间及单位核对外购进口、实际场内产能、出口及储能变化和已分配制造、集成、试验或包装负荷。共享行仅未分配剩余；按期间、单位及综合计量不确定性调查负剩余，不截零。 |  |
| `steam_close` | steam and condensate | 相对于共同零点，按计量压力或温度采用供应质量乘供应自身 MJ/kg 和返回质量乘返回自身 MJ/kg。总供应只扣返回一次；已净发票不得再扣。物理蒸汽或冷凝水质量衡算独立于能量。 |  |
| `species_emissions` | air releases | 独立校验每种排放物及环境介质。燃料碳衡算不能单独确立 CO 或 NOx。NO2 质量不是以 NO2 当量报告的 NOx；报告约定与实际物种身份保持不同。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 实际配置工厂生产前景数据及明确已完成上游链接的模型 |
| excluded_use | 跨配置功能等价、默认消费者服务、默认重量或制造因子、缺失供应商的完整足迹 |
| required_metadata | 第3节限定及原始期间分母、实际架构、自制外购和边界 |
| required_quality_disclosure | 采集覆盖、供应商或身份或配方缺口、分配和综合不确定性、全部条件及排除 |
| update_trigger | 型号或架构、配方、供应状态或地区、计量、工厂试验或处理路线改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| rinnai-condensing | handbook | Tankless Water Heater Installation and Operation Manual; 100000467; 10/2017; https://media.rinnai.us/salsify_asset/s-378ffc11-7201-4965-a2f1-22e2286e360c/100000467-N%20Series%20Residential%20Condensing%20Installation%20and%20Operation%20Manual.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| bw-gas-storage | handbook | Energy Saver Gas Water Heater; 107-B-0213-A; copyright2013; https://docs.bradfordwhite.com/Spec_Sheets/107_0213.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| bw-indirect | handbook | Residential Single-Wall Indirect Water Heater; INT554-1125; copyright2025; https://docs.bradfordwhite.com/Spec_Sheets/INT554_Current.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| bock-oil | handbook | Oil-Fired Water Heaters — Turboflue heat exchanger; Doc80014 Rev1/16; Bock authored distributor-hosted original; https://cdn.lsicloud.net/torrcosupl/productdocs/Bock_Water_32E_Specification_Sheet.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| un-cpc-44827 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| wco-hs2022 | official_guidance | HS2022 Chapter84 nomenclature; HS2022 Chapter84; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1684_2022e.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| rheem-solar-adjacent | handbook | Premier Hiline Solar Water Heater Owner’s Guide and Installation Instructions; 347490 RevA March2014; https://assets.ctfassets.net/phagqs82lusw/54M47Qq3UcOeGSEmag42WK/1aa2a920b6ad04b7293a09d15a630595/installinstruct-Rheemsolarpremierhiline52Cseries-347490RevA-2014Mar.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| stiebel-hybrid-adjacent | handbook | SB-E Single Coil DHW Tanks with Integral Backup Heating Element; undated publisher page; inspected 2026-10-02; https://www.stiebel-eltron-usa.com/products/sb-e-single-coil-domestic-hot-water-tanks-ingetral-backup-element-solar-geothermal-or-hydronic-applications | 产品架构或类别边界；非工厂配方或数量默认值 |
