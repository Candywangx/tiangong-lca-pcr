---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-coarse-animal-hair-or-of-horsehair
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 动物粗毛或马毛机织织物

## 1. 范围与适用性

本 PCR 适用于以动物粗毛或马毛为特征纤维的机织织物。前景制造边界从外购纱线开始，经纱线准备和织造，按报告场址的实际路线纳入湿法加工，并以工厂大门处经检验且完成发运包装的织物结束。申报织物可以是坯布、染色、印花、涂层或其他整理状态，但必须报告实际路线和整理状态。

本 PCR 不包括纱线、未纺或仅经准备的纤维、羊毛或动物细毛机织物、针织或钩编织物、毡、簇绒或起绒织物、地毯、归入其他类别的窄幅织物、制成品、服装、使用阶段和生命末期阶段。外购纱线及其他外购投入的上游生产以可追溯上游数据集表示，不在前景边界内重复构建。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-coarse-animal-hair-or-of-horsehair |
| classification_refs | CPC 3.0：26550，精确映射语境 |
| covered_products | 动物粗毛机织织物；马毛机织织物；仅当申报产品仍属于本语义类别且完整披露纤维质量组成时，才包括混纺产品 |
| excluded_products | 纱线；羊毛或动物细毛织物；非织造、针织、簇绒、起绒、毡、地毯、窄幅织物、制成品、服装、使用阶段和生命末期产品 |
| representative_product | 以动物粗毛纱线或马毛纱线制成、处于申报坯布或整理状态的一批工厂大门机织织物 |
| production_route | 外购纱线准备与织造；条件纳入湿法前处理、染色、印花、涂层和整理；检验、修边、卷装与包装 |
| market_state | 制造工厂大门处可销售的机织织物，申报纤维组成、织物组织、尺寸、单位面积质量、调湿基准和整理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有申报织物组织与整理状态的动物粗毛或马毛可销售机织织物 |
| How much | 工厂大门处 1 kg 可销售织物净质量 |
| How well | 符合生产者申报的纤维组成、织物组织、幅宽、单位面积质量、调湿基准、整理状态和质量验收准则 |
| How long or cycle | 工厂大门处一个生产批次；不指定使用阶段服务期限 |
| reference_flow_link | 参考数量为合格织物净质量，不包括纸板卷芯、包膜、托盘及其他发运包装 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维路线：动物粗毛或马毛；动物种属或商业纤维名称；完整纤维质量组成；织物组织；幅宽；单位面积质量；调湿基准；坯布/染色/印花/涂层/整理状态；生产场址和报告期；参考质量不含包装 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考织物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申报调湿基准，以校准称重记录确定织物净质量；排除纸板卷芯、包膜、托盘及其他发运包装。 |
| `mass_per_area_consistency` | 织物几何尺寸与质量记录 | 质量与面积 | kg 与 m2 | 对同一调湿批次报告幅宽、长度或面积及单位面积质量；计算质量应在场址文件化测量不确定度内与称得织物净质量一致。 |
| `energy_unit_preservation` | 电力、外购蒸汽热和天然气 | 能量或已确认热值属性 | kWh 或 MJ | 保留计量或发票能量单位，说明采用高位还是低位热值，并记录每项换算因子；不得仅按设备额定功率推算能耗。 |
| `water_mass_conversion` | 工艺用水和纺织工艺废水 | 质量 | kg | 优先使用实测质量；由体积换算质量时，保留实测体积、温度或密度基准及换算过程。 |

## 5. 系统边界

前景边界从外购动物粗毛纱线或马毛纱线及其他外购投入进入报告场址时开始。边界包括纱线准备、整经和实际发生的上浆、织造、纤维粉尘抽排与收集、实际发生的场内湿法前处理与染色或整理、场内直接能源使用与排放、检验、修边、卷装、包装，以及前景废物和废水直至跨越场址边界的管理。边界以合格机织织物及单独记录的发运包装结束。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购动物粗毛纱线或外购马毛纱线到达报告场址，并记录供应商、组成、质量和批次身份 |
| starting_condition_role | 前景织物制造的上游产品投入 |
| product_classification_scope | 动物粗毛或马毛机织织物；CPC 3.0 26550 是分类语境，不是规范 PCR 身份 |
| recursive_input_rule | 若投入已是本产品类别内的织物，则将其一次记录为外购中间产品投入，并附上游数据集和申报状态；不得在此前景数据包内递归重建其上游制造。 |
| upstream_dataset_requirement | 对纱线、水、能源、化学品、包装和外部废物处理使用可追溯上游数据集；披露地理、技术、时间覆盖及任何代理选择。 |
| disclosure | 披露纤维路线、实际起始材料状态、纳入的工艺路线、湿法加工和整理操作、场内燃烧、废水路线、废物去向、包装边界及每项省略操作。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_route` | 所有前景过程 | 纳入从外购纱线接收到合格且已包装机织织物的全部场内操作；仅当场址记录证明未实施湿法操作时，方可将其标记为条件不适用。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_upstream_inputs` | 外购纱线及其他外购产品 | 以可追溯上游数据集表示申报外购投入大门之前的生产，不得在前景交换中重复这些负荷。 | `iso-14044-2006` |
| `boundary_waste_and_emissions` | 废物、废水和直接排放 | 将每项废物转移及每种直接监测或计算排放记录为独立原子交换，并披露去向或受纳环境介质。 | `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_weaving` | 纱线准备与织造 | required | 对所有由外购纱线制造的织物均纳入 | 前景织物形成 | 离开本过程的 1 kg 合格机织织物 |
| `wet_processing` | 湿法前处理、染色与整理 | conditional | 纳入场内实际实施的每项操作，包括洗涤、精练、漂白、染色、印花、涂层、漂洗、干燥、热定型或化学整理 | 前景湿法与热处理 | 离开本过程的 1 kg 合格湿法加工织物 |
| `inspection_cutting_packaging` | 检验、修边、卷装与包装 | required | 始终纳入至工厂大门 | 前景质量放行与发运准备 | 1 kg 合格参考织物净质量 |

### 过程：纱线准备与织造（`yarn_preparation_and_weaving`）

#### 输入

##### 产品流

###### 动物粗毛纱线投入（`coarse_animal_hair_yarn_input`）

仅在动物粗毛路线记录本卡；与马毛纱线、羊毛纱线及动物细毛纱线分开。

- 选定流：Yarn of coarse animal hair
- 流属性/单位：Mass / kg
- 数量规则：投入生产批次的称重质量或供应商交付质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue_records`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`

###### 马毛纱线投入（`horsehair_yarn_input`）

仅在马毛路线记录本卡；不得与动物粗毛纱线合并。

- 选定流：Horsehair yarn
- 流属性/单位：Mass / kg
- 数量规则：投入生产批次的称重质量或供应商交付质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue_records`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`

###### 纱线准备与织造用中压电力（`weaving_electricity`）

记录卷绕、整经、上浆、织机、抽排及本过程其他设备消耗的计量或分摊电力。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：报告批次的实测电力，或从已核对场址总表按文件化方法分摊的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`jrc-textiles-bref-2023`

###### 木薯淀粉上浆投入（`cassava_starch_sizing_input`）

仅当批次实际使用木薯淀粉作上浆化学品时记录。其他上浆化学品必须各自建立具体原子产品流卡。

- 选定流：Cassava Starch `00f8688a-9af4-40bf-95fd-8529f7bc70ce`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次配方称量发放的木薯淀粉质量，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`jrc-textiles-bref-2023`

###### 织机润滑油投入（`loom_lubricating_oil`）

记录报告期内实际加入织机及纱线准备设备的润滑油；不包括报告期前已留存在资本设备中的油。

- 选定流：Lubricating oil
- 流属性/单位：Mass / kg
- 数量规则：期初库存加收入减期末库存及单独回收的油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入；跨越技术系统边界的水和燃料应在其消耗过程中记录为产品投入。

#### 输出

##### 产品流

###### 织造后的机织织物产出（`woven_fabric_after_weaving`）

记录被下一场内过程接收的机织织物质量；坯布路线则记录被最终检验接收的质量。

- 选定流：Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本批次经调湿并称重的合格织物产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_output_records`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`

##### 废物流

###### 动物粗毛纱线废料（`coarse_animal_hair_yarn_waste`）

仅在动物粗毛路线记录断头、纱尾和不合格纱线形成的单独收集废料。

- 选定流：Coarse animal hair yarn waste
- 流属性/单位：Mass / kg
- 数量规则：报告批次内从本过程转出的废料称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`jrc-textiles-bref-2023`

###### 马毛纱线废料（`horsehair_yarn_waste`）

仅在马毛路线记录断头、纱尾和不合格纱线形成的单独收集废料。

- 选定流：Horsehair yarn waste
- 流属性/单位：Mass / kg
- 数量规则：报告批次内从本过程转出的废料称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`jrc-textiles-bref-2023`

###### 织造动物粗毛织物边角料（`coarse_animal_hair_fabric_offcuts_weaving`）

将动物粗毛织物布边和不合格织片与纱线废料分开记录。

- 选定流：Coarse animal hair fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：从本过程转出的布边和不合格织片称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`jrc-textiles-bref-2023`

###### 织造马毛织物边角料（`horsehair_fabric_offcuts_weaving`）

将马毛织物布边和不合格织片与纱线废料分开记录。

- 选定流：Horsehair fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：从本过程转出的布边和不合格织片称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

###### 排放至空气的动物粗毛纤维粉尘（`coarse_animal_hair_dust_to_air`）

仅当动物粗毛纤维粉尘在抽排和治理后跨越场址空气边界时记录；收集的粉尘应作为单独废物流。

- 选定流：Coarse animal hair fibre dust to air
- 流属性/单位：Mass / kg
- 数量规则：场址监测记录，或依据收集粉尘和治理性能形成的文件化质量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：`eu-textiles-bat-2022`

###### 排放至空气的马毛纤维粉尘（`horsehair_dust_to_air`）

仅当马毛纤维粉尘在抽排和治理后跨越场址空气边界时记录；收集的粉尘应作为单独废物流。

- 选定流：Horsehair fibre dust to air
- 流属性/单位：Mass / kg
- 数量规则：场址监测记录，或依据收集粉尘和治理性能形成的文件化质量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开纱线准备与织造过程的合格机织织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：`eu-textiles-bat-2022`

### 过程：湿法前处理、染色与整理（`wet_processing`）

#### 输入

##### 产品流

###### 湿法加工机织织物投入（`woven_fabric_input_wet_processing`）

记录从织造实际转入湿法或热加工的织物质量。

- 选定流：Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入湿法加工批次的调湿称重织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_transfer_records`
- 来源：`jrc-textiles-bref-2023`

###### 工艺用水投入（`process_water_input`）

记录本产品路线洗涤、精练、漂白、染色、漂洗或水相整理使用的工艺用水。

- 选定流：Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应湿法加工批次的计量用水，排除单独计量的生活用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 湿法加工用中压电力（`wet_process_electricity`）

记录湿处理设备、泵、加药、脱水、干燥、热定型及治理设施分配给本路线的电力。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：报告批次的实测电力，或从已核对场址总表按文件化方法分摊的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`jrc-textiles-bref-2023`

###### 外购蒸汽热投入（`purchased_steam_heat`）

仅当外购蒸汽热跨越前景边界时记录；不得与电力或场内天然气合并。

- 选定流：Heat, steam
- 流属性/单位：Energy / MJ
- 数量规则：分配给湿法加工批次的供应商计量或发票能量；物质相关时单独记录凝结水处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_meter_records`
- 来源：`jrc-textiles-bref-2023`

###### 碳酸钠投入（`sodium_carbonate_input`）

仅当申报的前处理、染色或整理配方实际发放碳酸钠时记录。

- 选定流：Sodium carbonate
- 流属性/单位：Mass / kg
- 数量规则：发放给湿法加工批次的称重产品质量，扣除退回未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`jrc-textiles-bref-2023`

###### 过氧化氢投入（`hydrogen_peroxide_input`）

仅当申报的漂白或处理配方实际发放过氧化氢时记录。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：发放给湿法加工批次的配制产品称重质量与浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`jrc-textiles-bref-2023`

###### 乙酸投入（`acetic_acid_input`）

仅当申报的 pH 调节、染色或整理配方实际发放乙酸时记录。

- 选定流：Acetic acid
- 流属性/单位：Mass / kg
- 数量规则：发放给湿法加工批次的配制产品称重质量与浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe_records`
- 来源：`jrc-textiles-bref-2023`

###### 直接或间接加热用天然气投入（`natural_gas_input`）

仅当本过程边界内直接加热、干燥、热定型或关联锅炉消耗场内天然气时记录。

- 选定流：Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：按供应商申报高位热值基准计量并分配给湿法加工批次的天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_meter_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

###### 湿法加工机织织物产出（`wet_processed_fabric_output`）

记录离开申报湿法与热处理路线的合格织物。

- 选定流：Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：湿法加工批次经调湿并称重的合格织物产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_output_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

###### 送处理的纺织工艺废水（`textile_process_wastewater`）

记录转入场内或场外处理的废水流。除非物质在处理后跨越环境边界，否则不得同时将其所含物质记作直接基本流排放。

- 选定流：Wastewater, textile process (to water) `48438fa9-4988-405c-ba44-646f134e2ecc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给湿法加工批次的计量废水质量，或由实测体积形成的文件化换算结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 排放至空气的化石二氧化碳（`carbon_dioxide_fossil_to_air`）

记录分配给本过程、由场内天然气燃烧跨越场址边界的化石二氧化碳；本前景流不含燃料上游生产排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：烟气监测记录或随前景证据保留的完整场址燃烧计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格湿法加工织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：`eu-textiles-bat-2022`

### 过程：检验、修边、卷装与包装（`inspection_cutting_packaging`）

#### 输入

##### 产品流

###### 检验与包装机织织物投入（`woven_fabric_input_packaging`）

记录从织造或湿法加工转入最终质量放行的合格织物。

- 选定流：Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入最终检验的调湿称重织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_transfer_records`
- 来源：`jrc-textiles-bref-2023`

###### 检验与包装用中压电力（`packaging_electricity`）

记录检验、修边、卷装、局部抽排和包装设备使用的电力。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：报告批次的实测电力，或从已核对场址总表按文件化方法分摊的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter_records`
- 来源：`jrc-textiles-bref-2023`

###### 纸板卷芯投入（`paperboard_core_input`）

将装入发运织物卷的纸板卷芯质量与参考织物质量分开记录。

- 选定流：Paperboard core
- 流属性/单位：Mass / kg
- 数量规则：发放给报告批次发运织物卷的卷芯称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_issue_records`
- 来源：`jrc-textiles-bref-2023`

###### 聚乙烯薄膜包装投入（`polyethylene_film_input`）

记录施加于发运织物卷的聚乙烯薄膜；不得与纸板卷芯或托盘合并。

- 选定流：Polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：发放给报告批次发运织物卷的薄膜称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_issue_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

###### 合格参考织物净产出（`reference_fabric_output`）

记录检验和修边后可销售织物净质量，排除全部发运包装。

- 选定流：Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格织物经调湿并校准称量的净质量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_output_records`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`

##### 废物流

###### 最终修边动物粗毛织物边角料（`coarse_animal_hair_fabric_offcuts_packaging`）

将最终修边产生的动物粗毛织物边角料与织造废料分开记录。

- 选定流：Coarse animal hair fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：报告批次转出的最终修边边角料称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`jrc-textiles-bref-2023`

###### 最终修边马毛织物边角料（`horsehair_fabric_offcuts_packaging`）

将最终修边产生的马毛织物边角料与织造废料分开记录。

- 选定流：Horsehair fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：报告批次转出的最终修边边角料称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

本过程不规定基本流产出；任何直接监测排放必须作为其自身具体基本流行加入。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共用前景设备和公用工程 | 在可行时优先采用过程细分、专用计量、批次记录或文件化运行时间分摊，以避免共产品分配。 | `iso-14044-2006` |
| `allocation_physical_relation` | 不可避免的联合生产 | 无法细分时，采用能够反映投入和排放如何随产出变化的文件化物理因果关系，例如实测质量、机器时间或能源需求。 | `iso-14044-2006` |
| `allocation_other_relation` | 无可辩护物理关系的联合生产 | 仅在说明物理关系不可行后采用其他文件化关系；披露方法并检验一个物质相关的可行替代方案。 | `iso-14044-2006` |
| `allocation_recovery` | 可回收纱线废料、边角料、油、包装废物和废水残渣 | 每项回收产出保持分开；除非明确纳入并披露下游系统与分配方法，不得在前景过程中计入避免负荷抵扣。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issue_records` | `yarn_preparation_and_weaving` | 路线特定纱线投入 | 采购收货、库存台账和批次领料记录 | 供应商；材料名称；纤维路线；批次 id；毛重；皮重；净重；领用与退回质量 | 核对收货、库存变动和批次领用 | kg | 每次收货和每个生产批次 | 完整报告期 | 范围内全部纱线库与织造线 | 按路线和批次汇总净领用并扣除文件化退回 | 校准秤记录、供应商单据和库存核对 |
| `cp_electricity_meter_records` | 所有过程 | 过程电力 | 分表或经核对总表记录 | 电表 id；起止读数；时间戳；过程；停机；分摊键 | 读取分表，或依据文件化运行记录分摊已核对场址总表 | kWh | 至少每月；可得时按批次 | 完整报告期 | 全部纳入设备和共用服务 | 汇总读数，仅分摊经核对的共用余量 | 电表校准或电费单及核对记录 |
| `cp_chemical_recipe_records` | `yarn_preparation_and_weaving`; `wet_processing` | 每种单独化学产品 | 批次配方、领料、退回和浓度记录 | 产品名称；配方或浓度；供应商；批次 id；领用质量；退回质量 | 将每种配方化学品记录为独立产品流 | kg | 每批 | 完整湿法加工与上浆生产期 | 全部范围内加药点 | 按确切化学产品和批次汇总净产品质量 | 批准配方、领料单和浓度证书 |
| `cp_lubricant_records` | `yarn_preparation_and_weaving` | 织机润滑油 | 库存和维修领用记录 | 产品名称；期初库存；收入；期末库存；回收质量；过程 | 以维修领用支持库存平衡 | kg | 每月 | 完整报告期 | 全部纳入织造与准备设备 | 期初加收入减期末及单独回收油 | 库存核对与维修日志 |
| `cp_fabric_transfer_records` | `wet_processing`; `inspection_cutting_packaging` | 中间织物 | 批次转移与称重记录 | 批次 id；路线；来源过程；目标过程；调湿质量；时间戳 | 称重并核对过程步骤间转移 | kg | 每次批次转移 | 完整报告期 | 全部纳入生产线 | 按路线和批次汇总调湿转移质量 | 校准秤和签字转移记录 |
| `cp_fabric_output_records` | 所有过程 | 合格织物产出 | 生产与质量放行记录 | 批次 id；纤维路线；组成；织物组织；幅宽；长度；面积；单位面积质量；调湿基准；净质量；不合格品 | 调湿、称重并放行合格产出 | kg | 每批 | 完整报告期 | 全部纳入生产线 | 汇总合格净质量并分开保存不合格质量 | 校准、调湿记录和质量放行 |
| `cp_solid_waste_records` | `yarn_preparation_and_weaving`; `inspection_cutting_packaging` | 每项路线特定固体废物 | 容器称重与废物转移记录 | 废物名称；纤维路线；过程；容器 id；毛重；皮重；净重；去向 | 转移时称量每项分流废物 | kg | 每次转移 | 完整报告期 | 全部范围内废物收集点 | 按确切废物身份、过程和去向汇总净质量 | 称重记录与转移凭证 |
| `cp_air_emission_records` | `yarn_preparation_and_weaving`; `wet_processing` | 每种直接空气排放 | 烟道或作业抽排监测及支持计算 | 污染物身份；源；方法；浓度；气量；时长；治理状态；结果 | 采用合规监测，或保留完整场址计算证据 | kg | 许可或 BAT 一致频率及每次重大工艺变更 | 报告期内代表性运行 | 全部纳入排放点 | 仅在保留源级记录后汇总同一污染物和介质 | 实验室报告、方法、校准及运行状态证据 |
| `cp_water_meter_records` | `wet_processing` | 工艺用水 | 水分表或经核对供水记录 | 水表 id；读数；时间戳；过程；批次；排除的生活用水 | 计量湿法工艺供水并与场址供水核对 | kg 或 m3 | 每批或至少每月 | 完整湿法加工期 | 全部范围内湿法生产线 | 按过程汇总读数并记录体积到质量换算 | 水表校准、供水发票和核对记录 |
| `cp_steam_meter_records` | `wet_processing` | 外购蒸汽热 | 供应商或分表记录 | 仪表 id；蒸汽量；压力；焓或发票能量；凝结水回收；批次 | 使用供应商计量或校准分表并保留能量基准 | MJ | 每批或至少每月 | 完整湿法加工期 | 全部范围内蒸汽用户 | 汇总供应能量，仅分摊经核对共用量 | 仪表校准、发票和能量基准计算 |
| `cp_fuel_meter_records` | `wet_processing` | 场内天然气 | 燃气表和供应商热值说明 | 表读数；体积或能量；压力；温度；高位热值；时间戳；设备 | 将过程表与供应商总量核对并保留高位热值基准 | MJ | 至少每月 | 完整报告期 | 全部范围内直接加热器和锅炉 | 按过程汇总实测高位热值能量 | 仪表校准和供应商说明 |
| `cp_wastewater_records` | `wet_processing` | 纺织工艺废水 | 排水计量、取样及转移或排放记录 | 排放路线；表读数；体积或质量；密度基准；取样时间；处理去向 | 计量每条路线，并与用水和织物带水核对 | kg 或 m3 | 连续或批次总量计量，并按 BAT 一致频率取样 | 完整湿法加工期 | 全部范围内排放与转移点 | 仅在保留源级记录后按路线汇总 | 仪表校准、取样报告和处理凭证 |
| `cp_packaging_issue_records` | `inspection_cutting_packaging` | 每个包装组件 | 包装库存与领用记录 | 组件名称；材料；单位质量；数量；领用质量；退回质量；批次 | 对每个组件单独称重，或由核实单位质量和数量计算 | kg | 每个发运批次 | 完整报告期 | 全部范围内包装工位 | 按确切包装组件汇总净领用质量 | 单位质量核实、库存核对和发运记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 每个基于质量的清单行 | 归一化数量 = 记录行净质量 / 过程合格净产出质量 | 行净质量；过程合格净产出质量 | kg/kg 过程产出或参考流 |  |
| `calc_area_mass_check` | 参考织物 | 计算织物质量 = 报告面积 × 报告单位面积质量；与调湿称重质量比较并保留差值 | 幅宽与长度或面积；单位面积质量；调湿称重质量 | 核对结果 |  |
| `calc_energy_conversion` | 电力与蒸汽记录 | 仅使用文件化单位身份和换算因子换算；保留原始读数和换算值 | 表计或发票数值；原单位；换算因子 | kWh 或 MJ/kg 过程产出 |  |
| `calc_gas_energy` | 天然气 | 天然气能量 = 实测气量 × 供应商申报高位热值，压力与温度基准保持一致 | 实测气量；供应商高位热值；基准条件 | MJ 高位热值/kg 过程产出 | `eu-textiles-bat-2022` |
| `calc_water_mass` | 工艺用水与废水 | 未直接测得质量时，换算质量 = 实测体积 × 申报状态下文件化密度 | 体积；密度；状态 | kg/kg 过程产出 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考织物和中间织物 | 保留纤维路线、动物种属或商业纤维名称、完整组成、织物组织、幅宽、单位面积质量、调湿基准和整理状态的批次证据。 | 产品规格、物料清单、批次流转卡和质量放行 |
| `dq_route_completeness` | 所有前景过程 | 将申报过程图与生产记录核对；披露每项省略或外部完成的准备、湿法、热处理和整理操作。 | 工艺流程图、生产日志、供应商服务记录和边界披露 |
| `dq_atomic_recipe` | 上浆与湿法加工化学品 | 将实际批次配方中的每种化学产品作为独立原子产品流交换记录，并包含产品名称、浓度和净领用质量；不得使用合并化学品或染料选择器。 | 批准配方、安全或规格表、领料单和退回记录 |
| `dq_mass_balance` | 每个过程和报告批次 | 核对材料投入、合格产出、路线特定废物、保留水分变化、可测废水携带物质及文件化库存变化；调查物料差异。 | 签字批次质量平衡和差异调查 |
| `dq_energy_reconciliation` | 电力、蒸汽和天然气 | 将过程计量与分摊同供应商总量核对，并说明共用服务分摊键。 | 仪表清单、公用工程发票、分摊计算和校准证据 |
| `dq_wet_environmental_records` | 湿法加工及关联燃烧 | 按能代表实际运行条件和重大路线变化的频率，保留用水、废水路线、化学品清单、能源使用和直接排放记录。 | 监测计划、计量记录、实验室报告和运行日志 |
| `dq_no_double_counting` | 废水和直接排放 | 除非记录证明存在不同边界穿越，不得将同一物质既计入废水废物流又计入直接基本流排放。 | 排水图、处理边界、取样点身份和清单核对 |
| `dq_temporal_site_coverage` | 所有前景数据 | 覆盖代表性报告期及申报场址全部纳入生产线；记录停机、非正常运行、缺失数据和替代。 | 生产日历、生产线清单、计量覆盖和缺口日志 |
| `dq_packaging_separation` | 发运包装 | 将包装排除在 1 kg 织物参考质量之外，并逐个组件分开记录。 | 净重/毛重记录、包装领用记录和发运规格 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求已确认产品 UUID、Mass 属性 UUID、1 kg 参考数量及全部必需产品限定信息；若产品为纱线、羊毛/细毛织物、非织造、针织、簇绒、起绒、毡、地毯、制成品或服装，则校验失败。 | `unsd-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_mass` | 参考织物 | 核实参考质量为调湿织物净质量且排除每个包装组件；核对质量、面积及单位面积质量记录。 |  |
| `validate_process_route` | 过程图 | 必须包含纱线准备与织造及检验与包装；生产记录显示实施了湿法、热处理、染色、印花、涂层或整理操作时，必须纳入相应过程。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_atomic_flows` | 过程清单 | 每行必须是一个具体产品、化学品、能源载体、包装组件、废物或基本排放；拒绝复数集合、替代项、选择器和占位流。 |  |
| `validate_direction_and_type` | 每个清单行 | 核实过程、方向、流类型、row id、存在时的选定 UUID、属性、单位及路线条件相互一致。 |  |
| `validate_foreground_evidence` | 每个数量 | 要求真实前景记录及所链接采集协议；拒绝 AI 推导数量和无文件依据的默认范围。 |  |
| `validate_wet_processing` | 湿法加工 | 对实际路线核对工艺用水、废水、每种配方化学品、电力、蒸汽、天然气、直接排放和合格产出，且不得重复计算转移废水与直接排放。 | `eu-textiles-bat-2022` |
| `validate_allocation` | 共用操作与联合产出 | 可行时要求避免分配；否则要求披露所选关系、理由、投入、产出及替代方法敏感性。 | `iso-14044-2006` |
| `validate_source_traceability` | 外部规则和非默认证据 | 要求每个引用 source id 均解析到数据源表，且每项前景记录保留可审计场址证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 方法学审查后为 `secondary_dataset`；仅在独立质量审查并申报代表性后，方可用作 `background_dataset` |
| downstream_use | 动物粗毛或马毛机织织物的前景过程数据集及下游 `process` 或 `lifecyclemodel` 投影 |
| allowed_use | 产品足迹、供应链、过程改进和比较建模，但产品身份、路线、地理、时间、分配和数据质量须与研究目标和范围一致 |
| excluded_use | 纱线、羊毛/动物细毛织物、其他织物结构、制成品、服装、未披露代理，或超出申报地理、技术、期间和整理状态的主张 |
| required_metadata | PCR id 与版本；产品和流 UUID；纤维路线与组成；织物组织、幅宽、单位面积质量、调湿基准、整理状态；场址与期间；工艺路线；地理与技术；分配；上游数据集选择；废水和废物去向；包装边界 |
| required_quality_disclosure | 初级数据覆盖；仪表和秤覆盖；时间、地理和技术代表性；缺失数据处理；质量与能源核对；配方完整性；排放监测基准；分配敏感性；审查状态 |
| update_trigger | 纤维路线或组成、织造技术、湿法或热处理路线、化学配方、能源来源、废水处理、分配方法、包装配置、场址代表性、参考流身份或权威来源要求发生变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，*Central Product Classification Version 3.0 Explanatory Notes*，CPC 26550，2025，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | 产品类别边界、纳入机织织物身份及相邻纺织类别排除项 |
| `jrc-textiles-bref-2023` | official_guidance | 欧盟委员会联合研究中心，*Best Available Techniques (BAT) Reference Document for the Textiles Industry*，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf（检索于 2026-08-12） | 工序分解、纺织前处理、织物生产、湿法加工、整理、公用工程、排放和监测语境 |
| `eu-textiles-bat-2022` | official_guidance | 欧盟委员会实施决定 (EU) 2022/2508，确立纺织工业 BAT 结论，ELI：https://data.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-12） | 湿法加工范围、关联织物生产与燃烧、环境记录、废水、直接排放和路线校验 |
| `iso-14044-2006` | standard | ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*，含修正案 1 与 2，https://www.iso.org/standard/38498.html（检索于 2026-08-12） | 目标与范围一致性、清单记录、上游数据集边界和分配框架 |
