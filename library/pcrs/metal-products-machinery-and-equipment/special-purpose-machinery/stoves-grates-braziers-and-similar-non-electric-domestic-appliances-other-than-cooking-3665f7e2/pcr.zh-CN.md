---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stoves-grates-braziers-and-similar-non-electric-domestic-appliances-other-than-cooking-3665f7e2
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 非电家用钢铁室内取暖炉、炉箅及火盆

## 1. 范围与适用性

本候选方法覆盖完整非电家用钢铁室内取暖炉、炉箅、火盆及类似设备。保留固体燃料、燃油及燃气架构，自立、嵌入、开放炉箅和开放火盆设计，以及铸铁、钢板制造或混合钢铁结构。按验收净设备质量归一化一个配置特定的工厂数据包；不能使不同供暖服务功能等价。整件铝或陶瓷设备不能仅因含钢螺钉或炉箅而自动纳入。

排除烹饪器具及暖盘器、电加热器具、集中供暖锅炉及散热器、工业炉和另售零件。审查烹饪供暖混合设备主要功能，不能仅按外观或燃料选择。带电动风扇或鼓风机的非电空气加热器或热风分配器属相邻 CPC44824；辅助鼓风设计须实际主要功能审查。CPC3.0:44822 是分类坐标，不是配方，也不证明所有保留叶节点均具有可用方法。

实际查阅 Jotul 制造说明区分自有铸造合金调整及砂型与进口完成铸件在另一工厂装配，并覆盖具有板金生产的燃气或木材炉及嵌入式设备。独立 Gazco 或 Stovax 产品正文区分钢炉体及铸铁门的燃气设备、常规或平衡烟道、手动或可选遥控；钢炉系列含需审查的锅炉反例。Franco Belge 原始手册说明使用煤油的室内燃油炉，并识别衬里、门绳、玻璃及炉箅为条件性部件。Stovax 原始手册覆盖家用固体燃料炉箅及燃气嵌入设备，区分安装调试与使用。这些案例说明替代路线，而非通用物料清单或工厂数据。AGA 或 ESSE 烹饪及烹饪供暖示例属于相邻反证，不是通用室内取暖证据。任何目录质量、功率、效率、燃料率、再生比例宣传及保修都不作工厂默认值。实际配置资料须解决未展示火盆及未知材料。

来源：`un-cpc-3-0-44822`; `jotul-cast-iron`; `jotul-manufacture`; `stovax-stoves`; `gazco-gas`; `stovax-steel`; `franco-oil`; `stovax-open-grate`; `aga-adjacent-cooking`; `esse-adjacent-cook-heat`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stoves-grates-braziers-and-similar-non-electric-domestic-appliances-other-than-cooking-3665f7e2 |
| classification_refs | CPC3.0:44822 |
| covered_products | 第1节完整非电家用钢铁非烹饪室内取暖类别 |
| excluded_products | 第1节相邻主要功能及非家用或电热或烹饪或独立零件 |
| representative_product | 选定实际型号配置的完整验收家用电器；不作跨家族代表重量 |
| production_route | 实际铸造或钢材加工或外购铸件；实际燃料特定燃烧及衬里、视窗或控制 |
| market_state | 完整验收交付配置含实际附件和首次填充；净质量排除包装及废品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一个实际家用功能整机，不是其下游家用服务 |
| How much | 1 kg 同一配置验收净整机质量 |
| How well | 满足声明声明燃烧或泄漏或机械安全、功能、接口及实际验收计划 |
| How long or cycle | 一个制造及交付期间；无默认使用寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铁或钢制火炉、炉篦、烤炉及类似非电动家用器具（烹饪用器具及加温器除外） `e4f06ae9-21fe-4b4e-a2ba-46b1d8824f14` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要功能；家用市场；型号修订；燃料及室内取暖主要功能；钢铁炉体；燃烧或烟道架构；实际衬里或涂料化学或缺口；随附附件及填充；自制外购；供应状态；实际验收试验；校准净质量；N；场址期间；公用工程供应条件；废物及排放；上游或处理；分配不确定性 |

必需限定信息须在数据包明确声明。已核实完整类别参考产品身份；不得以单一子类型或部件代替。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `material_species` | physical material/species records | 质量 | kg | 按各项自身含水或含金属或化学分析、库存和反应记录换算。总量不能代替元素量；不用于电力或运输。 |
| `energy_interface` | electricity, steam, condensate and fuel | 交付能量或燃料质量及净热值 | MJ; kg; MJ/kg | 电力保留 kWh，1 kWh=3.6 MJ。蒸汽供回质量各乘自身相对于共同零点 MJ/kg；总已净区别，返回仅扣一次。燃料用自身质量及净热值，不能代替供应蒸汽。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 纳入从收料、场内制造、燃料特定燃烧器或炉箅集成、集成、工厂试验或返工、公共服务、废物及包装至验收放行的实际操作。 | jotul-manufacture; stovax-stoves |
| `make_buy` | supplier_interface | 各部件选择实际自制或外购状态：完整外购铸件、燃烧器、阀、视窗或衬里模块的嵌入投入计一次；自制改用实际原料及操作。仅计后续场内工作。内部转移成对，不把场内中间品列为外购。 | jotul-manufacture; jotul-cast-iron |
| `factory_use` | production | 实际工厂燃料、泄漏试验气体、清洗水及试验电力在消耗时为生产负荷；重复工装须库存或复用记录。区分实际工厂燃烧试验排气或灰与家庭全寿命燃烧、烟囱或建筑安装及安装人员调试；后者属下游，不是制造默认值。 | stovax-open-grate |
| `bom_extension` | route | 卡片为具体条件性锚点，不是通用配方。审查实际物料清单、配方、试料、包装、燃料、废物和物种。增补每个缺失实际原子交换；仅有不存在证据时记录 not_applicable，未知不同于零。实际衬里或涂料化学未知仍保留相关架构，并须具体匹配身份。 | franco-oil; gazco-gas |
| `upstream` | links | 按实际牌号、状态、交付地理或电压及期间链接供应商生产和运输；计量废物转移后的外部处理与场内排放不同。供应商链接未完成时此工厂包不是完整摇篮到大门结果。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所选实际输入的供应牌号、完成状态及交付接口 |
| starting_condition_role | 工厂前景收料边界 |
| product_classification_scope | 第1节审查的完整非电家用钢铁室内取暖类别 |
| recursive_input_rule | 同类别外购前体上游计一次，只展开后续场内加工；成对内部转移抵消，不无限递归 |
| upstream_dataset_requirement | 匹配实际牌号、配方、完成工艺、地理期间及供应接口；披露缺失供应商和替代 |
| disclosure | 实际配置、自制外购、覆盖和条件不适用、运输处理、计量分母及不确定性 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 实际铸造或板材加工及表面处理 | conditional | 仅实际场内铸造熔炼、造型、机加工、成形、焊接、清洗或涂覆；外购铸件不重复嵌入制造 | foreground | 每 1 kg 参考流 |
| `integration` | 室内取暖设备集成 | required | 实际铸铁或钢炉体、燃料特定燃烧器或炉箅、衬里、视窗、密封及控制；开放火盆不一定有封闭衬里、视窗或燃烧器 | foreground | 每 1 kg 参考流 |
| `test` | 工厂验收试验及返工 | required | 仅实际泄漏、安全、功能及燃烧器或燃烧试验；排除全寿命家庭燃烧及现场安装 | foreground | 每 1 kg 参考流 |
| `dispatch` | 包装及验收放行 | required | 实际完整验收配置；另售零件不是完整输出 | foreground | 每 1 kg 参考流 |
| `services` | 未分配共享公用工程及实际产能 | conditional | 仅扣除过程计量后的未分配剩余及实际产能 | foreground | 每 1 kg 参考流 |

### 过程：实际铸造或板材加工及表面处理（`fabrication`）

仅实际场内铸造熔炼、造型、机加工、成形、焊接、清洗或涂覆；外购铸件不重复嵌入制造。

#### 输入

##### 产品流

###### 低碳钢板 （`steel_sheet`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：低碳钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：stovax-stoves; jotul-manufacture

###### 铸铁熔炼炉料 （`cast_iron`）

仅自有铸造实际炉料及每项指定原生或再生金属比例。来源废料熔炼案例不确立通用配方；分列每项实际牌号及库存返回交换。

- 选定流：铸铁熔炼炉料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：jotul-cast-iron

###### 铸造石英砂 （`silica_sand`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：铸造石英砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：jotul-cast-iron

###### 铸造膨润土粘结剂 （`bentonite`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：铸造膨润土粘结剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 硅铁合金 （`ferrosilicon`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：硅铁合金
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 石墨增碳剂 （`graphite`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：石墨增碳剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 碳钢焊丝 （`welding_wire`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：碳钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 氩气焊接气体 （`argon`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：氩气焊接气体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 搪瓷熔块 （`enamel`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：搪瓷熔块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 硅树脂耐高温涂料 （`paint`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：硅树脂耐高温涂料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 金属加工液浓缩液 （`coolant`）

仅实际配制浓缩液；稀释水另测；未知化学须配方证据。

- 选定流：金属加工液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 异丙醇 （`ipa`）

仅实际异丙醇清洗，记录自身含量、水比例、捕集或返回及库存。 仅实际中国工厂端异丙醇，实测含量及供应商；稀释配方须自身身份。

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

###### 工艺用水 （`water`）

仅场内冷却、清洗或稀释新补水；成对内部循环不是新进口。 仅实际工艺补水；采用自身水比例及密度，内部循环成对。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`fabrication_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 仅实际中国低于1千伏用户端交付电力；其他电压或地理须匹配身份，保留千瓦时及每千瓦时3.6MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
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

###### 钢加工废料 （`steel_scrap`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际未处理外送钢加工废料；采用自身合金、水或加工液分析，不将铸造炉渣作废钢。

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

###### 废铸造砂 （`foundry_sand`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：废铸造砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 铸铁炉渣 （`slag`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：铸铁炉渣
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废异丙醇溶剂 （`spent_solvent`）

自身醇或水比例及实际处理；捕集或回收溶剂不等于销毁。

- 选定流：废异丙醇溶剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 金属加工废水 （`effluent`）

计量液体及自身组成或处理，不从消费排水使用推定。

- 选定流：金属加工废水
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

###### 异丙醇排入空气 （`ipa_air`）

仅独立确立异丙醇空气排放；未闭合差额不是空气排放。 仅独立确立异丙醇至未特指空气；捕集或回收溶剂及未闭合差额不是空气排放。

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

### 过程：室内取暖设备集成（`integration`）

实际铸铁或钢炉体、燃料特定燃烧器或炉箅、衬里、视窗、密封及控制；开放火盆不一定有封闭衬里、视窗或燃烧器。

#### 输入

##### 产品流

###### 铸铁炉体铸件 （`cast_body`）

仅独立外购实际完成状态的成品铸铁炉体铸件；供应商铸造负荷计一次。场内自制炉体为成对内部转移，不是此外部投入。

- 选定流：铸铁炉体铸件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：jotul-manufacture

###### 炉具玻璃陶瓷视窗 （`glass`）

仅实际封闭炉具视窗，核实耐热材料；开放火盆或炉箅不强制含有。

- 选定流：炉具玻璃陶瓷视窗
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：franco-oil

###### 耐火黏土砖 （`firebrick`）

仅独立供应实际耐火黏土衬里牌号；避免重复外购完成炉体内已有衬里。

- 选定流：耐火黏土砖
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：franco-oil; stovax-open-grate

###### 蛭石燃烧室板 （`vermiculite`）

仅核实实际蛭石燃烧室板；不得将手册安装回填作工厂默认。

- 选定流：蛭石燃烧室板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：franco-oil

###### 玻璃纤维绳密封件 （`gasket`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：玻璃纤维绳密封件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：franco-oil; jotul-cast-iron

###### 铸铁燃烧炉箅 （`grate`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：铸铁燃烧炉箅
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：stovax-open-grate; franco-oil

###### 完整燃气室内加热器燃烧器总成 （`gas_burner`）

仅实际家用燃气燃烧器模块；排除工业炉燃烧器。完整外购模块已含阀或控制材料，除非独立供应。

- 选定流：完整燃气室内加热器燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：gazco-gas

###### 完整燃油炉燃烧器总成 （`oil_burner`）

仅实际家用燃油燃烧器模块及文件支持供应状态；不通用于固体燃料或开放炉箅。

- 选定流：完整燃油炉燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：franco-oil

###### 燃气控制阀 （`gas_valve`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：燃气控制阀
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 燃气火焰安全热电偶 （`thermocouple`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：燃气火焰安全热电偶
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 钢螺钉 （`steel_fastener`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际外购匹配牌号及涂层钢螺钉；外购完整模块已含其螺钉。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 钢制炉具空气调节器 （`damper`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：钢制炉具空气调节器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 耐火炉用水泥 （`fire_cement`）

仅实际工厂施用耐火水泥及自身干固体或水配方；安装人员砌筑或密封属下游。

- 选定流：耐火炉用水泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：stovax-open-grate

###### 燃气炉恒温遥控器 （`remote_control`）

仅实际随附燃气炉遥控器；手动控制配置不意味着含遥控器。声明电子装置及随附电池体系；匹配身份后增补每项实际独立电池交换。

- 选定流：燃气炉恒温遥控器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：gazco-gas

###### 燃气炉仿木燃料效果总成 （`fuel_effect`）

仅实际供应燃气炉装饰仿木效果总成；识别实际材料及涂料，不从外观强定陶瓷体系。

- 选定流：燃气炉仿木燃料效果总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：gazco-gas

###### 外购交流电 （`integration_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 仅实际中国低于1千伏用户端交付电力；其他电压或地理须匹配身份，保留千瓦时及每千瓦时3.6MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
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

### 过程：工厂验收试验及返工（`test`）

仅实际泄漏、安全、功能及燃烧器或燃烧试验；排除全寿命家庭燃烧及现场安装。

#### 输入

##### 产品流

###### 干薪材 （`test_wood`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际劈柴工厂试验投料，实测含水及木材种类；不采用手册燃料量或碳中和抵扣。

- 选定流：劈柴 `1af6be97-b46a-4d37-b1c7-3158f08bc377`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 无烟煤 （`test_coal`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际无烟煤试料及自身分析或净热值；其他无烟或人造燃料须另行。

- 选定流：硬煤，无烟煤 `9ff1d63b-2eab-4f82-969a-71dd1474f0f1`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 煤油 （`test_kerosene`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际煤油牌号及工厂试料量；须实际 C2 规格或供应商，不用航空燃料替代。

- 选定流：煤油 `4489ad5c-84f0-440f-9e21-82e4e109495f`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：franco-oil

###### 天然气 （`test_natural_gas`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。

- 选定流：天然气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 丙烷 （`test_propane`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅核实实际液态供应丙烷，单独记录气化；不得以此单物种替代所有液化石油气混合物。

- 选定流：丙烷 `9c0d706a-c414-4afb-ad0c-4777c4072311`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 氮气 （`test_nitrogen`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。

- 选定流：氮气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`test_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 仅实际中国低于1千伏用户端交付电力；其他电压或地理须匹配身份，保留千瓦时及每千瓦时3.6MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
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

###### 炉具固体燃料试验灰 （`ash`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：炉具固体燃料试验灰
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废品完整非电室内取暖炉 （`appliance_reject`）

仅实际无法修复整机废品；负荷保留在合格分子，质量排除于分母。

- 选定流：废品完整非电室内取暖炉
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

###### 化石二氧化碳排入空气 （`co2`）

仅实际燃烧或反应 CO2，采用自身碳和氧化证据。 仅独立确立实际工厂燃烧或反应化石二氧化碳至未特指空气。

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

###### 生物源二氧化碳排入空气 （`co2_bio`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅独立确立生物源二氧化碳至未特指空气；化石及生物碳分离，不假定零排放。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 化石一氧化碳排入空气 （`co`）

自身 CO 计量或核实实际燃料及技术因子；碳闭合不能单独确立 CO。 仅独立计量化石源一氧化碳至未特指空气；木材一氧化碳须自身生物源身份，碳闭合不足以单独确立。

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

###### 二氧化氮排入空气 （`no2`）

仅独立确立 NO2 物种质量；以 NO2 当量表示的 NOx 为另一身份。

- 选定流：二氧化氮排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 小于2.5微米颗粒物排入空气 （`pm`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：小于2.5微米颗粒物排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 水蒸气排入空气 （`water_vapour`）

仅实际工厂蒸发或蒸汽排放；排除消费用水默认值。 仅实际工厂水蒸气至未特指空气，采用自身水质量记录。

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

### 过程：包装及验收放行（`dispatch`）

实际完整验收配置；另售零件不是完整输出。

#### 输入

##### 产品流

###### 瓦楞纸箱 （`box`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：瓦楞纸箱
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

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：木托盘
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 聚乙烯拉伸膜 （`film`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：聚乙烯拉伸膜
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

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 仅实际中国低于1千伏用户端交付电力；其他电压或地理须匹配身份，保留千瓦时及每千瓦时3.6MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
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

###### 非电家用钢铁室内取暖炉、炉箅及火盆 （`reference_product`）

选定完整验收配置包括实际保留填充及附件，排除包装和废品。

- 选定流：铁或钢制火炉、炉篦、烤炉及类似非电动家用器具（烹饪用器具及加温器除外） `e4f06ae9-21fe-4b4e-a2ba-46b1d8824f14`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：un-cpc-3-0-44822

##### 废物流

##### 基本流

### 过程：未分配共享公用工程及实际产能（`services`）

仅扣除过程计量后的未分配剩余及实际产能。

#### 输入

##### 产品流

###### 外购交流电 （`electricity`）

仅扣除各过程电表后的未分配共享剩余；要求外购交付电压、地理范围及供应商。 仅实际中国低于1千伏用户端交付电力；其他电压或地理须匹配身份，保留千瓦时及每千瓦时3.6MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 外购蒸汽热 （`steam`）

仅实际供应质量乘自身相对于共同零点 MJ/kg；返回冷凝水分测，净发票返回只扣一次。

- 选定流：外购蒸汽热
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 天然气 （`gas`）

仅实际燃烧器或锅炉燃料及自身组成或净热值；外购蒸汽不得重复虚构場内锅炉。

- 选定流：天然气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷凝水返回热 （`condensate`）

仅实际返回质量乘计量状态自身 MJ/kg；已净供应不得再扣。

- 选定流：冷凝水返回热
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
| species_emission_method | cp_emission | 采用每项实际物种的处理后浓度乘匹配排气或液流及同一期间；按实际干湿基准、温压、参照状态及原始单位换算。无组织排放采用独立计量基础，不从烟道读数推定。保持物种及介质、捕集与销毁分离。 | species sampling; matched flow/time; calibrated meters; fugitive evidence |
| complete_bom | actual configuration | 覆盖实际全部交换，自制外购及附件、填充、试料分离；缺口明确 | 实际 BOM、路线及供应商 |
| period_normalization | all inventory rows | Qattr 为同一配置共同期间每项归属数量，包含废品、返工及工厂试验负荷；Naccepted 为验收数量；Dnet 为校准验收净质量之和；M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet。Dnet 排除包装、废品及消耗试料；每项保留原始分子单位及精确换算。 | cp_mass; cp_material; cp_energy; cp_waste; cp_emission |
| mass_period | cohort | 同一配置期间和验收记录、校准质量及库存；不跨家族均值 | 校准及期间台账 |
| balance_uncertainty | physical balances | 按各项自身水分、密度、含量、反应及成对返回核对，与综合不确定性比较 | 实测、采样、反应及分配证据 |
| provider_gaps | links | 每个实际上游和处理匹配状态地理期间；未核实不可作为完整足迹 | 直接记录及替代披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | 确认主要功能、家用市场、型号或修订、交付配置及激活架构。每个实际交换须匹配身份、属性、单位及供应商；不存在、零及未知保持不同。 | un-cpc-3-0-44822 |
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
| excluded_use | 跨家族功能等价、默认消费者服务、默认重量或制造因子、缺失供应商的完整足迹 |
| required_metadata | 第3节限定及原始期间分母、实际架构、自制外购和边界 |
| required_quality_disclosure | 采集覆盖、供应商或身份或配方缺口、分配和综合不确定性、全部条件及排除 |
| update_trigger | 型号或架构、配方、供应状态或地区、计量、工厂试验或处理路线改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jotul-cast-iron | handbook | Cast iron, at the heart of our know how; undated inspected original; acquired 2026-10-02; https://www.jotul.com/us/guides-and-inspiration/cast-iron-heart-our-know-how | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| jotul-manufacture | handbook | Jotul North America expands operation; undated inspected original; acquired 2026-10-02; https://www.jotul.com/us/press-release/jotul-north-america-expands-operation-include-wood-stove-production | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| franco-oil | handbook | Franco Belge Stoves; undated inspected original; acquired 2026-10-02; https://harworthheating.co.uk/documents/Brochures/Franco%20Belge/Franco%20Belge%20Stoves%20September%202017.pdf | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| stovax-stoves | handbook | Woodburning and Multi-fuel Stove Collection; STOV0326; © Stovax Ltd2026 verified footer; https://brochures.stovax.com/brochures/pdf/stovax-stoves.pdf | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| gazco-gas | handbook | Stockton2 Small and Medium Gas Stoves; undated actual web body inspected 2026-10-02; https://www.stovax.com/stove-fire/stockton-gas-stoves/stockton2-small-gas-stoves-medium-gas-stoves/ | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| stovax-steel | handbook | Steel Stoves; undated actual web body inspected 2026-10-02; https://www.stovax.com/appliance/stoves/wood-burning-stoves/buying-wood-burning-stove/steel-stoves/ | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| stovax-open-grate | handbook | Classic Non-Convector Fireplaces; Cast Iron Tiled Fireplace and Cast Iron London Fronts; PM284 Issue5 March2015; actual web PDF body inspected; https://www.stovax.com/download/Technical%20Documents/3.%20Fireplaces/Classic%20Fireplaces/Cast%20Iron%20Hob%20Grates/Classic%20Non%20Convector%20%26%20Cast%20Iron%20Fronts%20Installation%20%26%20User%20Instructions.pdf | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| un-cpc-3-0-44822 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| aga-adjacent-cooking | handbook | AGA Sustainability; publisher HTML snapshot 2026-10-02; https://old.agaliving.com/buying/sustainability | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
| esse-adjacent-cook-heat | handbook | ESSE Range Cookers; COOK1023; ©2023 verified footer; https://www.esse.com/wp-content/themes/esse/media-library/brochures/esse-cooker-brochure.pdf | 产品架构、类别边界或相邻烹饪反证；非工厂配方或数量默认值 |
